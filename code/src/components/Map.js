import React from 'react';
import styled from 'styled-components';
import '@lottiefiles/lottie-player';

export const Map = ({ history, gameDetails }) => {
	const mapArray = ['0,0', '0,1', '0,2', '0,3', '1,0', '1,1', '1,2', '1,3'];

	const currentLocation = gameDetails.coordinates;

	const historyCoordinates = history.map((item) => item.coordinates);

	return (
		<MapContainer>
			{mapArray.map((item, index) => (
				<div key={index}>
					<MapItem
						style={
							historyCoordinates.includes(item)
								? { backgroundColor: '#CAE6D0' }
								: { backgroundColor: 'transparent' }
						}>
						{item === currentLocation && (
							<lottie-player
								autoplay
								loop
								mode="normal"
								src={
									currentLocation === '1,3'
										? 'https://assets4.lottiefiles.com/packages/lf20_FXyLPE.json'
										: 'https://assets5.lottiefiles.com/private_files/lf30_n2txmslq.json'
								}
								style={{
									width: '100%',
									height: '100%',
									backgroundColor: '#CAE6D0',
									borderRadius: '50%',
									overflow: 'hidden',
								}}></lottie-player>
						)}
					</MapItem>
				</div>
			))}
		</MapContainer>
	);
};

const MapContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100px;
	height: 200px;
	flex-direction: column-reverse;

	@media (min-width: 768px) {
		width: 200px;
		height: 400px;
	}
`;

const MapItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
	width: 50px;
	border-radius: 50%;

	@media (min-width: 768px) {
		width: 100px;
		height: 100px;
	}
`;
