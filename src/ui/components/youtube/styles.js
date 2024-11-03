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
`;

export const Video = styled.video`
    width: 100%;
    height: 100%;

    & + .state {
        opacity: ${({ opacity }) => opacity === true ? 1 : 0};
    }
`;

// ---------------------------------

export const ControlsContainer = styled.div`

    width: 95vw;
    position: absolute;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    transition-duration: 0.3s;
    user-select: none; // Evita seleção do conteúdo
    touch-action: manipulation; // Melhora interação em dispositivos móveis
`;
// ---------------------------------

export const ProgressControls = styled.div`

    width: 100%;
    height: 6px;
    display: flex;
    align-items: center;

    &:hover > .progress-bar {
        height: 5px;
    }

    &:hover > .progress-bar .progress .playhead {
    height: 15px;
    width: 15px;
    }
`;

export const ProgressBar = styled.div`
    position: relative;
    width: 100%;
    height: 3.5px;
    background: #424242;
    display: flex;
    align-items: center;
`;

export const Progress = styled.div`

    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

export const WatchedProgress = styled.div`

    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
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
  height: 12px;
  width: 12px;
  border-radius: 50%;
  transform: translateX(-50%);
  transition: width 0.1s, height 0.1s;
  left: ${({ watchedBar }) => `${watchedBar.percentage}%`};
  
  &:hover {
    width: 16px;
    height: 16px;
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
/* 
    & .btn {
      display: flex;
    background: none;
    width: 45px;
    height: 100%;
    margin: 0 15px 0 15px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
    } */

    /* & .btn > .play {
        display: ${({ togglePlay }) => togglePlay.playVideo ? "none" : "block"};
        z-index: 1000;
    }
    & .btn > .pause {
        display: ${({ togglePlay }) => togglePlay.playVideo ? "block" : "none"};
        z-index: 1000;
    } */

     & .no-select {
      user-select: none;
     }
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
border: 5px solid red;
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

height: 20px;
width: 20px;
/* position: absolute; */
border-radius: 50px;
/* border: 3px solid #ffffff; */
border-left: 3px solid #ffffff;
border-right: 3px solid #ffffff;
border-bottom: 3px solid #ffffff;
border-top: 2px solid transparent;
transform: rotate(-50deg);

opacity: ${({ endVideo }) => endVideo === true ? 1 : 0};
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

@media (max-width: 768px) {
  display: none;
}
`;