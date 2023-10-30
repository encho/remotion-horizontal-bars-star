import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
// import invariant from 'tiny-invariant';

// TODO
// implement this design: https://polygon.io/blog/universal-snapshot

import {GridAreaDiv} from '../acetti-viz/atoms/GridAreaDiv';
// import {ProgressBar} from '../GenericTools/ProgressBar';
import {Watermark} from '../GenericTools/Watermark';
import {SlideIn} from '../SlideIn';
import {LayoutDisplay} from '../slides/LayoutDisplay';
import {SlideTitleSequence} from '../slides/SlideTitleSequence';
import {useSlide} from '../slides/useSlide';
import {LineChartBody} from './LineChartBody';

// import {allThemes, Theme, ThemeId} from '../theme';

export const SimpleLineChart: React.FC<{
	title: string;
	subtitle: string;
	data: {index: number; value: number; label: string}[];
	// theme: ThemeId;
	watermark?: boolean;
	// progressBar?: boolean;
	styling: {
		backgroundColor: string;
		titleColor: string;
		gridLinesColor: string;
		yLabelsColor: string;
		xLabelsColor: string;
		lineColor: string;
	};
}> = ({
	data,
	// theme: themeId,
	title,
	subtitle,
	watermark,
	// progressBar,
	styling,
}) => {
	// const theme = allThemes.find((it: Theme) => it.name === themeId);
	// invariant(theme);

	// useFontsLoader(theme);

	const frame = useCurrentFrame();
	const {
		durationInFrames,
		// fps,
		width,
		height,
	} = useVideoConfig();

	const {layout, baselines} = useSlide({width, height});

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

	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
		// <AbsoluteFill style={{backgroundColor: theme.background}}>
		<AbsoluteFill style={{backgroundColor: styling.backgroundColor}}>
			<LayoutDisplay
				hide
				baseline={baselines(1)}
				width={width}
				height={height}
				layout={layout}
			/>

			<Sequence from={0} durationInFrames={durationInFrames}>
				<SlideTitleSequence
					slideLayout={layout}
					title={title}
					subTitle={subtitle}
					styling={{
						titleColor: styling.titleColor,
						subTitleColor: styling.titleColor,
					}}
				/>
			</Sequence>
			<Sequence from={10}>
				<SlideIn>
					{/* <SlideOut> */}
					<GridAreaDiv
						layout={layout}
						area="body"
						fill="transparent"
						opacity={opacity}
					>
						{({areaWidth, areaHeight}) => {
							return (
								<LineChartBody
									areaWidth={areaWidth}
									areaHeight={areaHeight}
									data={data}
									baselines={baselines}
									styling={{
										gridLinesColor: styling.gridLinesColor,
										yLabelsColor: styling.yLabelsColor,
										xLabelsColor: styling.xLabelsColor,
										lineColor: styling.lineColor,
									}}
								/>
							);
						}}
					</GridAreaDiv>
					{/* </SlideOut> */}
				</SlideIn>
			</Sequence>

			<Watermark
				watermark={watermark}
				// theme={theme}
				baselines={baselines}
			/>
			{/* <ProgressBar
				progressBar={progressBar}
				theme={theme}
				baselines={baselines}
			/> */}
		</AbsoluteFill>
	);
};
