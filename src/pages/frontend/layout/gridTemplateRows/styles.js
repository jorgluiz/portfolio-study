import styled from "styled-components";

export const Grid = styled.div`

max-width: 400px;
margin: 0 auto;
border: 1px solid #ccc;
`;

export const Section = styled.div`
display: grid;
height: 100vh;
grid-template-columns: 100px auto 50px;
grid-template-rows:    50px auto 50px;
`;

export const Item = styled.div`
margin: 5px;
background: tomato;
text-align: center;
font-size: 1.5em;
`;

// export const Header = styled.header`
// grid-area: header;

// background: blue;
// top: 0;
// width: 100%;
// `;

// export const Main = styled.main`
// grid-area: main;

// display: flex;
// flex-direction: column;
// background: green;
// `;

// export const Footer = styled.footer`
// grid-area: footer;

// left: 0;
// bottom: 0;
// width: 100%;
// background: maroon;

// `;

// export const Button = styled.button`

// `;