import { useState, useEffect } from 'react';
import styled from "styled-components"

const Container = styled.div`
height: 100vh;
background-color: black;
display: flex;
`;

const P1 = styled.p`

&[target=p1] {

writing-mode: vertical-lr;
text-orientation: upright;
color: green;


/* position: relative;

animation-name: Paragrafo;
animation-timing-function: linear;
animation-iteration-count: infinite;
animation-duration: 4s;

@keyframes Paragrafo {
  from {
       bottom: 0px;
      }

       to {
        bottom: -400px;
        
       }
}; */
}

&[target=p2] {

}
`;


const EfeitoMatriz = () => {
    const [numberRnd, setNumberRnd] = useState([0])

    // function getRndInteger() {
    //     return Math.floor(Math.random() * 10);
    // }

    // useEffect(() => {
    //     setNumberRnd(setInterval(getRndInteger, 1))
    // }, [numberRnd])

    // setNumberRnd([...numberRnd, aleatory])
    useEffect(() => {

            setNumberRnd([...numberRnd, 22])
    
    }, [])
    console.log(numberRnd)
    
    return (
        <Container>
            <div>
                {numberRnd.map((el) => {
                    return (
                        <>
                        <P1 target="p1">{el}</P1>
                        </>
                    )
                })}
            </div>
            {/* <div>
                {numberRnd.map((el) => {
                    return (
                        <P1 target="p2">{el}</P1>
                    )
                })}
            </div>
            <div>
                {numberRnd.map((el) => {
                    return (
                        <P1>{el}</P1>
                    )
                })}
            </div>
            <div>
                {numberRnd.map((el) => {
                    return (
                        <P1 target="p3">{el}</P1>
                    )
                })}
            </div>
            <div>
                {numberRnd.map((el) => {
                    return (
                        <P1>{el}</P1>
                    )
                })}
            </div> */}
        </Container>
    )
}

export default EfeitoMatriz