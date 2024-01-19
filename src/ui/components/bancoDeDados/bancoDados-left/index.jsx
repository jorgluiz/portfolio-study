import { Link } from "react-router-dom"
import { Container } from "./styles"

const Left = () => {
    return (
        <Container>
            <span style={{textAlign: "center"}}>Por onde devo começar com banco de dados?</span><br />
            <ul>
                <li><Link to="modelagem-de-dados">1º Modelagem de dados</Link></li>
            </ul>
        </Container>
    )
}

export default Left