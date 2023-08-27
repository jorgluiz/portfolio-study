import Left from "../javaScript-left";
import Center from "../javaScript-center"
import Right from "../javaScript-right"

import { Grid } from "./styles"

const LayoutJavaScript = ({ children }) => {
    return (
        <Grid>
            <Left />
            <Center>{children}</Center>
            <Right />
        </Grid>
    )
}

export default LayoutJavaScript