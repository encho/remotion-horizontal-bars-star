import {AbsoluteFill, delayRender, continueRender} from 'remotion';
import {z} from 'zod';
import {useEffect, useState} from 'react';

import {SimpleLineChart} from '../SimpleLineChart/SimpleLineChart';

// TODOS
// optional styling for this via 'styling' props, to be merded with defaults
// theme 'DARK' | 'BRIGHT' enum prop
// add logo of nerdy at the bottom
// load correct nerdy fonts
// improve x axis to account for series length flexibly
// nice to have: automatically determine necessary space for y axis

export const nerdyPriceChartSchema = z.object({
	ticker: z.string(),
	timePeriod: z.enum(['1M', '3M', '1Y', '2Y', 'YTD', 'QTD']),
	nerdyFinanceEnv: z.enum(['DEV', 'STAGE', 'PROD']),
});

type TNerdyPriceChartApiResult = {
	title: string;
	subtitle: string;
	data: {value: number; index: Date}[];
};

export const NerdyPriceChart: React.FC<
	z.infer<typeof nerdyPriceChartSchema>
> = ({ticker, timePeriod, nerdyFinanceEnv}) => {
	// TODO from props
	const endDate = '2023-10-31T15:36:06.837Z';
	// const timePeriod = '1M';

	const [apiResult, setApiResult] = useState<null | TNerdyPriceChartApiResult>(
		null
	);

	useEffect(() => {
		const handle = delayRender('FETCH_API_DATA');
		async function fetchAndSetData() {
			try {
				const response = await fetchNerdyFinancePriceCharts(
					{
						ticker,
						endDate,
						timePeriod,
					},
					nerdyFinanceEnv
				);
				setApiResult(response);
				continueRender(handle);
			} catch (error) {
				// Handle any errors
			}
		}
		fetchAndSetData();
	}, [ticker, timePeriod, endDate, nerdyFinanceEnv]);

	return (
		<AbsoluteFill>
			{apiResult ? (
				<SimpleLineChart
					title={apiResult.title}
					subtitle={apiResult.subtitle}
					data={apiResult.data}
					styling={{
						titleFontSize: 75,
						subTitleFontSize: 40,
						backgroundColor: '#FFFDD0',
						titleColor: '#6F5B3E',
						gridLinesColor: '#ede0c0',
						yLabelsColor: '#C4AE78',
						xLabelsColor: '#C4AE78',
						lineColor: '#00c278',
						yAxisAreaWidth: 128,
						lineStrokeWidth: 10,
						lineCircleRadius: 16,
						yTickValuesFontSize: 40,
						xTickValuesFontSize: 40,
						xAxisAreaHeight: 60,
						gridLinesStrokeWidth: 3,
						yAxisAreaMarginLeft: 20,
						xTickValuesLength: 15,
						xTickValuesWidth: 2,
						xTickValuesColor: '#ede0c0',
					}}
					showLineChartLayout={false}
				/>
			) : null}
		</AbsoluteFill>
	);
};

type NerdyFinancePriceChartsArgs = {
	ticker: string;
	endDate: string;
	timePeriod: '1M' | '3M' | '1Y' | '2Y' | 'YTD' | 'QTD';
};

const fetchNerdyFinancePriceCharts = async (
	{ticker, endDate, timePeriod}: NerdyFinancePriceChartsArgs,
	nerdyFinanceEnv: 'DEV' | 'STAGE' | 'PROD'
): Promise<TNerdyPriceChartApiResult> => {
	const apiBase = nerdyFinanceEnv === 'DEV' ? 'http://127.0.0.1:5000' : null;

	const apiUrl = `${apiBase}/flics/simple-price-chart?ticker=${ticker}&&endDate=${endDate}&timePeriod=${timePeriod}`;

	const data = await fetch(apiUrl);

	const json = await data.json();

	// TODO validate a specific return type
	// maybe with zod it is possible?
	// TODO parse within the component!
	const parsedData = json.data.map((it: {value: number; index: string}) => ({
		value: it.value,
		index: new Date(it.index),
	}));

	return {
		data: parsedData,
		title: json.title,
		subtitle: json.subtitle,
	};
};
