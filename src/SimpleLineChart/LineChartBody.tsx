import {evolvePath, getLength, getPointAtLength} from '@remotion/paths';
import {max, min} from 'd3-array';
import {scaleLinear} from 'd3-scale';
import {line} from 'd3-shape';
import {useCurrentFrame, useVideoConfig} from 'remotion';

import {
	DisplayGridLayout,
	TGridLayoutAreaSpec,
	TGridRailSpec,
	useGridLayout,
} from '../acetti-viz';

export function LineChartBody({
	areaWidth,
	areaHeight,
	data,
	styling,
	showLayout = false,
}: {
	areaWidth: number;
	areaHeight: number;
	data: {index: number; value: number; label: string}[];
	showLayout?: boolean;
	styling: {
		gridLinesColor: string;
		yLabelsColor: string;
		xLabelsColor: string;
		lineColor: string;
		yAxisAreaWidth: number;
		lineStrokeWidth: number;
		lineCircleRadius: number;
		yTickValuesFontSize: number;
		xTickValuesFontSize: number;
		xAxisAreaHeight: number;
		gridLinesStrokeWidth: number;
		yAxisAreaMarginLeft: number;
	};
}) {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();

	const chartRowsRailSpec: TGridRailSpec = [
		{type: 'fr', value: 1, name: 'plot'},
		{type: 'pixel', value: styling.xAxisAreaHeight, name: 'xAxis'},
	];
	const chartColsRailSpec: TGridRailSpec = [
		{type: 'fr', value: 1, name: 'plot'},
		{type: 'pixel', value: styling.yAxisAreaMarginLeft, name: 'space'},
		{type: 'pixel', value: styling.yAxisAreaWidth, name: 'yAxis'},
	];

	const chartGridLayoutSpec = {
		padding: 0,
		columnGap: 0,
		rowGap: 0,
		rows: chartRowsRailSpec,
		columns: chartColsRailSpec,
		areas: {
			xAxis: [
				{name: 'xAxis'},
				{name: 'plot'},
				{name: 'xAxis'},
				{name: 'plot'},
			] as TGridLayoutAreaSpec,
			yAxis: [
				{name: 'plot'},
				{name: 'yAxis'},
				{name: 'plot'},
				{name: 'yAxis'},
			] as TGridLayoutAreaSpec,
			plot: [
				{name: 'plot'},
				{name: 'plot'},
				{name: 'plot'},
				{name: 'plot'},
			] as TGridLayoutAreaSpec,
		},
	};

	const chartLayout = useGridLayout({
		width: areaWidth,
		height: areaHeight,
		gridLayoutSpec: chartGridLayoutSpec,
	});

	const xScale = scaleLinear()
		.domain([
			min(data.map((it) => it.index)) as number,
			max(data.map((it) => it.index)) as number,
		])
		.range([chartLayout.areas.plot.x1, chartLayout.areas.plot.x2]);

	const yScale = scaleLinear()
		.domain([max(data.map((it) => it.value)) as number, 0])
		.range([chartLayout.areas.plot.y1, chartLayout.areas.plot.y2]);

	const linePath = line<{index: number; value: number}>()
		.x((d) => xScale(d.index))
		.y((d) => yScale(d.value));
	// .curve(curveBasis);
	// .curve(curveCatmullRom.alpha(0.5));

	const d = linePath(data) || '';
	const pathLength = d ? getLength(d) : 0;
	const percentageAnimation = Math.min(frame / (durationInFrames / 2), 1);
	const pointAtLength = getPointAtLength(d, percentageAnimation * pathLength);
	const evolvedPath = evolvePath(percentageAnimation, d);
	const tickValues = yScale.nice().ticks(5);

	return (
		<div style={{position: 'relative'}}>
			<div style={{position: 'absolute'}}>
				<DisplayGridLayout
					hide={!showLayout}
					areas={chartLayout.areas}
					width={areaWidth}
					height={areaHeight}
				/>
			</div>
			<div style={{position: 'absolute'}}>
				<svg
					width={areaWidth}
					height={areaHeight}
					style={{
						overflow: 'visible',
					}}
				>
					{/* gridlines */}
					{tickValues.map((tickValue) => {
						return (
							<g key={`gridline-${tickValue}`}>
								<line
									x1={chartLayout.areas.plot.x1}
									x2={chartLayout.areas.plot.x2}
									y1={yScale(tickValue)}
									y2={yScale(tickValue)}
									stroke={styling.gridLinesColor}
									strokeWidth={styling.gridLinesStrokeWidth}
								/>
							</g>
						);
					})}

					{/* y ticks */}
					{tickValues.map((tickValue) => {
						return (
							<g key={tickValue}>
								<text
									x={chartLayout.areas.yAxis.x2}
									y={yScale(tickValue)}
									fontSize={styling.yTickValuesFontSize}
									fill={styling.yLabelsColor}
									textAnchor="end"
									alignmentBaseline="central"
								>
									{tickValue}
								</text>
							</g>
						);
					})}

					{/* x ticks */}
					{data.map((it, i) => {
						return (
							<g key={i}>
								<text
									textAnchor="middle"
									alignmentBaseline="baseline"
									fill={styling.xLabelsColor}
									fontSize={styling.xTickValuesFontSize}
									x={xScale(it.index)}
									y={chartLayout.areas.xAxis.y2}
								>
									{it.label}
								</text>
							</g>
						);
					})}

					{d ? (
						<g>
							<path
								d={d}
								strokeDasharray={evolvedPath.strokeDasharray}
								strokeDashoffset={evolvedPath.strokeDashoffset}
								stroke={styling.lineColor}
								strokeWidth={styling.lineStrokeWidth}
								fill="transparent"
							/>

							<circle
								cx={pointAtLength.x}
								cy={pointAtLength.y}
								fill={styling.lineColor}
								r={styling.lineCircleRadius}
							/>
						</g>
					) : null}
				</svg>
			</div>
		</div>
	);
}
