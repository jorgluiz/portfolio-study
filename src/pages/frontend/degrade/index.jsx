import styled from "styled-components";
import { FaRegEnvelope } from "react-icons/fa"

import face01 from "../../../assets/face/face01.jpg"
import face02 from "../../../assets/face/face02.jpg"
import face03 from "../../../assets/face/face03.jpg"
import face04 from "../../../assets/face/face04.jpg"
import React from "react";

// sem efeito   ### 
const ContainerNoEffect = styled.div`

display: flex;
justify-content: center;
border: solid 1px #000000;
`;

const DivTransparent01 = styled.div`
  position: relative;

  &::after, ::before {
  content: "";
  position: absolute;
  background: linear-gradient(to bottom, transparent 60%, rgba(255, 255, 255, 1) 100%);
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;

  pointer-events: none; 
  }
`;

const Img = styled.img`

width: 50px;
height: 50px;
border-radius: 50%;
cursor: pointer;
`;
// ==========  ==========

// com efeito   ###
const ContainerIndeed = styled.div`

display: flex;
justify-content: center;
border: solid 1px #000000;
overflow: hidden;
`;

const DivTransparent02= styled.div`
  position: relative;

  &::after, &::before {
  content: "";
  position: absolute;
  background: linear-gradient(to bottom, transparent 60%, rgba(255, 255, 255, 1) 100%);
  /* background-image: linear-gradient(to bottom, rgba(255,0,0,0) 70%, #ffffff); */
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  pointer-events: none; 
  }
`;

const Img01 = styled.img`

width: 50px;
height: 50px;
border-radius: 50%;
cursor: pointer;
`;

const Li = styled.li`

position: relative;
animation: moveBottom 5s linear  infinite;

@keyframes moveBottom {
    to {top: 190px;}
    from {top: -190px;}
}

&:hover {
    animation-play-state: paused;
}
`;

// ==========  ==========

const Degrade = () => {
    const list = [
        { id: 1, img: face01, nome: "01" },
        { id: 2, img: face02, nome: "02" },
        { id: 3, img: face03, nome: "03" },
        { id: 4, img: face04, nome: "04" },
    ]
    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <h1>DivTransparent01</h1>
            <ContainerNoEffect>
                <DivTransparent01>
                    <ul>
                        {list.map((el, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <li style={{ display: "flex", alignItems: "center" }}>
                                        <Img src={el.img} />
                                        <span>{el.nome}</span>
                                        <span><FaRegEnvelope /></span>
                                    </li>
                                </React.Fragment>
                            )
                        })}
                    </ul>
                </DivTransparent01>
            </ContainerNoEffect><br /><br /><br /><br />

            <h1>DivTransparent02</h1>
            <ContainerIndeed>
                <DivTransparent02>
                    <ul>
                        {list.map((el, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <Li style={{ display: "flex", alignItems: "center" }}>
                                        <Img01 src={el.img} />
                                        <span>{el.nome}</span>
                                        <span><FaRegEnvelope /></span>
                                    </Li>
                                </React.Fragment>
                            )
                        })}
                    </ul>
                </DivTransparent02>
            </ContainerIndeed>
        </div>
    )
}

export default Degrade