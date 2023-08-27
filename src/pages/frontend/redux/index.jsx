import R01 from "../../../assets/redux/01.png"
import R02 from "../../../assets/redux/02.png"
import R03 from "../../../assets/redux/03.png"
import R04 from "../../../assets/redux/04.png"

import { Container } from "./styles"

const Redux = () => {
    return (
        <Container>
            <h1>Redux</h1>
            <p><strong>Gerenciar estado</strong></p>
            <p><strong>Redux</strong> é uma biblioteca feita para <span className="gerenciar-redux">gerenciar estados em uma aplicação,</span> ela tira a</p>         
            <p>responsabilidade de um componente ter um estado que poderá ser usado por vários</p>
            <p>outros componentes dentro da sua aplicação e passa isso para um <strong>objeto global</strong>, que</p>
            <p>pode ser acessado por qualquer componente, a aqualquer momento.</p><br />

            <h1>CONTEXT API e REDUX <h4>PODEM SER USADOS LADO A LADO</h4>
            CADA UM DELES PARA ATACAR PROBLAMAS DIFERENTES</h1><br />

            <img className="img01" width="100%" height="500px" src={R01}></img><br /><br /><br />
            <img className="img02" width="100%" height="500px" src={R02}></img><br /><br /><br />
            <img className="img03" width="100%" height="500px" src={R03}></img><br /><br /><br />
            <img className="img04" width="100%" height="500px" src={R04}></img><br /><br /><br />
        </Container>
    )
} 

export default Redux