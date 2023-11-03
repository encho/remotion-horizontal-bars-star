import {AbsoluteFill, delayRender, continueRender} from 'remotion';
import {z} from 'zod';
import {useEffect, useState} from 'react';

import {SimpleLineChart} from '../SimpleLineChart/SimpleLineChart';

// import availableFontSpecs from '../fontSpecs';
// import {useFontsLoader} from '../useFontsLoader';

// TODOS
// load correct nerdy fonts
// add logo of nerdy at the bottom
// improve x axis to account for series length flexibly
// nice to have: automatically determine necessary space for y axis
// api: return the correct title and subtitle
// plot from 0 or from min-max bounds (y axis)

const nerdyThemeDark = {
	background: '#000000',
	title: '#ffffff',
	text: '#ffffff',
	softText: '#666666',
	green: '#00FED8',
	magenta: '#FE0097',
	gridLines: '#444444',
	line: '#00FED8',
	xTicks: '#444444',
};

// const nerdyFontSpecs = [
// 	// availableFontSpecs['NotoSansMono-Variable'],
// 	// availableFontSpecs.SourceSerifPro.Light,
// ];

export const nerdyPriceChartSchema = z.object({
	ticker: z.enum([
		'BTC-USD',
		'XAU-USD',
		'ETH-USD',
		'XRP-USD',
		'USDT-USD',
		'BNB-USD',
		'ADA-USD',
		'GBP-USD',
		'EUR-USD',
		'JPY-USD',
		'AUD-USD',
		'NZD-USD',
		'EUR-CHF',
		'USD-RUB',
		'FTSE_INDEX',
		'DAX_INDEX',
		'^N100',
		'SPX_INDEX',
		'DJI_INDEX',
		'NIKKEI_INDEX',
		'AAPL',
		'AMZN',
		'COIN',
		'PFE',
		'GS',
		'JPM',
		'TESLA',
	]),
	title: z.optional(z.string()),
	subtitle: z.optional(z.string()),
	timePeriod: z.enum(['1M', '3M', '1Y', '2Y', 'YTD', 'QTD']),
	nerdyFinanceEnv: z.enum(['DEV', 'STAGE', 'PROD']),
	styling: z
		.object({
			yAxisAreaWidth: z.number().optional(),
		})
		.optional(),
});

type TNerdyPriceChartApiResult = {
	title: string;
	subtitle: string;
	data: {value: number; index: Date}[];
};

export const NerdyPriceChart: React.FC<
	z.infer<typeof nerdyPriceChartSchema>
> = ({title, subtitle, ticker, timePeriod, nerdyFinanceEnv, styling = {}}) => {
	// TODO from props
	const endDate = '2023-10-31T15:36:06.837Z';

	const [apiResult, setApiResult] = useState<null | TNerdyPriceChartApiResult>(
		null
	);

	const theme = nerdyThemeDark;

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

	const defaultStyling = {
		titleFontSize: 75,
		subTitleFontSize: 40,
		backgroundColor: theme.background,
		titleColor: theme.title,
		gridLinesColor: theme.gridLines,
		yLabelsColor: theme.softText,
		xLabelsColor: theme.softText,
		xTickValuesColor: theme.xTicks,
		lineColor: theme.line,
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
	};

	const mergedStyling = {...defaultStyling, ...styling};

	return (
		<AbsoluteFill>
			{apiResult ? (
				<SimpleLineChart
					fontFamilyTitle="Inter-Bold"
					fontFamilySubtitle="Inter-Regular"
					title={title || apiResult.title}
					subtitle={subtitle || apiResult.subtitle}
					data={apiResult.data}
					styling={mergedStyling}
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
