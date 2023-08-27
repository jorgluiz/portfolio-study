import styled from "styled-components";

export const DivAnimationBottom = styled.div`

overflow: hidden;

& > span {
position: relative;

animation-name: divAnimationBottom;
animation-duration: 5s;
animation-timing-function: ease-in-out;
animation-iteration-count: infinite;

@keyframes divAnimationBottom {
  0% {bottom: 22px;}
  100% {bottom: -25px;}
}

&:hover {
    animation-play-state: paused;
}
}
`;

// --------------------------------------------------------

export const DivAnimationRight = styled.div`

overflow: hidden;

& > span {
position: relative;

animation-name: divAnimationRight;
animation-duration: 5s;
animation-timing-function: ease-in-out;
animation-iteration-count: infinite;

@keyframes divAnimationRight {
  0% {right: 99px;}
  100% {right: -200px;}
}

&:hover {
    animation-play-state: paused;
}
}
`;

// --------------------------------------------------------

export const DivAnimationLeft = styled.div`

overflow: hidden;

& > span {
position: relative;

animation-name: divAnimationLeft;
animation-duration: 5s;
animation-timing-function: ease-in-out;
animation-iteration-count: infinite;

@keyframes divAnimationLeft {
  0% {left: 200px;}
  100% {left: -150px;}
}

&:hover {
    animation-play-state: paused;
}
}
`;

// --------------------------------------------------------

export const DivAnimationTop = styled.div`

overflow: hidden;

& > span {
position: relative;

animation-name: divAnimationTop;
animation-duration: 5s;
animation-timing-function: ease-in-out;
animation-iteration-count: infinite;

@keyframes divAnimationTop {
  0% {top: 22px;}
  100% {top: -40px;}
}

&:hover {
    animation-play-state: paused;
}
}
`;

// --------------------------------------------------------

export const DivAnimation = styled.div`

/* & > a:nth-child(2) {
    display: none;
} */

/* & > span {
position: relative;

animation-name: divAnimationTop;
animation-duration: 5s;
animation-timing-function: ease-in-out;
animation-iteration-count: infinite;

@keyframes divAnimationTop {
  0% {top: 22px;}
  100% {top: -40px;}
}

&:hover {
    animation-play-state: paused;
}
} */
`;
