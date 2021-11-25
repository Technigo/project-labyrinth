import styled from 'styled-components';

export const GameCard = styled.section`
max-width:500px;
max-height: 400px;
position: absolute;
margin: auto;
left: 0;
right: 0;
top: 0;
bottom: 0;
/* background-color: #000;
box-shadow: 0 0 10px 20px #000;
opacity: 0.6; */
padding: 20px;
text-align: center;
color: #fff;
font-family: 'Philosopher', sans-serif;
@media (max-width: 768px) {
    max-height: 500px;

}
& h2 { 
text-align: center;
font-size: 22px;
margin: auto auto;
/* color: #fff; */
font-weight: bolder;
padding: 20px 30px 30px 30px;
@media (max-width: 768px) {
font-size: 19px;
}

& h3 { 
text-align: center;
font-size: 45px;
margin: auto auto;
/* color: #fff; */
font-weight: bolder;
padding: 20px 30px 30px 30px;
@media (max-width: 768px) {
font-size: 19px;
}

}
}
`