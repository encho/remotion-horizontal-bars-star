import logos from './2023-24_logos';
import table from './2023-24_table_2023-10-15';

const COLORS = {
	// background: '#fff',
	background: '#6ed8ba',
	text: '#1d5243',
	border: '#1d5243',
};

const horizontalBarsStartDataItems = table.map((it) => {
	return {
		// @ts-ignore
		label: logos[it.team].name,
		description: `${it.points} Punkte`,
		value: it.points,
		colors: COLORS,
		// @ts-ignore
		imageSource: logos[it.team].logo,
	};
});

export default horizontalBarsStartDataItems;
