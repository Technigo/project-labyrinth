import styled from 'styled-components/macro';

export const FooterWrapper = styled.footer`
width: 100%;
height: 5.5rem;
background-color: rgba(0,0,0,.6);
position: absolute;
bottom: 0;
left: 0;
right: 0;
z-index: 2;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (min-width: 767px) {
    height: 5.5rem;
}
`
export const FooterText = styled.p`
color: white;
font-size: 0.8rem;
margin: 0 auto;

@media (min-width: 767px) {
    font-size: 1rem;
}
`
export const ProfileContainer = styled.div`
display: flex; 
flex-direction: row;
justify-content: center;
align-items: center;
gap: ${(props) => (props.smallrem ? '1rem' : '3rem;')};`

export const Profile = styled.div`
display: flex; 
flex-direction: column;
justify-content: center;
align-items: center;
gap: 0.3rem;`

export const ProfileButton = styled.button`
background-color: transparent;
border: none;

svg path {
    fill: darkgray; /* Set the default fill color of the SVG path */
  }

&:hover svg path{
    fill: white;
}
`