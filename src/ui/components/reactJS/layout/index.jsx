import Left from "../reactJS-left";
import Center from "../reactJS-center";
import Right from "../reactJS-right";

import GridLayout from "../../layout/gridLayout";
import { Outlet } from "react-router-dom";

import { Grid } from "./styles";

export const LayoutReactJS = () => {
  return (
    <GridLayout>
      <Grid>
        <Left />
        <Center>
          <Outlet />
        </Center>
        <Right />
      </Grid>
    </GridLayout>
  );
};
