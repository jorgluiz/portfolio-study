import modeloLogico from "../../../assets/bancoDados/logico.png"
import modeloFisico from "../../../assets/bancoDados/fisico.png"
import etapasDesenvolvimento from "../../../assets/bancoDados/etapasDesenvolvimento.png"
import mer from "../../../assets/bancoDados/mer.png"

const ModelagemDados = () => {
    return (
        <>
        <h1 style={{textAlign: "center"}}>Iniciando projeto com banco de dados</h1><br /><br />

        <p><strong>Processo modelagem de dados em três níveis:</strong></p><br />
        <p><strong>1° Modelo Conceitual</strong></p>
        <p>Primeira fase da modelagem, onde representamos o mundo real por meio de</p>
        <p>uma visao simplificada determinar quais informações serão</p>
        <p>armazenada no DB (database)</p><br />
        <p><strong>Exemplo:</strong></p>
        <h4>Cadastro de produtos em uma loja</h4>
        <p>Dados necessários: Nome do produto, categoria de produto(limpeza, higiene, etc), código fornecedor,</p>
        <p>tipo de embalagem, gramatura, quantidade</p><br /><br />

        <p><strong>2°</strong></p>
        <img width="600px" src={modeloLogico}></img><br /><br /><br />

        <p><strong>3°</strong></p>
        <img width="600px" src={modeloFisico}></img><br /><br /><br /><br />

        <img  width="600px" src={etapasDesenvolvimento}></img><br /><br /><br />
        <img  width="600px" src={mer}></img><br /><br /><br />

        <h2>O que são atributos</h2>
        <p>Tipos de atributos</p>
        <ul>
            <li>Simples</li>
            <li>Composto</li>
            <li>Multivalorado</li>
            <li>Determinante</li>
            <li>Identificador</li>
        </ul><br />

        <p>Atributos Simples / Atômico</p>
        <p><strong>Ex:</strong> Nome, CPF, CNPJ</p><br />
        <p>Atributos Composto</p>
        <p>É formado por itens menores; pode ser subdividido</p>
        <p>em outros atributos</p>
        <p><strong>Ex:</strong>Endereço</p><br />
        <p>Atributos Multivalorado</p>
        <p>Pode conter mais de um valor para mesmo registro</p>
        <p><strong>Ex: *</strong>Telefone</p><br />
        <p>Atributos Determinante</p>
        </>
    )
} 

export default ModelagemDados