import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarLinkContainerUl = styled.ul`
width: 100%;
overflow: hidden;

& .grid {
border: 0;
color: red;
cursor: pointer;

&:hover strong {
transition-duration: 0.5s;
background-color: #b1b1b1;
color: #000;
 }
}
& .ul-secundary {
    opacity: 0;
    height: 0;
}
& .li01 {
    position: relative;
    /* opacity: 0; */
    transform: scale(0);
}
& .li02 {
    /* opacity: 1; */
    transform: scaleX(0);
}
& .li03 {
    /* opacity: 1; */
    transform: scaleY(0);
}
& .li04 {
    /* opacity: 1; */
    transform: translate(200px, 0);
}
& .li05 {
    opacity: 0;
}
& .grid:hover .ul-secundary {
    opacity: 1;
    height: 100%;
    /* transition-duration: 0.5s; */
}
& .grid:hover .ul-secundary .li01 {
    opacity: 1;
    transition-duration: 2s;
    transform: scale(1);
}
& .grid:hover .ul-secundary .li02 {
    opacity: 1;
    /* height: 100%; */
    transition-duration: 4s;
    transform: scaleX(1);
}
& .grid:hover .ul-secundary .li03 {
    opacity: 1;
    /* height: 100%; */
    transition-duration: 6s;
    transform: scaleY(1);
}
& .grid:hover .ul-secundary .li04 {
    opacity: 1;
    /* height: 100%; */
    transition-duration: 8s;
    transform: translate(0, 0);
}
& .grid:hover .ul-secundary .li05 {
    opacity: 1;
    /* height: 100%; */
    transition-duration: 2.5s;
    transform: rotate(360deg);
}
& .templates ul {
    display: none;
}
& .templates:hover ul {
    display: block;
}
& .templates:hover div .icon {
    transform: rotate(-270deg);
}
`;
export const Li = styled.li`
`;
export const LinkNavBar = styled(Link)`
`;
export const SpanHooks = styled.span`

background-color: ${({ titletargethook }) => titletargethook === true ? "#d3d3d3" : ""};
`;
export const SpanReact = styled.span`
`;
export const SpanStates = styled.span`
`;