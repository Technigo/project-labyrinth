import styled from 'styled-components'

// Start button (maybe Username input button)
// Restart button
// Directions button north/south/east/west

// #3A3845 dark
// #F7CCAC light beige
// #C69B7B darker beige
// #826F66 gray

export const Btnstyling = styled.button`
font-family: 'Montserrat', sans-serif;
font-size: 15px;
padding: 7px 15px;
background-color: ${(props) => (props.start ? '#C69B7B' : '#3A3845')};
color: ${(props) => (props.start ? '#3A3845' : '#C69B7B')};
border: 2px solid #3A3845;
border-radius: 15px;
margin: 20px;
&:hover {
opacity: 0.8;
}

@media (min-width: 668px) and (max-width: 1024px) {
font-size: 20px;
}
@media (min-width: 1025px) {
font-size: 25px;
}

`