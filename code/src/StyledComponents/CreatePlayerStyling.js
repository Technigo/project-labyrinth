import styled from 'styled-components'; 

export const MainHeader = styled.h1`
  width:50%; 
  border-right: solid 3px rgba(120, 120, 120, 0.75);
  white-space: nowrap;
  overflow: hidden;    
  font-family: 'Source Code Pro', monospace;  
  font-size: 40px;
  color: rgba(255,255,255);
  animation: animated-text 3s steps(29,end) 0.07s 1 normal both,
  animated-cursor 600ms steps(29,end) infinite;
  /* text animation */
  @keyframes animated-text{
    from{width: 0;}
    to{width:83%;}
  };
/* cursor animations */
  @keyframes animated-cursor{
    from{border-right-color: rgba(242, 2, 255, 0.92);}
    to{border-right-color: transparent;}
}`;

export const Form = styled.form`
  display:flex;
  padding:20px; 
  width:100%;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:center;
`;

export const InputText = styled.input`
  text-align:center;
  width:80%;
  line-height:50px;
  border-radius:16px;
  border:none;
`;