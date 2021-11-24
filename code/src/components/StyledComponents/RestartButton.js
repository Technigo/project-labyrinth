import styled from 'styled-components';

export const RestartButton = styled.button`
  font-family: 'Philosopher', sans-serif;
  display:inline-block;
  position:relative;
  padding:10px 20px;
  border:2px solid #fda;
  background-color: white;
  color:#4F7942;
  font-family: 'Philosopher', sans-serif;
  font-size: 20px;
  text-decoration:none;
  margin: 20px auto;
  margin-top: 50px;
  transition: color 0.4s; 

  &:after {
  content:" ";
  border:2px solid rgba(0,0,0,0);
  display:inline-block;
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  margin:auto;
  transition:all 0.4s;
  }
 
  &:hover {
    color:#023020;
  }

  &:hover:after { 
  border:2px solid #fda;
  width: calc(100% - 10px);
  height: calc(100% + 10px); 
  }
`