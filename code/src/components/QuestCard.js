import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  max-height: 500px;
  flex-direction: column;
  color: #3f3e3e;
  width: 300px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  padding: 20px;
  padding-bottom: 40px;

  @media (min-width: 768px) {
    width: 600px;
    padding: 40px;
    max-height: 600px;
    padding-bottom: 50px;
    margin-top: 100px;
  }
`;

export const QuestDescription = styled.p`
  font-weight: bolder;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
    margin: 0;
  }
`;

export const NavInfoCard = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  font-size: 16px;
  line-height: 16px;
  border-bottom: 1px solid #3f3e3e;
  @media (min-width: 768px) {
    padding: 10px;
    margin-top: 20px;
    font-size: 20px;
    line-height: 28px;
  }
`;
