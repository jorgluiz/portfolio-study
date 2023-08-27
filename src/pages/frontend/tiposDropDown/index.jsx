import React, { useState } from "react";
import styled from "styled-components";

const Header = styled.header`

display: flex;
justify-content: space-around;
border: 1px solid #212121;
margin-bottom: 10px;
`;

// Button
const Button = styled.button`

position: relative;
display: inline-block;

/* tooltip Ul01*/
& > div {

  visibility: hidden;
  width: 100%;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;

  transition-duration: 3s;
}

/* tooltip Ul01 */
&:hover > div {
  width: 300px;
  visibility: visible;
}
`;

// Ul01
const Ul01 = styled.ul`

`;

// Ul02
const Ul02 = styled.ul`

position: absolute;
width: 0%;

opacity: 0;
visibility: hidden;

transition-duration: 0.8s;
`;

// Ul03
const Ul03 = styled.ul`

position: absolute;
display: none;
`;

// Span ### ### ###
const Span = styled.span`

position: relative;

/* Ul02 */
&:hover > ul[target=Ul02] {
    opacity: 1;
    visibility: visible;
    background-color: #000000;
    color: #ffffff;
    width: 91px;
}

/* tooltip02 */
&[target=span1] > div {
    
  visibility: hidden;
  width: 100%;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;

  transition-duration: 2s;
}

/* tooltip Ul02 */
&:hover[target=span1] > div {
  width: 350px;
  visibility: visible;
}

/* tooltip03  */
&[target=span2] > div {
    
    visibility: hidden;
    width: 100%;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    
    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    margin-left: -60px;
  
    transition-duration: 2s;
  }

/* tooltip Ul03*/
&:hover[target=span2] > div {
  width: 350px;
  visibility: visible;
}

& > ul[target=Ul03] {
    display: ${({ display01 }) => display01 ? "block" : ""};
    animation-name: fideInUl03;
    animation-duration: 3s;

@keyframes fideInUl03 {
    from {
        opacity: 0;
    }
    to {
       opacity: 1;
    }
}
}
`;

// fadein (aparecimento gradual)
const Fadein = styled.div`

animation-name: fideIn;
animation-duration: 3s;

@keyframes fideIn {
    from {
        opacity: 0;
    }
    to {
       opacity: 1;
    }
}
`;


const DropDown = () => {
    const [display, setDisplay] = useState(false)
    const [display01, setDisplay01] = useState(false)

    return (
        <>
            <h1>- Primeira formato drop-down (UL01)</h1><br />
            <div style={{ display: "flex", justifyContent: "space-around", height: "210px", border: "solid 1px #323232" }}>
                <div>
                    <p style={{ letterSpacing: "3px" }}>{`{display && <> `}</p>
                    <p style={{ marginLeft: "139px" }}>{`<ul>`}</p>
                    <p style={{ marginLeft: "150px" }}>{`<li>`}</p>
                    <p style={{ marginLeft: "150px" }}>{`<li>`}</p>
                    <p style={{ marginLeft: "150px" }}>{`<li>`}</p>
                    <p style={{ marginLeft: "139px" }}>{`</ul>`}</p>
                    <p style={{ position: "relative", left: "139px" }}>{` <> }`}</p>
                </div>

                <div>
                    <Button onClick={() => setDisplay(display ? false : true)}>
                        click-aqui
                        <div>display none e display block</div>
                    </Button>

                    {display &&
                        // fadein (aparecimento gradual)
                        <Fadein>
                            <Ul01>
                                <li>Li-1</li>
                                <li>Li-2</li>
                                <li>Li-3</li>
                            </Ul01>
                        </Fadein>}
                </div>
            </div><br /><br /><br />

            <h1>- Segunda formato drop-down (UL02)</h1><br />
            <div style={{ height: "210px" }}>
                <Header>
                    <span>line1</span>
                    <span>line2</span>
                    <span>line3</span>
                    <Span target="span1" dropDown={false}>
                        dropDown
                        <div>DropDown (Pseudo-classes :hover)</div>
                        <Ul02 target="Ul02">
                            <li>link</li>
                            <li>link</li>
                            <li>link</li>
                        </Ul02>
                    </Span>

                </Header>
                <main style={{ height: "100%", border: "solid 1px #212121", backgroundColor: "#2929be" }}></main>
            </div><br /><br /><br /><br />

            <h1>- Terceira formato drop-down (UL03)</h1><br />
            <div style={{ height: "210px" }}>
                <Header>
                    <span>line1</span>
                    <span>line2</span>
                    <span>line3</span>
                    <div onMouseLeave={() => setDisplay01(false)}>
                        <Span target="span2" display01={display01} onClick={() => setDisplay01(true)}>
                            dropDown
                            <div>DropDown (state = block | Event onMouseLeave = none)</div>
                            <Ul03 target="Ul03">
                                <li>link</li>
                                <li>link</li>
                                <li>link</li>
                            </Ul03>
                        </Span>
                    </div>
                </Header>
                <div style={{ height: "100%", border: "solid 1px #212121", backgroundColor: "#2929be" }}></div>
            </div>

            <div style={{ marginBottom: "300px" }}></div>
        </>
    )
}

export default DropDown