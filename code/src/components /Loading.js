/* import Lottie from 'lottie-react';
import animationData from '../lotties/loading.json'; */
import styled from 'styled-components';

const Loading = () => {
	/* const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	}; */

	return (
		<LoadingStyle>
			<h1>Loading...</h1>
		</LoadingStyle>
	);
};

const LoadingStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default Loading;
