import { Container, H1, Div, Img } from "./styles"

import imgEffect01 from "../../../assets/effect.png"
import imgEffect02 from "../../../assets/fn-async-useEffect.png"
import GifUseEffect2 from "../../../assets/gifs/clip-2-useeffect-min.gif"
import GifUseEffect4 from "../../../assets/gifs/clip-4-useeffect-min.gif"
import errorInfinito from "../../../assets/errorInfinito.png"
import correto from "../../../assets/correto.png"

const UseEffect = () => {
    return (
        <Container>
            <H1>
                Usando Effect Hook (Hook de Efeito)
            </H1>

            <p style={{ lineHeight: 1.8 }}>Efeitos colaterais são ações que podem alterar o estado de nosso componente de maneira imprevisível (que causaram 'efeitos colaterais').</p><br />

            <p style={{ lineHeight: 1.8 }}>useEffect aceita uma função de retorno de chamada (chamada de função 'efeito'), que será executada por padrão toda vez que o componente for renderizado novamente.</p><br /><br />

            <Img src={imgEffect01} imgEffect01={true} /><br /><br />

            <Div style={{ backgroundColor: "#f1e4a3", borderLeft: "9px solid #FFE564", height: "155px", width: "100%" }}>
                <p>Dica</p><br />
                <p style={{ marginLeft: "30px" }}>
                    Se você está familiarizado com os métodos do ciclo de vida do React, você pode pensar no Hook useEffect como componentDidMount, componentDidUpdate, e componentWillUnmount combinados.
                </p>
            </Div>

            <h3>Função async dentro useEffect</h3>
            <Img src={imgEffect02} imgEffect02={true} /><br /><br />


            <div style={{ width: "100%", borderTop: "solid 1px black" }}></div><br />

            <h1 style={{ fontSize: "28px" }}>Executar novamente quando um valor mudar</h1><br />

            <p style={{ lineHeight: 1.5 }}>Executar novamente quando um valor mudar
                useEffect nos permite executar efeitos condicionalmente com o array de dependências.</p><br />

            <p style={{ lineHeight: 1.5 }}>A matriz de dependências é o segundo argumento passado para useEffect.</p><br />

            <p style={{ lineHeight: 1.5 }}>Se qualquer um dos valores na matriz mudar, a função de efeito será executada novamente.</p><br />

            <p style={{ lineHeight: 1.5 }}>Se nenhum valor for incluído na matriz de dependências, useEffect será executado apenas na montagem e desmontagem do componente.</p><br />

            <Img src={GifUseEffect2}></Img><br />

            <h1 style={{ fontSize: "28px" }}>Buscar dados de uma API</h1><br />

            <p style={{ lineHeight: 1.5 }}>useEffect é o HOOK a ser usado quando você deseja fazer uma solicitação HTTP (ou seja, uma solicitação GET quando o componente é montado).</p><br />

            <p style={{ lineHeight: 1.5 }}>Observe que lidar com promessas com a sintaxe mais concisa <span style={{ backgroundColor: "#D0D0D5" }}>async/await</span> requer a criação de uma função separada.</p><br />

            <p>Isso ocorre porque a função de retorno de chamada do efeito não pode ser assíncrona.</p><br />

            <p style={{ lineHeight: 1.5 }}>No exemplo abaixo, resolvemos nossa promessa (retornada de <span style={{ backgroundColor: "#D0D0D5" }}>fetch</span>) com uma série de <span style={{ backgroundColor: "#D0D0D5" }}>.then()</span>callbacks para obter nossos dados.</p><br />

            <Img src={GifUseEffect4}></Img>

            <a href="https://www.freecodecamp.org/news/react-hooks-cheatsheet/">Referência do estudo acima</a><br /><br />

            <h1>Evitar erros com useEffect</h1><br />
            <p><strong style={{color: "red"}}>esse código abaixo está dando erro infinito</strong></p>
            <img src={errorInfinito} width="100%" style={{border: "1px solid #000"}}></img><br />
            <p>O loop infinito é causado pelo fornecimento da <strong>storeList</strong> dependênciaas ao mesmo</p>
            <p><strong>useEffect</strong> hook, que está atualizando o mesmo estado. <span style={{textDecoration: "underline"}}>Você deve usar dois</span></p>
            <p><strong>useEffect</strong> hook. <span style={{textDecoration: "underline"}}>Um para atualizar o estado na renderização do componente com dependência vazia</span></p>
            <p>e outro useEffect como storeList dependência. Estou adicionando todo o código no final</p><br />
            <img src={correto} style={{border: "1px solid #000"}}></img>
            <a href="https://stackoverflow.com/questions/69330773/how-to-use-splice-property-at-react" target="_blank" rel="noreferrer">Referência</a>
        </Container>
    )
}

export default UseEffect;