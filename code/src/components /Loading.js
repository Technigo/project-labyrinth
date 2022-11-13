import Lottie from 'lottie-react';
import animationData from '../lottie/loading.json';

const Loading = () => {
	const defaultOptions = {
		loop: false,
		autoplay: false,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<div>
			<Lottie options={defaultOptions} height={600} width={600} />
		</div>
	);
};

export default Loading;
