import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

import {Sequence} from 'remotion';
import {TGridLayout} from '../acetti-viz';
import {GridAreaDiv} from '../acetti-viz/atoms/GridAreaDiv';
import {SlideIn} from '../SlideIn';

export function SlideTitleSequence({
	slideLayout,
	title,
	subTitle,
	styling,
}: {
	slideLayout: TGridLayout;
	title: string;
	subTitle: string;
	styling: {
		titleColor: string;
		subTitleColor: string;
	};
	// TODO eventually pass theme via context
	// theme: Theme;
}) {
	const frame = useCurrentFrame();
	const {
		durationInFrames,
		// fps,
		// width,
		// height
	} = useVideoConfig();

	// TODO what about fade in animation? also sequence shoudl be here probably.
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
		<>
			<SlideIn>
				{/* <Sequence from={10}> */}
				<GridAreaDiv
					layout={slideLayout}
					area="title"
					// TODO make transparent default
					fill="transparent"
					opacity={opacity}
				>
					{({areaWidth, areaHeight}) => {
						return (
							<div>
								<svg
									style={{
										height: areaHeight,
										width: areaWidth,
										overflow: 'visible',
									}}
								>
									<text
										alignmentBaseline="alphabetic"
										x={0}
										y={areaHeight}
										fill={styling.titleColor}
										// fontFamily={theme.fonts.title.name}
										fontSize={areaHeight}
										opacity={opacity}
									>
										{/* Overweighting the Dow */}
										{title}
									</text>
								</svg>
							</div>
						);
					}}
				</GridAreaDiv>
			</SlideIn>
			<Sequence from={5}>
				<SlideIn>
					<GridAreaDiv
						layout={slideLayout}
						area="subTitle"
						// TODO make transparent default
						fill="transparent"
						opacity={opacity}
					>
						{({areaWidth, areaHeight}) => {
							return (
								<div>
									<svg
										style={{
											height: areaHeight,
											width: areaWidth,
											overflow: 'visible',
										}}
									>
										<text
											alignmentBaseline="alphabetic"
											x={0}
											y={areaHeight}
											// fontFamily={theme.fonts.subTitle.name}
											fill={styling.subTitleColor}
											fontSize={areaHeight}
											opacity={opacity}
										>
											{subTitle}
										</text>
									</svg>
								</div>
							);
						}}
					</GridAreaDiv>
				</SlideIn>
			</Sequence>
		</>
	);
}
