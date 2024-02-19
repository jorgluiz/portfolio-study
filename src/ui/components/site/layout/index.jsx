import GridLayout from "../../layout/gridLayout";
import { Outlet } from "react-router-dom";

export const Sites = () => {
  return (
    <GridLayout>
        <Outlet />
    </GridLayout>
  );
};
