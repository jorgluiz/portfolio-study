import Left from "../next-left";
import Center from "../next-center";
import Right from "../next-right";

import GridLayout from "../../layout/gridLayout";
import { Grid } from "./styles";

import { Outlet } from "react-router-dom";

export const LayoutNext = () => {
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
