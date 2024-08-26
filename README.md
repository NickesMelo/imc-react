# Calculadora de IMC

Este é um projeto simples de uma calculadora de Índice de Massa Corporal (IMC) construída com React. O projeto permite que o usuário insira seu peso e altura para calcular o IMC e receber uma interpretação do resultado.

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/NickesMelo/imc-react
```
2. Navegue até o diretório do projeto:
```bash
cd your-repo-name
```
3. Instale as dependências:
```bash
npm install
```
## Estrutura do Projeto

O projeto é organizado da seguinte forma:

- **`src/`**: Contém o código-fonte do projeto.
  - **`components/`**: Diretório para componentes estilizados e de interface.
    - **`Container/`**: Contém o componente `Container` com o estilo do contêiner principal.
    - **`Header/`**: Contém o componente `Header` para o cabeçalho.
    - **`Main/`**: Contém o componente `Main` onde a calculadora de IMC está implementada.
    - **`Row/`**: Contém o componente `Row` utilizado para criar linhas estilizadas.
    - **`Section/`**: Contém o componente `Section` para seções adicionais da página.
  - **`pages/`**: Contém as páginas do projeto.
    - **`index.jsx`**: A página principal do projeto que usa os componentes.
  - **`App.jsx`**: Configuração das rotas do projeto e estrutura básica.

## Executando o Projeto

Para iniciar o servidor de desenvolvimento com Vite, execute:
```bash
npm run dev
```
## Estrutura dos Componentes

- **`Main.jsx`**: Componente principal que exibe o formulário para calcular o IMC e mostrar o resultado. Inclui:
  - `useState` para gerenciar o peso, altura, IMC e o nível do IMC.
  - Função `calcularIMC` para realizar o cálculo e determinar o nível do IMC com base nos valores inseridos.

- **`Main.styled.js`**: Arquivo contendo os estilos para o componente `Main`.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface do usuário.
- **Styled-Components**: Biblioteca para estilização dos componentes.
- **Vite**: Ferramenta de build e servidor de desenvolvimento para projetos frontend.

## Contribuição

Sinta-se à vontade para abrir uma `issue` ou enviar um `pull request` para contribuir com o projeto. Para maiores detalhes sobre contribuição, consulte a [documentação do GitHub](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests).