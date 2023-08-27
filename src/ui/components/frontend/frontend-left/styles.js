import styled from "styled-components"

export const Container = styled.div`
grid-area: sideLeft;

display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
border-right: 1px solid #e0e6ed;

& > input ~ ul > li > a {
    color: ${({chooseColor}) => (`${chooseColor}`)};
}
/* https://www.w3schools.com/css/css_combinators.asp */
`;


export const ContainerIcon = styled.div`

`;
export const ArrowDiv = styled.div`

`;
export const ArrowIcon = styled.div`

`;

export const Input01 = styled.input`

`;
/* ${({num, setNum, index}) => (index < 7 ? setNum(num + index) : '')} */
/* color: ${({ isSelected }) => (isSelected ? "red" : "")}; */