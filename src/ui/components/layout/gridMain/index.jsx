import React, { useContext }  from "react"

import Fluxograma from "../../../../pages/frontend/floxograma"
import { Container } from "./styles"

// import { ImgAmpliarContext } from "../../../components/contexts/ImgAmpliar" //useContext

const Main = ({ children }) => {

    return (
        <Container>
            {children === undefined ? <Fluxograma /> : children}
        </Container>
    )
}

export default Main