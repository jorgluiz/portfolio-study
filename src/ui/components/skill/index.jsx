import GridLayout from "../layout/gridLayout";
import { Outlet } from "react-router-dom";

export const LayoutSkill = () => {
    return (
        <GridLayout>
            <Outlet />
        </GridLayout>
    )
}