import { styled } from "styled-components";

export const Container = styled.div`

& .img-paradigma {
    display: flex;
    justify-content: center;
}
& .paradigma-imperativo-declarativo {
    display: flex;
    justify-content: space-between;
}
& .paradigma01 {
    border: 2px dashed #000;
    width: 50%;
}
& .paradigma02 {
    border: 2px dashed #000;
    border-left: none;
    border-top-color: red;
    border-right-color: darkblue;
    border-bottom-color: darkgreen;
    border-bottom-left-radius: 50px;
    border-top-right-radius: 50px;
    width: 50%;
& .center-paradigma02 {
    text-align: center;
}
}
`;