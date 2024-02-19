import { Grid } from "./styles";

import Left from "../frontend-left";
import Center from "../frontend-center";
import Right from "../frontend-right";

import GridLayout from "../../layout/gridLayout";
import { Outlet } from "react-router-dom";

export const LayoutFrontend = () => {
  return (
    <GridLayout>
      <Grid>
        <Left />
        <Center>
          {" "}
          {/* LayoutFrontend */}
          <Outlet />
        </Center>
        <Right />
      </Grid>
    </GridLayout>
  );
};
