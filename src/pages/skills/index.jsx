import { Outlet } from "react-router-dom"
import GridLayout from "../../ui/components/layout/gridLayout"

import { Header, Main } from "./styles"

const Skills = () => {
    return (
        <GridLayout>
            <Header>
                
            </Header>
                <Main>
                    <Outlet />
                </Main>
        </GridLayout>
    )
}

export default Skills