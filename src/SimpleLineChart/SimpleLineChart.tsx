import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
	delayRender,
	continueRender,
} from 'remotion';
import {zColor} from '@remotion/zod-types';
import {z} from 'zod';
import {useRef, useEffect, useState} from 'react';

// TODO
// implement this design: https://polygon.io/blog/universal-snapshot

// import {Watermark} from '../GenericTools/Watermark';
import {SlideIn} from '../SlideIn';
import {SlideTitleSequence} from '../slides/SlideTitleSequence';
// import {useSlide} from '../slides/useSlide';
import {LineChartBody} from './LineChartBody';

export const simpleLineChartSchema = z.object({
	title: z.string(),
	subtitle: z.string(),
	data: z
		.array(
			z.object({
				index: z.date(),
				value: z.number(),
			})
		)
		.nullable(),
	watermark: z.optional(z.boolean()),
	showLineChartLayout: z.optional(z.boolean()),
	styling: z.object({
		backgroundColor: zColor(),
		titleColor: zColor(),
		gridLinesColor: zColor(),
		yLabelsColor: zColor(),
		xLabelsColor: zColor(),
		lineColor: zColor(),
		//
		titleFontSize: z.number(),
		subTitleFontSize: z.number(),
		yAxisAreaWidth: z.number(),
		lineStrokeWidth: z.number(),
		lineCircleRadius: z.number(),
		yTickValuesFontSize: z.number(),
		xTickValuesFontSize: z.number(),
		xAxisAreaHeight: z.number(),
		gridLinesStrokeWidth: z.number(),
		yAxisAreaMarginLeft: z.number(),
		xTickValuesLength: z.number(),
		xTickValuesWidth: z.number(),
		xTickValuesColor: zColor(),
	}),
});

export const SimpleLineChart: React.FC<
	z.infer<typeof simpleLineChartSchema>
> = ({data, title, subtitle, styling, showLineChartLayout}) => {
	// TODO use tiny-invariant
	if (data === null) {
		throw new Error('Data was not fetched');
	}

	// TODO implement fontloader for our case here
	// ... for now more low level, i.e. pass fonts in directly
	// ... later on we may abstract towards theme again
	// useFontsLoader(theme);

	// const [parsedData, setParsedData] = useState(0);

	// const [parsedData, setParsedData] = useState<{index: Date; value: number}[]>(
	// 	[]
	// );

	const [chartElementHeight, setChartElementHeight] = useState(0);
	const [chartElementWidth, setChartElementWidth] = useState(0);

	const chartElementRef = useRef(null);

	useEffect(() => {
		const handle = delayRender('before measuring chart element height');
		// @ts-ignore
		setChartElementHeight(chartElementRef.current.offsetHeight);
		// @ts-ignore
		setChartElementWidth(chartElementRef.current.offsetWidth);
		continueRender(handle);
	}, []);

	// useEffect(() => {
	// 	const handle = delayRender('before parsing data');
	// 	const x = data.map((it) => ({...it, index: new Date(it.index)}));
	// 	setParsedData(x);
	// 	continueRender(handle);
	// }, [data]);

	const frame = useCurrentFrame();
	const {
		durationInFrames,
		// width, height
	} = useVideoConfig();

	// Fade out the animation at the end
	const opacity = interpolate(
		frame,
		[durationInFrames - 15, durationInFrames - 5],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<AbsoluteFill style={{backgroundColor: styling.backgroundColor}}>
			<div className="flex flex-col h-full p-12">
				<div className="pb-16">
					<Sequence from={0} durationInFrames={durationInFrames} layout="none">
						<SlideTitleSequence
							title={title}
							subTitle={subtitle}
							styling={{
								titleColor: styling.titleColor,
								subTitleColor: styling.titleColor,
								titleFontSize: styling.titleFontSize,
								subTitleFontSize: styling.subTitleFontSize,
							}}
						/>
					</Sequence>
				</div>
				<div ref={chartElementRef} className="flex-auto" style={{opacity}}>
					<Sequence from={15} layout="none">
						<SlideIn>
							<LineChartBody
								areaWidth={chartElementWidth}
								areaHeight={chartElementHeight}
								data={data}
								showLayout={showLineChartLayout}
								styling={{
									gridLinesColor: styling.gridLinesColor,
									yLabelsColor: styling.yLabelsColor,
									xLabelsColor: styling.xLabelsColor,
									lineColor: styling.lineColor,
									yAxisAreaWidth: styling.yAxisAreaWidth,
									lineStrokeWidth: styling.lineStrokeWidth,
									lineCircleRadius: styling.lineCircleRadius,
									yTickValuesFontSize: styling.yTickValuesFontSize,
									xTickValuesFontSize: styling.xTickValuesFontSize,
									xAxisAreaHeight: styling.xAxisAreaHeight,
									gridLinesStrokeWidth: styling.gridLinesStrokeWidth,
									yAxisAreaMarginLeft: styling.yAxisAreaMarginLeft,
									xTickValuesLength: styling.xTickValuesLength,
									xTickValuesWidth: styling.xTickValuesWidth,
									xTickValuesColor: styling.xTickValuesColor,
								}}
							/>
						</SlideIn>
					</Sequence>
				</div>
			</div>

			{/* <Watermark watermark={watermark} baselines={baselines} /> */}
			{/* <ProgressBar
				progressBar={progressBar}
				theme={theme}
				baselines={baselines}
			/> */}
		</AbsoluteFill>
	);
};
