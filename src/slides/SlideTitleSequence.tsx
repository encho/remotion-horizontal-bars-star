import {Sequence, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {SlideIn} from '../SlideIn';

export function SlideTitleSequence({
	title,
	subTitle,
	styling,
}: {
	title: string;
	subTitle: string;
	styling: {
		titleColor: string;
		subTitleColor: string;
		titleFontSize: number;
		subTitleFontSize: number;
	};
}) {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();

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
		<div className="relative">
			<div className="invisible">
				<h1
					style={{
						fontSize: styling.titleFontSize,
						opacity,
						color: styling.titleColor,
					}}
				>
					{title}
				</h1>
				<h2
					style={{
						fontSize: styling.subTitleFontSize,
						opacity,
						color: styling.subTitleColor,
					}}
				>
					{subTitle}
				</h2>
			</div>
			<div className="absolute top-0 left-0">
				<Sequence from={0} layout="none">
					<SlideIn>
						<h1
							style={{
								fontSize: styling.titleFontSize,
								opacity,
								color: styling.titleColor,
							}}
						>
							{title}
						</h1>
					</SlideIn>
				</Sequence>
				<Sequence from={5} layout="none">
					<SlideIn>
						<h2
							style={{
								fontSize: styling.subTitleFontSize,
								opacity,
								color: styling.subTitleColor,
							}}
						>
							{subTitle}
						</h2>
					</SlideIn>
				</Sequence>
			</div>
		</div>
	);
}
