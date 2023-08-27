import { Container } from "./styles";
import { Outlet } from "react-router-dom";

const ReactJSCenter = () => {
    return (
        <Container>
           <Outlet />
        </Container>
    )
}

export default ReactJSCenter