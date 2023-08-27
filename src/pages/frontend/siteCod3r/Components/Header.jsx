import styled from "styled-components";
import logoCoder from "../../../../assets/siteCod3r/logobranca.png"
import { CiSearch } from "react-icons/ci";

// Container
const Container = styled.div`
grid-area: HeaderGrid;
/* width: 1100px; */

/* display: flex; */
/* justify-content: center; */

& > div > a > img + span {

  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
}

& > div > a > img:hover + span  {
    visibility: visible;
}
`;

// DivLine
const DivLine = styled.div`
/* position: relative; */
/* display: flex; */
width: calc(100% - 50px);
border-bottom: solid 2px #ffffff;
margin: 0 auto 0 auto;
/* bottom: 0; */
`;

// Img
const Img = styled.img`

height: 50px;
width: 300px;
`;

// Home
const Home = styled.a`

color: #ffffff;
cursor: pointer;
`;

// IconLupa
const IconLupa = styled(CiSearch)`

color: #ffffff;
margin-left: 10px;
cursor: pointer;
`;

// Button
const Button = styled.button`

padding: 5px 25px 5px 25px;
background-color: #e84e89;
border-radius: 30px;
line-height: 1.6;
margin-left: 10px;
color: #ffffff;
cursor: pointer;

&:active {
  background-image: linear-gradient(to right bottom,#6d327c,#485DA6,#00a1ba,#01b18e,#32b37b);
  box-shadow: 0 5px #666;
  transform: translateY(4px);

}
`;


const HeaderGrid = () => {
    return (
        <Container>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "100%" }}>
                <a href="https://blog.cod3r.com.br/organizando-seu-projeto/" target="_blank" style={{position: "relative"}} rel="noreferrer">
                    <Img src={logoCoder} />
                    <span>site cord3r</span>
                </a>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <Home>Home</Home>
                    <IconLupa />
                    <Button>Subscribe</Button>
                </div>
            </div>
            <DivLine></DivLine>
        </Container>
    )
}

export default HeaderGrid