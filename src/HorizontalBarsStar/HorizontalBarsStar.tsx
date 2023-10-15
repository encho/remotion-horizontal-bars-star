import {AbsoluteFill} from 'remotion';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';

import {ProgressBar} from './ProgressBar';
import {SimpleTitle} from './SimpleTitle';
import {HorizontalBars, zBarItem} from './HorizontalBars';

export const horizontalBarsStarSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	backgroundColor: zColor(),
	progressColor: zColor(),
	items: z.array(zBarItem),
});

export const HorizontalBarsStar: React.FC<
	z.infer<typeof horizontalBarsStarSchema>
> = ({titleText, titleColor, progressColor, backgroundColor, items}) => {
	return (
		<AbsoluteFill style={{backgroundColor}}>
			<SimpleTitle color={titleColor}>{titleText}</SimpleTitle>
			<HorizontalBars dataItems={items} />
			<ProgressBar color={progressColor} />
		</AbsoluteFill>
	);
};
