import GridLayout from "../layout/gridLayout"
import ReactJS from "../reactJS/layout"
import { Outlet } from "react-router-dom";


const TemplateReactJS = () => {
    return (
        <GridLayout>
            <ReactJS>
                <Outlet/>
            </ReactJS>
        </GridLayout>
    )
}

export default TemplateReactJS