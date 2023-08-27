import { useState, useEffect } from "react";

import styled, { css } from "styled-components";

import coder1 from "../../../../assets/logoCoder/cod3r-1.png"
import perfil from "../../../../assets/fotosjr/perfiljr.png"
import logoEscuraCoder from "../../../../assets/logoCoder/cod3r-12-1-700x369.png"
import logoClaraCoder from "../../../../assets/logoCoder/cod3r-7-700x369.png"

import { AiFillFacebook, AiFillTwitterCircle, AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai"
import { ImEnvelop } from "react-icons/im"

// Container
const Container = styled.div`
grid-area: MainGrid;

display: flex;
justify-content: center;
/* width: 1000px; */
/* flex-wrap: wrap; */
`;

// GridMain
const GridMain = styled.div`
display: grid;

grid-template-columns: 40px 800px 300px;
grid-template-areas: 
   "divInnerSticky left right";

margin-top: 40px;
`;

// Left
const Left = styled.div`
grid-area: left;
float: left;
/* flex-wrap: wrap; */
`;

// Right
const Right = styled.div`
grid-area: right;
`;

// =============================

const Img = styled.img`

width: 500px;
height: 300px;
margin-top: 30px;
border-radius: 10px;

& + div > p[target=fontfamily] {
    font-family: 'Poppins', sans-serif;
    /* line-height: 1.5; */
} 
`;

const DivCenterLeft = styled.div`

display: flex;
/* justify-content: center; */
flex-direction: column;
align-items: center;
width: calc(100% - 40px);
border-radius: 10px;
background-color: #ffffff;
position: relative;
/* flex-wrap: wrap; */
/* height: 100vh; */
/* overflow-y: hidden; */
/* overflow-y: ; */
`;

const DivCenterRight = styled.div`

display: flex;
justify-content: center;
width: 100%;
height: 300px;
border-radius: 10px;
background-color: #ffffff;

& > div > h4 + div + section > p {
    margin-bottom: 20px;
}
& > div > h4 + div + section > p > a {
    font-family: 'Poppins', sans-serif;
}
`;

// div lateral ******* ******* *******
const SpclShare = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 190px;
width: 40px;
background-color: #ffffff;
border-right: 1px solid #333333;
border-radius: 20px;
overflow: hidden;


`;

const InnerSticky = styled.div`
grid-area: divInnerSticky;
/* grid-column: 3 / span 6; */
   display: block;
   position: relative;
   height: 191px;
   top: 376px;
   left: 17px;
   z-index: 100;

 ${({ scrollFixed }) => scrollFixed &&
        css`
    position: fixed;
    top: 47px;
    left: 217px;
    /* position: relative; */
    `};

 ${({ displayBlock }) => displayBlock &&
        css`
    position: relative;
    left: 17px;
    top: 2072px;
    `};
 
`;
// ******* ******* *******

const DivButtomSection = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
height: 190px;
margin-bottom: 150px;
`;

const SpclShareButtom = styled.div`

margin-left: 30px;
/* margin-right: 50px; */
`;

const SpclInput = styled.input`

width: 449px;
padding: 10px;
border-radius: 20px;
border: 1px solid transparent;

&:hover {
    border: 1px solid red;
    border-style: dashed;
}
`;

const DivTransparent = styled.div`

display: flex;
justify-content: center;
height: 200px;
width: calc(100% - 40px);
margin-top: 70px;
margin-bottom: 50px;
border-radius: 10px;
background-color: transparent;
background-color: rgb(0, 0, 0, 0.1);
`;

// Img
const DivCenter = styled.div`

height: 80px;
width: 80px;
border-radius: 50%;
border: solid 4px #00bec1;
margin-top: -40px;
cursor: pointer;
`;

// Img
const ImgPerfil = styled.img`

width: 100%;
height: 100%;
border-radius: 100%;
transition-duration: 700ms;

&:hover {
    opacity: 0.8;
}
`;

const DivContainer = styled.div`

display: flex;
justify-content: space-between;
width: calc(100% - 40px);
`;

const DivItem01 = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
/* align-items: center; */
/* flex-wrap: "wrap"; */

width: 360px;
height: 379px;
`;

const DivItem02 = styled.div`

width: 360px;
height: 379px;
`;

const ImgDivItem01 = styled.img`

width: 100%;
height: 100%;
border-radius: 10px;
/* position: absolute; */
`;

const ImgDivItem02 = styled.img`

width: 100%;
height: 100%;
border-radius: 10px;
`;

const SpanCircle = styled.span`

position: absolute;
height: 50px;
width: 50px;
border-radius: 50%;
/* top: 400px; */
left: 270px;
/* z-index: 555; */
background-color: #e84e89;
transition-timing-function: ease;
transition: width 300ms;

&:hover {
width: 60px; 
/* border-radius: 40%; */
/* border-top-right-radius: 50%;
border-bottom-right-radius: 50%; */
}
`;

const MainGrid = () => {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [scrollFixed, SetScrollFixed] = useState(false)
    const [displayBlock, SetDisplayBlock] = useState()

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    // const onScroll = () => {
    //     const scrolltopf = myRef.current.scrollTop
    //     console.log(scrolltopf)
    // }
 
    useEffect(() => {
        if (scrollPosition.toFixed(0) > 700) SetScrollFixed(true)
        if (scrollPosition.toFixed(0) < 700) SetScrollFixed(false)
        if (scrollPosition.toFixed(0) > 2350) SetDisplayBlock(true)
        if (scrollPosition.toFixed(0) < 2300) SetDisplayBlock(false)
    })

    return (
            <Container>
                <GridMain>
                    <InnerSticky scrollFixed={scrollFixed} displayBlock={displayBlock}>
                        <SpclShare><a href="https://blog.cod3r.com.br/organizando-seu-projeto/"><AiFillFacebook style={{ marginBottom: "9px" }} /></a> <AiFillTwitterCircle style={{ marginBottom: "9px" }} /> <AiFillLinkedin style={{ marginBottom: "9px" }} /> <ImEnvelop style={{ marginBottom: "9px" }} /> <AiOutlineWhatsApp style={{ marginBottom: "9px" }} /></SpclShare>
                    </InnerSticky>
                    <Left>
                        <DivCenterLeft>
                            <div style={{ width: "calc(100% - 40px)" }}>
                                <Img src={coder1}></Img>
                                <h1 style={{ fontSize: "34px" }}>Organizando seu Projeto</h1>
                            </div>

                            <div style={{ width: "calc(100% - 40px)" }}>
                                <p target="fontfamily">Fala pessoal, beleza? Hoje vou trazer algumas dicas sobre os passos que eu tomo na hora de organizar meus projetos. O que irei mostrar daqui pra frente não se trata de uma convenção da comunidade, nem de regras de nada, é simplesmente a forma como EU aprendi a me organizar a partir das experiências que venho tendo dentro da Cod3r. Vamos lá!</p><br />

                                <h1 style={{ fontSize: "34px" }}>Arquivos</h1>
                                <p target="fontfamily">Na hora de nomear seus arquivos, as opções são bem variadas. Primeiro temos as questões dos “cases”. Quando vamos nomear um arquivo, não podemos colocar um espaço em branco no nome dele; logo, é uma boa prática você se utilizar de algum artifício para conseguir dar maior legibilidade para aquele nome de arquivo. Lembrando, não é algo necessário, mas é algo bem importante e que te dá uns pontos extras no seu código e projeto. Afinal, convenhamos: o que é mais fácil e rápido de ler → productgridscreen.dart ou product_grid_screen.dart ?</p><br />

                                <p target="fontfamily">Vamos aos estilos que temos disponíveis para utilizar. O mais famoso de todos e talvez o mais utilizado de todos é o camelCase, nele a gente escreve tudo junto mas separa as palavras por letras maiúsculas iniciando cada uma delas, tirando a primeira. Alguns exemplos → camelCase.js ~ testeUnitario.java ~ productGridScreen.dart</p><br />

                                <p target="fontfamily">Outro estilo é o PascalCase, que é quase igual ao Camel, porém já iniciamos ele com letra maiúscula também. Exemplos → PascalCase.js ~ TesteUnitario.java ~ ProductGridScreen.dart</p><br />

                                <p target="fontfamily">Talvez o segundo mais famoso dos estilos seja o snake_case. Nele, separamos as palavras com o famoso underline, o sublinhado. Exemplos → snake_case.js ~ teste_unitario.java ~ product_grid_screen.dart</p><br />

                                <p target="fontfamily">Por último temos o kebab-case onde separamos as palavras por hífen. Exemplos → kebab-case.js ~ teste-unitario.java ~ product-grid-screen.dart</p><br />

                                <p target="fontfamily">Quanto à nomenclatura dos arquivos do projeto, o objetivo é ser o mais claro possível, porém de forma resumida. Não é muito legal nomear seus arquivos com quatro ou mais palavras; uma ou duas já devem ser suficientes, use (no máximo) três. Por último, os nomes devem ser totalmente ligados com o conteúdo que o arquivo vai ter.</p><br />

                                <h1 style={{ fontSize: "34px" }}>Pastas</h1>
                                <p target="fontfamily">É bem comum que um projeto tenha diversas pastas, pois nenhum projeto tem todos os seus arquivos soltos na pasta-raiz dele. Com isso em mente, podemos organizar as pastas de maneira eficaz da seguinte forma: primeiro, é bom começar os nomes com letra maiúscula; por exemplo, Providers ~ Screens ~ Telas ~ Classes, e por aí vai. Em relação a utilizar inglês ou português na hora de nomear, bem, vai de acordo com sua preferência mesmo; acho super importante e válido utilizar o inglês, principalmente caso você vá postar o projeto no GitHub ou algo do tipo. Dessa forma, seu projeto ficará compreensível para toda a comunidade internacional.</p><br />

                                <p target="fontfamily">Uma forma de organizar as pastas é separando seus arquivos por contexto. Todos os arquivos relativos á alguma tela do seu projeto, vão juntos para a pasta Screens ou Telas, os arquivos que são funções que serão reutilizadas dentro do projeto podem ir juntos para a pasta Functions ou Funções e assim por diante. Ou seja: cada pasta vai ser referente a um tipo de arquivo.</p><br />

                                <p target="fontfamily">Outra forma eficaz de separar os arquivos nas pastas é pelo contexto, não dos arquivos, mas do contexto do projeto em si. Por exemplo, imagine um projeto que se trata de uma aplicação de loja online. Dentro desse tipo de projeto teremos diversos arquivos de diversos setores, como por exemplo, os arquivos de código que lidam com o pagamento, outros que lidam com o cadastro do cliente, outro que lide com os produtos da loja etc. Nesse caso, você pode criar pastas de acordo com esses setores e organizar os arquivos da forma que explico em seguida. Uma pasta para Vendas contendo todos os arquivos que envolvem o financeiro da aplicação. Outra pasta Clientes aonde os arquivos referentes aos clientes sejam guardados e por aí vai.</p><br />

                                <p target="fontfamily">Nada impede que você combine esses dois modos. Ou seja, criar pastas maiores separando os arquivos por setor e dentro dessas pastas, novas pastas separando os arquivos pelo contexto mesmo.</p>

                                <DivButtomSection>
                                    <h5>Compartilhar artigo:</h5>
                                    <SpclShareButtom><a href="https://blog.cod3r.com.br/organizando-seu-projeto/"><AiFillFacebook style={{ fontSize: "40px" }} /></a> <AiFillTwitterCircle style={{ fontSize: "40px" }} /> <AiFillLinkedin style={{ fontSize: "40px" }} /> <ImEnvelop style={{ fontSize: "40px" }} /> <AiOutlineWhatsApp style={{ fontSize: "40px" }} /></SpclShareButtom>
                                    <SpclInput placeholder="https://blog.cod3r.com.br/organizando-seu-projeto/" />
                                </DivButtomSection>
                            </div>
                        </DivCenterLeft>

                        <DivTransparent>
                            <DivCenter>
                                <ImgPerfil src={perfil} />
                            </DivCenter>
                        </DivTransparent>

                        {/* img */}
                        <DivContainer>
                            <DivItem01>
                                <ImgDivItem01 src={logoEscuraCoder} />
                                <div style={{ height: "94px", width: "inherit", display: "flex", alignItems: "center", justifyContent: "center", position: "absolute" }}>
                                    <h4 style={{ fontSize: "24px", color: "#ffffff" }}>Iniciando um projeto<br /> Flutter pelo VSCode</h4>
                                </div>
                                {/* <SpanCircle /> */}
                            </DivItem01>
                            <DivItem02>
                                <ImgDivItem02 src={logoClaraCoder} />
                            </DivItem02>
                        </DivContainer>
                    </Left>
                    <Right>
                        <DivCenterRight>
                            <div style={{ margin: "20px 0 30px 30px" }}>
                                <h4 style={{ marginBottom: "10px" }}>Conheça a Cod3r</h4>
                                <div style={{ borderBottom: "3px solid #e0e6ed", marginBottom: "35px" }}></div>
                                <section>
                                    <p><a>Nossos Cursos</a></p>
                                    <p><a>Seja um Assinante</a></p>
                                    <p><a>Seja um Afiliado</a></p>
                                    <p><a>Sobre Nós</a></p>
                                </section>
                            </div>
                        </DivCenterRight>
                    </Right>
                </GridMain>
            </Container>
    )
}

export default MainGrid