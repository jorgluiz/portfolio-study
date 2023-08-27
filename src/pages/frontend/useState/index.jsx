import { useState } from "react";
// import { useEffect } from "react";

import { Container, H1, Div, Button, Img } from "./styles"
import useState00 from "../../../assets/useState00.png"


const UseState = () => {
    const [state, setState] = useState({
        language: "React Hooks",
        years: new Date(),
        count: 0
    })

    // useEffect(() => {
    //     setState({...state, years: new Date()})
    // }, [state.years])

    const changeLanguage = () => {
        setState({ ...state, language: "JavaScript" })
    }

    const changeYears = () => {
        setState({ ...state, years: new Date("2022-11-04") })
    }

    const addCount = () => {
        setState((prev) => {
            return {
                ...prev,
                count: prev.count + 1 // Atualizar estado com base no valor anterior
            }
        })
    }

    return (
        <Container>
            <h1 style={{ marginTop: "30px", fontSize: "50px" }}>Gerenciar estado com um objeto</h1><br />
            <p style={{ lineHeight: "1.8" }}>Você pode usar um objeto com useState, que permite gerenciar valores individuais como pares chave-valor.</p><br />

            <p style={{ lineHeight: "1.8" }}>Como mostra o exemplo abaixo, quando você está atualizando o estado com um objeto, você precisa se espalhar no estado anterior.</p><br />

            <p style={{ lineHeight: "1.8" }}>Por quê? Porque quaisquer propriedades diferentes daquela que você está atualizando não serão incluídas no novo estado.</p><br />

            <div>
                <Button secondaryColor="red" onClick={() => changeLanguage()}>alter language</Button>
                <p>{state.language}</p><br />

                <Button secondaryColor="red" onClick={() => changeYears()}>get date</Button>
                <p>{state.years.getDay()}</p><br />
                {/* <p>{state.years.getSeconds()}</p> */}

                <Button secondaryColor="red" onClick={() => addCount()}>add count + {`${state.count}`}</Button>
                <p>{state.count}</p>
            </div><br /><br />

            <a href="https://www.freecodecamp.org/news/react-hooks-cheatsheet/">Referência do estudo acima</a>

            <div style={{ width: "100%", borderTop: "solid 1px black" }}></div><br />

            <H1>
                Usando o State do Hook
            </H1>

            <Img src={useState00} useState00={useState00} />

            <p style={{ marginTop: "30px" }}><strong>Quando eu deveria usar um Hook?</strong> Se você escreve um componente de função e percebe que precisa adicionar algum state para ele, anteriormente você tinha que convertê-lo para uma classe. Agora você pode usar um Hook dentro de um componente de função existente. Vamos fazer isso agora mesmo!</p>

            <Div style={{ backgroundColor: "#f1e4a3", borderLeft: "9px solid #FFE564", height: "155px", width: "100%" }}>
                <p>Nota:</p><br />
                <p style={{ marginLeft: "30px" }}>
                    Existem algumas regras especiais sobre onde você pode ou não utilizar Hooks dentro de um componente. Vamos aprender elas nas <a href="https://pt-br.reactjs.org/docs/hooks-rules.html" target="_blank" rel="noopener noreferrer">Regras dos Hooks.</a>
                </p>
            </Div>

            <h3></h3>
            <Img />
        </Container>
    )
}

export default UseState;