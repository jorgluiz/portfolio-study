import styled from "styled-components";

export const VideoContainer = styled.div`

    position: relative;
    width: 100%;
    height: 80vh;
    background: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    z-index: 1000;
    

    /* Remover realce azul no toque (Mobile e WebKit) */
    -webkit-tap-highlight-color: transparent;
    -webkit-focus-ring-color: transparent;
  
    & > .activeProgress {
      opacity: 1;
        /* opacity: ${({ opacity }) => opacity === true ? 1 : 0}; */
    }

    & .disable {
      opacity: 0;
    }

    &.activeProgress::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3); /* Fundo escuro com opacidade */
    transition-duration: 0.5s;
  }

    /* @media (min-width: 768px) {
  .controlsContainer, .progress-bar {
    display: none;
  } 
} */

 & .overlay-click {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: transparent; /* Invisível, mas capturando cliques */
  z-index: 5; /* Acima do vídeo, mas abaixo dos controles */
}
`;

export const Video = styled.video`
    width: 100%;
    height: 100%;

`;

// ---------------------------------

export const ControlsContainer = styled.div`

    width: 95vw;
    position: absolute;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    transition-duration: 0.3s;
    padding-bottom: 30px;

 & .mobile-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

& .desktop-controls {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
`;
// ---------------------------------

export const ProgressControls = styled.div`

    width: 100%;
    display: flex;
    align-items: center;

    &:hover > .progress-bar {
        height: 5px;
    }

    &:hover > .progress-bar .progress .playhead {
    height: 22px;
    width: 22px;
    }
`;

export const ProgressBarContainer = styled.div`

position: absolute;
bottom: 0;
padding: 10px;
border: solid 3px green;
width: 100%;
height: 30px;
transition-duration: 0.5s;
`;

export const ProgressBar = styled.div`
    position: relative;
    margin: 0 auto;
    width: 95%;
    height: 5px;
    background: #424242;
    display: flex;
    align-items: center;
    touch-action: none; /* Impede gestos do navegador que possam interferir */
    user-select: none; /* Evita seleção acidental */
`;

export const Progress = styled.div`

    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const WatchedProgress = styled.div`

    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const WatchedBar = styled.div`

    background: #e31221;
    width: ${({ watchedBar }) => (`${watchedBar.percentage}%`)};
    height: 100%;
    /* transition: height 0.2s; */
`;

export const Playhead = styled.div`

  position: absolute;
  background: #e31221;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  transform: translateX(-50%);
  transition: width 0.1s, height 0.1s;
  left: ${({ watchedBar }) => `${watchedBar.percentage}%`};
  touch-action: manipulation; /* Melhora a resposta ao toque */
  
  &:active {
  cursor: grabbing;
}
`;

export const Canvas = styled.canvas`

height: 100%;
width: ${({ loadingBuffe }) => loadingBuffe};
/* background: rgba(192,192,192, 0.4) */
`;

export const Controls = styled.div`

    position: relative;
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition-duration: 0.5s;

    & .play-pause-btn{
      /* display: flex; */
      /* align-items: center; */
    }

    & .full-screen-btn {
      display: flex;
      align-items: center;
    }

    & .btn {
      display: flex;
      justify-content: center;
      height: 45px;
      width: 48px;
    }

     /* & .no-select {
      user-select: none;
     } */
`;

export const SettingsMenu = styled.div`

position: absolute;
height: auto;
right: 0;
bottom: 50px;
border-radius: 10px;
background: rgb(28, 28, 28, 0.9);
display: ${({ settings }) => settings === true ? "block" : "none"};

& .playback-speed{
}

& span {
    color: #ffffff;
}

& [target="settings"] {
    display: flex;
    align-items: center;
    width:  250px;
    height: 40px;
    margin: 5px 0 5px 0;
}

& [target="settings"]:hover {
    background: rgb(255, 255, 255, 0.1);
}
`;

export const LeftSideControls = styled.div`
    display: flex;
    /* justify-content: flex-start; */
    align-items: center;
    height: 100%;
    flex-grow: 2;

    & .full-volume {
        display: ${({ toggleVolume }) => (toggleVolume ? "block" : "none")};
    }
    & .full-volume + .muted {
        display: ${({ toggleVolume }) => (toggleVolume ? "none" : "block")};
    }
`;

// @@@ VolumeControl @@@
export const VolumeControl = styled.div`
display: flex;
align-items: center;
    /* height: 100%; */
`;

// @@@ VolumePanel @@@
export const VolumePanel = styled.div`
    position: relative;
    width: ${({ width }) => `${width}px`};
    transition: width .2s;
    overflow: hidden;

& input[type="range"] {
    margin: 0;
    padding: 0;
    width: 51px;
    height: 1.5em;
    background: transparent;
    outline: none;
}

& input[type="range"],
& input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
}

& input[type="range"]::-webkit-slider-thumb {
    box-sizing: border-box;
    border: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #fff;
}

& input[type="range"]::-moz-range-thumb {
    box-sizing: border-box;
    border: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #fff;
}

& .input-div {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width: 52px;
    height: 3px;
}

& .volume-input-div {
    position: relative;
    width: 100%;
    height: 100%;
    background: #424242;
}

& input{
    position: absolute;
    top: -8.5px;
    cursor: pointer;
}

& .volume-progress{
    background: #fff;
    width: 52px;
    height: 100%;
}
`;

export const RightSideControls = styled.div`

    display: flex;
    /* justify-content: flex-end; */
    align-items: center;
    height: 100%;

    & .minimize {
        display: none;
    }

    & .settings {
      display: flex;
      align-items: center;
      /* padding: 0 30px; 
      margin: 0 auto; */
      /* padding: 0 5px 0 5px; */
    }

    & .settings > img {
        /* transform: rotate(10deg); */
        transition: all 100ms;
    }
`;

export const TimeDisplay = styled.div`

    color: #ffffff;
    font-size: 13px;
    padding: 0 5px;
    height: 100%;
    display: flex;
    align-items: center;
    pointer-events: none;
    user-select: none;

    & .bar-separator{
        margin: 0 5px 0 5px;
    }
`;

export const Container = styled.div`
display: flex;
justify-content: space-between;
/* border: 5px solid red; */
`;

export const Primary = styled.div`

height: 100%;
width: 900px;
margin-left: 100px;
/* border: 1px solid black; */
`;

export const Secondary = styled.div`

display: flex;
flex-direction: column;
/* justify-content: space-between; */
/* width: 100%; */
`;

export const SecondaryContainerVideo = styled.div`

display: flex;
height:  auto;
margin: 10px 0;
border: 1px solid black;
cursor: pointer;

& .video-container {
    width: 200px;
    height: 75px;
    overflow: hidden;
    border-radius: 5px;
  }

  & .video-play-list {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ou object-fit: fill */
  }

& .title {
    width: 100%;
    height: 20px;
}

& p {

    font-size: 12px;
    font-weight: bold;
    /* colocar tres pontinhos no texto */
    text-overflow: ellipsis;
    
    overflow: hidden;
}
`;

export const DivProgress = styled.div`


margin-top: 20px;
height: 50px;
/* width: 0; */
width: ${({ videoLoaded }) => (`${videoLoaded}%`)};
background: #111111;
`;

export const Circle = styled.div`

height: 25px;
width: 25px;
/* position: absolute; */
border-radius: 50px;
/* border: 3px solid #ffffff; */
border-left: 3px solid #ffffff;
border-right: 3px solid #ffffff;
border-bottom: 3px solid #ffffff;
border-top: 2px solid transparent;
transform: rotate(-50deg);

`;

export const Triangulo = styled.div`

width: 0;
height: 0;
border-left: 5px solid transparent;
border-right: 5px solid transparent;
border-bottom: 10px solid #ffffff;
transform: rotate(75deg);
position: absolute;
top: -5px;
left: 8px;
`;

export const MediaControlWrapper = styled.div`

  position: absolute;
  display: flex;
  align-items: center; /* Centraliza os itens verticalmente */
  justify-content: center; /* Alinha os itens no centro */
  gap: 60px; /* Espaçamento entre os elementos */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2000;
  transition-duration: 0.5s;
`;

export const ImgPlay = styled.img`
  width: 25px;
  transition-duration: 0.5s;
  z-index: 2000; /* Garante que está acima de VideoContainer */
`;

export const ImgPause = styled.img`
  width: 25px;
  transition-duration: 0.5s;
  z-index: 2000; /* Garante que está acima de VideoContainer */
`;

export const ImgCentral = styled.div`

display: flex;
align-content: center;
justify-content: center;
width: 60px;
height: 60px;
border-radius: 50px;
background-color: rgba(41, 36, 36, 0.5); /* Preto com 50% de transparência */
`;

export const Prevideo = styled.div`

display: flex;
align-content: center;
justify-content: center;
width: 60px;
height: 60px;
border-radius: 50px;
background-color: rgba(41, 36, 36, 0.5); /* Preto com 50% de transparência */
`;

export const NextVideo = styled.div`
display: flex;
align-content: center;
justify-content: center;
width: 60px;
height: 60px;
border-radius: 50px;
background-color: rgba(41, 36, 36, 0.5); /* Preto com 50% de transparência */
`;

export const Spinner = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 10;

& .spinner {
width: 60px;
height: 60px;
border: 5px solid rgba(255, 255, 255, 0.3);
border-top: 5px solid #fff;
border-radius: 50%;
animation: spin 1s linear infinite;
}

@keyframes spin {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
}
`;

export const MessageBox = styled.div`
display: flex;
justify-content: center;
width: 100%;
border: solid 3px #111;

@media (max-width: 1016px) {
  display: none;
}
`;