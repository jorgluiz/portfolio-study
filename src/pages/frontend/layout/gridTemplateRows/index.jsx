import { Grid, Section, Item } from "./styles"
import { Link } from "react-router-dom"
// import { useOutletContext } from "react-router-dom"

const GridTemplateRows = () => {

    // const [display, setDisplay] = useOutletContext()

    return (
        <>
            <h1 style={{display: "flex", justifyContent: "center"}}>grid-template-columns / grid-template-rows</h1>
            
                <Section>
                    <Item>1</Item>
                    <Item>2</Item>
                    <Item>3</Item>
                    <Item>4</Item>
                    <Item>5</Item>
                    <Item>6</Item>
                    <Item>7</Item>
                    <Item>8</Item>
                    <Item>9</Item>
                </Section>
           
        </>
    )
}

export default GridTemplateRows