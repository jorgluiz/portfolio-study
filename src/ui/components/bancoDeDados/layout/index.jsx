import { Grid } from "./styles";

import Left from "../bancoDados-left";
import Center from "../bancoDados-center";
import Right from "../bancoDados-right";

import GridLayout from "../../layout/gridLayout";
import { Outlet } from "react-router-dom";

export const LayoutBancoDeDados = () => {
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
