import React from "react"

import { Grid } from "./styles"

import Left from "../backend-left"
import Center from "../backend-center"
import Right from "../backend-right"

const LayoutBackend = ({ children }) => {
    return (
        <Grid>
            <Left />
            <Center>
                {children}
            </Center>
            <Right />
        </Grid>
    )
}

export default LayoutBackend