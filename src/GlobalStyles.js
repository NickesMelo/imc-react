import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {
    font-family: "Open Sans", sans-serif;
    margin: 0;
    padding: 0;
    background-color: green;
}

h1, h2, h3 {
    color: #333;
}
h1{
    font-size: 36px;
    font-weight: 700;
} 

h2{
    font-size: 26px;
    font-weight: 600;
    padding: 5px;
}

b {
    font-weight: 900;
}

a {
    text-decoration: none;
    color: #007bff;
}

p {
    margin-left: 50px ;
}

input {
    width: 370px;
    height: 28px;
    padding: 5px;
}

a:hover {
    text-decoration: underline;
}
`;

export default GlobalStyles;