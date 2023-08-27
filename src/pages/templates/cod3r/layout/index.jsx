import styled from 'styled-components';

import Header from "./header";
import Main from "./main"
import Footer from "./footer"

const Grid = styled.div`
display: grid;

grid-template-rows: 170px auto 200px;

grid-template-areas: 
  'HeaderGrid'
  'MainGrid'
  'Footer';

background-image: linear-gradient(to right bottom,#6d327c,#485DA6,#00a1ba,#01b18e,#32b37b);
`;


const LayoutCloneSiteCod3r = () => {
    return (
        <Grid>
            <Header />
            <Main />
            <Footer />
        </Grid>
    )
}
export default LayoutCloneSiteCod3r