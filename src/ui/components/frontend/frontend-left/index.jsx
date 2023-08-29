import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom"
import { useRef, useState } from "react"

import { Container, ContainerIcon, ArrowDiv, ArrowIcon } from "./styles"
import HandAnimation from "../../handAnimation";
import { Button } from "../../button/frontend-Left"
import { FadeInDown } from "../../fadeInDown"
import { NavbarLinkContainerUl, SpanHooks } from "../../../styles/navigation"
import { ReactRoutes, HookRoutes } from "../../../../data/mock"
import warning from "../../../../assets/warning.ico"

const Left = () => {
    const [chooseColor, setChooseColor] = useState("")
    // console.log(chooseColor)
    const refspan = useRef()

    const [targetReactRoutes, setTargetReactRoutes] = useState('');
    const [targetHookRoutes, setTargetHookRoutes] = useState('');

    const [openDropdownReact, setOpenDropdownReact] = useState(false)
    const [openDropdownHook, setOpenDropdownHook] = useState(false)
    const [openDropdownState, setOpenDropdownState] = useState(false)
    // const [displayLeft, setDisplayLeft] = useState(true)

    return (
        <Container chooseColor={chooseColor}>
            <input type="text" onChange={(e) => setChooseColor(e.target.value)} placeholder="escreva a cor" style={{ display: "flex", textAlign: "center" }}></input>

            {/* <Input01 type="text" chooseColor={chooseColor} value={chooseColor} onChange={(e) => setChooseColor(e.target.value)} placeholder="cor aqui"/> */}

            <NavbarLinkContainerUl target="frontend-left01">
                <li>
                    <Link to="projetos-para-implementar">Projetos para implementar</Link>
                </li>
                <li>
                    <Link to="tests">Tests</Link>
                </li>
                <li>
                    <Link to="triangulo">triangulo</Link>
                </li>
                <li className="templates">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>Templates</span>
                        <IoIosArrowForward className="icon" />
                    </div>
                    <ul style={{ margin: "0 0 0 20px" }}>
                        <li>
                            <Link to="catalogo">catalogo</Link>
                        </li>
                        <li>
                            <Link to="cod3r">cod3r</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="direcionar-para-pagina">Direcionar pagina</Link>
                </li>
                <li>
                    <Link to="/video">YouTube</Link>
                </li>
                <li>
                    <Link to="image-full-window">Image full window</Link>
                </li>
                <li>
                    <Link to="video-upload">Video upload</Link>
                </li>
                <li>
                    <Link to="coracao-batendo">Coração batendo</Link>
                </li>
                <li>
                    <Link to="fundamentos-web">Fundamentos Web</Link>
                </li>
                <div className="grid">
                    <strong>Grid-templates</strong>
                    <HandAnimation />
                    <ul className="ul-secundary">
                        <a target="_blank" href="https://www.origamid.com/projetos/css-grid-layout-guia-completo/" rel="noreferrer">referência</a>
                        <div className="li01">
                            <li>
                                <Link to="/display">display</Link>
                            </li>
                        </div>
                        <li className="li02">
                            <Link to="/grid-template-rows">grid-template-rows</Link>
                        </li>
                        <li className="li03">
                            <Link to="/grid-template-areas">grid-template-areas</Link>
                        </li>
                        <li className="li04">
                            <Link to="/grid-template">grid-template</Link>
                        </li>
                        <li className="li05">
                            <Link to="/grid-template-fixe-header">grid-template-fixe-header</Link>
                        </li>
                    </ul>
                </div>
            </NavbarLinkContainerUl>

            {/* margin */}
            <div style={{ margin: "10px 0 10px 0" }}></div>
            {/* ------------------------------------------------------------------------------------------------------------------------------------- */}
            <Button onClick={() => (openDropdownReact ? setOpenDropdownReact(false) : setOpenDropdownReact(true))}>
                ReactJs
                <ContainerIcon>
                    <ArrowDiv openDropdownReact={openDropdownReact}>
                        <ArrowIcon /> {/* icon */}
                    </ArrowDiv>
                </ContainerIcon>
            </Button>

            {openDropdownReact &&

                <FadeInDown duration="0.8s">
                    <NavbarLinkContainerUl>
                        {ReactRoutes.map((item, index) => {

                            return (
                                <li key={index}>
                                    <Link to={item.path}>
                                        <span ref={refspan} onClick={(e) => (setTargetReactRoutes(e.currentTarget.textContent))} titletargetreact={targetReactRoutes === item.title ? true : ''}>{item.title}</span>
                                        {item.title === "Dicas-react" &&
                                            <img height="20px" className="warning" src={warning}></img>}
                                    </Link>
                                </li>
                            )
                        })}
                    </NavbarLinkContainerUl>
                </FadeInDown>
            }
            {/* margin */}
            <div style={{ margin: "10px 0 10px 0" }}></div>

            {/* ------------------------------------------------------------------------------------------------------------------------------------- */}
            <Button onClick={() => (openDropdownHook ? setOpenDropdownHook(false) : setOpenDropdownHook(true))}>
                Hooks
                <ContainerIcon>
                    <ArrowDiv openDropdownHook={openDropdownHook}>
                        <ArrowIcon />
                    </ArrowDiv>
                </ContainerIcon>
            </Button>

            {openDropdownHook &&
                <FadeInDown duration="0.8s">
                    <NavbarLinkContainerUl>
                        {HookRoutes.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={item.path}>
                                        {index + 1 + '.'}
                                        <SpanHooks onClick={(e) => (setTargetHookRoutes(e.currentTarget.textContent))} titletargethook={targetHookRoutes === item.title ? true : ''}>{item.title}</SpanHooks>
                                        {item.title === "useContext" &&
                                            <p><Link to="context">- Context</Link></p>}
                                        {item.title === "useContext" &&
                                            <p><Link to="redux">- Redux</Link></p>}
                                    </Link>
                                </li>
                            )
                        })}
                    </NavbarLinkContainerUl>
                </FadeInDown>}
            <div style={{ margin: "10px 0 10px 0" }}></div>

            {/* ------------------------------------------------------------------------------------------------------------------------------------- */}
            <Button onClick={() => setOpenDropdownState(openDropdownState ? false : true)}>State</Button>

            {openDropdownState &&

                <NavbarLinkContainerUl target="frontend-left03">
                    <li>
                        <Link to="localization">Get Localization</Link>
                    </li>
                    <li>
                        <Link to="tipos-dados-argumentos">tipos dados arguments</Link>
                    </li>
                    <li>
                        <Link to="mudando-estado-array" style={{ color: "#323232", fontSize: "14px" }}>Mudando o estado de um array </Link>
                    </li>
                    <li>
                        <Link to="list" style={{ color: "#323232" }}>LIST [ ]</Link>
                    </li>
                    <li>
                        <Link to="crud" style={{ color: "#323232" }}>CRUD</Link>
                    </li>
                </NavbarLinkContainerUl>
            }

            <div style={{ margin: "10px 0 10px 0" }}></div>

            <NavbarLinkContainerUl target="frontend-left02">
                <li>
                    <Link to="drop-down-3-formas">três tipos dropDown</Link>
                </li>
                <li>
                    <Link to="pseudo-element-before-after">Pseudo Element</Link>
                </li>
                <li>
                    <Link to="efeito-matriz">Efeito Matriz</Link>
                </li>
                <li>
                    <Link to="degrade">Degradê</Link>
                </li>
                <li>
                    <Link to="transforms">Transform</Link>
                </li>
                <li>
                    <Link to="transitions">Transition</Link>
                </li>
                <li>
                    <Link to="animations">Animations</Link>
                </li>
            </NavbarLinkContainerUl>

            <div style={{ margin: "10px 0 10px 0" }}></div>

        </Container>
    )
}

export default Left