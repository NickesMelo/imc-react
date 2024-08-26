import React from "react";
import { Container as StyledContainer } from "./Container.styled";

const Container = ({children}) => (
    <StyledContainer>
        {children}
    </StyledContainer>
);

export default Container;