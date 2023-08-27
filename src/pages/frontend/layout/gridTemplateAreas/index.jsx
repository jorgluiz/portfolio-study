import { Section, ItemLogo, ItemNav, ItemContent, ItemSideNav, ItemAdvert, ItemFooter } from "./styles"
// import { useOutletContext } from "react-router-dom"

const GridTemplateAreas = () => {

    // const [display, setDisplay] = useOutletContext()

    return (
        <>
            <h1 style={{ display: "flex", justifyContent: "center" }}>grid-template-areas (coluna e linha)</h1>

            <Section>
                <ItemLogo>1</ItemLogo>
                <ItemNav>2</ItemNav>
                <ItemContent>3</ItemContent>
                <ItemSideNav>4</ItemSideNav>
                <ItemAdvert>5</ItemAdvert>
                <ItemFooter>6</ItemFooter>
            </Section>

        </>
    )
}

export default GridTemplateAreas