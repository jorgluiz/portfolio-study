import { Link } from "react-router-dom"

import style from "./css.module.css"
import { Container } from "./styles"
import { HookRoutes } from "../../../../data/mock"

const ReactJSLeft = () => {

    return (
        <Container>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Link to="react-started">React Get Started</Link>
                <Link to="react-atualizar">Atualizar React</Link>
                <Link to="react-jsx">React JSX</Link>
                <Link to="react-memo">React Memo</Link>
                <Link to="react-css-objeto">Estilização CSS react</Link>
                <Link to="react-scss">Introdução SCSS</Link><br />

                <Link to="react-setting">Setting up a React</Link>
                <Link to="design-ui">Design-ui</Link>
                <Link to="design-ux">Design-ux</Link>
                <Link className={style.dicasReact} to="dicas-react">Dicas react</Link><br />

                <p>Handle {"->"} State</p>
                <ul className={style.ulState}>
                    <li>
                        <Link to="localization">- Get Localization</Link>
                    </li>
                    <li>
                        <Link to="tipos-dados-argumentos">- Tipos dados arguments</Link>
                    </li>
                    <li>
                        <Link to="mudando-estado-array" style={{ color: "#323232", fontSize: "14px" }}>- <span style={{ fontSize: '12px' }}>Mudando o estado de um array</span></Link>
                    </li>
                    <li>
                        <Link to="list" style={{ color: "#323232" }}>- List [ ]</Link>
                    </li>
                    <li>
                        <Link to="crud" style={{ color: "#323232" }}>- CRUD</Link>
                    </li>
                </ul><br />

                <p className={style.hooks}>Hooks</p>
                {HookRoutes.map((el, i) => {
                    return (
                        <ul key={i}>
                            <li className={style.liHooks}><Link key={i} to={el.path} style={{ margin: "0 0 0" }}>- {el.title}</Link></li>
                        </ul>
                    )
                })}
            </div>
        </Container>
    )
}

export default ReactJSLeft