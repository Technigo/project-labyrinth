import styled from 'styled-components/macro'

export const Button = styled.button`
border: none;
background: transparent;
color: #fff;
text-shadow: black 1px 1px;
border-radius: 6px;
padding: 2px 10px;
font-size: 24px;
animation: pulse-white 2s infinite ease-in-out;

@keyframes pulse-white {
  0% {
    transform: scale(1);
  }
  
  70% {
    transform: scale(1.1);
  }
  
  100% {
    transform: scale(1);
  }
}

&:hover{
  cursor: pointer;
}
`

