import FluxogramaEdiagrama from "../../../../pages/frontend/fluxogramaEdiagrama"
import Object from "../../../../pages/javascript/object"
import { Container } from "./styles"

// import { ImgAmpliarContext } from "../../../components/contexts/ImgAmpliar" //useContext

const Main = ({ children }) => {

    return (
        <Container className="souBody">
            {children === undefined ? <><FluxogramaEdiagrama /> <Object /></> : children}
        </Container>
    )
}

export default Main