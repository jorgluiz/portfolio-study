import React, { useContext }  from "react"

import { Container } from "./styles"

import { ImgAmpliarContext } from "../../../components/contexts/ImgAmpliar" //useContext

const Main = ({ children }) => {
    const { imgAmpliar02 } = useContext(ImgAmpliarContext)

    return (
        <Container imgAmpliar02={imgAmpliar02}>
            {children}
        </Container>
    )
}

export default Main