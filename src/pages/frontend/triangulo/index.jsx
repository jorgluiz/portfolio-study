import { styled } from "styled-components"

const Container = styled.div`
display: flex;
justify-content: center;
`;

const Triangulo = styled.div`

width: 0px;
height: 0px;
border: 2px solid;
border-width: 200px 200px 200px 200px;
border-color: transparent transparent #cc00ffdd transparent;

&:hover {
    transform: rotate(90deg)
}
`;

const PageTriagulo = () => {
    return (
        <Container>
            <Triangulo />
        </Container>
    )
}

export default PageTriagulo