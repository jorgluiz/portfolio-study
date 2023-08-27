import { useState } from "react"

import { Container, NavbarLinkContainerUl, LinkNavBar, Input } from "./styles"

const Left = () => {
    const [choose, setChoose] = useState("black")

    return (
        <Container>
            <Input type="text" color={choose} onChange={(e) => setChoose(e.target.value)} placeholder="escreva a cor" />
            <NavbarLinkContainerUl>
                <li>
                    <LinkNavBar target="" to="status-code">Status code</LinkNavBar>
                </li>
                <li>
                    <LinkNavBar target="" to="env">.Env for deploy</LinkNavBar>
                </li>
                <li>
                    <LinkNavBar target="" to="servicos-autenticacao">Serviços de <br /> autenticação</LinkNavBar>
                </li>
            </NavbarLinkContainerUl>
        </Container>
    )
}

export default Left