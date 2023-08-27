import React from "react";

import { Container, H1, Div, Img } from "./styles"
import useReducer00 from "../../../assets/useReducer00.png"
import useReducer01 from "../../../assets/useReducer01.png"
import useReducer02 from "../../../assets/gifs/clip-1-usereducer-min.gif"


const UseReduce = () => {
    return (
        <Container>
            <h1>useReducer é (outra) poderosa ferramenta de gerenciamento de estado</h1><br />

            <p style={{lineHeight: "1.5"}}>useReducer é um gancho para gerenciamento de estado, muito parecido com useState, e depende de um tipo de função chamada redutor.</p><br />

            <div style={{ lineHeight: "1.5", borderLeft: "solid 3px #002ead" }}>
                <p style={{ margin: "0 20px 0 20px" }}>Os redutores são funções simples e previsíveis (puras) que pegam um objeto de estado anterior e um objeto de ação e retornam um novo objeto de estado.
            useReducer pode ser usado de várias maneiras como useState, mas é mais útil para gerenciar o estado em vários componentes que podem envolver diferentes operações ou "ações".</p>
            </div><br />

            <p style={{lineHeight: "1.5"}}>Você precisará usar useReducer em vez de useState em seu aplicativo. Mas é muito útil como um meio poderoso de gerenciamento de estado em aplicativos menores, em vez de ter que buscar uma biblioteca de gerenciamento de estado de terceiros como o Redux.</p><br /><br />

            <Img src={useReducer02} /><br /><br /><br />

            <a href="https://www.freecodecamp.org/news/react-hooks-cheatsheet/">Referência do estudo acima</a>

            <div style={{ width: "100%", borderTop: "solid 1px black" }}></div><br />

            <H1>
                Criando multiplas taks com Reducer
            </H1>

            <Img src={useReducer00} useReducer00={true} />

            <Div style={{ backgroundColor: "#f1e4a3", borderLeft: "9px solid #FFE564", height: "155px", width: "100%" }}>
                <p>Dica:</p><br />
                <p >

                </p>
            </Div>

            <H1>
                Usando useReducer
            </H1>
            <Img src={useReducer01} useReducer01={true} />
        </Container>
    )
}

export default UseReduce;