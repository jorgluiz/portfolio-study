import React, { useState, useEffect, useRef } from "react";
import eminemWithoutMe from "../../assets/videos/EminemWithoutMe.mp4"

import { H1, DivExternaGreen, Sobrepor, Posterior, Progresso, Play, Pause, DivFlexBox, ControlsVideo, Ranger, Advance, Rewind, Video, ContainerVideo } from "./styles";

// img capa
import capavideo from "../../assets/videos/capaVideo/eminem.jpg"

// const [videoRef, setVideoRef] = useState() //useReducer é um "objeto" que armazena varios state menores

// ##################### feature (player video) #####################
const usePlayerState = (refVideo) => {
    // state
    const [playerState, setPlayerState] = useState({
        playing: false
    })

    useEffect(() => {
        playerState.playing ? refVideo.current.play() : refVideo.current.pause()
    }, [playerState.playing])

    const toggleVideoPlay = () => {
        setPlayerState({ ...playerState, playing: !playerState.playing })
    }

    return { playerState, toggleVideoPlay }
}

// ##################### feature (percentual video) #####################
const usePercentual = (refVideo) => {
    // state
    const [currentTime, setCurrentTime] = useState({ percentage: 0 })

    const handleTimeUpdate = () => {
        const currentPercentual = (refVideo.current.currentTime / refVideo.current.duration) * 100
        setCurrentTime({ ...currentTime, percentage: currentPercentual })
    }

    return { handleTimeUpdate, currentTime }
}

// ##################### feature (duração video) #####################
const useCurrentTimeDuration = (refVideo) => {
    // state
    const [currentTimeDuration, setCurrentTimeDuration] = useState(0)

    useEffect(() => {
        setCurrentTimeDuration(refVideo.current.currentTime)
    })

    return { currentTimeDuration }
}

// ##################### feature (audio video) #####################
const useVolume = (refVideo) => {
    // state
    const [targetVolume, setTargetVolume] = useState(1)

    const handleVolume = (e) => {
        setTargetVolume(refVideo.current.volume = e.target.value)
    }

    return { handleVolume, targetVolume }
}

// ##################### feature (avançar video) #####################
const useAdvanceTime = (refVideo) => {
    const [time10, setTime10] = useState()

    const advance = () => {
        setTime10(refVideo.current.currentTime = refVideo.current.currentTime + 10)
    }

    return { advance }
}

// ##################### feature (retroceder video) #####################
const useRewindTime = (refVideo) => {
    const [time10, setTime10] = useState()

    const rewind = () => {
        if (refVideo.current.currentTime > 0)
            setTime10(refVideo.current.currentTime = refVideo.current.currentTime - 10)
    }

    return { rewind }
}

const useFullScreen = (refVideo) => {

    const handleFullScreen = () => {
        refVideo.current.requestFullscreen()
        // console.log(refVideo)
        // refVideo.current.webkitDisplayingFullscreen = true
    }

    // console.log(refVideo.current.videoHeight)
    // console.log(refVideo.current.videoWidth)
    return { handleFullScreen }
}

// ### component ###
const Tests = () => {

    // state
    const [count, setCount] = useState(0)
    const [toggle, setToggle] = useState("green")

    useEffect(() => {
        if (count === 100) setCount(0)
    }, [count])

    // ref element
    const refVideo = useRef(0)

    // function
    const { playerState, toggleVideoPlay } = usePlayerState(refVideo)
    const { handleTimeUpdate, currentTime } = usePercentual(refVideo)
    const { handleVolume, targetVolume } = useVolume(refVideo)
    const { advance } = useAdvanceTime(refVideo)
    const { rewind } = useRewindTime(refVideo)
    const { currentTimeDuration } = useCurrentTimeDuration(refVideo)
    const { handleFullScreen } = useFullScreen(refVideo)

    return (
        <div style={{ display: "column", marginTop: "30px" }}>
            <div style={{ display: "flex", marginBottom: "30px", justifyContent: "space-between", flexWrap: "wrap" }}>
                <div style={{ marginRight: "50px" }}>
                    <div style={{ width: "100px", overflow: "hidden" }}>
                        <H1 count={count}>{count.toFixed(0).concat("%")}</H1>
                    </div>
                    <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
                </div>

                <DivExternaGreen toggle={toggle} onClick={() => toggle === "green" ? setToggle("red") : setToggle("green")}>
                    <Sobrepor></Sobrepor>
                    <Posterior></Posterior>
                </DivExternaGreen>

                <div>
                    <p style={{ color: "blueviolet" }}>align-items: center = blueviolet</p> <p>justify-content: center = black</p>
                    <DivFlexBox>
                        <div></div>
                    </DivFlexBox>
                </div>

                {/* <div style={{width: '350px', border: "1px solid black"}}>opaaaaa</div> */}
            </div>

            <span style={{ marginTop: "30px" }}><a href="https://developers.google.com/youtube/player_parameters?hl=pt-br">YouTube API do iframe</a></span>

            <div style={{ display: "flex", flexDirection: "column", marginTop: "30px" }}>
                <span style={{ marginBottom: "24px" }}><strong>Carregar um vídeo</strong></span>
                <iframe allowFullScreen width="450" height="500" title="youtube video" src="http://www.youtube.com/embed/eVwTlOuzT0Q" />
            </div>

            <div style={{ display: "flex", flexDirection: "column", margin: "30px 0 30px 0" }}>
                <span style={{ marginBottom: "24px" }}><strong>Carregar uma playlist</strong></span>
                <iframe allowFullScreen width="450" height="500" title="youtube video playList" src="http://www.youtube.com/embed?listType=playlist&list=PL85ITvJ7FLognHmYKYmHPZEr47nNqLjRh" />
            </div>

            {/* ============================================================================================================================================================ */}

            <span style={{ display: "block" }}>Tag video</span>
            <a href="https://www.youtube.com/watch?v=ZaYvwn9nBD4">referência</a>

            <div style={{ display: "flex", flexDirection: "column", marginTop: "30px" }}>

                <ControlsVideo>
                    <ContainerVideo>
                        <Progresso percentage={currentTime.percentage.toFixed(1)}>
                            <div>{currentTime.percentage.toFixed(1)}</div>
                        </Progresso>

                        <Play onClick={toggleVideoPlay}>
                            {playerState.playing ? "Pause" : "Play"}
                        </Play>

                        <Ranger type="range" max="1" min="0" step="0.1" onChange={(e) => handleVolume(e)}></Ranger>
                        {/* <Ranger type="range" max="1" min="0" value={targetVolume} step="0.1" onChange={(e) => handleVolume(e)}></Ranger> */}

                        <div>Duração vídeo: {currentTimeDuration.toFixed(0)}</div>

                        <Advance onClick={() => advance()}>{">>"} 10</Advance>
                        <Rewind onClick={() => rewind()}>10 {"<<"}</Rewind>

                        <div onClick={() => handleFullScreen()} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <div style={{ display: "flex", marginBottom: "5px" }}>
                                <div style={{ width: "10px", height: "10px", borderLeft: "solid 3px #000000", borderTop: "solid 3px #000000", marginRight: "5px" }}></div>
                                <div style={{ width: "10px", height: "10px", borderRight: "solid 3px #000000", borderTop: "solid 3px #000000" }}></div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <div style={{ width: "10px", height: "10px", borderLeft: "solid 3px #000000", borderBottom: "solid 3px #000000", marginRight: "5px" }}></div>
                                <div style={{ width: "10px", height: "10px", borderRight: "solid 3px #000000", borderBottom: "solid 3px #000000" }}></div>
                            </div>
                        </div>
                    </ContainerVideo>

                    <div className="html5-video-container" data-layer="0">
                        {/* obtendo referencia do elemento video >>>  ref={refVideo} */}
                        <Video ref={refVideo} controlsList="nodownload" autoPlay preload="auto" width="450" height="100%" onTimeUpdate={handleTimeUpdate} poster={capavideo} src={eminemWithoutMe} />
                    </div>
                </ControlsVideo>
            </div>
            {/* ============================================================================================================================================================ */}

            
        </div>
    )
}

export default Tests


// {refVideo.current.currentTime.toFixed(0) !== undefined &&

//     <div>{refVideo.current.currentTime.toFixed(0)}</div>
// }