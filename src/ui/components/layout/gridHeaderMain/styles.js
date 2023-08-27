import styled from "styled-components";

export const Container = styled.div`
grid-area: headerMain;

display: flex;
align-items: center;
background-color: #c0c0c0;
/* 
background-color: var(--tertiary);
padding: 11px 0;

max-height: 100vh;
overflow-y: scroll;

::-webkit-scrollbar {
    display: none;
} */
& ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
`;

export const DropDown = styled.div`
cursor: pointer;
border: 2px solid black;
background-color: red;

&:hover ul {
    opacity: 1;
    visibility: visible;
}
`;

export const DropDownContentUl = styled.ul`

position: absolute;
display: flex;
align-items: center;
justify-content: space-around;
visibility: hidden;

background-color: #c0c0c0;
left: 0;
top: 170px;
height: 200px;
z-index: 1;
opacity: 0;
transition-duration: 2s;
`;