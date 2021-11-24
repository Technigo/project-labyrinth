import styled from 'styled-components';

export const GameCard = styled.section`
max-width:700px;
max-height: 400px;
position: absolute;
margin: auto;
left: 0;
right: 0;
top: 0;
bottom: 0;
background-color: #000;
box-shadow: 0 0 10px 20px #000;
opacity: 0.5;
padding: 20px;
text-align: center;
color: #fff;
font-family: 'Philosopher', sans-serif;
@media (max-width: 768px) {
    max-width:600px;
    max-height: 525px;
}

& h2{
text-align: center;
font-size: 20px;
margin: auto auto;
color: #fff;
font-weight: bolder;
padding: 20px 15px 30px 15px;
@media (max-width: 768px) {
font-size: 19px;
}

& div{
text-align: center;
font-size: 17px;
margin: auto auto;
color: #fff;
font-weight: 600;
padding: 20px 10px 30px 10px;
@media (max-width: 768px) {
font-size: 16px;
}}}
`