import React, { Component } from 'react';
import CanvasJSReact from '../../../utils/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class DoughnutChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			width : 210,
			height : 210,
			data: [{
				type: "doughnut",
				showInLegend: false,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "", y: 5 },
					{ name: "V", y: 31 },
					{ name: "Very Satisfied", y: 40 },
					{ name: "Satisfied", y: 17 },
					{ name: "Neutral", y: 7 }
				]
			}]
		}

		return (
		<div>
			<CanvasJSChart options = {options}
			/>
 		</div>
		);
	}
}

export default DoughnutChart;
