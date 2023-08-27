import React from "react";
import { Container } from "./styles"

const Dicas = () => {
    return (
        <Container>
            <h1>O que deve usar na minha aplicação ?</h1>

            <div className="container-dicas">
                <div>
                    <p><strong>Gerência de estado</strong></p><br />
                    <p><strong>- Redux</strong></p>
                    <p><strong>- useState()</strong></p>
                    <p><strong>- useReducer()</strong></p>
                    <p><strong>- xState</strong></p>
                </div>
                <div>
                    <p><strong>Distribuição de dados pela aplicação (projeto)</strong></p><br />
                    <p><strong>- Context API</strong></p>
                </div>
            </div>
            <p>____________________________________________________________________________________________________________________________________</p><br />

            <p><strong>alterar objeto-React</strong></p><br />
            <p>O certo a se fazer é: clonar o objeto (...objeto) e depois alterar</p><br />

            <p>__________________________________________________________________</p><br />

            <p>API fakes para consumir</p>
            <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer">01 API FAKE</a>
            <a href="https://weatherstack.com/usage/" target="_blank" rel="noopener noreferrer">02 API FAKE</a>

            <p>__________________________________________________________________</p><br />

            <p>Comunicação direta (components)</p>
            <p>component Pai ele tem o component Filho, pai pode passar props pro filho</p><br />
            <p>Três formas de passar parâmetros pro FILHO </p><br />
            <p> 1 - pegando os parâmetros do PAI</p>
            <p> 2 - pegando os parâmetros do PAI com destructor e atribuindo para sobrenome </p>
            <p> 3 - passando parâmetro para o FILHO</p><br />
            <p>Comunicação indidera (components)</p>
            <p>component filho faz uma ação e gera um impacto no PAI</p>

            <p>__________________________________________________________________</p><br />

            <p><strong>- Comunicação assíncrona</strong></p><br />
            <p style={{textIndent: "3ch"}}>Na área da tecnologia da informação, a comunicação assíncrona é a transmissão de dados, geralmente sem o uso de um sinal de relógio externo, onde os dados podem ser transmitidos intermitentemente em um fluxo estável.</p><br />

            <p>__________________________________________________________________</p><br />

            <p> Importância do componente <strong>App  ReactJS:</strong> Serve para incapsular todos os componentes a nivel de paginas</p>
        </Container>
    )
}

export default Dicas