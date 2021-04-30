import React from 'react'
import styled from 'styled-components/macro'
import { useSelector} from 'react-redux'

const EndScreen = () => {
  const lastDescription = useSelector((store) => store.games.gameStatus)

  return (
      <EndContainer>
          <div class="nes-container is-rounded is-dark">
              <Header>{lastDescription.description}</Header>
              <OctoCat>
              <i className="nes-octocat animate"></i>
              </OctoCat>
              <CssCredit>CSS from <a href="https://nostalgic-css.github.io/NES.css/">Ness.css</a> 
              </CssCredit>
          </div>
      </EndContainer>
  )
}

const EndContainer = styled.section `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-style: inset;
  margin: 0 auto;
`
const Header = styled.h1`
  font-size: 18px;
  letter-spacing: 1px;
  text-align: center;
  margin: 20px 10px;
`
const OctoCat = styled.div`
  display: flex;
  justify-content: center;
  width: 90px;
  margin: 0 auto;
  background-color: white;
`
const CssCredit = styled.p`
  margin-top: 50px;
`
export default EndScreen