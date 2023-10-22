import {Composition} from 'remotion';
import {MyComposition, myCompSchema} from './Composition';
import {
	HorizontalBarsStar,
	horizontalBarsStarSchema,
} from './HorizontalBarsStar/HorizontalBarsStar';

import bundesligaBarChart from './data/bundesliga/bundesliga';

import './style.css';

// const horizontalVideo = {
// 	width: 1920,
// 	height: 1080,
// };

const squareVideo = {
	width: 1080,
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
				{...squareVideo}
				schema={horizontalBarsStarSchema}
				defaultProps={{
					titleText: `Top 10 Bundesliga Teams - ${bundesligaBarChart.dateLabel}`,
					titleFontSize: 44,
					titleColor: bundesligaBarChart.colors.title,
					backgroundColor: bundesligaBarChart.colors.background,
					progressColor: bundesligaBarChart.colors.progress,
					items: bundesligaBarChart.items,
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
