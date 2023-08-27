import Left from "../reactJS-left"
import Center from "../reactJS-center"
import Right from "../reactJS-right"

import { Grid } from "./styles"

const ReactJS = ({ children }) => {
    return (
        <Grid>
            <Left />
            <Center>{children}</Center>
            <Right />
        </Grid>

    )
}

export default ReactJS