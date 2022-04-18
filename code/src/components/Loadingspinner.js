import React from 'react'
import { useSelector } from 'react-redux'
import {
	Container,
	LoadingSpinnerContainer,
	SquareOne,
	SquareTwo,
	SquareThree,
	SquareFour,
	SquareFive,
} from '../components/Loadingstyling'

const Loadingspinner = () => {
	console.log('laddar')
	const isLoading = useSelector((store) => store.ui.isLoading)
	return (
		<Container>
			{isLoading && (
				<LoadingSpinnerContainer>
					<SquareOne></SquareOne>
					<SquareTwo></SquareTwo>
					<SquareThree></SquareThree>
					<SquareFour></SquareFour>
					<SquareFive></SquareFive>
				</LoadingSpinnerContainer>
			)}
		</Container>
	)
}

export default Loadingspinner
