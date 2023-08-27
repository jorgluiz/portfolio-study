import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
overflow: hidden;
margin: 100px 0 0 0;


& .fullScreen {
    display: flex;
    align-items: center;

& .imgFullScreen {
    position: absolute;
    height: 450px;
    width: 500px;
}
}
`;
export const Progress = styled.div`

height: 5px;
background-color: blue;
width: 0%;
width: ${({ progressVideo }) => progressVideo + "%"};


`;

export const Dialog = styled.div`

position: absolute;
z-index: 1000;
right: 200px;

& .divDialog1 {
width: 330px;
height: 50px;
background-color: #111;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
}
& .divDialog2 {
width: 330px;
height: auto;
background-color: #ffffff;
border-bottom-right-radius: 5px;
border-bottom-left-radius: 5px;
/*          x |y |blur-radius|spread-radius| color */
/*          0 5px 5px        |10px         |rgba(0, 0, 0, 0.2); */
box-shadow: 0 10px 5px 10px rgba(0, 0, 0, 0.2);
}
`;