import styled from 'styled-components';

export const GameCard = styled.section`
max-width:700px;
max-height: 450px;
position: absolute;
margin: auto;
left: 0;
right: 0;
top: 0;
bottom: 0;
background-color: #000;
opacity: 0.5;
padding: 20px;
text-align: center;
color: #fff;
font-family: 'Philosopher', sans-serif;
border-radius: 25px;
@media (max-width: 768px) {
    max-width:600px;
    max-height: 525px;
    border-radius: 0px;
}

& h2{
text-align: center;
font-size: 22px;
margin: auto auto;
color: #fff;
font-weight: bolder;
padding: 20px 10px 30px 10px;
@media (max-width: 768px) {
font-size: 19px;
}

& div{
text-align: center;
font-size: 18px;
margin: auto auto;
color: #fff;
font-weight: 600;
padding: 20px 10px 30px 10px;
@media (max-width: 768px) {
font-size: 16px;
}}}
`