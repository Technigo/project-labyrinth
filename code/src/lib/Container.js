import styled from 'styled-components/macro'

export const Container = styled.div`
  width: 290px;
  min-height: 531px;
  margin: 16px;
  padding: 0;
  ${'' /* background: navy; */}
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 500px) {
    width: 480px;
    padding: 0 16px;
  }
${'' /*
  @media (min-width: 900px) {
    width: 700px;
} */}
`
// app

export const ScreenContainer = styled(Container)`
  ${'' /* background: green; */}
  margin-top: 48%;
  min-height: 300px;
`
// start, loading

export const FormStyle = styled.form`
  display: flex;
  flex-flow: column nowrap;
`
// start