import C01 from "../../../assets/context/01.png"
import C02 from "../../../assets/context/02.png"
import C03 from "../../../assets/context/03.jpg"
import C04 from "../../../assets/context/04.png"

import {Container} from "./styles"

const Context = () => {
    return (
        <Container>
            <h1>CONTEXT API</h1>
            <p><strong>Distribuição de dados</strong></p>
            <p>Canal de comunicação pelo qual dados poderão</p>
            <p>ser acessado de maneira padronizada dentro de um escopo definido {"{ }"}</p><br />

            <h1>CONTEXT API e REDUX <h4>PODEM SER USADOS LADO A LADO</h4>
            CADA UM DELES PARA ATACAR PROBLAMAS DIFERENTES</h1><br />

            <img width="100%" height="500px" src={C01}></img><br /><br /><br />
            <img className="img02" width="100%" height="1000px" src={C02}></img><br /><br /><br />
            <img className="img03" width="100%" height="1000px" src={C03}></img><br /><br /><br />
            <img className="img04" width="100%" height="1000px" src={C04}></img><br /><br /><br />
        </Container>
    )
}

export default Context