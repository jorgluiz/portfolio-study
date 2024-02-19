import Left from "../javaScript-left";
import Center from "../javaScript-center";
import Right from "../javaScript-right";

import GridLayout from "../../layout/gridLayout";

import { Grid } from "./styles";
import { Outlet } from "react-router-dom";

export const LayoutJavaScript = () => {
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
