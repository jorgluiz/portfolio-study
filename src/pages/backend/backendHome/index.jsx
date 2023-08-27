import imgEstrutura from "../../../assets/estrutura.png"
import imgDependencies from "../../../assets/dependencies.png"

import { Img  } from "./styles"

const BackendHome = () => {
    return (
        <>
            <h1>Estrutura de camadas</h1>
            <p style={{ whiteSpace: "pre-wrap" }}>Cada módulo é uma camada que define uma estrutura<br />nesse projeto que mostra na imagem abaixo contém 4 módulos<br /><br />Controllers: dados<br />Models: validações<br />Routes: rotas para cada recurso<br />Services: pode ser enviar um email para usuário de boas vindas ou até mesmo query para banco de dados</p><br />


            <a href="https://www.w3schools.com/css/css3_images.asp">
                <Img src={imgEstrutura} />
            </a>

            {/* ---------------------------------------------------------------------------------------------------------- */}
            <div style={{ height: "auto", width: "633px", whiteSpace: "pre-wrap", marginTop: "50px" }}>
                <h1 style={{ textAlign: "center" }}>Dependencies</h1>
                <p>Essas dependências são nada mais nada menos que bibliotecas externas que a aplicação vai utilizar para funcionamento.<br />Existe dois tipos de dependências produção e desenvolvimento, essas dependências são nada mais que (Technology)</p> <br /><br />
                <h4 style={{ textAlign: "center" }}>dependencies ( tech )</h4>

                <p>body-parser:</p>
                <p>BodyParser serve para trabalhar com os dados vindo do seu cliente. Quando o cliente manda dados via form payload, esse pacote ele formata e transforma os dados para o formato de objeto javascript e joga tudo isso em um objeto dentro do objeto de requisição (req): req. body.</p><br />

                <h1>cors:</h1>
                <p>Cross-Origin Resource Sharing ou CORS é um mecanismo que permite que recursos restritos em uma página da web sejam recuperados por outro domínio fora do domínio ao qual pertence o recurso que será recuperado</p><br />

                <h1>dotenv:</h1>
                <p>Essa é a ferramenta utilizada para orquestrar as variáveis ambiente de um projeto.</p><br />
                
                <h1>express:</h1>
                <p>Express.js é um framework para Node.js que fornece recursos mínimos para construção de servidores web</p><br />

                <h1>pg:</h1>
                <p>Ele tem suporte para retornos de chamada, promessas, async/await e pool de conexão.</p>
                
                <h1>pm2:</h1>
                <p>Ferramentas para MONITORAR Rest-API<br />Monitora servidor ( servidor cair ele restarta automaticamente)</p><br />

                <h4 style={{ textAlign: "center" }}>devDependencies  ( tech )</h4>
                
                <h1>Axios:</h1>
                <p>Axios é um cliente HTTP baseado em Promises para fazer requisições</p><br />

                <h1>Jest:</h1>
                <p> Jest é uma estrutura de teste JavaScript</p><br />
                
                <h1>nodemon:</h1>
               <p> O nodemon é uma biblioteca que ajuda no desenvolvimento de sistemas com o NodeJs <span style={{ textDecoration: "underline", display: "inline" }}>reiniciando automaticamente o servidor.</span></p><br></br>
            </div>

            <a href="https://www.w3schools.com/css/css3_images.asp">
                <Img src={imgDependencies} />
            </a>
        </>
    )
}

export default BackendHome