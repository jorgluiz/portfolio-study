import React, { useState, useEffect } from "react";

// styles
import { VideoContainer, Video, ControlsContainer, ProgressControls, ProgressBar, Progress, WatchedProgress, WatchedBar, Playhead, Controls, SettingsMenu, LeftSideControls, VolumeControl, RightSideControls, TimeDisplay, VolumePanel, Container, Primary, Secondary, SecondaryContainerVideo, Circle, Triangulo } from "./styles"

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

import SitesReference from "../search"

// ##################### feature (Time Update) #####################
const useTimeUpDate = () => {
    const [watchedBar, setWatchedBar] = useState({ percentage: 0 })
    const [videoCurrentTime, setVideoCurrentTime] = useState()
    const [videoDuration, setVideoDuration] = useState()
    const video = document.querySelector(".video")
    // setVideoCurrentTime(video.currentTime)
    // setVideoDuration(video.duration)

    // video current time
    const [currentHours, setCurrentHours] = useState(0)
    const [currentMinutes, setCurrentMinutes] = useState(0)
    const [currentSeconds, setCurrentSeconds] = useState(0)

    // video duration 
    const [durationHours, setDurationHours] = useState(0)
    const [durationMinutes, setDurationMinutes] = useState(0)
    const [durationSeconds, setDurationSeconds] = useState(0)

    const handlePercentualUpdate = () => {
        setCurrentHours(Math.floor(video.currentTime / 3600))
        setCurrentMinutes(Math.floor(video.currentTime / 60 % 60))
        setCurrentSeconds(Math.floor(video.currentTime % 60))

        setDurationHours(Math.floor(video.duration / 3600))
        setDurationMinutes(Math.floor(video.duration / 60 % 60))
        setDurationSeconds(Math.floor(video.duration % 60))

        setVideoCurrentTime(video.currentTime)
        setVideoDuration(video.duration)

        setWatchedBar({ ...watchedBar, percentage: Math.floor(100 / video.duration * video.currentTime) })   // setDurationTime({ ...duration, time: (video.current.currentTime / video.current.current.duration) * 100 })
        // https://www.youtube.com/watch?v=5nf24no8dKU
    }
    return { watchedBar, currentHours, currentMinutes, currentSeconds, durationHours, durationMinutes, durationSeconds, videoCurrentTime, videoDuration, handlePercentualUpdate }
}

// ##################### feature (Progress Bar) #####################
const useProgress = () => {
    const video = document.querySelector(".video")
    const bar = document.querySelector(".progress-bar")

    const progressBar = (event) => {
        const pos = (event.pageX + (bar.offsetLeft - bar.offsetParent.offsetLeft)) / bar.offsetWidth;
        video.currentTime = pos * video.duration;
    }
    return { progressBar }
}

// ##################### feature (player paused) #####################
const usePlayPaused = () => {
    const [togglePlay, setTogglePlay] = useState({ playVideo: false }) // state
    const [opacity, setOpacity] = useState(true)
    const [stateActive, setStateActive] = useState()

    useEffect(() => {
        const video = document.querySelector(".video")

        togglePlay.playVideo ? video.play() : video.pause()
        console.log(togglePlay.playVideo, "togglePlay.playVideo")

        if (togglePlay.playVideo === true) {
            setStateActive(true)
            setOpacity(true)
            setTimeout(() => setOpacity(false), 4000)
        }

        if (togglePlay.playVideo === false) {
            setOpacity(null)
            setStateActive(false)
        }

    }, [togglePlay.playVideo])

    const play = () => {
        setTogglePlay({ ...togglePlay, playVideo: !togglePlay.playVideo })
        window.scrollTo({ //scroll top
            top: 0,
            behavior: 'instant'
        })
    }
    return { stateActive, opacity, setOpacity, setStateActive, togglePlay, setTogglePlay, play }
}

//##################### feature (next-video) #####################
const useNextVideoPlayList = (playlist, togglePlay, setTogglePlay, setPlayList, stateActive, setStateActive) => {
    const [playlistMain, setPlayListMain] = useState()
    const [count, setCount] = useState(1)

    // iniciar a play list com um video
    useEffect(() => {
        const video = document.querySelector(".video")

        playlistMock.map((el, i, arr) => {
            if (count >= arr.length) setCount(1)
            if (el.id === count) {
                setPlayListMain(video.innerHTML = (playlist.length === 0 ? el.video : playlist))
            }
        })
    })

    // função
    const nextVideo = () => {
        const video = document.querySelector(".video")
        setPlayList([])
        setCount(prev => prev + 1)
        if (togglePlay.playVideo === false) setTogglePlay({ ...togglePlay, playVideo: true })
        if (stateActive === true) setStateActive(false)

        playlistMock.map((el, i, arr) => {
            if (count >= arr.length) setCount(1)
            if (el.id === count) setPlayListMain(video.innerHTML = el.video)
        })
    }
    return { playlistMain, nextVideo }
}

// ##################### feature (volume mute) #####################
const useVolume = () => {
    const [toggleVolume, setToggleVolume] = useState(true) // state
    const [currentVolume, setCurrenVolume] = useState()     // state

    const video = document.querySelector(".video")

    const MuteVolume = () => {
        if (video.volume) {
            setCurrenVolume(video.volume = 0)
            setToggleVolume(false)
            video.value = 0
        } else {
            video.volume = 1
            video.value = 1
            setToggleVolume(true)
        }
    }

    const rangeVolume = (e) => {
        setCurrenVolume(video.volume = e.target.value)

        if (video.volume >= 0.1) {
            setToggleVolume(true)
        } else {
            setToggleVolume(false)
        }
    }

    return { toggleVolume, currentVolume, MuteVolume, rangeVolume }
}

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
const usePlaylistSide = (togglePlay, setTogglePlay) => {
    const [playlist, setPlayList] = useState([])
    // useEffect(() => {
    //     rocketSeatMock.map(vid => {
    //         setPlayList(prev => [...prev, vid.video])
    //         setPlayList([...playlist, vid.video])
    //     })
    // },[])
    const Handleplaylist = (event) => {
        window.scrollTo({ //scroll top
            top: 0,
            behavior: 'instant'
        })
        // parâmetros
        // smooth: a rolagem deve ser animada suavemente
        // instant: a rolagem deve acontecer instantaneamente em um único salto
        // auto: o comportamento de rolagem é determinado pelo valor calculado
        // element.scrollTo({
        //     top: 100,
        //     left: 100,
        //     behavior: "smooth",
        //   });
        // https://developer.mozilla.org/pt-BR/docs/Web/API/Window/scroll
        // 
        // setTogglePlay({ ...togglePlay, playVideo: true })
        setPlayList(event.target.currentSrc.substr(21)) // excluindo 21 caracteres e setando os restantes
    }

    return { playlist, setPlayList, Handleplaylist }
}

//##################### feature (Play-List) #####################
const usePlayList = () => {
    const video = document.querySelectorAll('.video-play-list');
  
    const mouseEnterPlayList = (e) => {
        for (let i = 0; i < video.length; i++) {
            if(video[i].id === e.target.id) {
                video[i].play()
                // video[i].muted = false
            }
        }
    }
    const mouseLeavePlayList = (e) => {
        for (let i = 0; i < video.length; i++) {
            if(video[i].id === e.target.id) {
                video[i].pause()
                video[i].currentTime = 0
            }
        }
    }

    return { mouseEnterPlayList, mouseLeavePlayList }
}

// barra de progresso do download
const useVideoLoaded = () => {
    // const video = document.querySelector('.video')
    // const videoProgress = () => {
    //     if(video.duration > 0){
    //         for(let i = 0; i < video.buffered.length; i++) {
    //             if(video.buffered.start(video.buffered.length - 1 - i) < video.currentTime) {
    //                 setVideoLoaded((video.buffered.end(video.buffered.length - 1 - i) * 100) / video.duration)
    //             }
    //         }
    //     }
    // }
    const vid = document.querySelector('.video');
    const canvas = document.getElementById('canvas');

    function drawProgress(canvas, buffered, duration) {
        // I've turned off anti-aliasing since we're just drawing rectangles.
        const context = canvas.getContext('2d', { antialias: false });
        context.fillStyle = 'rgba(192,192,192, 0.4)';
        context.globalAlpha = 1

        let width = canvas.width;
        let height = canvas.height;
        if (!width || !height) throw "Canvas's width or height weren't set!";
        context.clearRect(0, 0, width, height); // clear canvas


        for (let i = 0; i < buffered.length; i++) {
            let leadingEdge = buffered.start(i) / duration * width;
            let trailingEdge = buffered.end(i) / duration * width;
            context.fillRect(leadingEdge, 0, trailingEdge - leadingEdge, height)

        }
    }
    //   https://stackoverflow.com/questions/18422517/html5-video-buffered-attribute-features

    const videoProgress = () => {
        drawProgress(canvas, vid.buffered, vid.duration);

        // if (video.buffered.length > 0) setVideoLoaded((video.buffered.end(0) / video.duration) * 100)
        // if (video.buffered.length > 0) setVideoLoaded(100 * video.buffered.end(0) / video.duration)
    }
    return { videoProgress }
    // https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/buffering_seeking_time_ranges
    // https://css-tricks.com/some-innocent-fun-with-html-video-and-progress/
    // https://stackoverflow.com/questions/75265880/how-to-show-the-progress-bar-when-video-play-100
}

// Chame uma função quando o vídeo estiver começando a carregar:
// const useLoadstart = () => {
//     const [start, setStart] = useState()

//     const loadStart = () => {
//         setStart(true)
//     }
//     return { start, loadStart }
// }

// Chame uma função quando um vídeo estiver pronto para começar a ser reproduzido:
// const useCanplay = () => {
//     const [fim, setFim] = useState()

//     const canplay = () => {
//         setFim(false)
//     }
//     return { fim, canplay }
// }

// Chame uma função quando um usuário busca uma nova posição em um vídeo:
// const useOnSeeked = (setVideoLoaded) => {
//     const video = document.querySelector('.video')

//     const onSeeked = () => {

//         setVideoLoaded(100 * (video.buffered.end(0) / video.duration))
//     }
//     return { onSeeked }
// }

// const useTimer = () => {

// useEffect(() => {
//     let myInterval = setInterval(() => {
//         if (seconds > 0) {
//             setSeconds(seconds + 1)
//         }
//     }, 1000)
//     return () => {
//         clearInterval(myInterval)
//     }
// })
// }



// component 

const useRepeatVideo = (cTime, d, setStateActive) => {
    const [endVideo, setEndvideo] = useState(false)
    const [displayPausePlay, setDisplayPausePlay] = useState(true)
    const video = document.querySelector('.video');

    const repeatPlay = () => {
        video.play()
    }

    useEffect(() => {
        if (Math.floor(cTime) === Math.floor(d)) {
            setEndvideo(true)
            setDisplayPausePlay(false)
            setStateActive(false)
        } else {
            setEndvideo(false)
            setDisplayPausePlay(true)
        }
    })
    return { endVideo, displayPausePlay, repeatPlay }
}

const ComponentVideo = () => {
    const { stateActive, setStateActive, opacity, setOpacity, togglePlay, setTogglePlay, play } = usePlayPaused()
    const { toggleVolume, currentVolume, MuteVolume, rangeVolume } = useVolume()
    const { toggleFullScreen } = useFullScreen()
    const { videoProgress } = useVideoLoaded()
    const { watchedBar, currentHours, currentMinutes, currentSeconds, durationHours, durationMinutes, durationSeconds, videoCurrentTime, videoDuration, handlePercentualUpdate } = useTimeUpDate()
    const { progressBar } = useProgress()
    const { width, mouseEnter, mouseLeave } = useWidthVolume()
    const { settings, setSettings } = useDisplaySettings()
    const { playlist, setPlayList, Handleplaylist } = usePlaylistSide(togglePlay, setTogglePlay)
    const { playlistMain, nextVideo } = useNextVideoPlayList(playlist, togglePlay, setTogglePlay, setPlayList, stateActive, setStateActive)
    const { endVideo, displayPausePlay, repeatPlay } = useRepeatVideo(videoCurrentTime, videoDuration, setStateActive)
    const { mouseEnterPlayList, mouseLeavePlayList } = usePlayList()

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
        if (togglePlay.playVideo === true) setStateActive(true)
    }

    return (
        <>
            <VideoContainer className="video-Container" onClick={() => settings === true ? setSettings(false) : undefined}>

                <Video onMouseMove={() => mouseMove()} opacity={opacity} onProgress={() => videoProgress()} onClick={() => { play() }} src={playlistMain} className={`video`} controlsList="nodownload" preload="auto|metadata|none" type="video/mp4" onTimeUpdate={handlePercentualUpdate} />

                <ControlsContainer onMouseOut={() => mouseLeaveFN()} onMouseOver={(e) => mouseEnterFN(e)} togglePlay={togglePlay.playVideo} className={`controls-container ${stateActive === true ? "state" : ""}`}>
                    <ProgressControls>
                        <ProgressBar className="progress-bar" onMouseDown={(e) => progressBar(e)}>
                            <canvas id="canvas" style={{ width: "100%", height: "100%" }}></canvas>
                            <Progress className="progress">
                                <WatchedProgress>
                                    <WatchedBar className="watched-bar" watchedBar={watchedBar}></WatchedBar>
                                    <Playhead className="playhead" watchedBar={watchedBar}></Playhead>
                                </WatchedProgress>
                            </Progress>
                        </ProgressBar>
                    </ProgressControls>

                    <Controls togglePlay={togglePlay}>
                        <LeftSideControls onMouseLeave={() => mouseLeave()} toggleVolume={toggleVolume}>
                            <div style={{ display: "flex" }}>
                                <div className="play-pause-btn btn" onClick={() => play()}>
                                    {displayPausePlay &&
                                        <>
                                            <img className="play" src={svgPlay} alt="" width="20px" />
                                            <img className="pause" src={svgPause} draggable="false" alt="" width="20px" />
                                        </>
                                    }
                                </div>
                                <div onClick={() => repeatPlay()} style={{ display: "flex", justifyContent: "center", position: "absolute", alignItems: "center", width: "45px" }}>
                                    <Circle endVideo={endVideo}>
                                        <Triangulo />
                                    </Circle>
                                </div>
                            </div>
                            <div className="next-video-btn btn" onClick={() => nextVideo()}>
                                <img draggable="false" src={svgNext} alt="" width="15px" />
                            </div>
                            <VolumeControl className="volume-control">
                                <div className="volume-btn btn" onClick={() => MuteVolume()}>
                                    <div onMouseEnter={() => mouseEnter()}>
                                        <img className="full-volume" draggable="false" alt="" width="20px" src={currentVolume <= 0.5 ? svgHalfVolume : svgVolume} />
                                        <img className="muted" src={svgMute} draggable="false" alt="" width="20px" />
                                    </div>
                                </div>

                                <VolumePanel width={width}>
                                    <div className="input-div">
                                        <div className="volume-input-div">
                                            <input onChange={(e) => rangeVolume(e)} type="range" max="1" min="0" step="0.1" />
                                            <div className="volume-progress"></div>
                                        </div>
                                    </div>
                                </VolumePanel>
                            </VolumeControl>

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

                        <RightSideControls>
                            <div className="settings" onClick={() => setSettings(!settings)}>
                                <img src={svgSettings} draggable="false" alt="" width="20px" />
                            </div>
                            <div className="full-screen-btn btn" onClick={() => toggleFullScreen()}>
                                <img className="maximize" draggable="false" src={svgMaximize} alt="" width="18px" />
                                <img className="minimize" draggable="false" src={svgMinimize} alt="" width="20px" />
                            </div>
                        </RightSideControls>

                        <SettingsMenu className="settings-menu" settings={settings}>
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
                <Primary>
                    <SitesReference />
                </Primary>
                <Secondary>
                    {rocketSeatMock.map((el, index, arr) => {
                        return (
                            <React.Fragment key={el.id}>
                                {/* solução para selecionar um item no map com ref é >>> https://stackoverflow.com/questions/63059962/reactjs-map-with-a-ref-to-each-component */}
                                <SecondaryContainerVideo>
                                    {/* <video ref={ref =>  refPlaylist[index] = ref} id="videos-playlist"  onClick={() => Handleplaylist()}> */}
                                    <video className="video-play-list" id={index} onClick={(event) => Handleplaylist(event)} onMouseEnter={(event) => mouseEnterPlayList(event)} onMouseLeave={(event) => mouseLeavePlayList(event)} muted type="video/mp4" src={el.video} />
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