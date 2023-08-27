import { FcSalesPerformance } from 'react-icons/fc'

import Task01 from "./Task01"
import Task02 from "./Task02"


const Crud = () => {
    return (
        <>
        <h1 style={{marginBottom: "50px"}}>Qual Crud será mais peformatico?</h1>
        <FcSalesPerformance />
        <h6 style={{display: "inline", margin: "0 0 0 50px"}}>Lista dinâmica utilizando React JS (CRUD)</h6>

        <p style={{fontFamily: 'Source Serif Pro serif', lineHeight: "32px", margin: "40px 0 30px 0"}}>Hoje vamos ver como criar um <strong>lista dinâmica</strong> em ReactJS com as funcionalidades <br /> <strong>adicionar</strong> um item, <strong>editar</strong> & <strong>remover</strong>.</p>
        <a href="https://medium.com/@daltoe/criar-editar-e-deletar-item-da-lista-utilizando-react-js-f4729295f0de">Click aqui: Créditos</a>
        <p style={{fontFamily: 'Source Serif Pro serif'}}>Primeiro Component: Task01</p>
        <Task01 />

        <a href="https://www.youtube.com/watch?v=QVokz2OrEy8">Click aqui: Créditos</a>
        <p style={{fontFamily: 'Source Serif Pro serif'}}>Segundo Component: Task02</p>
        <Task02 />        
        </>
    )
}

export default Crud