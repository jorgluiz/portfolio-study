import styled from "styled-components";

export const ToolTip = styled.div`

 position: relative;
 display: inline-block;
 height: 24px;

& > span {
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

&:hover > span {
  visibility: visible;
}

`;