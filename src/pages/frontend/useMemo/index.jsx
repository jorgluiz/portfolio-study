import React, { useState, useMemo} from "react";

import { Container, H1, Div, Img } from "./styles"

import useMemo00 from "../../../assets/useMemo00.png"
import useMemo01 from "../../../assets/gifs/clip-1-usememo-min.gif"

const UseMemo = () => {
    const [searchTerm, setSearchTerm] = useState("")

    const skills = ["html", "css", "javascript", "...1000s more"]

   const searchResults = useMemo(() => {
        return skills.filter(s => s.includes(searchTerm))
    }, [searchTerm])

    const handleSearchInput = (e) => {
        setSearchTerm(e.target.value)
    } 

    return (
        <Container>
            <H1>
                <p style={{ fontSize: "20px" }}>aplicação travando? Para mais performance usa-se o HOOK <span style={{ fontSize: "40px" }}>useMemo</span></p>
            </H1>

            <Div style={{ backgroundColor: "#a34e4e", borderLeft: "9px solid #ff0000", height: "155px", width: "100%" }}>
                <p>Dica</p><br />
                <p style={{ marginLeft: "30px" }}>
                    Um exemplo de caso de uso com Memo.<br />
                    Se uma função está travando minha aplicação e prejudicando minha performance,
                    já nesse caso para otimizar minha aplicação o uso do Memo será ideal
                </p>
            </Div>

            <H1>

            </H1>

            <Img src={useMemo00} useMemo00={useMemo00} />
            <p style={{ marginBottom: "30px" }}>OBS: useMemo guarda o retorno da função</p><br />

            <div style={{ width: "100%", borderTop: "solid 1px black" }}></div><br />

            <h1>useMemo pode melhorar operações caras</h1><br />

            <p style={{ lineHeight: "1.5" }}>useMemo é muito semelhante a useCallback e ajuda a melhorar o desempenho. Mas, em vez de ser para retornos de chamada, é para armazenar os resultados de operações caras.</p><br />

            <div style={{ lineHeight: "1.5", borderLeft: "solid 3px #002ead" }}>
                <p style={{ marginLeft: "10px" }}>useMemo nos permite memorizar ou lembrar o resultado de operações caras quando já foram feitas para determinadas entradas.</p>
            </div><br />

            <p style={{ lineHeight: "1.5" }}>Memorização significa que se um cálculo já foi feito antes com uma determinada entrada, não há necessidade de fazê-lo novamente, pois já temos o resultado dessa operação armazenado.</p><br />

            <p style={{ lineHeight: "1.5" }}>useMemo retorna um valor da computação, que é então armazenado em uma variável.</p><br />

            <Img src={useMemo01}></Img><br /><br />

            <h1>Exemplo: Uso do hook useMemo</h1><br />

            <h3>Search Result</h3>

            <input style={{backgroundColor: "#b4b3b3", width: "200px"}} onChange={handleSearchInput}></input>
            <ul>
                {searchResults.map((result, i) => (
                    <li key={i}>{result}</li>
                ))}
            </ul><br /><br /><br />

            <a href="https://www.freecodecamp.org/news/react-hooks-cheatsheet/">Referência do estudo acima</a>
        </Container>
    )
}

// const slowFunction = () => {
//     console.log("slow function is being called!")
//     for (let i = 0; i <= 10000; i++) {
//         console.log(i)

//         if (i > 5000) return console.log(i)
//     }

// }

export default UseMemo;