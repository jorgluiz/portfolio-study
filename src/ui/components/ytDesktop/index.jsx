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

const useTimeUpdate = (togglePlay, setTogglePlay, videoRef) => {
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
  //     // Atualiza o estado de togglePlay para exibir o botão de play ao final do vídeo
  //     setTogglePlay({ playVideo: false });
  //     setWatchedBar({ percentage: 100 });
  //     setVideoCurrentTime(videoRef.current.duration); // Ajusta o tempo atual para o final do vídeo
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
    if (isDragging || !videoRef.current) return;

    const currentTime = videoRef.current.currentTime;
    const duration = videoRef.current.duration;

    setCurrentHours(Math.floor(currentTime / 3600));
    setCurrentMinutes(Math.floor((currentTime / 60) % 60));
    setCurrentSeconds(Math.floor(currentTime % 60));

    if (currentTime >= duration - 0.5) {
      setWatchedBar({ percentage: 100 });
      setVideoCurrentTime(duration); // Mantém o tempo exato no final
      return;
    }


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
    handleDrag(event);

    window.addEventListener('mousemove', handleDrag);
    window.addEventListener('mouseup', stopDragging);
  };

  const stopDragging = (event) => {
    handleDrag(event);

    window.removeEventListener('mousemove', handleDrag);
    window.removeEventListener('mouseup', stopDragging);
  };

  const handleDrag = (event) => {
    if (!videoRef.current) return;

    const bar = document.querySelector(".progress-bar");
    const rect = bar.getBoundingClientRect();
    const pos = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
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
    isDragging,
    startDragging,
    stopDragging,
    setIsDragging,
    handlePercentualUpdate,
  };
};


// 2.0

// const useTimeUpdate = (togglePlay, videoRef) => {
//   const [watchedBar, setWatchedBar] = useState({ percentage: 0 });
//   const [videoCurrentTime, setVideoCurrentTime] = useState(0);

//   // Estados de tempo atual do vídeo
//   const [currentHours, setCurrentHours] = useState(0);
//   const [currentMinutes, setCurrentMinutes] = useState(0);
//   const [currentSeconds, setCurrentSeconds] = useState(0);

//   // Estados de duração do vídeo
//   const [durationHours, setDurationHours] = useState(0);
//   const [durationMinutes, setDurationMinutes] = useState(0);
//   const [durationSeconds, setDurationSeconds] = useState(0);

//   // Estado para controlar se o usuário está arrastando a barra de progresso
//   const [isDragging, setIsDragging] = useState(false);
//   const [wasPlaying, setWasPlaying] = useState(false); // Armazena o estado do vídeo (tocando/pausado)

//   useEffect(() => {
//     const handleLoadedMetadata = () => {
//       const duration = videoRef.current.duration;

//       // Configura a duração do vídeo em horas, minutos e segundos
//       setDurationHours(Math.floor(duration / 3600));
//       setDurationMinutes(Math.floor((duration / 60) % 60));
//       setDurationSeconds(Math.floor(duration % 60));
//     };

//     if (videoRef.current) {
//       videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
//     }

//     return () => {
//       if (videoRef.current) {
//         videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
//       }
//     };
//   }, [videoRef]);

//   const handlePercentualUpdate = () => {
//     // Só atualiza o progresso se não estiver arrastando
//     if (isDragging || !videoRef.current) return;

//     const currentTime = videoRef.current.currentTime;
//     const duration = videoRef.current.duration;

//     // Atualiza os valores de horas, minutos e segundos do tempo atual do vídeo
//     setCurrentHours(Math.floor(currentTime / 3600));
//     setCurrentMinutes(Math.floor((currentTime / 60) % 60));
//     setCurrentSeconds(Math.floor(currentTime % 60));

//     setVideoCurrentTime(currentTime);

//     // Atualiza a barra de progresso visual
//     setWatchedBar({ percentage: Math.floor((100 / duration) * currentTime) });
//   };

//   // Ativa o listener 'timeupdate' somente quando não está arrastando a barra de progresso
//   useEffect(() => {
//     if (videoRef.current && !isDragging) {
//       videoRef.current.addEventListener('timeupdate', handlePercentualUpdate);
//     }

//     return () => {
//       if (videoRef.current) {
//         videoRef.current.removeEventListener('timeupdate', handlePercentualUpdate);
//       }
//     };
//   }, [videoRef, isDragging]);

//   // ##################### feature (Progress Bar) #####################
//   const startDragging = (event) => {
//     setIsDragging(true);
//     handleDrag(event); // Atualiza imediatamente ao clicar
//     window.addEventListener('mousemove', handleDrag);
//     window.addEventListener('mouseup', stopDragging);

//     if (videoRef.current) {
//       videoRef.current.playbackRate = 0; // Congela o progresso visual
//     }
//   };

//   const stopDragging = (event) => {
//     handleDrag(event); // Atualiza o tempo do vídeo ao soltar
//     setIsDragging(false);

//     if (togglePlay.playVideo) {
//       videoRef.current.playbackRate = 1
//     }

//     window.removeEventListener('mousemove', handleDrag);
//     window.removeEventListener('mouseup', stopDragging);
//   };

//   const handleDrag = (event) => {
//     if (!videoRef.current) return;

//     const bar = document.querySelector(".progress-bar");
//     const rect = bar.getBoundingClientRect();
//     const pos = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1); // Calcula a posição do mouse na barra
//     const newTime = pos * videoRef.current.duration;

//     // Atualiza o tempo do vídeo conforme o arraste
//     videoRef.current.currentTime = newTime;

//     // Atualiza a barra visual
//     setWatchedBar({ percentage: pos * 100 });
//   };

//   return {
//     watchedBar,
//     setWatchedBar,
//     currentHours,
//     currentMinutes,
//     currentSeconds,
//     durationHours,
//     durationMinutes,
//     durationSeconds,
//     videoCurrentTime,
//     isDragging,
//     startDragging,
//     stopDragging,
//     setIsDragging,
//     handlePercentualUpdate,
//   };
// };

// 1.0

// const useTimeUpdate = (videoRef) => {
//   const [watchedBar, setWatchedBar] = useState({ percentage: 0 });
//   const [videoCurrentTime, setVideoCurrentTime] = useState(0);

//   // Estados de tempo atual do vídeo
//   const [currentHours, setCurrentHours] = useState(0);
//   const [currentMinutes, setCurrentMinutes] = useState(0);
//   const [currentSeconds, setCurrentSeconds] = useState(0);

//   // Estados de duração do vídeo
//   const [durationHours, setDurationHours] = useState(0);
//   const [durationMinutes, setDurationMinutes] = useState(0);
//   const [durationSeconds, setDurationSeconds] = useState(0);

//   // Estado para controlar se o usuário está arrastando a barra de progresso
//   const [isDragging, setIsDragging] = useState(false);
//   const [wasPlaying, setWasPlaying] = useState(false); // Armazena o estado do vídeo (tocando/pausado)

//   useEffect(() => {
//     const handleLoadedMetadata = () => {
//       const duration = videoRef.current.duration;

//       // Configura a duração do vídeo em horas, minutos e segundos
//       setDurationHours(Math.floor(duration / 3600));
//       setDurationMinutes(Math.floor((duration / 60) % 60));
//       setDurationSeconds(Math.floor(duration % 60));
//     };

//     if (videoRef.current) {
//       videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
//     }

//     return () => {
//       if (videoRef.current) {
//         videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
//       }
//     };
//   }, [videoRef]);

//   const handlePercentualUpdate = () => {
//     // Só atualiza o progresso se não estiver arrastando
//     if (isDragging || !videoRef.current) return;

//     const currentTime = videoRef.current.currentTime;
//     const duration = videoRef.current.duration;

//     // Atualiza os valores de horas, minutos e segundos do tempo atual do vídeo
//     setCurrentHours(Math.floor(currentTime / 3600));
//     setCurrentMinutes(Math.floor((currentTime / 60) % 60));
//     setCurrentSeconds(Math.floor(currentTime % 60));

//     setVideoCurrentTime(currentTime);

//     // Atualiza a barra de progresso visual
//     setWatchedBar({ percentage: Math.floor((100 / duration) * currentTime) });
//   };

//   // Ativa o listener 'timeupdate' somente quando não está arrastando a barra de progresso
//   useEffect(() => {
//     if (videoRef.current && !isDragging) {
//       videoRef.current.addEventListener('timeupdate', handlePercentualUpdate);
//     }

//     return () => {
//       if (videoRef.current) {
//         videoRef.current.removeEventListener('timeupdate', handlePercentualUpdate);
//       }
//     };
//   }, [videoRef, isDragging]);

//   // ##################### feature (Progress Bar) #####################
//   const startDragging = (event) => {
//     setIsDragging(true);
//     handleDrag(event); // Atualiza imediatamente ao clicar
//     window.addEventListener('mousemove', handleDrag);
//     window.addEventListener('mouseup', stopDragging);

//     if (videoRef.current) {
//       setWasPlaying(!videoRef.current.paused);
//       videoRef.current.playbackRate = 0; // Interrompe o progresso sem pausar
//     }
//   };

//   const stopDragging = (event) => {
//     handleDrag(event); // Atualiza o tempo do vídeo ao soltar
//     setIsDragging(false);

//     if (videoRef.current) {
//       videoRef.current.playbackRate = 1; // Restaura a taxa de reprodução normal
//     }

//     window.removeEventListener('mousemove', handleDrag);
//     window.removeEventListener('mouseup', stopDragging);
//   };


//   const handleDrag = (event) => {
//     if (!videoRef.current) return;

//     const bar = document.querySelector(".progress-bar");
//     const rect = bar.getBoundingClientRect();
//     const pos = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1); // Calcula a posição do mouse na barra
//     const newTime = pos * videoRef.current.duration;

//     // Atualiza o tempo do vídeo conforme o arraste
//     videoRef.current.currentTime = newTime;

//     // Atualiza a barra visual
//     setWatchedBar({ percentage: pos * 100 });
//   };

//   return {
//     watchedBar,
//     setWatchedBar,
//     currentHours,
//     currentMinutes,
//     currentSeconds,
//     durationHours,
//     durationMinutes,
//     durationSeconds,
//     videoCurrentTime,
//     isDragging,
//     startDragging,
//     stopDragging,
//     setIsDragging,
//     handlePercentualUpdate,
//   };
// };

// ##################### feature (Progress Bar) #####################
const useProgress = (videoRef, setWatchedBar, setIsDragging) => {
  const [wasPlaying, setWasPlaying] = useState(false);

  // Função para iniciar o arraste
  const startDragging = (event) => {
    setIsDragging(true); // Agora está arrastando
    handleDrag(event); // Atualiza imediatamente ao clicar
    window.addEventListener('mousemove', handleDrag); // Evento para mover
    window.addEventListener('mouseup', stopDragging); // Evento para soltar

    if (videoRef.current) {
      setWasPlaying(!videoRef.current.paused); // Armazena se o vídeo estava tocando
      videoRef.current.pause(); // Pausa ao começar a arrastar
    }
  };

  // Função para parar o arraste
  const stopDragging = (event) => {
    handleDrag(event); // Atualiza o tempo final

    setIsDragging(false); // Agora não está mais arrastando

    // Retoma o estado anterior do vídeo
    if (wasPlaying && videoRef.current) {
      videoRef.current.play();
    }

    window.removeEventListener('mousemove', handleDrag); // Remove os listeners
    window.removeEventListener('mouseup', stopDragging);
  };

  // Função para arrastar e atualizar a barra de progresso
  const handleDrag = (event) => {
    if (!videoRef.current) return;

    const bar = document.querySelector(".progress-bar");
    const rect = bar.getBoundingClientRect();
    const pos = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
    const newTime = pos * videoRef.current.duration;

    // Atualiza o tempo do vídeo
    videoRef.current.currentTime = newTime;

    // Atualiza a barra visual
    setWatchedBar({ percentage: pos * 100 });
  };

  return { startDragging, stopDragging };
};

// ##################### feature (player paused) #####################
const usePlayPaused = (videoRef) => {
  const [togglePlay, setTogglePlay] = useState({ playVideo: true }) // state
  const [opacity, setOpacity] = useState(true)
  const [stateActive, setStateActive] = useState()
  const [endVideoPlay, setEndVideoPlay] = useState(false)
  console.log(togglePlay.playVideo, "fora de useEffect togglePlay.playVideo")

  useEffect(() => {
    // const video = document.querySelector(".video")
    if (videoRef.current) {
      // videoRef.current.play();
      // setStateActive(false) // precisa ser false, pq quando usuario entrar para ver video o ActiveButtonPlay precifa ficar invisível.
      togglePlay.playVideo ? videoRef.current.play() : videoRef.current.pause()
    }
    console.log(togglePlay.playVideo, "dentro de useEffect")

    if (togglePlay.playVideo) {
      setStateActive(true)
      setOpacity(true)
      const timer = setTimeout(() => setOpacity(false), 4000);
      return () => clearTimeout(timer); // limpar timeout quando o componente for desmontado
    } else {
      setOpacity(null)
      setStateActive(false)
    }
  }, [togglePlay.playVideo])

  // const play = () => {
  //   if (!videoRef.current) return;

  //   if (videoRef.current.playbackRate === 0) {
  //     videoRef.current.playbackRate = 1;
  //   }

  //   setEndVideoPlay(false);

  //   if (endVideoPlay) {
  //     videoRef.current.currentTime = 0;
  //     videoRef.current.play();
  //     setTogglePlay(prev => ({ ...prev, playVideo: true })); // Garante que o ícone fica correto
  //   } else {
  //     if (videoRef.current.paused) {
  //       videoRef.current.play();
  //       setTogglePlay(prev => ({ ...prev, playVideo: true })); // Se estava pausado, garante play
  //     } else {
  //       videoRef.current.pause();
  //       setTogglePlay(prev => ({ ...prev, playVideo: false })); // Se estava rodando, pausa
  //     }
  //   }
  // };

  const play = () => {
    if (videoRef.current.playbackRate === 0) {
      videoRef.current.playbackRate = 1
    }
    // função para alternar em play e pause useEffect tem como dependência togglePlay.playVideo
    setTogglePlay({ ...togglePlay, playVideo: !togglePlay.playVideo })
  }


  return { stateActive, opacity, setOpacity, setStateActive, togglePlay, setTogglePlay, play, setEndVideoPlay }
}

//##################### feature (next-video) #####################
const useNextVideoPlayList = (playlist, togglePlay, setTogglePlay, setPlayList, stateActive, setStateActive, videoRef) => {
  const [playlistMain, setPlayListMain] = useState();
  const [count, setCount] = useState(1);

  const combinedPlaylist = [...playlistMock, ...rocketSeatMock];
  console.log(combinedPlaylist);

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

  const nextVideo = () => {
    setCount(prev => {
      const nextCount = (prev % combinedPlaylist.length) + 1; // Navega pela lista combinada
      return nextCount > combinedPlaylist.length ? 1 : nextCount; // Reseta para 1 após o último vídeo
    });

    setPlayList([]);

    if (!togglePlay.playVideo) {
      setTogglePlay({ ...togglePlay, playVideo: true });
    }

    if (stateActive) {
      setStateActive(false);
    }
  }

  return { playlistMain, nextVideo };
};

// 1.0

// const useNextVideoPlayList = (playlist, togglePlay, setTogglePlay, setPlayList, stateActive, setStateActive, videoRef) => {
//   const [playlistMain, setPlayListMain] = useState()
//   const [count, setCount] = useState(1)
//   const [videoReady, setVideoReady] = useState(false);

//   const handleCanPlay = () => {
//     if (togglePlay.playVideo) {
//       videoRef.current.play();
//     }
//   };

//   // iniciar a play list com um video
//   useEffect(() => {
//     if (videoRef.current) {
//       playlistMock.map((el, i, arr) => {
//         if (count >= arr.length) setCount(1);
//         if (el.id === count) {
//           setPlayListMain(videoRef.current.src = (playlist.length === 0 ? el.video : playlist));
//           const videoElement = videoRef.current;
//           if (videoElement) {
//             videoElement.addEventListener('canplay', handleCanPlay);
//             return () => {
//               videoElement.removeEventListener('canplay', handleCanPlay);
//             };
//           }
//           // videoRef.current.play();
//         }
//       });
//     }
//   }, [count, playlist]);

//   // função
//   const nextVideo = () => {
//     // const video = document.querySelector(".video")
//     setCount(prev => (prev + 1) % playlistMock.length); // Correção do ciclo de vídeos
//     setPlayList([])
//     setCount(prev => prev + 1)
//     if (togglePlay.playVideo === false) setTogglePlay({ ...togglePlay, playVideo: true })
//     if (stateActive === true) setStateActive(false)

//     playlistMock.map((el) => {
//       if (el.id === count) setPlayListMain(videoRef.current.innerHTML = el.video)
//     })
//   }
//   return { playlistMain, nextVideo }
// }

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
  const [playlist, setPlayList] = useState([])

  const Handleplaylist = (event, index) => {
    setStateActive(false)
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
// const usePlaylistSide = (togglePlay, setTogglePlay, stateActive, setStateActive) => {
//   const [playlist, setPlayList] = useState([])

//   const Handleplaylist = (event) => {
//     setStateActive(false)
//     window.scrollTo({ top: 0, behavior: 'instant' })

//     setTogglePlay({ ...togglePlay, playVideo: true })
//     setPlayList(event.target.src); // Usa o src completo
//   }

//   return { playlist, setPlayList, Handleplaylist }
// }

//##################### feature (Play-List) #####################
const usePlayList = (videoPlayListRef) => {
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


// const useVideoLoaded = () => {

//   const vid = document.querySelector('.video');
//   const canvas = document.getElementById('canvas');

//   function drawProgress(canvas, buffered, duration) {

//     const context = canvas.getContext('2d', { antialias: false });
//     context.fillStyle = 'rgba(192,192,192, 0.4)';
//     context.globalAlpha = 1

//     let width = canvas.width;
//     let height = canvas.height;
//     if (!width || !height) throw "Canvas's width or height weren't set!";
//     context.clearRect(0, 0, width, height); // clear canvas


//     for (let i = 0; i < buffered.length; i++) {
//       let leadingEdge = buffered.start(i) / duration * width;
//       let trailingEdge = buffered.end(i) / duration * width;
//       context.fillRect(leadingEdge, 0, trailingEdge - leadingEdge, height)

//     }
//   }


//   const videoProgress = () => {
//     drawProgress(canvas, vid.buffered, vid.duration);


//   }
//   return { videoProgress }

// }



// component 

const useRepeatVideo = (cTime, setStateActive, setEndVideoPlay, play, togglePlay, setTogglePlay, videoRef) => {
  const [endVideo, setEndvideo] = useState(false);
  const [displayPausePlay, setDisplayPausePlay] = useState(true);
  const [videoDuration, setVideoDuration] = useState(0); // Estado para armazenar a duração do vídeo

  const repeatPlay = () => {
    if (videoRef.current.playbackRate === 0) {
      videoRef.current.playbackRate = 1;
    }
    // Atualiza o estado de play para garantir que o vídeo seja reproduzido
    setTogglePlay((prevState) => {
      // Só alterna para "play" se não estiver tocando
      if (!prevState.playVideo) {
        return { ...prevState, playVideo: true };
      }
      return prevState;
    });

    // Se o vídeo chegou ao final, força a reprodução

    videoRef.current.currentTime = 0;  // Garante que o vídeo comece do início

    return videoRef.current.play().catch((error) => {
      console.error("Erro ao tentar reproduzir:", error);
    });
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
      setEndvideo(true);
      setEndVideoPlay(true)
      setDisplayPausePlay(false);
      setStateActive(false);
    } else {
      setEndvideo(false);
      setDisplayPausePlay(true);
    }
  }, [cTime, videoDuration, setStateActive]);

  return { endVideo, displayPausePlay, repeatPlay, videoDuration };
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
  const videoPlayListRef = useRef([])
  const inputRangeRef = useRef(null)
  const { stateActive, setStateActive, opacity, setOpacity, togglePlay, setTogglePlay, play, setEndVideoPlay } = usePlayPaused(videoRef)
  const { toggleVolume, currentVolume, MuteVolume, rangeVolume } = useVolume(inputRangeRef, videoRef)
  const { toggleFullScreen } = useFullScreen()
  const { videoProgress } = useVideoLoaded()
  const { watchedBar, setWatchedBar, currentHours, currentMinutes, currentSeconds, durationHours, durationMinutes, durationSeconds, videoCurrentTime, isDragging, startDragging, stopDragging, setIsDragging, handlePercentualUpdate } = useTimeUpdate(togglePlay, setTogglePlay, videoRef)
  useProgress(videoRef, setWatchedBar, setIsDragging)
  const { width, mouseEnter, mouseLeave } = useWidthVolume()
  const { settings, setSettings } = useDisplaySettings()
  const { playlist, setPlayList, Handleplaylist } = usePlaylistSide(togglePlay, setTogglePlay, stateActive, setStateActive)
  const { playlistMain, nextVideo } = useNextVideoPlayList(playlist, togglePlay, setTogglePlay, setPlayList, stateActive, setStateActive, videoRef)
  const { endVideo, displayPausePlay, repeatPlay } = useRepeatVideo(videoCurrentTime, setStateActive, setEndVideoPlay, play, togglePlay, setTogglePlay, videoRef)
  const { mouseEnterPlayList, mouseLeavePlayList } = usePlayList(videoPlayListRef)
  const isLoading = useLoading(videoRef); // Use the hook to get the loading state



  // Chame uma função ao mover o ponteiro do mouse sobre um elemento <div>:
  const mouseMove = () => {
    console.log(opacity, "mouseMove")
    if (opacity === false) {
      setOpacity(true)
      setTimeout(() => setOpacity(false), 4000)
    }
  }
  // Chame uma função ao mover o ponteiro do mouse sobre uma imagem ou elemento:
  const mouseEnterFN = () => {
    setStateActive(false)
  }
  // Chame uma função ao mover o ponteiro do mouse para fora de uma imagem ou elemento:
  const mouseLeaveFN = () => {
    if (togglePlay.playVideo) setStateActive(true)
  }

  const handleVideoClick = () => {
    if (endVideo) {
      repeatPlay();
    } else {
      play();
    }
  };


  return (
    <>
      <VideoContainer className="video-Container" onClick={() => settings === true ? setSettings(false) : undefined}>
        {isLoading && (
          <Spinner>
            <div className="spinner"></div>
          </Spinner>
        )}


        <Video ref={videoRef} muted onMouseMove={() => mouseMove()} opacity={opacity} onProgress={() => videoProgress()} onClick={handleVideoClick} src={playlistMain} className={`video`} controlsList="nodownload" preload="auto" type="video/mp4" />

        <ControlsContainer onMouseOut={() => mouseLeaveFN()} onMouseOver={(e) => mouseEnterFN(e)} togglePlay={togglePlay.playVideo} className={`controlsContainer ${stateActive === true ? "state" : ""}`}>
          <ProgressControls>
            <ProgressBar
              className="progress-bar"
              onMouseDown={startDragging} // Inicia o arraste ao clicar e segurar em qualquer lugar da barra

            // onTouchStart={startDragging}
            // onTouchMove={handleDrag}
            // onTouchEnd={stopDragging}
            >
              <canvas id="canvas" style={{ width: "100%", height: "100%" }}></canvas>
              <Progress className="progress">
                <WatchedProgress>
                  <WatchedBar className="watched-bar" watchedBar={watchedBar}></WatchedBar>
                  <Playhead className="playhead" watchedBar={watchedBar}></Playhead>
                </WatchedProgress>
              </Progress>
            </ProgressBar>
          </ProgressControls>

          <Controls className="no-select" draggable="false" togglePlay={togglePlay}>
            <LeftSideControls onMouseLeave={() => mouseLeave()} toggleVolume={toggleVolume}>

              {displayPausePlay ? (
                <div className="play-pause-btn btn no-select" onClick={() => play()}>
                  {togglePlay.playVideo ? (
                    <img className="pause" src={svgPause} draggable="false" alt="" width="20px" />
                  ) : (
                    <img className="play" src={svgPlay} alt="" width="20px" />
                  )}
                </div>
              ) : (
                <div className="no-select" onClick={() => repeatPlay()} style={{ display: "flex", justifyContent: "center", width: "48px" }}>
                  <Circle endVideo={endVideo}>
                    <Triangulo />
                  </Circle>
                </div>
              )
              }

              <div className="next-video-btn btn no-select" onClick={() => nextVideo()}>
                <img draggable="false" src={svgNext} alt="" width="15px" />
              </div>

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
              <div className="settings btn no-select" onClick={() => setSettings(!settings)}>
                <img src={svgSettings} draggable="false" alt="" width="18px" height="18px" />
              </div>
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
                <SecondaryContainerVideo onClick={(event) => Handleplaylist(event, index)}>
                  <div className="video-container">
                    <video ref={(el) => videoPlayListRef.current[index] = el} className="video-play-list" onMouseEnter={() => mouseEnterPlayList(index)} onMouseLeave={() => mouseLeavePlayList(index)} type="video/mp4" src={el.video} />
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