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
font-size: 13px;
padding: 7px;
background-color: ${(props) => (props.start ? '#C69B7B' : '#3A3845')};
color: ${(props) => (props.start ? '#3A3845' : '#C69B7B')};
border: 2px solid #C69B7B;
border-radius: 15px;
margin: 5px;

`