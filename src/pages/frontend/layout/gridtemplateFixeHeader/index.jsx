import { Container, Header, Main, Footer, Button } from "./styles"
import { Link } from "react-router-dom"
// import { useOutletContext } from "react-router-dom"

const LayoutFlexFixeFooter = () => {

    // const [display, setDisplay] = useOutletContext()

    return (
        <Container>
            <Header>
                {/* <Button onClick={() => (setDisplay(true))}> </Button> */}
                    <Link to={'/front-end'}>voltar</Link>  
               
            </Header>
            <Main>
                <p>sou o main</p>
                <div style={{height: "500px", width: "500px", background: "#ccc"}}></div>
                <div style={{height: "500px", width: "500px", background: "#ccc"}}></div>
            </Main>
            <Footer>
                <p>Footer</p>
            </Footer>
        </Container>
    )
}

export default LayoutFlexFixeFooter