import styled from "styled-components";

const ContentCoracao = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    width: 100px;
    margin: 50px auto;
    animation: pulsa 1s linear 0s infinite;
  
  @keyframes pulsa {
    0% {
      transform: scale(0.9) rotate(0deg);
    }
    50% {
      transform: scale(1) rotate(0deg);
    }
    70% {
      transform: scale(1.1) rotate(0deg);
    }
    80% {
      transform: scale(1.2) rotate(0deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }
  `;

const Square = styled.div`
    transform: rotate(45deg);
    width: 50px;
    height: 50px;
    background: #e71940;
    position: absolute;
    top: 30px;
    `;

const Circle = styled.div`
   
  &::after, &::before {
    content: "";
    position: absolute;
    width: 54px;
    height: 55px;
    border-radius: 50%;
    background-color: #e71940;
  } 
 
    &::after { 
        left: 5px;
        top: 6px;
    }

    &::before {
        right: 5px;
        top: 6px;
    }

`;

const Coracao = () => {
    return (
        <>
        <a href="https://codepen.io/bruversfelipe/pen/NmroxL">Créditos</a>
            <ContentCoracao>
                <Square></Square>
                <Circle></Circle>
            </ContentCoracao>
        </>
    )
}

export default Coracao