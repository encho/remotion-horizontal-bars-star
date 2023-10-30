import {ReactNode} from 'react';

// import {useAppTheme} from '../../../src/appTheme/useAppTheme';

type TSvgProps = {
	height?: number;
	width?: number;
	children: ReactNode;
	style?: Object;
};

export default function Svg({width, height, children, style = {}}: TSvgProps) {
	// const {theme} = useAppTheme();
	// const defaultStrokeColor = theme.colors.Svg.debugStrokeColor;
	// const defaultStrokeColor = theme.mainColor;
	const defaultStrokeColor = '#00ff00';

	const debugStyle = {border: `1px solid ${defaultStrokeColor}`};

	return (
		<svg
			width={width}
			height={height}
			style={{
				display: 'block',
				overflow: 'visible',
				...debugStyle,
				...style,
			}}
		>
			{children}
		</svg>
	);
}
