import styled from "styled-components";

export const Section = styled.div`
display: grid;

grid-template:            /* rows */
	"logo    nav     advert" 100px
	"sidenav content advert" 1fr
	"footer  footer  footer" 100px / 100px 1fr 100px;
                                   /*columns columns columns */
height: 100vh;

& div {
margin: 5px;
background: tomato;
text-align: center;
font-size: 1.5em;
}
`;

export const ItemLogo = styled.div`
grid-area: logo;
`;
export const ItemNav = styled.div`
grid-area: nav;
`;
export const ItemContent = styled.div`
grid-area: content;
`;
export const ItemSideNav = styled.div`
grid-area: sidenav;
`;
export const ItemAdvert = styled.div`
grid-area: advert;
`;
export const ItemFooter = styled.div`
grid-area: footer;
`;