function getFlotOptions( width, start, end,size,format,chartType){
	
	var json = {
		series:{},
		xaxis: {
				mode: "time",
				tickSize: [1, size],
				timeformat: format,
				color: "transparent",
				axisLabel: size,
				axisLabelUseCanvas: true,
				axisLabelFontSizePixels: 12,
				axisLabelFontFamily: 'Verdana, Arial',
				axisLabelPadding: 55,
				timezone: "browser",
				panRange: [start, end]
			},
			yaxis:
			{
				color: "transparent",
				tickDecimals: 0,
				axisLabel: "Count",
				axisLabelUseCanvas: true,
				axisLabelFontSizePixels: 12,
				axisLabelFontFamily: 'Verdana, Arial',
				axisLabelPadding: 5,
				panRange: [0, 25]
			},
			zoom: {
				interactive: true,
			},
			pan: {
				interactive: true,
				frameRate: 40
			},
			hooks: {
				processOffset: [hook]
			},
			grid: {
				borderWidth: 3,
				backgroundColor: { colors: ["#ffffff", "#EDF5FF"] },
				axisMargin: 20,
				hoverable: true
			}
	}
	if(chartType=="groupedbars"){
		json["series"]={
				bars: {
					barWidth: width,
					align: "left",
					show: true
				}
			}
	} else if(chartType=="stackedbars"){
		json["series"]={
				stack:0,
				bars: {
					barWidth: width,
					show: true
				}
			}
	} 
	return json;

}