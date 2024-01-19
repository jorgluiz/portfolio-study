import { styled } from "styled-components";

export const Container = styled.div`
grid-area: left;

border-right: 1px solid #e0e6ed;
`;
export const Li = styled.li`

&.array-methods + img  {
    display: none;
}
&.array-methods:hover + img  {
    position: absolute;
    display: block;
}
&.array-methods tooltipimg {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  bottom: 96px;
  /* left: 50%; */
  /* margin-left: 10px; */
  left: 0;
}
&.array-methods:hover tooltipimg {
  visibility: visible;
  cursor: pointer;
} 

&.typeof img {
    display: none;
}
&.typeof:hover img {
    display: block;
}
& > h1 {
    cursor: pointer;
}
& > .array-e-objeto {
    display: none;
}
& > h1:hover + .array-e-objeto {
    display: block;
    transition: all 0.5s ease;
}

&.liRelative {
    position: relative;
}

& > .tooltipObjetoTop {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
  
  /* Position the tooltip */
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    margin-left: -60px;
}
&.liRelative:hover .tooltipObjetoTop {
  visibility: visible;
}
`;
export const TextGradientTagA = styled.a``;