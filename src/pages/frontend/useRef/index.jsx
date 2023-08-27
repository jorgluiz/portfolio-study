import { Container, H1, Div, Img } from "./styles"

import imgRef00 from "../../../assets/useRef00.png"
import imgRef01 from "../../../assets/useRef01.png"
import imgRef02 from "../../../assets/useRef02.png"
import useref01 from "../../../assets/gifs/clip-1-useref-min.gif"

const UseRef = () => {
    return (
        <Container>


            <h1 style={{ fontSize: "50px" }}>useRef para referenciar elementos React</h1><br />

            <p style={{ lineHeight: 1.5 }}>useRef para referenciar elementos React Refs são atributos especiais que estão disponíveis em todos os componentes do React. Eles nos permitem criar uma referência a um determinado elemento/componente quando o componente é montado.</p><br />

            <p style={{ lineHeight: 1.5 }}>useRef nos permite usar facilmente refs do React. Eles são úteis (como no exemplo abaixo) quando queremos interagir diretamente com um elemento, como para limpar seu valor ou focá-lo, como com uma entrada.</p><br />

            <p style={{ lineHeight: 1.5 }}>Chamamos useRef (na parte superior de um componente) e anexamos o valor retornado ao atributo ref do elemento para fazer referência a ele.</p><br />

            <Img src={useref01}></Img><br /><br />

            <a href="https://www.freecodecamp.org/news/react-hooks-cheatsheet/">Referência do estudo acima</a>

            <div style={{ width: "100%", borderTop: "solid 1px black" }}></div><br />

            <H1>
                Persistir um valor em todo ciclo de vida do componente
            </H1>

            <Img src={imgRef00} imgRef00={true} />

            <Div style={{ backgroundColor: "#f1e4a3", borderLeft: "9px solid #FFE564", height: "155px", width: "100%" }}>
                <p></p><br />
                <p >

                </p>
            </Div>

            <H1>
                Referenciar elementos HTML com useRef
            </H1>

            <Img src={imgRef01} imgRef01={true} />

            <p>
                Nesse exemplo a cima, o Ref obtém o Ref do input para focar ao clicar
            </p><br />

            <H1>
                Obter um valor anterior do state
            </H1>

            <Img src={imgRef02} imgRef02={true} /><br /><br />

        </Container>
    )
}

export default UseRef