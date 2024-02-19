import { useState, useEffect, useRef } from "react";
import engrenagem from "../../assets/engrenagem.png"
import eventLoopAnimation from "../../assets/eventLoopAnimation.gif"
import styled from "styled-components"

const Container = styled.div`
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
height: 100vh;

& .trianguloLeft {
width: 0px;
height: 0px;
border: 2px solid;
border-width: 10px 10px 10px 10px;
border-color: transparent #000 transparent transparent;
}
& .trianguloRight {
width: 0px;
height: 0px;
border: 2px solid;
border-width: 10px 10px 10px 10px;
border-color: transparent transparent transparent #000 ;
}

& .requeste1 {
    display: flex;
    width: 90%;
    height: 15%;
    background: #0066ec;
    margin-bottom: 5px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    color: #fff;

    position: absolute;
    animation-name:  requeste01;
    animation-duration: 10s;
    /* animation-iteration-count: infinite; */
    animation-fill-mode: forwards;
    animation-play-state: ${({ playRequest01 }) => playRequest01 === true ? "paused" : "running"};
    /* animation-fill-mode:  forwards; */
    /* animation-timing-function: "linear"; */

    @keyframes requeste01 {
        from {top: 30px; left: auto}
        25% {top: -90px; left: 0px;}
        50% {top: -90px; left: 815px;}
        70% {top: 150px; left: 815px;}
        71% {top: 150px; left: 815px; background-color: green}
        80% {top: 210px; left: 815px;}
        85% {top: 210px; left: 0px;}
        90% {top: -3px; left: 0px;}
        to {top: -60px; left: -200px;}
    }
}

& .requeste2 {
    display: flex;
    width: 90%;
    height: 15%;
    background: #0066ec;
    margin-bottom: 5px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    color: #fff;

    position: absolute;
    animation-name:  requeste02;
    animation-duration: 10s;
    /* animation-iteration-count: infinite; */
    animation-fill-mode: forwards;
    animation-play-state: ${({ playRequest02 }) => playRequest02 === true ? "paused" : "running"};

    @keyframes requeste02 {
        from {top: 70px; left: auto}
        25% {top: -90px; left: 0px;}
        50% {top: -90px; left: 815px;}
        70% {top: 150px; left: 815px;}
        71% {top: 150px; left: 815px; background-color: green}
        80% {top: 210px; left: 815px;}
        85% {top: 210px; left: 0px;}
        90% {top: -3px; left: 0px;}
        to {top: 35px; left: -200px;}
    }
}

& .requeste3 {
    display: flex;
    width: 90%;
    height: calc(100% - 85%);
    background: #0066ec;
    top: -100px;
    margin-bottom: 5px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    color: #fff;

    position: absolute;
    animation-name:  requeste03;
    animation-duration: 10s;
    /* animation-iteration-count: infinite; */
    animation-fill-mode: forwards;
    animation-play-state: ${({ playRequest03 }) => playRequest03 === true ? "paused" : "running"};

    @keyframes requeste03 {
        from {top: 109px; left: auto}
        25% {top: -90px; left: 0px;}
        50% {top: -90px; left: 815px;}
        70% {top: 150px; left: 815px;}
        71% {top: 150px; left: 815px; background-color: green}
        80% {top: 210px; left: 815px;}
        85% {top: 210px; left: 0px;}
        90% {top: -3px; left: 0px;}
        to {top: 130px; left: -200px;  content: " de Transfer";}
    }
}
& .requeste4 {
    display: flex;
    width: 90%;
    height: calc(100% - 85%);
    background: #0066ec;
    margin-bottom: 5px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    color: #fff;

    position: absolute;
    animation-name:  requeste04;
    animation-duration: 10s;
    /* animation-iteration-count: infinite; */
    animation-fill-mode: forwards;
    animation-play-state: ${({ playRequest04 }) => playRequest04 === true ? "paused" : "running"};

    @keyframes requeste04 {
        from {top: 150px; left: auto}
        25% {top: -90px; left: 0px;}
        50% {top: -90px; left: 815px;}
        70% {top: 150px; left: 815px;}
        71% {top: 150px; left: 815px; background-color: green}
        80% {top: 210px; left: 815px;}
        85% {top: 210px; left: 0px;}
        90% {top: -3px; left: 0px;}
        to {top: 230px; left: -200px;}
    }
}
`;

const Functions = styled.div`

`;

const Boneco = styled.div`

display: flex;
flex-direction: column;
align-items: center;

& .cabeca {
    border: 1px solid #111;
    width: 20px;
    height: 20px;
    border-radius: 50%;
}
& .corpo {

border: 1px solid #555;
width: 40px;
height: 40px;
border-radius: 150px 150px 0 0;
}
`;

const CallStack = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
position: relative;
border: 1px solid #555;
height: 200px;
width: 250px;
`;

const Rotate = styled.div`
 width: "200px";

animation-name:  rotateCircle;
animation-duration: 4s;
animation-iteration-count: infinite;
animation-timing-function: linear;
animation-play-state: ${({ circleRotate }) => circleRotate === true ? "running" : "paused"};

    @keyframes rotateCircle {
        from {transform: rotate(0);}
        to {transform: rotate(360deg);}
    }
`;

// https://acervolima.com/como-desenhar-um-semicirculo-usando-html-e-css/'
const CircleTop = styled.div`

display: flex;
justify-content: center;
align-items: center;
bottom: 0;
border: 5px solid #555;
width: 200px;
height: 100px;
border-radius: 150px 150px 0 0;
border-bottom: 0;

& + div > .rightCircle {
    position: relative;
    bottom: -20px;
    transform: rotate(180deg);
}
`;

const CircleBotton = styled.div`

border: 5px solid #555;
width: 200px;
height: 100px;
border-radius: 0 0 150px 150px;
border-top: 0;
margin-top: 20px;
`;

const TaskQueue = styled.div`

display: flex;
flex-direction: column-reverse;
align-items: center;
justify-content: space-around;
position: relative;
border: 1px solid #555;
height: 200px;
width: 250px;

`;

const RotateEngre = styled.div`

display: flex;
justify-content: center;
align-items: center;
border: 1px solid #555;
height: 100px;
width: 100px;
transform: rotate(230deg);
border-radius: 10px;
margin-top: 50px;

& .rotateEngre {
animation-name: rotateEngre;
animation-iteration-count: infinite;
animation-timing-function: ease-in-out;
animation-duration: 10s;
animation-play-state: ${({ activeEngre }) => activeEngre === false ? "paused" : "running"};

    @keyframes rotateEngre {
        from {transform: rotate(0deg)}
        to {transform: rotate(360deg)}
    }
}
`;

// @@@ COMPONENT @@@  @@@ COMPONENT @@@  @@@ COMPONENT @@@  @@@ COMPONENT @@@  @@@ COMPONENT @@@
const EventLoop = () => {
  const [playRequest01, SetPlayRequest01] = useState(false)
  const [playRequest02, SetPlayRequest02] = useState(true)
  const [playRequest03, SetPlayRequest03] = useState(true)
  const [playRequest04, SetPlayRequest04] = useState(true)

  const [timeSeconds01, setTimeSeconds01] = useState(0)
  const [timeSeconds02, setTimeSeconds02] = useState(0)
  const [timeSeconds03, setTimeSeconds03] = useState(0)
  const [timeSeconds04, setTimeSeconds04] = useState(0)

  const [cancelTimeOut01, setCancelTimeOut01] = useState()
  const [cancelTimeOut02, setCancelTimeOut02] = useState()
  const [cancelTimeOut03, setCancelTimeOut03] = useState()
  const [cancelTimeOut04, setCancelTimeOut04] = useState()

  const [activateTime01, setActivateTime01] = useState(true)
  const [activateTime02, setActivateTime02] = useState(true)
  const [activateTime03, setActivateTime03] = useState(true)
  const [activateTime04, setActivateTime04] = useState(true)

  const [circleRotate, SetCircleRotate] = useState(false)
  const [activeEngre, SetActiveEngre] = useState(false)
  const [arequestResponse01, SetRequestResponse01] = useState(false)
  const [arequestResponse02, SetRequestResponse02] = useState(false)
  const [arequestResponse03, SetRequestResponse03] = useState(false)
  const [arequestResponse04, SetRequestResponse04] = useState(false)

  useEffect(() => {
    if (activateTime01 === true) setTimeout(() => setTimeSeconds01(timeSeconds01 + 1), 1000)

    SetCircleRotate(true)

    //    paused animation
    if (timeSeconds01 === 7) {
      SetPlayRequest01(!playRequest01) // paused animation
      setActivateTime01(false)
      SetActiveEngre(!activeEngre)
    }
    if (timeSeconds01 >= 10) setTimeSeconds01(0)
    // ----------------------------------------
    // ----------------------------------------
    // ----------------------------------------
    if (timeSeconds01 === 8) {
      if (activateTime02 === true) {
        SetPlayRequest02(false) // running animation
        setTimeout(() => setTimeSeconds02(timeSeconds02 + 1), 1250)
      }

      if (timeSeconds02 === 5) {
        SetPlayRequest02(true) // paused animation
        setActivateTime02(false)
      }
      if (timeSeconds02 >= 10) setTimeSeconds02(0)
    }
    // ----------------------------------------
    // ----------------------------------------
    // ----------------------------------------
    if (timeSeconds02 === 6) {
      if (activateTime03 === true) {
        SetPlayRequest03(false) // running animation
        setTimeout(() => setTimeSeconds02(timeSeconds02 + 1), 1050)
      }

      if (timeSeconds02 === 6) {
        SetPlayRequest02(true) // paused animation
        setActivateTime02(false)
      }
      if (timeSeconds02 >= 10) setTimeSeconds02(0)
    }
    // ----------------------------------------
    // ----------------------------------------
    // ----------------------------------------
    if (timeSeconds02 >= 6) {
      if (activateTime03 === true) {
        SetPlayRequest03(false) // running animation
        setTimeout(() => setTimeSeconds03(timeSeconds03 + 1), 1160)
      }

      if (timeSeconds03 === 5) {
        SetPlayRequest03(true) // paused animation
        setActivateTime03(false)
      }
      if (timeSeconds03 >= 10) setTimeSeconds03(0)
    }
    // ----------------------------------------
    // ----------------------------------------
    // ----------------------------------------
    console.log(timeSeconds03, "timeSeconds03")
    if (timeSeconds03 >= 6) {
      if (activateTime04 === true) {
        SetPlayRequest04(false) // running animation
        setTimeout(() => setTimeSeconds04(timeSeconds04 + 1), 1100)
      }
      if (timeSeconds04 === 5) {
        SetPlayRequest04(true) // paused animation
        setActivateTime04(false)
      }// else if (playRequest01 === true && playRequest02 === true && playRequest03 === true && playRequest04 === true) {
      //     SetPlayRequest01(false)
      // } else if (playRequest01 === false && playRequest02 === true && playRequest03 === true && playRequest04 === true) {
      //     SetPlayRequest02(false)
      // } else if (playRequest01 === false && playRequest02 === false && playRequest03 === true && playRequest04 === true) {
      //     SetPlayRequest03(false)
      // } else if (playRequest01 === false && playRequest02 === false && playRequest03 === false && playRequest04 === true) {
      //     SetPlayRequest04(false)
      // }

      // CONTINUE ANIMAÇÃO ### ### ###
      switch (playRequest01, playRequest02, playRequest03, playRequest04) {
        case playRequest01 === true && playRequest02 === true && playRequest03 === true && playRequest04 === true:
          SetPlayRequest01(false);
          SetRequestResponse01(true);
          break;
        case playRequest01 === false && playRequest02 === true && playRequest03 === true && playRequest04 === true:
        case playRequest01 === false && playRequest02 === false && playRequest03 === true && playRequest04 === true:
        case playRequest01 === false && playRequest02 === false && playRequest03 === false && playRequest04 === true:
          SetPlayRequest02(false);
          SetRequestResponse02(true);
          setTimeout(() => { SetPlayRequest03(false), SetRequestResponse03(true) }, 2000)
          setTimeout(() => {
            SetPlayRequest04(false)
            SetActiveEngre(false)
            SetCircleRotate(false)
            SetRequestResponse04(true)
          }, 8000)
          break;
      }

      if (timeSeconds04 >= 10) setTimeSeconds04(0)
    }
  }, [timeSeconds01, timeSeconds02, timeSeconds03, timeSeconds04])

  return (
    <>
      <Container playRequest01={playRequest01} playRequest02={playRequest02} playRequest03={playRequest03} playRequest04={playRequest04}>
        <div style={{ position: "relative", width: "1200px" }}>
          <div style={{ position: "absolute", right: "0", top: "0" }}>
            <RotateEngre activeEngre={activeEngre} SetActiveEngre={SetActiveEngre}>
              <div>
                <img className="rotateEngre" src={engrenagem} alt="" />
              </div>
            </RotateEngre>
            <div style={{ textAlign: "end", marginLeft: "40px" }}>
              <p><strong>Worker</strong></p>
              <p><strong>Thread Pool</strong></p>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", height: "100%", width: "100%" }}>
          {/* <Functions>
                    <p className="consoleInicio">{`console.log('início do programa')`}</p>
                    <p className="setTimeout2">{`setTimeout(() => console.log("aguardando 2 segundos"), 2000)`}</p>
                    <p className="setTimeout5">{`setTimeout(() => console.log("aguardando 5 segundos"), 5000)`}</p>
                    <p className="consoleFim">{`console.log('fim do programa')`}</p>
                </Functions> */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Boneco>
              <div className="cabeca"></div>
              <div className="corpo"></div>
            </Boneco>
            <p>Resquest 1</p><br />
            <div style={{ position: "absolute", display: "flex", top: "200px", left: "122px", alignItems: "center", transform: "rotate(210deg)" }}>
              <div className="trianguloLeft"></div>
              <div style={{ width: "90px", borderBottom: "2px solid #111", left: "140px" }}></div>
              <div className="trianguloRight"></div>
            </div>
            <Boneco>
              <div className="cabeca"></div>
              <div className="corpo"></div>
            </Boneco>
            <p>Resquest 2</p><br />
            <div style={{ position: "absolute", top: "270px", display: "flex", left: "122px", alignItems: "center", transform: "rotate(10deg)" }}>
              <div className="trianguloLeft"></div>
              <div style={{ width: "90px", borderBottom: "2px solid #111", left: "140px" }}></div>
              <div className="trianguloRight"></div>
            </div>
            <Boneco>
              <div className="cabeca"></div>
              <div className="corpo"></div>
            </Boneco>
            <p>Resquest 3</p><br />
            <div style={{ position: "absolute", top: "360px", display: "flex", left: "122px", alignItems: "center" }}>
              <div className="trianguloLeft"></div>
              <div style={{ width: "90px", borderBottom: "2px solid #111", left: "140px" }}></div>
              <div className="trianguloRight"></div>
            </div>
            <Boneco>
              <div className="cabeca"></div>
              <div className="corpo"></div>
            </Boneco>
            <p>Resquest 4</p><br />
            <div style={{ position: "absolute", top: "430px", display: "flex", left: "122px", alignItems: "center", transform: "rotate(-20deg)" }}>
              <div className="trianguloLeft"></div>
              <div style={{ width: "90px", borderBottom: "2px solid #111", left: "140px" }}></div>
              <div className="trianguloRight"></div>
            </div>
          </div>

          <div>
            <div style={{ backgroundColor: "green", height: "30px", textAlign: "center" }}>
              <p style={{ color: "#fff" }}><strong>Call stack (Pilha de chamadas)</strong></p>
            </div>
            <CallStack>
              <div className="requeste1">{arequestResponse01 === true ? "response" : "task 1"}</div>
              <div className="requeste2">{arequestResponse02 === true ? "response" : "task 2"}</div>
              <div className="requeste3">{arequestResponse03 === true ? "response" : "task 3"}</div>
              <div className="requeste4">{arequestResponse04 === true ? "response" : "task 4"}</div>
            </CallStack>
          </div>

          <p id="demo"></p>

          <Rotate circleRotate={circleRotate}>
            <CircleTop>
              <div>
                <p>Event Loop</p>
                <p>sigle-threader</p>
              </div>
            </CircleTop>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <div style={{ position: "relative", bottom: "-5px", width: "0", height: "0", transform: "skewX(20deg)" }}>
                  <div style={{ height: "20px", width: 0, borderLeft: "10px solid #000" }}></div>
                </div>
                <div style={{ position: "relative", bottom: "-5px", width: "0", height: "0", transform: "skewX(-20deg)" }}>
                  <div style={{ height: "20px", width: 0, borderLeft: "2px solid #000" }}></div>
                </div>
              </div>
              <div className="rightCircle">
                <div style={{ position: "relative", bottom: "-5px", width: "0", height: "0", transform: "skewX(20deg)" }}>
                  <div style={{ height: "20px", width: 0, borderLeft: "10px solid #000" }}></div>
                </div>
                <div style={{ position: "relative", bottom: "-5px", width: "0", height: "0", transform: "skewX(-20deg)" }}>
                  <div style={{ height: "20px", width: 0, borderLeft: "2px solid #000" }}></div>
                </div>
              </div>
            </div>
            <CircleBotton></CircleBotton>
          </Rotate>


          <div>
            <div style={{ backgroundColor: "green", height: "30px", textAlign: "center" }}>
              <p style={{ color: "#fff" }}><strong>Task queue (fila tarefas/eventos)</strong></p>
            </div>
            <TaskQueue>
              {/* <div className="task1">taks 1</div>
                        <div className="task2">taks 2</div>
                        <div className="task3">taks 3</div>
                        <div className="task4">taks 4</div> */}
            </TaskQueue>
          </div>
        </div>
      </Container>

      <img src={eventLoopAnimation}></img>
    </>
  )
}

export default EventLoop