import GridLayout from "../layout/gridLayout"
import JavaScript from "../JavaScript/layout";
import { Outlet } from "react-router-dom";

const TemplateJavaScript = () => {
    return (
        <GridLayout>
            <JavaScript>
                <Outlet />
            </JavaScript>
        </GridLayout>
    )
}

export default TemplateJavaScript