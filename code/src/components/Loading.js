import React from "react";
import { useSelector } from "react-redux";

import { Container, Content, SecondaryText } from "./Styles";

const Loading = () => {
    return (
        <Container>
            <Content>
                <SecondaryText>Loading...</SecondaryText>
            </Content>
        </Container>
    )
}

export default Loading;