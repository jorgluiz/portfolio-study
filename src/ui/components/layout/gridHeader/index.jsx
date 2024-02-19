import { Link } from "react-router-dom"
import { Container, DivDropDown } from "./styles"




// const fn = () => {
//     document.getElementByTagName('body').style.background = "red"
// }

const Header = () => {
    return (
        <>
            <Container>
                <div>
                    <Link style={{ color: "white", margin: "10px" }} to={"/o-que-estudar"}>conteudos para estudar!</Link>
                    <Link style={{ color: "white", margin: "10px" }} to={"/o-que-estudei-hoje"}>conteudos que estudei?</Link>
                </div>

                <div>
                    <span style={{ color: "white", fontSize: "15px" }}>{"react-router-dom: ^6.3.0"}</span>
                </div>

                <div>
                    <Link to={"/hospedagem-qual-escolher"} style={{color: "white"}}>Implantar projeto ( hospedagem )</Link>
                </div>
                <DivDropDown>

                </DivDropDown>
            </Container>
        </>
    )
}

export default Header;