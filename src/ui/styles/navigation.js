import styled from "styled-components";

export const NavbarLinkContainerUl = styled.ul`
width: 100%;
overflow: hidden;
`;
export const SpanHooks = styled.span`
background-color: ${({ titletargethook }) => titletargethook === true ? "#d3d3d3" : ""};
`;