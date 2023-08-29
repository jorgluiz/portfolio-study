import fluxograma from "../../../assets/fluxograma.png"
import diagrama from "../../../assets/diagrama.png"

const Fluxograma = () => {
    return (
        <div style={{ display: "flex", overflow: "hidden" }}>
            <div>
                <h3  style={{textAlign: "center", fontSize: "17.5px"}}>Fluxogramas, são representações gráficas da estrutura lógica do algoritmo de um programa de computador, pois representam através de figuras geométricas a seqüência lógica de um programa.</h3>
                <img src={fluxograma}></img>
            </div>
            <div>
                <h3 style={{textAlign: "center"}}>Representação gráfica usada para demonstrar um esquema simplificado ou um resumo sobre um assunto.</h3>
                <img src={diagrama}></img>
            </div>
        </div>
    )
}

export default Fluxograma