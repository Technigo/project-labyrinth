import styled from 'styled-components'

export const Button = styled.button`
background: #F2C409;
  margin: 0 auto;
  margin-top: 10px;
  cursor: pointer;
  display: block;
  position: relative;
  text-align: center;
  font-size: 12px;
  padding: 8px;
  text-decoration: none; 
  color: white;
  box-shadow: inset -3px -3px 0 0 #E59400;

  &:hover,
  &:focus {
    background: orange;
    box-shadow: inset (-3px*1.5) (-3px*1.5) 0 0  #E59400;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: content-box;
  }

  &:before {
    top: -3px;
    left: 0;
    border-top: 3px #fff solid;
    border-bottom: 3px #fff solid;
  }

  &:after {
    left: -3px;
    top: 0;
    border-left: 3px #fff solid;
    border-right: 3px #fff solid;
  }
`