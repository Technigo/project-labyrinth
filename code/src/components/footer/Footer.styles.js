import styled from 'styled-components';

export const FooterStyles = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 90%;
    margin: 1% auto;
    background-color: rgb(0, 0, 0, .5);
    color: white;
    border-radius: 40px;

    @media (min-width: 667px) {
        width: 70%;
    }

  a {
    color: #4e54c8;
  }

  a:visited {
    color: #4e54c8
  }

  img, .contact-logo {
    width: 30px;
    height: 30px;
    object-fit: cover;
    opacity: .75;
    color: #4e54c8;
  }

  img:hover, .contact-logo:hover {
    transform: scale(1.2);
    opacity: 1;
  }
  `
export const ContactMeStyles = styled.div`
    display: flex;
    gap: 7px;
    padding: 5px;
  `