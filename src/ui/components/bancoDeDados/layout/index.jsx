import { Grid } from "./styles"

import Left from "../bancoDados-left"
import Center from "../bancoDados-center"
import Right from "../bancoDados-right"

const LayoutBancoDeDados = ({ children }) => {
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

export default LayoutBancoDeDados