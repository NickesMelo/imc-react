import React, { useState } from "react";
import { Main as StyledMain, InputGroup, LabelGroup, Button} from "./Main.styled";

const Main = () => {

    const [peso, setPeso] = useState(''); 
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [nivelIMC, setNivelIMC] = useState('');
    
    const calcularIMC = () => {
        if(peso && altura) {
            const alturaEmMetros = altura / 100;
            const resultadoIMC = peso / (alturaEmMetros * alturaEmMetros);
            setImc(resultadoIMC.toFixed(2));
            
            let nivel = '';
            if(resultadoIMC < 18.5){
              nivel = 'Abaixo do peso.';
            } else if (resultadoIMC >= 18.5 && resultadoIMC < 24.9) {
              nivel = 'Peso normal.';
            } else if (resultadoIMC >= 25 && resultadoIMC < 29.9) {
              nivel = 'Sobrepeso.';
            } else if (resultadoIMC >= 30 && resultadoIMC < 34.9) {
              nivel = 'Obesidade grau I.';
            } else if(resultadoIMC >= 35 && resultadoIMC < 39.9) {
              nivel = 'Obsedidade grau II';
            } else if (resultadoIMC >= 40) {
              nivel = 'Obesidade grau III';
            } else {
              nivel = 'Procure um médico urgênte';
            }
            setNivelIMC(nivel);
        }
    }

    return (
        <StyledMain>
            <h2>Calcule seu IMC</h2>
            <LabelGroup>
                <label htmlFor="peso">Peso em kg</label>
                <label htmlFor="altura">Altura em cm</label>
            </LabelGroup>
            <InputGroup>
                <input type="number" name="peso" id="peso-imc" placeholder="EX.: 65" value={peso} onChange={(e) => setPeso(e.target.value)}/>
                <input type="number" name="altura" id="altura-imc" placeholder="EX.: 175" value={altura} onChange={(e) => setAltura(e.target.value)}/>
            </InputGroup>
            <Button onClick={calcularIMC}>Calcule seu IMC</Button>
            {imc && <p>Seu IMC é: {imc}. {nivelIMC} </p>}
            <p></p>
        </StyledMain>
    );
}

export default Main;