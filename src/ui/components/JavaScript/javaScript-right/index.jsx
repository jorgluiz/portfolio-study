import { Link } from "react-router-dom"
import { Container } from "./styles"

    
const Right = () => {
    return (
        <Container>
            <ul>
                <ul>
                    <li style={{margin: "10px 0 10px 0px"}}><a href="https://www.tabnine.com/code/javascript/modules/fs" target="_blank" rel="noreferrer">Funções <strong>fs</strong> mais usadas</a></li>
                </ul>
                <li style={{margin: "0 0 10px 0"}}><Link to="bhaskara-fn">Bhaskara</Link></li>
                <li style={{margin: "0 0 10px 0"}}><Link to="apis-web-introducao">APIs Web – Introdução</Link></li>
            </ul>
        </Container>
    )
}

export default Right