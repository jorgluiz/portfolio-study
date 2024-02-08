import { useState } from "react"

import { Container, NavbarLinkContainerUl, LinkNavBar, Input } from "./styles"

const Left = () => {
    const [choose, setChoose] = useState("black")

    return (
        <Container>
            <Input type="text" color={choose} onChange={(e) => setChoose(e.target.value)} placeholder="escreva a cor" />
            <NavbarLinkContainerUl>
                <li style={{marginTop: "10px"}}>
                    <LinkNavBar target="" to="escalabilidade-de-projeto">- Escalabilidade projeto</LinkNavBar>
                </li>
                <li style={{marginTop: "10px"}}>
                    <LinkNavBar target="" to="sugestoes-gerais">- Sugestões Gerais</LinkNavBar>
                </li>
                <li style={{marginTop: "10px"}}>
                    <LinkNavBar target="" to="passar-dados-entre-rotas">- Passar dados entre rotas</LinkNavBar>
                </li>
                <li style={{marginTop: "10px"}}>
                    <LinkNavBar target="" to="framework-biblioteca-ferramenta">- Entendendo o que é<br />&nbsp;Framework <br />&nbsp;Biblioteca <br />&nbsp;Ferramenta</LinkNavBar>
                </li>
                <li style={{marginTop: "10px"}}>
                    <LinkNavBar target="" to="mysql-puro-ou-orm">- MySQL puro ou ORM</LinkNavBar>
                </li>
            </NavbarLinkContainerUl>
        </Container>
    )
}

export default Left