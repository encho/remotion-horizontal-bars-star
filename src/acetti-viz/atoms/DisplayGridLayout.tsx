import {toPairs} from 'lodash';
import {TGridLayoutArea} from '../types2';
import Area from './Area';
import Svg from './Svg';
import Title from './Title';

type TDisplayGridLayoutProps = {
	width: number;
	height: number;
	areas: {[k: string]: TGridLayoutArea};
};

export default function DisplayGridLayout({
	width,
	height,
	areas,
}: TDisplayGridLayoutProps) {
	return (
		<div style={{position: 'relative'}}>
			{/* <div style={{position: 'absolute', color: 'white', left: 20}}>
				<h1>DisplayGridLayout</h1>
			</div> */}
			<Svg width={width} height={height}>
				{toPairs(areas).map(([name, area]) => (
					<Area key={name} area={area} show>
						<Title area={area} text={name} />
					</Area>
				))}
			</Svg>
		</div>
	);
}
