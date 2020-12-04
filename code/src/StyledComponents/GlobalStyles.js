import styled from 'styled-components';

export const Container = styled.div`
  display:flex; 
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-top:10%;
`;

export const BoxShadow = styled.div`
  width:80%;
  display: flex;
  justify-content:center;
  flex-direction: row;
  flex-wrap:wrap;
  border: 1px solid #fd20e3;
  padding: 10px;
  box-shadow: 5px 10px #fd20e3;
  margin:20px;
`

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
  margin-left: 75px;
  margin-right: 75px;
`

export const Button = styled.button`
  font-size: 35px;
  font-family:'Source Code Pro', monospace;
  margin: 30px 0px 20px 10px;
  border: none;
  padding: 20px;
  border: solid 1px #fd20e3;
  background-color: rgb(19, 19, 19);
  color:white;
  cursor: pointer;

  :hover {
  color: #191414;
  border: 1px inset #fd20e3;
  background: #fd20e3;
}
  @media (min-width: 768px) {
    margin:40px;
  }
`;

export const Hint = styled.p`
  font-size:9px;
  padding:20px;

  @media (min-width: 768px) {
    margin-left: 20%;
    margin-right: 20%;
  }
`