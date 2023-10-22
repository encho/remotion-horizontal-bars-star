import logos from './2023-24_logos';
// import table from './2023-24_table_2023-10-15';
import table from './2023-24_table_2023-10-22';

// game 7
// const COLORS = {
// 	background: '#6ed8ba',
// 	text: '#1d5243',
// 	border: '#1d5243',
// };

// game 8
const COLORS = {
	background: '#1c2541',
	text: '#CAD8DE',
	placements: {
		champions: '#76E7CD',
		uefa: '#9B7EDE',
		uefaConference: '#C45BAA',
	},
};

const getPlaceColor = (place: string) => {
	if (place === 'CHAMPIONS') {
		return COLORS.placements.champions;
	}
	if (place === 'UEFA') {
		return COLORS.placements.uefa;
	}
	if (place === 'UEFA_CONFERENCE') {
		return COLORS.placements.uefaConference;
	}
	return 'transparent';
};

const horizontalBarsStartDataItems = table.map((it) => {
	return {
		// @ts-ignore
		label: logos[it.team].name,
		description: `${it.points} Punkte`,
		value: it.points,
		colors: {
			background: COLORS.background,
			text: COLORS.text,
			border: getPlaceColor(it.place),
		},
		// @ts-ignore
		imageSource: logos[it.team].logo,
	};
});

export default {
	colors: {
		background: '#0b132b',
		title: '#CAD8DE',
		progress: '#CAD8DE',
	},
	items: horizontalBarsStartDataItems,
	dateLabel: '22. Oktober 2023',
};
