// import ImgProvider from "../contexts/fullScreen" // API context

import GridLayout from "../layout/gridLayout"
import Frontend from "../frontend/layout"
import { Outlet } from "react-router-dom";

const TemplateFrontend = () => {
    return (
        <GridLayout>
            <Frontend>
                <Outlet />
            </Frontend>
        </GridLayout>
    )
}

export default TemplateFrontend