// MAIN(PAGE) TO GAMEPAGE

import React from "react"
import { labyrinth, continueLabyrinth } from "reducers/labyrinth"
import { useSelector, useDispatch } from "react-redux"
import { Loader } from "components/Loader"
import styled from "styled-components"

export const GamePage = () => {
  const dispatch = useDispatch()

  const response = useSelector((state) => state.labyrinth.response)
  const coordinates = useSelector((state) => state.labyrinth.coordinates)
  const actions = useSelector((state) => state.labyrinth.response.actions)

  // move and actions
  const onButtonClick = (type, direction) => {
    dispatch(continueLabyrinth(type, direction))
  }

  // ReStart the game
  const handleRestartButton = () => {
    dispatch(labyrinth.actions.reStart())
  }

  const Button = styled.button`
    background: white;
    border: 2px solid white;
    width: 110px;
    height: 36px;
    border-radius: 3px;
    font-weight: 700;
    margin: 20px;
    cursor: pointer;
  `
  const MainWrapper = styled.section`
    background-size: cover;
    background-position: center center;
    height: 100vh;
    width: 100wh;
    text-align: center;
    justify-content: center;
    margin: auto 0;
    //  padding-top: 120px;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      padding-top: 40px;
    }
  `

  const TextCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 30px;
    background-color: rgb(187, 187, 187, 0.25);
    width: 60%;

    @media (max-width: 768px) {
      padding: 15px;
      width: 80%;
    }
  `

  const imageLibrary = {
    "0,0":
      "url(https://images.pexels.com/photos/2877375/pexels-photo-2877375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "1,0":
      "url(https://images.pexels.com/photos/3978594/pexels-photo-3978594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
    "1,1":
      "url(https://images.pexels.com/photos/45839/antelope-canyon-arizona-sandstone-rock-45839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
    "0,1":
      "url(https://images.unsplash.com/photo-1567093322102-6bdd32fba67d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)",
    "0,2":
      "url(https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)",
    "0,3":
      "url(https://images.pexels.com/photos/2553427/pexels-photo-2553427.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
    "1,3":
      "url(https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
  }

  return (
    <>
      <Loader />
      <MainWrapper
        style={{
          backgroundImage: imageLibrary[coordinates],
        }}
      >
        <TextCard>
          <h1>{response.description}</h1>
          {response.coordinates !== undefined && (
            <div>
              {actions.map((action) => (
                <div key={action.description}>
                  <p>{action.description}</p>
                  <Button
                    onClick={() => onButtonClick(action.type, action.direction)}
                  >
                    MOVE {action.direction.toUpperCase()}
                  </Button>
                </div>
              ))}
            </div>
          )}

          {response.coordinates === "1,3" && (
            <Button onClick={() => handleRestartButton()}> RESTART </Button>
          )}
        </TextCard>
      </MainWrapper>
    </>
  )
}
