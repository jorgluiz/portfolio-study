import styled, { css } from "styled-components";

// increment
export const H1 = styled.h1`

background-color: greenyellow;
width: 0;
width: ${({ count }) => `${count}%`};
`;
// ---------------------------------------
export const DivExternaGreen = styled.div`
position: relative; // Adicionado para posicionar o elemento Posterior
display: flex;
align-items: center;
justify-content: center;
width: 200px;
height: 200px;

${({ toggle }) => toggle &&
    css`
        & > div {
            background-color: ${toggle};
        }
`};
`;

export const Posterior = styled.div`
position: absolute; // Adicionado para posicionamento absoluto
height: 0;
width: 0;
border-radius: 50%;
background-color: green;
opacity: 0.6;

animation-name: posterior;
animation-duration: 2s;
animation-iteration-count: infinite;
animation-timing-function: ease-in-out;

@keyframes posterior {
    from { height: 0; width: 0; }
    to { height: 40px; width: 40px; } // Valores aumentados para melhor visualização
}
`;

export const Sobrepor = styled.div`
position: absolute;

height: 25px;
width: 25px;
border-radius: 50%;
background-color: green;
`;
// ---------------------------------------

export const ControlsVideo = styled.div`


`;

export const ContainerVideo = styled.div`
position: relative;

`;

export const Progresso = styled.div`

width: 450px;

& div {
    width: 100%;
    background-color: black;
    opacity: 0.4;
    color: white;
    width: ${({ percentage }) => (`${percentage}%`)};
}
`;

export const Play = styled.div`
display: flex;
justify-content: center;

background-color: #f0f8ff;
color: black;
border: 1px solid black;
cursor: pointer;
width: 60px;
margin: 10px;
`;

export const Pause = styled.div``;

export const DivFlexBox = styled.div`
display: flex;
justify-content: space-around;
width: 500px;
`;

export const Iframe = styled.div``;

export const DivVolume = styled.div`

`;

export const Ranger = styled.input`

width: 100px;
`;

export const Advance = styled.button`

background-color: #f0f8ff;
color: black;
border: 1px solid black;
cursor: pointer;
width: 60px;
margin: 10px;
`;

export const Rewind = styled.button`

background-color: #f0f8ff;
color: black;
border: 1px solid black;
cursor: pointer;
width: 60px;
margin: 10px;
`;

export const Video = styled.video`

margin-top: -120px; 
position: absolute; 
width: 100%;

&::-webkit-media-controls-fullscreen-button {
    /* display: none; */
}
/* min-width: 100%;
min-height: 100%; */
`;