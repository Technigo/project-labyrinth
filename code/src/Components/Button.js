import styled from 'styled-components/macro';

// const NavButton = styled.button`
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `

const Button = styled.button`
background:linear-gradient(to bottom, #e2dae8 5%, #8b7bb4 100%);
background-color:#e2dae8;
border-radius:6px;
border:1px solid #8b7bb4;
display:inline-block;
cursor:pointer;
color:#524182;
font-family:Arial;
font-size:8px;
font-weight:bold;
padding:12px 4px;
text-decoration:none;
}
:hover {
background:linear-gradient(to bottom, #8b7bb4 5%, #e2dae8 100%);
background-color:#8b7bb4;
}
:active {
position:relative;
top:1px;
}
:disabled {
    background:linear-gradient(to bottom, #a39ca8 5%, #dbdbdb 100%);
    background-color:#a39ca8;
    border-radius:6px;
    border:1px solid #8b7bb4;
    display:inline-block;
    cursor:pointer;
    color:#9b93b3;
    font-family:Arial;
    font-size:8px;
    font-weight:bold;
    padding:12px 4px;
    text-decoration:none;
    position:relative;
    top:0px;
}
`
export default Button;
