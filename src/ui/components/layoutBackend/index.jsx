import React from "react";

import { Outlet } from "react-router-dom";
import { Container } from "./styles";

import GridLayout from "../layout/gridLayout"
import LayoutBackend from "../backend/layout"

const Backend = () => {
    return (
        <GridLayout>
            <LayoutBackend>
                <Container>
                    <Outlet />
                </Container>
            </LayoutBackend>
        </GridLayout>
    )
}

export default Backend





// import React from "react";

// import Layout from "../../components/Layout"
// import imgEstrutura from "../../assets/estrutura.png"
// import imgDependencies from "../../assets/dependencies.png"

// import { Link, Imagem, Container } from "./styles";

// import { NavbarContainer, NavbarLinkContainer, NavbarLink } from "../../Styles/NavStyle"

// const Backend = () => {
//     return (
//         <Layout>
//             <Container>
//                 <div>
//                 <NavbarContainer>
//                     <NavbarLinkContainer>
//                         <NavbarLink className="nav-link" to="/back-end/status-code">
//                         status-respostas-HTTP
//                         </NavbarLink>
//                     </NavbarLinkContainer>
//                 </NavbarContainer>
//                 </div>

//                 <div style={{display: "flex",
//                              flexDirection: "column"}}>
//                 <div style={{
//                     height: "auto",
//                     width: "633px",
//                     whiteSpace: "pre-wrap",
//                     marginTop: "20px"
//                     // overflow: "hidden",
//                 }}>
//                     <h1 style={{ textAlign: "center" }}>Estrutura de camadas</h1>
//                     <p style={{ fontSize: "20px" }}>     Cada módulo é uma camada que define uma estrutura<br />nesse projeto que mostra na imagem abaixo contém 4 módulos<br /><br />Controllers: dados<br />Models: validações<br />Routes: rotas para cada recurso<br />Services: pode ser enviar um email para usuário de boas vindas ou até mesmo query para banco de dados</p><br />
//                 </div>

//                 <Link href="https://www.w3schools.com/css/css3_images.asp">
//                     <Imagem src={imgEstrutura} />
//                 </Link>
//                 {/* ---------------------------------------------------------------------------------------------------------- */}
//                 <div style={{
//                     height: "auto",
//                     width: "633px",
//                     whiteSpace: "pre-wrap",
//                     marginTop: "50px"
//                     // overflow: "hidden",
//                 }}>
//                     <h1 style={{ textAlign: "center" }}>Dependencies</h1>
//                     <p style={{ fontSize: "20px" }}>     Essas dependências são nada mais nada menos que bibliotecas externas que a aplicação vai utilizar para funcionamento.<br />Existe dois tipos de dependências produção e desenvolvimento, essas dependências são nada mais que (Technology) <br /><br /><h4 style={{ textAlign: "center" }}>dependencies ( tech )</h4>body-parser:<br />BodyParser serve para trabalhar com os dados vindo do seu cliente. Quando o cliente manda dados via form payload, esse pacote ele formata e transforma os dados para o formato de objeto javascript e joga tudo isso em um objeto dentro do objeto de requisição (req): req. body.<br /><br />cors:<br />Cross-Origin Resource Sharing ou CORS é um mecanismo que permite que recursos restritos em uma página da web sejam recuperados por outro domínio fora do domínio ao qual pertence o recurso que será recuperado<br /><br />dotenv:<br />Essa é a ferramenta utilizada para orquestrar as variáveis ambiente de um projeto.<br /><br />express:<br />Express.js é um framework para Node.js que fornece recursos mínimos para construção de servidores web<br /><br />pg:<br />Ele tem suporte para retornos de chamada, promessas, async/await e pool de conexão.<br /><br />pm2: Ferramentas para MONITORAR Rest-API<br />Monitora servidor ( servidor cair ele restarta automaticamente)
//                     </p><br /><h4 style={{
//                         textAlign: "center",
//                         fontSize: "20px"
//                     }}>devDependencies  ( tech )</h4><p style={{ fontSize: "20px" }}>Axios:<br />Axios é um cliente HTTP baseado em Promises para fazer requisições<br /><br />Jest:<br />Jest é uma estrutura de teste JavaScript<br /><br />nodemon:<br />O nodemon é uma biblioteca que ajuda no desenvolvimento de sistemas com o NodeJs <p style={{ textDecoration: "underline", display: "inline-block", fontSize: "20px" }}>reiniciando automaticamente o servidor</p>.</p><br />
//                 </div>

//                 <Link href="https://www.w3schools.com/css/css3_images.asp">
//                     <Imagem src={imgDependencies} />
//                 </Link>
//                 </div>

//                 <div>
//                     <p>paragrafo</p>
//                 </div>
//             </Container>
//         </Layout>
//     )
// }

// export default Backend