import {AbsoluteFill} from 'remotion';
import {Logo} from './Logo';
import {Subtitle} from './Subtitle';
import {Title} from './Title';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';

export const changeBarsSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	logoColor: zColor(),
	previousValue: z.number(),
	currentValue: z.number(),
});

export const ChangeBars: React.FC<z.infer<typeof changeBarsSchema>> = ({
	titleText,
	titleColor: propTwo,
	logoColor: propThree,
	previousValue,
	currentValue,
}) => {
	return (
		<AbsoluteFill className="bg-gray-100 items-center justify-center">
			<div className="m-10" />
			<Logo logoColor={propThree} />
			<div className="m-3" />
			<Title titleText={titleText} titleColor={propTwo} />
			<Title titleText={`${previousValue}`} titleColor={propTwo} />
			<Title titleText={`${currentValue}`} titleColor={propTwo} />
			<Subtitle />
		</AbsoluteFill>
	);
};
