import React from "react";

import { Container, H1, Div, Img } from "./styles"
import useContext00 from "../../../assets/useContext00.png"
import useContext01 from "../../../assets/useContext01.png"
import useContext02 from "../../../assets/useContext02.png"
import useContext03 from "../../../assets/gifs/clip-1-usecontext-min.gif"

const UseContext = () => {
    return (
        <Container>
            <h1>useContext Nos Ajuda a Evitar Prop Drilling (Perfuração de suporte)</h1><br />

            <p style={{lineHeight: "1.5"}}>No React, queremos evitar o seguinte problema de criar várias props para passar dados dois ou mais níveis de um componente pai.</p><br />

            <div style={{ lineHeight: "1.5", borderLeft: "solid 3px #002ead" }}>
                <p style={{marginLeft: "10px"}}> Em alguns casos, é bom passar props por vários componentes, mas é redundante passar props por componentes que não precisam deles.
            O contexto é útil para passar props para vários níveis de componentes filho de um componente pai e compartilhar o estado em nossa árvore de componentes do aplicativo.</p>
            </div><br />

            <p style={{lineHeight: "1.5"}}>O gancho useContext remove o padrão de props de renderização de aparência incomum que era necessário para consumir o React Context antes.</p><br />

            <p style={{lineHeight: "1.5"}}>Em vez disso, useContext nos fornece uma função simples para acessar os dados que fornecemos na valuepropriedade do provedor de contexto em qualquer componente filho.</p><br />

            <Img src={useContext03} /><br /><br />

            <a href="https://www.freecodecamp.org/news/react-hooks-cheatsheet/">Referência do estudo acima</a>

            <div style={{ width: "100%", borderTop: "solid 1px black" }}></div><br />

            <H1>
                Na Img abaixo os valores do <span style={{ color: "green" }}>createContext</span> é o <span style={{ color: "green" }}>theme</span> e função (<span style={{ color: "green" }}>toggleTheme</span>) para muder o theme
            </H1>

            <Img src={useContext00} useContext00={true} />
            <h3>Quando quero passar uma props para árvore de componentes</h3>

            <Div style={{ backgroundColor: "#f1e4a3", borderLeft: "9px solid #FFE564", height: "155px", width: "633px" }}>
                <p>Dica</p><br />
                <p style={{ marginLeft: "30px" }}>

                </p>
            </Div>

            <H1>
                Provider ficar por volta de tudo, assim as props vai poder passar para baixo
            </H1>
            <Img src={useContext01} useContext01={true} />

            <H1>
                E continuando como mostra na Img acima, para consumir esses valores que foram passados para os components
                usa o useContext
            </H1>
            <Img src={useContext02} useContext02={true} />
        </Container>
    )
}

export default UseContext;