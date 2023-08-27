import styled from "styled-components";

export const Grid = styled.div`
 display: grid;

 /* grid-template-columns: auto; */
 grid-template-columns: 200px auto 200px;

 grid-template-areas: 
   'sideLeft center sideRight';

  height: 100vh;
`;