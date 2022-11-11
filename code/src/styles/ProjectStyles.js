import styled from 'styled-components/macro';

export const Background = styled.form`
display: flex;
justify-content: center;
  background-size: cover;
  background-position: 10% 90%;
  color: white;
  box-sizing: border-box;
  min-height: 100vh;
  background-image: /* linear-gradient(
     rgba(255, 255, 255, 0.177),
    rgba(250, 244, 244, 0.598)
    ), */ url('https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?cs=srgb&dl=pexels-riccardo-bertolo-4245826.jpg&fm=jpg&_gl=1*1cdeemg*_ga*MTU1NDkwNzA1LjE2NjI2NTE0MzA.*_ga_8JE65Q40S6*MTY2ODE2MzIxOS4xMi4xLjE2NjgxNjMyMzQuMC4wLjA.');
   color: black;
`

export const ClonedBackground = styled(Background)`
background-position: 50% 60%;
background-image: linear-gradient(
     rgba(255, 255, 255, 0.3),
    rgba(250, 244, 244, 0.1)
    ), url('https://images.unsplash.com/photo-1615096831035-0213eb6ff09d?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjgxNjExMDE&ixlib=rb-4.0.3&q=80');
`