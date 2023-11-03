import {Img} from 'remotion';

export const FooterLogo: React.FC<{
	// watermark?: boolean | null;
	// watermark?: boolean;
	// theme: Theme;
	// baselines: (n: number) => number;
}> = (
	{
		// theme,
		// watermark,
		// baselines,
	}
) => {
	return (
		<div className="flex justify-center items-center mt-12">
			<Img
				style={{
					display: 'inline-block',
					// height: baselines(4.5),
					// width: baselines(4.5),
					height: 50,
					// width: 100,
					// borderRadius: 9999,
					// objectFit: 'cover',
					objectFit: 'contain',
				}}
				// src={theme.Watermark.image}
				src={
					'https://s3.eu-central-1.amazonaws.com/nerdy.finance/nerdy-finance-logo.png'
					// 'https://s3.eu-central-1.amazonaws.com/dataflics.com/lorenzo-brown-wall.JPG'
				}
				alt=""
			/>
		</div>
	);
};
