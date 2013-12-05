
function showSubtypes(value) {
    var subtypes = document.getElementById("subtypes");
    if (subtypes != null) {
        subtypes.remove();
    }
    switch (value) {
        case 'case': createCases(); break;
        case 'task': createTasks(); break;
        case 'document': createDocuments(); break;
        default: break;
    }

    var subtypes = document.getElementById("subtypes");
    if (subtypes != null) {
        var option = document.createElement("option");
        option.setAttribute("value", "all");
        option.innerHTML = "All";
        option.defaultSelected=true;
        subtypes.insertBefore(option, subtypes.firstChild);
        subtypes.selec
    }
}
function createCases() {
    var select = document.createElement("select");
    select.setAttribute("id", "subtypes");
    var option1 = document.createElement("option");
    option1.setAttribute("value", 'DefaultCaseDevel');
    option1.innerHTML = "Default Case";
    var option2 = document.createElement("option");
    option2.setAttribute("value", 'CaseObjectsDevDefinition');
    option2.innerHTML = "Case Objects";

    select.appendChild(option1);
    select.appendChild(option2);
    document.getElementById("popupExample").appendChild(select);
}

function createDocuments() {
    var select = document.createElement("select");
    select.setAttribute("id", "subtypes");
    var option1 = document.createElement("option");
    option1.setAttribute("value", 'OT210027');
    option1.innerHTML = "Common document";
    var option2 = document.createElement("option");
    option2.setAttribute("value", 'AD210001');
    option2.innerHTML = "Paid Tax";

    select.appendChild(option1);
    select.appendChild(option2);
    document.getElementById("popupExample").appendChild(select);
}

function createTasks() {
    var select = document.createElement("select");
    select.setAttribute("id", "subtypes");
    var option1 = document.createElement("option");
    option1.setAttribute("value", 'TSTYPE97');
    option1.innerHTML = "Starting workflow";
    var option2 = document.createElement("option");
    option2.setAttribute("value", 'TSTYPE98');
    option2.innerHTML = "Task for Execution";
    var option3 = document.createElement("option");
    option3.setAttribute("value", 'TSTYPE99');
    option3.innerHTML = "Task for Completion";

    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    document.getElementById("popupExample").appendChild(select);

}

function setupCalendars() {

    // Popup Calendar
    Calendar.setup(
    {
      dateField: 'firstDate',
      triggerElement: 'calendarBegin'
  }
  )
    Calendar.setup(
    {
      dateField: 'lastDate',
      triggerElement: 'calendarEnd'
  }
  )
}
function getStartTime() {
    var pickedDate = document.getElementById("firstDate").value;
    var year = parseInt(pickedDate.substring(0, 4));
    var month = parseInt(pickedDate.substring(5, 7)) - 1;
    var day = parseInt(pickedDate.substring(8, 10));
    var firstDate = new Date(year, month, day);
    return firstDate.getTime();
}
function getEndTime() {
    var pickedDate = document.getElementById("lastDate").value;
    var year = parseInt(pickedDate.substring(0, 4));
    var month = parseInt(pickedDate.substring(5, 7)) - 1;
    var day = parseInt(pickedDate.substring(8, 10));
    var firstDate = new Date(year, month, day);
    return firstDate.getTime();

}
function validateForm() {
    var startTime = getStartTime();
    var endTime = getEndTime();
    var firstDate = document.getElementById("firstDate");
    var secondDate = document.getElementById("lastDate");
    var firstSuccess = checkDate(firstDate);
    var secondSuccess = checkDate(secondDate);
    if (firstSuccess && secondSuccess) {
        if (startTime > endTime) {
            document.getElementById("message").innerHTML = "<div class='alert alert-error'>\n<p id='error'>The second date should't be smaller than the first one.</p>\n</div>";
        } else {
            reloadData();
        }
    }
}
function checkDate(input) {
    var validformat = /^\d{4}-\d{2}-\d{2}$/

    var returnval = false
    if (!validformat.test(input.value)) {
        document.getElementById("message").innerHTML = "<div class='alert alert-error'>\n<p id='error'>Invalid date format</p>\n</div>";
        input.parentNode.parentNode.className += " error";
    }
    else {
        var monthfield = input.value.split("-")[1]
        var dayfield = input.value.split("-")[2]
        var yearfield = input.value.split("-")[0]
        var dayobj = new Date(yearfield, monthfield - 1, dayfield)
        if ((dayobj.getMonth() + 1 != monthfield) || (dayobj.getDate() != dayfield) || (dayobj.getFullYear() != yearfield)) {
            document.getElementById("message").innerHTML = "<div class='alert alert-error'>\n<p id='error'>Invalid day, month or year.</p>\n</div>";
            input.parentNode.parentNode.className += " error";
        }
        else {
            input.parentNode.parentNode.className = "input-append control-group";
            document.getElementById("message").innerHTML = "";
            returnval = true;

        }
    }
    return returnval
}