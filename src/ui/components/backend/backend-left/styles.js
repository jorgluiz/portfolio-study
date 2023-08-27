import styled from "styled-components"
import { Link } from "react-router-dom";

export const Container = styled.div`
grid-area: sideLeft;

display: flex;
flex-direction: column;
border-right: 1px solid #e0e6ed;
`;

export const NavbarLinkContainerUl = styled.ul``;
export const LinkNavBar = styled(Link)``;
export const Input = styled.input`
text-align: center;
`;