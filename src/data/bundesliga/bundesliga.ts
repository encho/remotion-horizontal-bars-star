import logos from './2023-24_logos';
import table from './2023-24_table_2023-10-15';

const COLORS = {
	background: '#6ed8ba',
	text: '#1d5243',
	border: '#1d5243',
};

const getPlaceColor = (place: string) => {
	if (place === 'CHAMPIONS') {
		return 'yellow';
	}
	if (place === 'UEFA') {
		return 'orange';
	}
	if (place === 'UEFA_CONFERENCE') {
		return 'red';
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

export default horizontalBarsStartDataItems;
