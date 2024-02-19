import styled from "styled-components";

export const Container = styled.div`
grid-area: header;

display: flex;
justify-content: space-evenly;
align-items: center;
background: #0E1835;

/* 
background-color: var(--tertiary);
padding: 11px 0;

max-height: 100vh;
overflow-y: scroll;

::-webkit-scrollbar {
    display: none;
} */
`;

export const DivDropDown = styled.div`

& span {
    color:  #ffffff;
}

& ul {
    position: absolute;
    display: none;
    /* overflow: scroll;
    height: 100%; */
}

& ul li a {
    color: #000000;
}

& span:hover ul {
    display: block;
}
`;