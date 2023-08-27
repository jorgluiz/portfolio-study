import { styled } from "styled-components";

export const Container = styled.div`
grid-area: left;

display: flex;
flex-direction: column;
align-items: center;
border-right: 1px solid #e0e6ed;

&:active > a {}
`;
