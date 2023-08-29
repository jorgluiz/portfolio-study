import styled from 'styled-components';

export const Container = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
/* height: 100%; */
`;
/* ---------------------------------------------------------------- */
export const Progress = styled.div`

display: flex;
overflow: hidden;
height: 100%;
width: 200px;
/* -------   ------- */
position: relative;

animation-name: progressLoading;
animation-duration: 6s;
animation-timing-function: linear;
animation-iteration-count: infinite;

@keyframes progressLoading {
  0% {right: 170px;}
  100% {right: -250px;}
}
/* -------   ------- */

:nth-of-type(1),
:nth-of-type(2),
:nth-of-type(3),
:nth-of-type(4),
:nth-of-type(5), 
:nth-of-type(6),
:nth-of-type(7), 
:nth-of-type(8),
:nth-of-type(9),
:nth-of-type(10) {
width: 30px;
height: 100%;
background: rgb(0, 0, 250, 80%);
transform: skewX(-20deg);

animation-name: loadingProgress;
animation-duration: 1s;
animation-timing-function: ease-in-out;
animation-iteration-count: infinite;
animation-direction: alternate;
}
@keyframes loadingProgress {
    0%, 10% {background-image: linear-gradient(#4B0082, #FF00FF);}
    20%, 30% {background-color: rgb(47, 79, 79);}
    35%, 40% {background-color: rgb(123, 104, 238);}
    45%, 50% {background-color: rgb(75, 0, 130);}
    50%, 55% {background-color: rgb(139, 0, 139);}
    60%, 65% {background-color: rgb(220, 20, 60);}
    70% {background-color: rgb(176, 224, 230);}
    80% {background-color: darkviolet;}
    100% {background-color: gold}
}

:nth-of-type(2),
:nth-of-type(4),
:nth-of-type(6),
:nth-of-type(8),
:nth-of-type(10) {
    background: rgb(0, 250, 154, 50%);
}
`;

/* ---------------------------------------------------------------- */

export const Loading = styled.div`
display: flex;
align-items: center;
margin-right: 10px;

:nth-of-type(2),
:nth-of-type(3),
:nth-of-type(4) {
    border: 1px solid #000;
    border-radius: 50px;
    margin: 0 5px 0 5px;
}

:nth-of-type(2) {
animation-name: child02;
animation-duration: 2s;
animation-timing-function: linear;
animation-iteration-count: infinite;


@keyframes child02 {
  0% { height: 0; width: 0;}
  100% { height: 5px; width: 5px;}
}
}
/* ----------------- */
:nth-of-type(3) {
animation-name: child03;
animation-duration: 2s;
animation-timing-function: linear;
animation-iteration-count: infinite;

@keyframes child03 {
  0% { height: 0; width: 0;}
  100% { height: 5px; width: 5px;}
}
}
/* ----------------- */
:nth-of-type(4) {
animation-name: child04;
animation-duration: 2s;
animation-timing-function: linear;
animation-iteration-count: infinite;

@keyframes child04 {
  0% {height: 0; width: 0;}
  100% {height: 5px; width: 5px;}
}
}
`;