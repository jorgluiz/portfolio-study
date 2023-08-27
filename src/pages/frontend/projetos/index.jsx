import { Container } from "./styles"
import HandAnimation from "../../../ui/components/handAnimation"

const Projetos = () => {
    return (
        <Container>
            <h1>Projetos para implementar</h1><br /><br />
            <ul>
                <li><a href="https://www.delftstack.com/pt/howto/javascript/javascript-download/">Descarregar um ficheiro utilizando JavaScript</a></li>
                <HandAnimation></HandAnimation>
            </ul>
        </Container>
    )
}

export default Projetos