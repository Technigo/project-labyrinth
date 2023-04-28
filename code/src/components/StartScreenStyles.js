import styled from 'styled-components/macro';
import background from '../images/startscreen.png'

export const StartScreenWrapper = styled.div`
background: url(${background});
background-size: cover;
width: 100vw;
height: 100vh;
background-attachment: fixed;
background-position: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
position:relative;
z-index: 1;

@media (min-width: 767px) {
gap: 2rem;
}
`

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;
`
export const StartScreenText = styled.p`
font-size: 0.8rem;
color: white;

@media (min-width: 767px) {
font-size: 1.3rem;

}

@media (min-width: 1024px) {
font-size: 1.5rem;

}
`
export const TextContainer = styled.div`
display: flex;
flex-direction: column;
background: rgba(0,0,0,.7);
max-width: 35rem;
border-radius: 2rem;
padding: 1.5rem;
text-align: center;
color: white;
margin: 1rem 1rem 8rem 1rem;
`

export const Input = styled.input`
max-width: 320px;
min-width: 250px;
min-height: 30px;
max-height: 35px;
font-size: 0.8rem;
text-align: center;
border: 2px solid darkgray;
border-radius: 20px;

@media (min-width: 767px) {
font-size: 1rem;

}

@media (min-width: 1024px) {
font-size: 1.3rem;

}
`

export const StartBtn = styled.button`
border: none;
font-size: 1rem;
font-family: 'Kumbh Sans', sans-serif;
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
background-color: #085e1f;
color: white;
width: ${(props) => (props.w80 ? '80px' : '100px;')};
margin-top: ${(props) => (props.m2rem ? '2rem;' : '')};

&:hover {
    transform: scale(1.3);
}
@media (min-width: 767px) {
font-size: 1rem;
padding: 8px 10px;
}

@media (min-width: 1024px) {
font-size: 1.5rem;
padding: 8px 10px;
}

`