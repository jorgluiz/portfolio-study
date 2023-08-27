import updateState from "../../../assets/updateState.png"
import addValorMatriz from "../../../assets/addValorMatriz.png"
import spliceArray from "../../../assets/spliceArray.png"
import deleteElementArray from "../../../assets/deleteElementArray.png"
import addUpdateDelete from "../../../assets/addUpdateDelete.png"

import { Container } from "./styles"

const Dicas = () => {
    return (
        <Container>
            <h1>O que deve usar na minha aplicação? Para ter uma aplicação mais peformática o possível </h1><br /><br />

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

            <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>

            <p>Comunicação direta (components)</p>
            <p>component Pai ele tem o component Filho, pai pode passar props pro filho<strong>.</strong></p><br />
            <p>Formas de obter parâmetros do filho &nbsp; <strong>{"<componente todos={Todos}> </componente>"}</strong></p><br />
            <p> 1 - Setar <strong>props</strong> no argumento para o PAI</p>
            <p><strong>{"const App = (props) => {  }"}</strong></p><br />
            <p> 2 - Setar chaves {"{ }"} no argumento, assim fazer o destructor</p>
            <p><strong>{"const App = ({ Todos }) => {  }"}</strong></p><br />

            <p>Comunicação indidera (components)</p>
            <p>component filho faz uma ação e gera um impacto no PAI</p>

            <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>

            <p><strong>- Comunicação assíncrona</strong></p><br />
            <p style={{ textIndent: "3ch" }}>Na área da tecnologia da informação, a comunicação assíncrona é a transmissão de dados, geralmente sem o uso de um sinal de relógio externo, onde os dados podem ser transmitidos intermitentemente em um fluxo estável.</p><br />

            <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>

            <p> Importância do componente <strong>App  ReactJS:</strong> Serve para incapsular todos os componentes a nivel de paginas</p>

            <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>

            <p><strong>como alterar um estado de um input ?</strong></p>
            <p>Para alterar os dados existentes, você cria novos dados como evolução do já existente</p><br />
            <p>Exemplo: Inicializaremos nosso estado com um objeto vazio. Para acessar os campos no manipulador de eventos, use a sintaxe <strong style={{ color: "red" }}>event.target.name</strong> e <strong style={{ color: "red" }}>event.target.value.</strong></p>
            <p>Para atualizar o estado, use colchetes [notação de colchetes] ao redor do nome da propriedade.</p><br />
            <p>Clonar o objeto (...objeto) e depois alterar</p><br />
            <img src={updateState}></img><br /><br /><br /><br />
            <h1>Adicionar um valor a um array (state)</h1>
            <img style={{ border: "1px solid #111" }} src={addValorMatriz} width="100%"></img><br /><br />

            <h1>PARTE 1: Removendo um valor em um array (state)</h1>
            <img style={{ border: "1px solid #111" }} src={spliceArray} width="100%"></img><br /><br />

            <h1>PARTE 2: Removendo um valor em um array (state)</h1>
            <img style={{ border: "1px solid #111" }} src={deleteElementArray} width="100%"></img><br /><br />
            
            <h1>Adicionar atualizar e deletar</h1>
            <img style={{ border: "1px solid #111" }} src={addUpdateDelete} width="100%"></img><br /><br />
        </Container>
    )
}

export default Dicas