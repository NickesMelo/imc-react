import React from "react";
import { Section as StyledSection } from "./Section.styled";

const Section = () => (
    <StyledSection>
        <p>&emsp;O Índice de Massa Corporal (IMC) é uma medida que avalia a relação entre o peso e a altura de uma pessoa para categorizar seu estado nutricional. Os níveis de IMC são divididos em categorias para ajudar a identificar se uma pessoa está com peso abaixo do ideal, adequado, ou acima do recomendado. As principais categorias são: 

            <li>
                <u><b>Abaixo do Peso:</b> IMC menor que 18,5 </u>
            </li>
            <li>
                <u><b>Peso Normal:</b>  IMC entre 18,5 e 24,9 </u>
            </li>
            <li>
                <u><b>Sobrepeso:</b>  IMC entre 25 e 29,9 </u>
            </li>
            <li>
                <u><b>Obesidade:</b>  IMC de 30 ou mais.</u>
            </li>

        &emsp;Cada categoria tem implicações diferentes para a saúde e pode ajudar a orientar mudanças no estilo de vida ou intervenções médicas.</p>
    </StyledSection>
);

export default Section;