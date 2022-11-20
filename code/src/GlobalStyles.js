import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

html {
  display: flex;
  align-items: center;
  align-content: space-around;
  justify-content: center;
  //background: url('https://images.pexels.com/photos/2499862/pexels-photo-2499862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  //background-size: cover;             /*covering the the page with the whole picture,meaning no partials*/
  background-repeat: no-repeat;       /*meaning we wont repeat it many times in a row*/
  height: 100vh;      /*VIEWPORTHEIGHT, takes the complete 100% height of the page, automtic adjustment also in RESPOSSIVE DESIGN*/
}
body {
  background-color: black;
  display: flex;
  align-items: center;
  align-content: space-around;
  justify-content: center;
  margin: 0;
  padding: 0;    
  font-family: 'montserrat';
  text-align: center;
  }

  .header {
    font-family: helpme;
    color: crimson;
    opacity: 0.8;
    font-size: 30px;  
    animation: blinker 3s linear infinite;
}
@keyframes blinker {
    50% {
      opacity: 0;
    }
  }

  .user-name {
    font-family: helpme;
    border: transparent;
    color:crimson;
    opacity: 0.5;
    
  }

  .question-container{
   // max-width: 90%;
  
  }

`

export default GlobalStyles