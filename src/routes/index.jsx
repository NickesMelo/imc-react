import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../assets/styles/reset.css";
import HomePage from "../pages/index";
import Button from "../components/Button/Button.styled";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

function NotFound() {
    return <h1>Nâo tem página pronta!</h1>
};