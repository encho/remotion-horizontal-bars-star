import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';

import {Theme} from '../theme';

export const ProgressBar: React.FC<{
	progressBar?: boolean;
	theme: Theme;
	baselines: (n: number) => number;
}> = ({theme, baselines, progressBar}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, width} = useVideoConfig();

	const percentageProgress = Math.round((frame / durationInFrames) * 100);

	return progressBar ? (
		<AbsoluteFill>
			<div
				style={{
					position: 'absolute',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: baselines(0.25),
					bottom: baselines(0),
					left: baselines(0),
				}}
			>
				<div
					style={{
						width,
						backgroundColor: theme.ProgressBar.railColor,
					}}
				>
					<div
						style={{
							backgroundColor: theme.ProgressBar.progressColor,
							width: `${percentageProgress}%`,
							height: baselines(0.5),
						}}
					/>
				</div>
			</div>
		</AbsoluteFill>
	) : null;
};
