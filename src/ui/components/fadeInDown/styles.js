import styled, { keyframes  } from 'styled-components';

export const BaseTransition = styled.div`

/* transition-property: ${props => props.property};
transition-duration: ${props => props.duration};
transition-timing-function: ${props => props.timingfunction};
transition-delay: ${props => props.delay}; */

animation-duration: ${props => props.duration};  
animation-timing-function: ${props => props.timingFunction};      
animation-delay: ${props => props.delay};  
animation-iteration-count: ${props => props.iterationCount};  
animation-direction: ${props => props.direction}; 
animation-fill-mode: ${props => props.fillMode};  
animation-play-state:  ${props => props.playState};  
display: ${props => props.display};
`;

BaseTransition.defaultProps = {

// property: "",
// duration: "",
// timingfunction: "linear",
// delay: "",

duration: '0.5s',
timingFunction: 'ease-in-out',
delay: '0s',
iterationCount: '1',
direction: 'normal',
fillMode: 'both',
playState: 'running',
display: 'block'
}

const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Container = styled(BaseTransition)`
width: 100%;
animation-name: ${FadeInAnimation};
// https://medium.com/codeuai/trabalhando-com-anima%C3%A7%C3%B5es-usando-styled-components-9cc1a35a8777
`;



// export const Container = styled.div(props => ({
    

//   }));

// export const Container = styled.div.attrs(props => ({
//     style: {
        
//     }
// }))`

// transition-duration: 2s;
// `;
// https://stackoverflow.com/questions/44459813/adding-transitions-to-styled-components

// ---------------------------------------------------------------------------------------

// const Input = styled.input.attrs(props => ({
//     // we can define static props
//     type: "text",
  
//     // or we can define dynamic ones
//     $size: props.$size || "1em",
//   }))<{ $size?: string; }>`
//     color: #BF4F74;
//     font-size: 1em;
//     border: 2px solid #BF4F74;
//     border-radius: 3px;
  
//     /* here we use the dynamically computed prop */
//     margin: ${props => props.$size};
//     padding: ${props => props.$size};
//   `;
// https://styled-components.com/docs/basics#passed-props


// export const Button = styled.input.attrs(props => ({
//     type: 'button',  
//   }))`
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       font-weight: 800;
//       color: black;
//       background-color: white;
//       border-radius: 5%;
//       min-width: 120px;
//       height: 35px;
//       margin: 50px;
//       cursor: pointer;
//   `;
//   https://pt.stackoverflow.com/questions/474667/como-utilizar-props-no-styled-components