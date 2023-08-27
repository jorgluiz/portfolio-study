import { Grid } from "./styles"

import Left from "../frontend-left"
import Center from "../frontend-center"
import Right from "../frontend-right"

const Frontend = ({ children }) => {
    return (
        <Grid>
            <Left />
            <Center> {/* LayoutFrontend */}
                    {children}
            </Center>
            <Right />
        </Grid>
    )
}

export default Frontend