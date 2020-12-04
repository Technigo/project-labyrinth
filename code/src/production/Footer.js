import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.div`
  margin: 0;
  font-size: 14px;
  display: flex;
  align-items: flex-end;
  background: #fff;

  &:a {
    text-decoration: none;
    cursor: pointer;
  }

  &:hover {
    color: #3d99f5;
  }
`
const TextDiv = styled.


export const Footer = () => {
  return (
    <FooterStyle>
      <div>
        Made by Moa & Peggy @<a href="https://blipsandclicks.com">blipsandclicks</a> during Technigo Bootcamp 2020 for educational purposes. Favicon made by <a href="https://www.flaticon.com/free-icon/maze_2532545?term=maze&page=2&position=48&related_item_id=2532545" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      </div>
    </FooterStyle>
  )
}
