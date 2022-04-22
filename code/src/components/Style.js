import styled from "styled-components/macro"

export const devices = {
    mobile: "(min-width: 375px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1025px)",
  }

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px; 
`
export const LoadingWrapper = styled.div`
  text-align: center;
`
export const Mario = styled.div`
position: absolute;
align-self: center;
bottom: 0;
`

export const Wrapper = styled.div`
  width: 375px;
  margin: 0 auto;

  @media ${devices.tablet} {
      width: 768px;
  }

  @media ${devices.desktop} {
    width: 1025px;
}
`

export const NameInput = styled.input`
    font-family: 'Press Start 2P', cursive;
    padding: 20px;
    margin-bottom: 10px;
    width: 300px;
`

export const StartButton = styled.button`
    font-family: 'Press Start 2P', cursive; 
    padding: 20px;
    width: 300px;
`
export const StartGame = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;

    @media ${devices.desktop} {
       margin-top: 100px;
    }
`

export const MainGameStyle = styled.section`
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
     @media ${devices.tablet} {
        margin-top: 50px;
     }

     @media ${devices.desktop} {
        margin-top: 100px;
     }
`

export const InfoSection = styled.section`
    font-size: 16px;
    padding: 5px;
    margin-top: 10px;

     @media ${devices.tablet} {
        font-size: 18px;
     }

     @media ${devices.desktop} {
        font-size: 18px;
     }
`

export const DirectionSection = styled.section`
    margin-top: 10px;
    padding: 5px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${devices.tablet} {
        font-size: 18px;
        margin-top: 50px;
     }

    @media ${devices.desktop} {
        font-size: 18px;
        margin-top: 50px;
     }
`

export const WinSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 200px;
`

export const DirectionButton = styled.div`
    width: 200px;
    margin: 5px;

    @media ${devices.tablet} {
        margin: 15px;
     }

    @media ${devices.desktop} {
        margin: 15px;
     }
`