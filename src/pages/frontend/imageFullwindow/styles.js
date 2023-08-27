import styled from "styled-components"

export const Container = styled.div`

display: flex;
flex-wrap: wrap;
align-items: center;
overflow: hidden;


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

export const Img1 = styled.img`

width: 200px;
margin: 0 5px 5px;
`;