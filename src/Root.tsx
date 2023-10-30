import {Composition} from 'remotion';
import {MyComposition, myCompSchema} from './Composition';
import {
	HorizontalBarsStar,
	horizontalBarsStarSchema,
} from './HorizontalBarsStar/HorizontalBarsStar';
import {
	BundesligaTop10BarChart,
	bundesligaTop10BarChartSchema,
} from './BundesligaTop10BarChart/BundesligaTop10BarChart';

import './style.css';

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
				defaultProps={barChartFixtureProps}
			/>
			<Composition
				id="BundesligaTop10BarChart"
				component={BundesligaTop10BarChart}
				durationInFrames={240}
				fps={30}
				{...squareVideo}
				schema={bundesligaTop10BarChartSchema}
				defaultProps={{
					dateString: '29. Oktober 2023',
					year: 2023,
					apiData: null,
				}}
				calculateMetadata={async ({props}) => {
					const apiUrl = `https://api.openligadb.de/getbltable/bl1/${props.year}`;
					const data = await fetch(apiUrl);
					const json = await data.json();
					return {
						props: {
							...props,
							apiData: json,
						},
					};
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

const barChartFixtureProps = {
	titleText: 'Top 10 Bundesliga Teams | 29. Oktober 2023',
	titleFontSize: 44,
	titleColor: '#CAD8DE',
	backgroundColor: '#0b132b',
	progressColor: '#CAD8DE',
	items: [
		{
			label: 'Bayer Leverkusen',
			description: '25 Punkte',
			value: 25,
			colors: {background: '#1c2541', text: '#CAD8DE', border: '#76E7CD'},
			imageSource:
				'https://upload.wikimedia.org/wikipedia/de/thumb/f/f7/Bayer_Leverkusen_Logo.svg/1200px-Bayer_Leverkusen_Logo.svg.png',
		},
		{
			label: 'FC Bayern München',
			description: '23 Punkte',
			value: 23,
			colors: {background: '#1c2541', text: '#CAD8DE', border: '#76E7CD'},
			imageSource: 'https://i.imgur.com/jJEsJrj.png',
		},
		{
			label: 'VfB Stuttgart',
			description: '21 Punkte',
			value: 21,
			colors: {background: '#1c2541', text: '#CAD8DE', border: '#76E7CD'},
			imageSource: 'https://i.imgur.com/v0tkpNx.png',
		},
		{
			label: 'Borussia Dortmund',
			description: '21 Punkte',
			value: 21,
			colors: {background: '#1c2541', text: '#CAD8DE', border: '#76E7CD'},
			imageSource:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/560px-Borussia_Dortmund_logo.svg.png',
		},
		{
			label: 'RB Leipzig',
			description: '20 Punkte',
			value: 20,
			colors: {background: '#1c2541', text: '#CAD8DE', border: '#9B7EDE'},
			imageSource: 'https://i.imgur.com/Rpwsjz1.png',
		},
		{
			label: 'TSG 1899 Hoffenheim',
			description: '18 Punkte',
			value: 18,
			colors: {background: '#1c2541', text: '#CAD8DE', border: '#C45BAA'},
			imageSource: 'https://i.imgur.com/gF0PfEl.png',
		},
		{
			label: 'Eintracht Frankfurt',
			description: '14 Punkte',
			value: 14,
			colors: {background: '#1c2541', text: '#CAD8DE', border: 'transparent'},
			imageSource: 'https://i.imgur.com/X8NFkOb.png',
		},
		{
			label: 'SC Freiburg',
			description: '13 Punkte',
			value: 13,
			colors: {background: '#1c2541', text: '#CAD8DE', border: 'transparent'},
			imageSource: 'https://i.imgur.com/r3mvi0h.png',
		},
		{
			label: 'VfL Wolfsburg',
			description: '12 Punkte',
			value: 12,
			colors: {background: '#1c2541', text: '#CAD8DE', border: 'transparent'},
			imageSource: 'https://i.imgur.com/ucqKV4B.png',
		},
		{
			label: 'FC Augsburg',
			description: '11 Punkte',
			value: 11,
			colors: {background: '#1c2541', text: '#CAD8DE', border: 'transparent'},
			imageSource: 'https://i.imgur.com/sdE62e2.png',
		},
	],
};
