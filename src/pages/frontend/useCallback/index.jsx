import React from "react";

import { Container, H1, Div, Span, Img } from "./styles"
import useCallback00 from "../../../assets/useCallback00.png"
import useCallback01 from "../../../assets/useCallback01.png"
import useCallbackGif from "../../../assets/gifs/clip-1-usecallback-min.gif"

const chaves = "<Component props={função}/>"
const valor = "onChange={(e) => setNumber(e.target.value)}"

const UseCallback = () => {

    return (
        <Container>

            <H1>useCallback Impede que callbacks sejam recriados</H1><br />

            <p>useCallback é um gancho usado para melhorar o desempenho de nosso componente.</p><br />

            <div style={{ lineHeight: "1.5", borderLeft: "solid 3px #002ead" }}>
                <p style={{ marginLeft: "10px" }}>As funções de retorno de chamada são o nome das funções que são "chamadas de volta" dentro de um componente pai.
                    O uso mais comum é ter um componente pai com uma variável de estado, mas você deseja atualizar esse estado a partir de um componente filho.</p>
            </div><br />

            <p style={{ lineHeight: "1.5" }}>O que você faz? Você passa uma função de retorno de chamada para o filho do pai. Isso nos permite atualizar o estado no componente pai.</p><br />

            <p style={{ lineHeight: "1.5" }}>useCallback memoriza nossas funções de retorno de chamada, para que não sejam recriadas a cada nova renderização. Usar useCallback corretamente pode melhorar o desempenho do nosso aplicativo.</p><br /><br />

            <Img src={useCallbackGif}></Img><br /><br />

            <a href="https://www.freecodecamp.org/news/react-hooks-cheatsheet/">Referência do estudo acima</a>

            <div style={{ width: "100%", borderTop: "solid 1px black" }}></div><br /><br /><br />

            <H1>
                <span style={{ color: "red", fontSize: "50px" }}>aplicação travando?</span> Para mais performance usa-se o HOOK useCallback<br />
            </H1>

            <Div style={{ backgroundColor: "#a34e4e", borderLeft: "9px solid #ff0000", height: "350px", width: "100%" }}>
                <p>Nota:</p><br />
                <p style={{ marginLeft: "30px" }}>
                    Um exemplo de caso de uso com useCallback.<br />
                    Se uma função está travando minha aplicação ou você cria um <Span>input</Span> e ao obter esse valor corrente do <Span>input</Span> {valor} aplicação fica atulizando a cada valor obtido, isso prejudicar absurdamente a performance dessa aplicação.<br />
                    Um caso comum é obter um valor de um <Span>input</Span> para um state e ao obter um valor corrente desse input e passar para state de um component isso faz com que minha aplicação seja atualizada,
                    e com essa atualização chama a função que estiver nesse component.
                    para evitar que uma função fique sendo chamanda desnecessariamente usa-se o useCallback <br />
                    <span style={{ color: "white" }}> Caso de uso: ao passar uma função como props {chaves} <br />
                        para uma boa performance necessário usar o useCallback.</span>
                </p>
            </Div>

            <H1>

            </H1>

            <Img src={useCallback00} useCallback00={useCallback00} />
            <p>OBS: useCallback guarda a função</p>

            <h3 style={{ margin: "30px 0 0 0" }}>essa Img é continuação do exemplo a cima</h3>
            <Img src={useCallback01} useCallback01={useCallback01} />
        </Container>
    )
}

export default UseCallback;