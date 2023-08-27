import styled from "styled-components";

// SL - server list
// SN - server name
// CI - channel info
// CL - channel list
// CD - channel data

export const Grid = styled.div`
 display: grid;
 overflow-y: ${({activeDisplay}) => activeDisplay === true ? "hidden" : ""};

 /* grid-template-columns: auto; */
 grid-template-rows: 37px 135px auto;

 grid-template-areas: 'header' 'headerMain' 'main';

  height: 100vh;
`;

export const ZoomImg = styled.img``;