import React from "react";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import { Row } from "../components/Row/Row.styled";
import Main from "../components/Main/Main";
export default function HomePage() {
    return (
        <Container>
            <Header></Header>
            <Row></Row> 
            <Section></Section>
            <Row></Row>
            <Main></Main>
        </Container>
    )
};