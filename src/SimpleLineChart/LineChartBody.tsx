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

// import type {Theme} from '../theme';

export function LineChartBody({
	areaWidth,
	areaHeight,
	data,
	baselines,
	styling,
}: {
	areaWidth: number;
	areaHeight: number;
	data: {index: number; value: number; label: string}[];
	baselines: (n: number) => number;
	styling: {
		gridLinesColor: string;
		yLabelsColor: string;
		xLabelsColor: string;
		lineColor: string;
	};
}) {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();

	const chartRowsRailSpec: TGridRailSpec = [
		{type: 'fr', value: 1, name: 'plot'},
		{type: 'pixel', value: baselines(5), name: 'xAxis'},
	];
	const chartColsRailSpec: TGridRailSpec = [
		{type: 'fr', value: 1, name: 'plot'},
		{type: 'pixel', value: baselines(0.5), name: 'space'},
		{type: 'pixel', value: baselines(3), name: 'yAxis'},
		{type: 'pixel', value: baselines(3), name: 'marginRight'},
	];

	// const valueFontSize = baselines(3.5);
	// const labelFontSize = baselines(2.5);
	// const labelAreaHeight = baselines(3);

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

	// TODO dependent on resolution
	// const labelAreaHeight = 100;
	// const barAreaHeight = areaHeight - labelAreaHeight;

	const xScale = scaleLinear()
		.domain([
			min(data.map((it) => it.index)) as number,
			max(data.map((it) => it.index)) as number,
		])
		// .range([0, areaWidth]);
		.range([chartLayout.areas.plot.x1, chartLayout.areas.plot.x2]);

	const yScale = scaleLinear()
		.domain([max(data.map((it) => it.value)) as number, 0])
		.range([chartLayout.areas.plot.y1, chartLayout.areas.plot.y2]);

	const linePath = line<{index: number; value: number}>()
		.x((d) => xScale(d.index))
		.y((d) => yScale(d.value));
	// .curve(curveBasis);
	// .curve(curveCatmullRom.alpha(0.5));

	// const values = data.map(({ value }: any) => value);
	// const minValue = min(values) as number;
	// const maxValue = max(values) as number;

	// const yAxis = axisLeft(yScale);

	const d = linePath(data) || '';

	const pathLength = d ? getLength(d) : 0;

	const percentageAnimation = Math.min(frame / (durationInFrames / 2), 1);

	const pointAtLength = getPointAtLength(d, percentageAnimation * pathLength);

	const evolvedPath = evolvePath(percentageAnimation, d);

	const tickValues = yScale.nice().ticks(5);

	return (
		<div style={{position: 'relative'}}>
			<div style={{position: 'absolute'}}>
				{false ? (
					<DisplayGridLayout
						areas={chartLayout.areas}
						width={areaWidth}
						height={areaHeight}
					/>
				) : null}
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
									strokeWidth={baselines(0.1)}
								/>
							</g>
						);
					})}

					{/* y ticks */}
					{tickValues.map((tickValue) => {
						const padding = baselines(0.5);
						// const textWidth = baselines(4);
						const textWidth = baselines(3);
						return (
							<g key={tickValue}>
								<text
									x={chartLayout.areas.yAxis.x1 + padding + textWidth}
									y={yScale(tickValue)}
									// fontSize={baselines(3)}
									fontSize={baselines(2)}
									// fontFamily={theme.fonts.text.name}
									// fontFamily={theme.fonts.text.name}
									fill={styling.yLabelsColor}
									textAnchor="end"
									// textAnchor="start"
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
									alignmentBaseline="hanging"
									fill={styling.xLabelsColor}
									fontSize={baselines(2)}
									x={xScale(it.index)}
									y={chartLayout.areas.xAxis.y1 + baselines(1.5)}
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
								strokeWidth={baselines(0.5)}
								fill="transparent"
							/>

							<circle
								cx={pointAtLength.x}
								cy={pointAtLength.y}
								fill={styling.lineColor}
								r={baselines(0.75)}
							/>
						</g>
					) : null}
				</svg>
			</div>
		</div>
	);
}
