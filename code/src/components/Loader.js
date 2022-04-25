// import noWebpackLoaderSyntax from 'eslint-plugin-import';
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../animations/loading-double';

export const LoadingIndicator = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<>
			<div className='loader'>
				{<Lottie options={defaultOptions} height={400} width={400} />}
			</div>
		</>
	);
};
