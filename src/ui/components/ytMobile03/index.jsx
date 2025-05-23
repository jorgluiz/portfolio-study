import React, { useState, useEffect, useRef } from "react";

// styles
import {
  VideoContainer,
  Video,
  ControlsContainer,
  ProgressControls,
  ProgressBar,
  Progress,
  WatchedProgress,
  WatchedBar,
  Playhead,
  Controls,
  SettingsMenu,
  LeftSideControls,
  VolumeControl,
  RightSideControls,
  TimeDisplay,
  VolumePanel,
  Container,
  Primary,
  Secondary,
  SecondaryContainerVideo,
  Circle,
  Triangulo,
  Spinner,
  MessageBox,
  ProgressBarContainer,
  ImgPause,
  ImgPlay,
  MediaControlWrapper,
  Prevideo,
  NextVideo,
  ImgCentral
} from "./styles";

// img 
import svgPlay from "../../../assets/svg/play.svg"
import svgPause from "../../../assets/svg/pause.svg"
import svgNext from "../../../assets/svg/next.svg"
import svgVolume from "../../../assets/svg/volume.svg"
import svgHalfVolume from "../../../assets/svg/half-volume.svg"
import svgMute from "../../../assets/svg/mute.svg"
import svgSettings from "../../../assets/svg/settings.svg"
import svgMaximize from "../../../assets/svg/maximize-screen.svg"
import svgMinimize from "../../../assets/svg/minimize-screen.svg"

import { playlistMock, rocketSeatMock } from "../../../data/mock"

// ##################### feature (Time Update) #####################
// ajustando o controle do progresso do vídeo manualmente

const useTimeUpdate = (togglePlay, setTogglePlay, videoRef, progressBarRef, stateActive, setStateActive, timeoutIdRef) => {
  console.log("aqui passou funlão useTimeUpdate")
  const [watchedBar, setWatchedBar] = useState({ percentage: 0 });
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);

  // Estados de tempo atual do vídeo
  const [currentHours, setCurrentHours] = useState(0);
  const [currentMinutes, setCurrentMinutes] = useState(0);
  const [currentSeconds, setCurrentSeconds] = useState(0);

  // Estados de duração do vídeo
  const [durationHours, setDurationHours] = useState(0);
  const [durationMinutes, setDurationMinutes] = useState(0);
  const [durationSeconds, setDurationSeconds] = useState(0);

  // Estado para controlar se o usuário está arrastando a barra de progresso
  const [isDragging, setIsDragging] = useState(false);


  // useEffect(() => {
  //   const handleLoadedMetadata = () => {
  //     const duration = videoRef.current.duration;

  //     // Configura a duração do vídeo em horas, minutos e segundos
  //     setDurationHours(Math.floor(duration / 3600));
  //     setDurationMinutes(Math.floor((duration / 60) % 60));
  //     setDurationSeconds(Math.floor(duration % 60));

  //   };

  //   const handleVideoEnd = () => {
  //     console.log("Vídeo chegou ao fim naturalmente.");
  //     setWatchedBar({ percentage: 100 });
  //     setVideoCurrentTime(videoRef.current.duration);
  //   };

  //   if (videoRef.current) {
  //     videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
  //     videoRef.current.addEventListener('ended', handleVideoEnd);
  //   }

  //   return () => {
  //     if (videoRef.current) {
  //       videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
  //       videoRef.current.removeEventListener('ended', handleVideoEnd);
  //     }
  //   };
  // }, [videoRef, setTogglePlay]);

  const handlePercentualUpdate = () => {
    if (!videoRef.current) return;

    const currentTime = videoRef.current.currentTime;
    const duration = videoRef.current.duration;

    if (currentTime >= duration - 0.5) {
      setWatchedBar({ percentage: 100 });
      setVideoCurrentTime(duration); // Mantém o tempo exato no final
      return;
    }

    setCurrentHours(Math.floor(currentTime / 3600));
    setCurrentMinutes(Math.floor((currentTime / 60) % 60));
    setCurrentSeconds(Math.floor(currentTime % 60));

    setVideoCurrentTime(currentTime);
    setWatchedBar({ percentage: (100 * currentTime) / duration });

  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.removeEventListener("timeupdate", handlePercentualUpdate);
      videoRef.current.addEventListener("timeupdate", handlePercentualUpdate);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('timeupdate', handlePercentualUpdate);
      }
    };
  }, [videoRef]);

  const startDragging = (event) => {
    // setIsDragging(true);
    handleDrag(event);

    // Remove eventos ao soltar o toque
    if (progressBarRef.current) {
      progressBarRef.current.removeEventListener("touchmove", handleDrag);
      progressBarRef.current.removeEventListener("touchend", stopDragging);
    }
  };

  const stopDragging = (event) => {
    console.log("aqui passou funlão stopDragging")
    // setIsDragging(false)
    // setIsDragging((prev) => {
    //   console.log(prev, "antes de atualizar");
    //   return false;
    // });

    // Verifica se o vídeo está em play para programar a troca de estado
    if (videoRef.current.playbackRate !== 0) {
      // Configura o timeout, caso não tenha sido cancelado anteriormente
      timeoutIdRef.current = setTimeout(() => {
        setStateActive((prevStateActive) => !prevStateActive);
      }, 2000);
    }

    // Remove eventos ao soltar o toque
    if (progressBarRef.current) {
      progressBarRef.current.removeEventListener("touchmove", handleDrag);
      progressBarRef.current.removeEventListener("touchend", stopDragging);
    }
  };

  const handleDrag = (event) => {
    console.log("aqui passou funlão handleDrag")
    if (!videoRef.current) return;

    // Cancela qualquer timeout ativo antes de começar a arrastar
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current); // Cancela o timeout
    }

    const touchX = event.touches ? event.touches[0].clientX : event.clientX;
    const bar = document.querySelector(".progress-bar");
    const rect = bar.getBoundingClientRect();
    const pos = Math.min(Math.max((touchX - rect.left) / rect.width, 0), 1);
    const newTime = pos * videoRef.current.duration;

    if (newTime >= videoRef.current.duration - 0.5) {
      console.log("Usuário arrastou até o fim");
      videoRef.current.currentTime = videoRef.current.duration - 0.1; // Ajuste para evitar reinícioal
      setWatchedBar({ percentage: 100 });
      return;
    }
    videoRef.current.currentTime = newTime;
    setWatchedBar({ percentage: pos * 100 });

    if (togglePlay.playVideo) {
      //setStateActive(true) // quando o video estiver em play e o usuario está manipulando a barra de progress o componente precisa sumir
      return videoRef.current.playbackRate = 1;
    }


    return videoRef.current.playbackRate = 0; // Congela o progresso visual
  };

  return {
    watchedBar,
    setWatchedBar,
    currentHours,
    currentMinutes,
    currentSeconds,
    durationHours,
    durationMinutes,
    durationSeconds,
    videoCurrentTime,
    startDragging,
    stopDragging,
    handleDrag
  };
};


// ##################### feature (player paused) #####################
const usePlayPaused = (videoRef, timeoutIdRef) => {
  console.log('video passou aqui usePlayPaused')
  const [togglePlay, setTogglePlay] = useState({ playVideo: true }) // state
  const [opacity, setOpacity] = useState(true)
  const [stateActive, setStateActive] = useState(false)
  const [endVideoPlay, setEndVideoPlay] = useState(false)
  // console.log(stateActive, " stateActive stateActive stateActive stateActive")
  console.log(togglePlay.playVideo, "fora de useEffect togglePlay.playVideo")

  useEffect(() => {
    // const video = document.querySelector(".video")
    if (videoRef.current) {
      // videoRef.current.load(); // Carrega o novo vídeo
      // videoRef.current.play();
      // setStateActive(false) // precisa ser false, pq quando usuario entrar para ver video o ActiveButtonPlay precifa ficar invisível.
      togglePlay.playVideo ? videoRef.current.play() : videoRef.current.pause()
    }
    // console.log(togglePlay.playVideo, "dentro de useEffect togglePlay.playVideo")

    if (togglePlay.playVideo) {
      // setStateActive(true)
      // Configura o timeout
      // timeoutIdRef.current = setTimeout(() => {
      //   setStateActive((prevStateActive) => !prevStateActive);
      // }, 2000);

    } else {
      // setOpacity(false)
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current); // Cancela o timeout
      }
      // setStateActive(false)
    }

  }, [togglePlay.playVideo])

  const videoPlay = () => {
    if (videoRef.current.playbackRate === 0) {
      videoRef.current.playbackRate = 1
    }

    // setEndVideoPlay(true)@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    // função para alternar em play e pause useEffect tem como dependência togglePlay.playVideo
    setTogglePlay({ ...togglePlay, playVideo: !togglePlay.playVideo })

    timeoutIdRef.current = setTimeout(() => {
      setStateActive(false)
    }, 2500)


    // essa condição está aqui evita quando o video terminar "chegar ao final" e o usuario clicar um video da lista que fica na lateral o video ele inciiar
    // if (endVideoPlay) {
    //   return videoRef.current.play()
    // }
  }

  const videoPaused = () => {

    setTogglePlay({ ...togglePlay, playVideo: false });

  }

  return { stateActive, setStateActive, togglePlay, setTogglePlay, videoPlay, videoPaused, setEndVideoPlay }
}

//##################### feature (next-video) #####################
const useNextVideoPlayList = (playlist, togglePlay, setTogglePlay, setPlayList, stateActive, setStateActive, videoRef, timeoutIdRef) => {
  console.log('video passou aqui useNextVideoPlayList')
  const [playlistMain, setPlayListMain] = useState();
  const [count, setCount] = useState(1);

  const combinedPlaylist = [...playlistMock, ...rocketSeatMock];
  // console.log(combinedPlaylist);

  const handleCanPlay = () => {
    if (togglePlay.playVideo && videoRef.current) {
      videoRef.current.play();
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      const currentVideo = combinedPlaylist.find(el => el.id === count);
      if (currentVideo) {
        setPlayListMain(videoRef.current.src = (playlist.length === 0 ? currentVideo.video : playlist));
        videoRef.current.addEventListener('canplay', handleCanPlay);
      }
      return () => {
        videoRef.current.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, [count, playlist]);

  const prevVideo = () => {
    console.log('Vídeo voltou para o anterior');

    setCount(prev => {
      const prevCount = prev === 1 ? combinedPlaylist.length : prev - 1; // Se for o primeiro vídeo, volta para o último
      return prevCount;
    });

    setPlayList([]);

    if (!togglePlay.playVideo) {
      setTogglePlay({ ...togglePlay, playVideo: true });
    }

    timeoutIdRef.current = setTimeout(() => {
      setStateActive(false)
    }, 2500)
  };


  const nextVideo = () => {
    console.log('video passou aqui nextVideo')
    setCount(prev => {
      const nextCount = (prev % combinedPlaylist.length) + 1; // Navega pela lista combinada
      return nextCount > combinedPlaylist.length ? 1 : nextCount; // Reseta para 1 após o último vídeo
    });

    setPlayList([]);

    if (!togglePlay.playVideo) {
      setTogglePlay({ ...togglePlay, playVideo: true });
    }

    // if (stateActive) {
    //   setStateActive(false);
    // }
    timeoutIdRef.current = setTimeout(() => {
      setStateActive(false)
    }, 2500)
  }

  return { playlistMain, nextVideo, prevVideo };
};


// ##################### feature (volume mute) #####################
const useVolume = (inputRangeRef, videoRef) => {
  const [toggleVolume, setToggleVolume] = useState(false); // estado para alternar entre som ativo/mudo
  const [currentVolume, setCurrentVolume] = useState(1);  // estado para volume atual
  const volumeRef = useRef(null); // referência para o input range de volume

  // Função para alternar entre mudo e som alto
  const MuteVolume = () => {
    if (videoRef.current.volume === 0 || videoRef.current.muted === true) {  // Verifica se o vídeo está mudo
      videoRef.current.muted = false;
      // videoRef.current.volume = currentVolume || 1; // Evita que o volume seja 0, define volume padrão se currentVolume for 0
      videoRef.current.volume = currentVolume > 0 ? currentVolume : 1; // Define um volume padrão se estiver 0
      setToggleVolume(true);
      inputRangeRef.current.value = videoRef.current.volume; // Atualiza o range com o volume atual
    } else {
      setCurrentVolume(videoRef.current.volume); // Salva o volume atual ANTES de mutar
      videoRef.current.muted = true;
      setToggleVolume(false);
      inputRangeRef.current.value = 0; // Define o range para 0 ao silenciar
    }
  };

  // Função para ajustar o volume através do range
  const rangeVolume = (e) => {
    // console.log(videoRef.current.muted = false)
    const volume = e.target.value;
    setCurrentVolume(volume); // Atualiza currentVolume SEMPRE
    videoRef.current.volume = volume; // Atualiza o volume do vídeo

    // if (videoRef.current.muted) {
    //   setToggleVolume(true)
    // }

    // Controla o estado do som apenas com base no volume
    if (volume > 0) {
      setToggleVolume(true);
      videoRef.current.muted = false; // Se houver volume, garante que o vídeo não está mudo
    } else {
      setToggleVolume(false);
      videoRef.current.muted = true; // Se o volume for 0, define como mudo
    }
  };

  return { toggleVolume, currentVolume, MuteVolume, rangeVolume };
};

// ##################### feature (width volume) #####################
const useWidthVolume = () => {
  const [width, setWidth] = useState(0)

  const mouseEnter = () => {
    setWidth(51)
  }
  const mouseLeave = () => {
    setWidth(0)
  }
  return { width, mouseEnter, mouseLeave }
}

//##################### feature (display settings) #####################
const useDisplaySettings = () => {
  const [settings, setSettings] = useState(false)

  return { settings, setSettings }
}

// ##################### feature (full screen) #####################
const useFullScreen = () => {

  const toggleFullScreen = () => {
    const videoContainer = document.querySelector(".video-Container")

    if (!document.fullscreenElement) {
      // refVideoContainer.current.requestFullscreen()
      videoContainer.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }
  return { toggleFullScreen }
}

//##################### feature (Play-List) #####################
const usePlaylistSide = (togglePlay, setTogglePlay, stateActive, setStateActive) => {
  console.log('video passou aqui usePlaylistSide')
  const [playlist, setPlayList] = useState([])

  const Handleplaylist = (event, index) => {
    setStateActive(false)
    // ao cliclar usuario vai ao topo
    window.scrollTo({ top: 0, behavior: 'instant' })

    setTogglePlay({ ...togglePlay, playVideo: true })

    // Verifica se o elemento clicado é <video> ou qualquer área de `SecondaryContainerVideo`
    const videoElement = event.target.tagName === 'VIDEO' ? event.target : document.getElementById(index);

    // Usa o src do vídeo
    if (videoElement) {
      setPlayList(videoElement.src);
    }
  }

  return { playlist, setPlayList, Handleplaylist }
}

//##################### feature (Play-List) #####################
const usePlayList = (videoPlayListRef) => {
  console.log('video passou por aqui usePlayList')
  const mouseEnterPlayList = (index) => {
    const video = videoPlayListRef.current[index]; // Access video directly
    if (video) {
      video.play();
    }
  };

  const mouseLeavePlayList = (index) => {
    const video = videoPlayListRef.current[index]; // Access video directly
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return { mouseEnterPlayList, mouseLeavePlayList }
}

// barra de progresso do download
const useVideoLoaded = () => {
  const vid = document.querySelector('.video');
  const canvas = document.getElementById('canvas');

  function drawProgress(canvas, buffered, duration) {
    const context = canvas.getContext('2d', { antialias: false });
    context.fillStyle = 'rgba(192,192,192, 0.4)';
    context.clearRect(0, 0, canvas.width, canvas.height);

    let loadedPercentage = 0;

    if (buffered.length > 0) {
      // Obtém o ponto final do último segmento carregado
      const lastBufferedEnd = buffered.end(buffered.length - 1);
      const progressWidth = (lastBufferedEnd / duration) * canvas.width;
      context.fillRect(0, 0, progressWidth, canvas.height);

      // Calcula a porcentagem carregada
      loadedPercentage = (lastBufferedEnd / duration) * 100;
    }

    return loadedPercentage;
  }

  const videoProgress = () => {
    const loadedPercentage = drawProgress(canvas, vid.buffered, vid.duration);
    return loadedPercentage; // Retorna a porcentagem carregada
  }

  return { videoProgress };
};



// component 

const useRepeatVideo = (cTime, setStateActive, setEndVideoPlay, play, togglePlay, setTogglePlay, videoRef, timeoutIdRef) => {
  console.log("video poassou por aqui useRepeatVideo")
  const [endVideo, setEndvideo] = useState(false);
  const [mediaControlsVisible, setMediaControlsVisible] = useState(true);
  const [videoDuration, setVideoDuration] = useState(0); // Estado para armazenar a duração do vídeo

  const repeatPlay = () => {
    // Lógica para repetir o vídeo
    setTogglePlay({ ...togglePlay, playVideo: true })
    videoRef.current.play()

    timeoutIdRef.current = setTimeout(() => {
      setStateActive(false)
    }, 2500)
  };

  useEffect(() => {
    // Atualiza a duração do vídeo quando o vídeo está carregado
    const updateVideoDuration = () => {
      setVideoDuration(videoRef.current.duration);
    };

    // Garante que o evento seja registrado quando o vídeo carregar
    videoRef.current.addEventListener('loadedmetadata', updateVideoDuration);

    // Limpa o event listener quando o componente for desmontado
    return () => {
      videoRef.current.removeEventListener('loadedmetadata', updateVideoDuration);
    };
  }, [videoRef]);

  useEffect(() => {
    // A função será executada apenas quando cTime mudar
    if (Math.floor(cTime) === Math.floor(videoDuration) && videoDuration > 0) {
      // setEndvideo(true);
      // setEndVideoPlay(true)
      // // setDisplayPausePlay(false);
      setStateActive(true);
      setMediaControlsVisible(false)

      console.log(togglePlay.playVideo, "useRepeatVideo useRepeatVideo useRepeatVideo useRepeatVideo useRepeatVideo   useRepeatVideo")
    } else {
      // setStateActive(false);
      // setEndvideo(false);
      setMediaControlsVisible(true);
    }
  }, [cTime, videoDuration, setStateActive]);

  return { endVideo, mediaControlsVisible, repeatPlay, videoDuration };
};

const useLoading = (videoRef) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    const handleWaiting = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);

    if (video) {
      video.addEventListener('waiting', handleWaiting);
      video.addEventListener('canplay', handleCanPlay);
    }

    return () => {
      if (video) {
        video.removeEventListener('waiting', handleWaiting);
        video.removeEventListener('canplay', handleCanPlay);
      }
    };
  }, [videoRef]);

  return isLoading;
};


const ComponentVideo = () => {
  const videoRef = useRef(null)
  const progressBarRef = useRef(null)
  const videoPlayListRef = useRef([])
  const inputRangeRef = useRef(null)
  const timeoutIdRef = useRef(null);  // Ref para armazenar o ID do timeout
  const { stateActive, setStateActive, togglePlay, setTogglePlay, videoPlay, videoPaused, setEndVideoPlay } = usePlayPaused(videoRef, timeoutIdRef)
  const { toggleVolume, currentVolume, MuteVolume, rangeVolume } = useVolume(inputRangeRef, videoRef)
  const { toggleFullScreen } = useFullScreen()
  const { videoProgress } = useVideoLoaded()
  const { watchedBar, setWatchedBar, currentHours, currentMinutes, currentSeconds, durationHours, durationMinutes, durationSeconds, videoCurrentTime, startDragging, stopDragging, handleDrag } = useTimeUpdate(togglePlay, setTogglePlay, videoRef, progressBarRef, stateActive, setStateActive, timeoutIdRef)
  // useProgress(videoRef, setWatchedBar, setIsDragging)
  const { width, mouseEnter, mouseLeave } = useWidthVolume()
  const { settings, setSettings } = useDisplaySettings()
  const { playlist, setPlayList, Handleplaylist } = usePlaylistSide(togglePlay, setTogglePlay, stateActive, setStateActive)
  const { playlistMain, nextVideo, prevVideo } = useNextVideoPlayList(playlist, togglePlay, setTogglePlay, setPlayList, stateActive, setStateActive, videoRef, timeoutIdRef)
  const { endVideo, mediaControlsVisible, repeatPlay } = useRepeatVideo(videoCurrentTime, setStateActive, setEndVideoPlay, videoPlay, togglePlay, setTogglePlay, videoRef, timeoutIdRef)
  const { mouseEnterPlayList, mouseLeavePlayList } = usePlayList(videoPlayListRef)
  const isLoading = useLoading(videoRef); // Use the hook to get the loading state


  const opacityPlay = () => {
    console.log("o play caiu aqui ?????????????????????????????????????????????????????")
    // Cancela qualquer timeout ativo antes de começar a arrastar
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current); // Cancela o timeout
    }

    setStateActive(prevStateActive => !prevStateActive)

    if (!togglePlay.playVideo) return

    timeoutIdRef.current = setTimeout(() => {
      setStateActive(false)
    }, 2000)
  };

  // Chame uma função ao mover o ponteiro do mouse sobre uma imagem ou elemento:
  const mouseEnterFN = () => {
    setStateActive(false)
  }
  // Chame uma função ao mover o ponteiro do mouse para fora de uma imagem ou elemento:
  const mouseLeaveFN = () => {
    if (togglePlay.playVideo) setStateActive(true)
  }

  // console.log(isLoading, "isLoading isLoading isLoading")

  return (
    <>
      <VideoContainer className="video-Container" >
        {/* <Video ref={videoRef} muted opacity={opacity} onProgress={() => videoProgress()} onClick={() => play()} src={playlistMain} className={`video`} controlsList="nodownload" preload="auto" type="video/mp4" /> */}
        <Video ref={videoRef} muted onClick={() => opacityPlay()} onProgress={() => videoProgress()} src={playlistMain} className={`video`} controlsList="nodownload" type="video/mp4" />
        {isLoading === true ? (
          <Spinner>
            <div className="spinner"></div>
          </Spinner>
        ) :
          (
            <>
              {mediaControlsVisible ? (
                <>
                  {togglePlay.playVideo ? (
                    <MediaControlWrapper className={`${stateActive === true ? "activeProgress" : "disable"}`}>
                      <Prevideo onClick={() => prevVideo()} style={{ transform: "scaleX(-1)" }}>
                        <img draggable="false" src={svgNext} alt="" width="25px" />
                      </Prevideo>
                      <ImgCentral onClick={() => videoPaused()}>
                        <ImgPause src={svgPause} alt="" draggable="false" />
                      </ImgCentral>
                      <NextVideo className="next-video-btn btn no-select" onClick={() => nextVideo()}>
                        <img draggable="false" src={svgNext} alt="" width="25px" />
                      </NextVideo>
                    </MediaControlWrapper >
                  ) :
                    (
                      <MediaControlWrapper className={`${stateActive === true ? "activeProgress" : "disable"}`}>
                        <Prevideo className="next-video-btn btn no-select" onClick={() => prevVideo()} style={{ transform: "scaleX(-1)" }}>
                          <img draggable="false" src={svgNext} alt="" width="25px" />
                        </Prevideo>
                        <ImgCentral onClick={() => videoPlay()}>
                          <ImgPlay src={svgPlay} alt="" draggable="false" />
                        </ImgCentral>
                        <NextVideo className="next-video-btn btn no-select" onClick={() => nextVideo()}>
                          <img draggable="false" src={svgNext} alt="" width="25px" />
                        </NextVideo>
                      </MediaControlWrapper >
                    )}
                </>
              ) :
                (
                  <MediaControlWrapper className={`${stateActive === true ? "activeProgress" : "disable"}`}>
                    <Prevideo className="next-video-btn btn no-select" onClick={() => prevVideo()} style={{ transform: "scaleX(-1)" }}>
                      <img draggable="false" src={svgNext} alt="" width="25px" />
                    </Prevideo>
                    <ImgCentral onClick={() => repeatPlay()}>
                      <Circle>
                        <Triangulo />
                      </Circle>
                    </ImgCentral>
                    <NextVideo className="next-video-btn btn no-select" onClick={() => nextVideo()}>
                      <img draggable="false" src={svgNext} alt="" width="25px" />
                    </NextVideo>
                  </MediaControlWrapper >
                )}
            </>
          )}
        {/* <ControlsContainer togglePlay={togglePlay.playVideo} className={`controlsContainer ${stateActive === true ? "state" : ""}`}> */}


        <ControlsContainer togglePlay={togglePlay.playVideo} className={`controlsContainer ${stateActive === true ? "state" : ""}`}>
          <ProgressBarContainer className={`${stateActive === true ? "activeProgress" : "disable"}`}
            onTouchStart={startDragging}
            onTouchMove={handleDrag}
            onTouchEnd={stopDragging}
          >
            <ProgressBar ref={progressBarRef}
              className="progress-bar"
            >
              <canvas id="canvas" style={{ width: "100%", height: "100%" }}></canvas>
              <Progress className="progress">
                <WatchedProgress>
                  <WatchedBar className="watched-bar" watchedBar={watchedBar}></WatchedBar>
                  <Playhead className="playhead" watchedBar={watchedBar}></Playhead>
                </WatchedProgress>
              </Progress>
            </ProgressBar>
          </ProgressBarContainer>

          <Controls className="no-select" draggable="false" togglePlay={togglePlay}>
            <LeftSideControls onMouseLeave={() => mouseLeave()} toggleVolume={toggleVolume}>

              <div style={{ display: "flex" }}>
                <VolumeControl className="volume-control btn no-select" onClick={() => MuteVolume()} onMouseEnter={() => mouseEnter()}>
                  <div className="volume-btn">
                    <img className="full-volume" draggable="false" alt="" width="20px" src={currentVolume <= 0.5 ? svgHalfVolume : svgVolume} />
                    <img className="muted" src={svgMute} draggable="false" alt="" width="20px" />
                  </div>
                </VolumeControl>
                <VolumePanel width={width}>
                  <div className="input-div">
                    <div className="volume-input-div">
                      <input ref={inputRangeRef} onChange={(e) => rangeVolume(e)} type="range" max="1" min="0" step="0.1" />
                      <div className="volume-progress"></div>
                    </div>
                  </div>
                </VolumePanel>
              </div>

              <TimeDisplay>
                {/* current time */}
                <span className="hours">{currentHours ? currentHours + ":" : ""}</span>
                <span className="minutes">{currentMinutes >= 10 ? currentMinutes : "0" + currentMinutes}</span>
                <span className="time-separator">{":"}</span>
                <span className="seconds">{currentSeconds >= 10 ? currentSeconds : "0" + currentSeconds}</span>
                <span className="bar-separator">{"/"}</span>
                {/* video duration  */}
                <span className="hours">{durationHours ? durationHours + ":" : ""}</span>
                <span className="minutes">{durationMinutes}</span>
                <span className="time-separator">{":"}</span>
                <span className="seconds">{durationSeconds >= 10 ? durationSeconds : "0" + durationSeconds}</span>
              </TimeDisplay>
            </LeftSideControls>

            <RightSideControls className="no-select">
              <div className="full-screen-btn btn no-select" onClick={() => toggleFullScreen()}>
                <img className="maximize no-select" draggable="false" src={svgMaximize} alt="" width="18px" height="18" />
                {/* <img className="minimize no-select" draggable="false" src={svgMinimize} alt="" width="10px" /> */}
              </div>
            </RightSideControls>

            <SettingsMenu className="settings-menu no-select" settings={settings}>
              <div className="settings">
                <div className="playback-speed" target="settings">
                  <span>Speed</span>
                </div>
                <div className="subtitles" target="settings">
                  <span>subtitle/cc</span>
                </div>
                <div className="quality" target="settings">
                  <span>quality</span>
                </div>
              </div>
            </SettingsMenu>
          </Controls>
        </ControlsContainer>

      </VideoContainer>

      <Container>
        <MessageBox>
          <coment>
            <p>aqui fica caixa de comentários</p>
          </coment>
        </MessageBox>
        <Secondary>
          {rocketSeatMock.map((el, index, arr) => {
            return (
              <React.Fragment key={el.id}>
                {/* solução para selecionar um item no map com ref é >>> https://stackoverflow.com/questions/63059962/reactjs-map-with-a-ref-to-each-component */}
                <SecondaryContainerVideo onTouchStart={(event) => Handleplaylist(event, index)}>
                  <div className="video-container">
                    <video ref={(el) => videoPlayListRef.current[index] = el} className="video-play-list" type="video/mp4" src={el.video} />
                  </div>
                  <div className="title">
                    <p>{el.title}</p>
                  </div>
                </SecondaryContainerVideo>
              </React.Fragment>
            )
          })}
        </Secondary>
      </Container>
    </>
  )
}

export default ComponentVideo