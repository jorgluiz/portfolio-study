import { Container, Progress, Loading } from "./styles"

const LoadingProgress = () => {
    return (
        <Container>
            <h1>Página em construção</h1>
            <Loading>
            <p>LOADING</p>
              <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100px", height: "10px"}}>
              <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </Loading>
           
            <div style={{ width: "250px", height: "10px", border: "1px solid #111", overflow: "hidden" }}>
                <Progress>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </Progress>
            </div>
        </Container>
    )
}

export default LoadingProgress