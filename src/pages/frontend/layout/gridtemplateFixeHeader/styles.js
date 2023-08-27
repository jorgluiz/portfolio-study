import { styled } from "styled-components";

export const Container = styled.div`
display: grid;
grid-template-rows: 100px auto 100px;
grid-template-areas: 
           "header" "main" "footer";
height: 100vh;
`;
export const Header = styled.div`
grid-area: header;

position: fixed;
background-color: cyan;
width: 100%;
margin: 5px;
`;
export const Main = styled.div`
grid-area: main;

display: flex;
justify-content: center;
background-color: tomato;
margin: 5px;
`;
export const Footer = styled.div`
grid-area: footer;

margin: 5px;
background-color: tomato;
`;
export const Button = styled.button``;