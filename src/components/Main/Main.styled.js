import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        margin-bottom: 20px;
    }
`;

export const InputGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;

    input {
        width: 40%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 19px;
    }

    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    }
`;  

export const LabelGroup = styled.label`
    /* display: flex; */
    width: 480px;
    gap: 45px;
    /* margin-bottom: 5px; */
    /* border: 1px solid; */

    display: flex;
    justify-content: left;

    label {
        width: 40%;
        padding: 5px;
        font-size: 11px;
        text-align: left;
        text-transform: uppercase;
    }
`;

export const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 19px;

    &:hover {
        background-color: #0056b3;
    }
`;

