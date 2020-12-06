import styled from "styled-components";


export const DirectionButton = styled.button`
  border: 2px solid #06A10B; 
  padding: 20px;
  width: 100%;
  background-color: #ffffff;
  color: #06A10B;
  font-size: 18px;
  font-family: 'Major Mono Display', monospace;
  background: #93e6b0;
  
  animation: mymove 5s forwards;
  }
  @keyframes mymove {
    from {background-color: #93e6b0;}
    to {background-color: #aea1ff;}
  }
`;

export const StartButton = styled.button`
  border: 2px solid #06A10B; 
  padding: 10px;
  width: 100%;
  color: #8A2BE2;
  font-size: 18px;
  font-family: 'Major Mono Display', monospace;

}
background: #aea1ff;

animation: mymove 5s forwards;
}
@keyframes mymove {
  from {background-color: #93e6b0;}
  to {background-color: #aea1ff;}
}
`;