import {Composition} from 'remotion';
import {MyComposition, myCompSchema} from './Composition';
import {ChangeBars, changeBarsSchema} from './ChangeBars';
import {
	HorizontalBarsStar,
	horizontalBarsStarSchema,
} from './HorizontalBarsStar/HorizontalBarsStar';

import dataItems from './data/bundesliga/bundesliga';

import './style.css';

const horizontalVideo = {
	width: 1920,
	height: 1080,
};

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="HorizontalBarsStar"
				component={HorizontalBarsStar}
				durationInFrames={240}
				fps={30}
				{...horizontalVideo}
				schema={horizontalBarsStarSchema}
				defaultProps={{
					titleText: 'Top 10 Bundesliga Teams - 15. Oktober 2023',
					titleColor: '#0e2921',
					backgroundColor: '#3ba587',
					progressColor: '#0e2921',
					items: dataItems,
				}}
			/>
			<Composition
				id="ChangeBars"
				component={ChangeBars}
				durationInFrames={240}
				fps={30}
				width={1280}
				height={720}
				schema={changeBarsSchema}
				defaultProps={{
					titleText: 'Welcome to ChangeBars with Tailwind CSS',
					titleColor: '#000000',
					logoColor: '#f05122',
					previousValue: 10,
					currentValue: 20,
				}}
			/>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={240}
				fps={30}
				width={1280}
				height={720}
				schema={myCompSchema}
				defaultProps={{
					titleText: 'Welcome to Remotion with Tailwind CSS',
					titleColor: '#000000',
					logoColor: '#00bfff',
				}}
			/>
		</>
	);
};
