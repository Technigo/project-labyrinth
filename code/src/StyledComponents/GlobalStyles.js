import styled from 'styled-components';

export const Container = styled.div`
  display:flex; 
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-top:10%;
`;

export const Header = styled.h2`
  margin:25px;
  font-family: 'Source Code Pro', monospace;  
  font-size: 30px;
`
export const Text = styled.p`
  text-align: left;
  line-height: 35px;
  font-size: 20px;
  font-family: monospace,sans-serif;
  padding: 20px;
  margin-left: 10px;
`

export const Button = styled.button`
  font-size: 35px;
  font-family:'Source Code Pro', monospace;
  margin-top:50px;
  border: none;
  padding: 10px;
  border: solid 1px #fd20e3;
  background-color: rgb(19, 19, 19);
  color:white;
  cursor: pointer;

  :hover {
  color: #191414;
  border: 1px inset #fd20e3;
  background: #fd20e3;
}
`;

export const Hint = styled.p`
  font-size:9px;
  padding:20px;
`