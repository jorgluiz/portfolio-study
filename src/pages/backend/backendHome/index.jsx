import estruturaMVC from "../../../assets/estruturaMVC.png"
import padraomvc from "../../../assets/model1.png"
// import imgDependencies from "../../../assets/dependencies.png"

import { Img } from "./styles"

const BackendHome = () => {
    return (
        <>
            <h1>BACK-END</h1><br /><br /><br />

            <div style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>

                <div>
                    <p>estrutura projeto backend ( microserviço ) padrão MVC</p>
                    <a href="https://www.w3schools.com/css/css3_images.asp">
                        <Img src={estruturaMVC} style={{ height: "600px", width: "400px" }} />
                    </a>
                </div>
                <pre>
                    {`
              my-project/
              |- src/
              |  |- app/
              |  |  |- controller/
              |  |  |  |- authController.js
              |  |  |  |- crudController.js
              |  |  |
              |  |  |- middleware/
              |  |  |  |- authMiddleware.js
              |  |  |
              |  |  |- models/
              |  |  |  |- userModel.js
              |  |  |
              |  |- config/
              |  |  |- mail.json
              |  |
              |  |- modules/
              |  |  |- mailer.js
              |  |
              |  |- resources/
              |  |
              |  |- routes/
              |  |  |- authRoutes.js
              |  |
              |  |- dbConnection.js
              |  |- server.js
              |  |- utils.js
              |
              |- .env
              |- .eslintrc.js
              |- .gitignore
              |- dados.json
              |- package-lock.json
              |- package.json
              |- README.md
                `}
                </pre>
            </div>

            <Img src={padraomvc}></Img><br />

            <div>
                <span style={{ fontWeight: "700" }}>Model (models/userModel.js):</span>
                <p> - Responsável pela interação com o banco de dados (usando <span style={{fontWeight: "700"}}>query</span> para consultas SQL).<br/><br/>
                    - Contém métodos para registrar usuários, autenticar, lidar com esquecimento e redefinição de senha, verificar a existência de usuários, obter informações do token e alterar a senha.</p><br />

                <span style={{ fontWeight: "700" }}>View (Não especificada):</span>
                <p>No seu caso, como você está usando ReactJS no frontend, a camada de visualização é cuidada pelo React. As páginas são renderizadas no lado do cliente, e o Node.js (no backend) fornece uma API para o frontend acessar os dados.</p><br />

                <span style={{ fontWeight: "700" }}>Controller (src/controllers/authController.js):</span>
                <p> - Lida com a lógica de negócios e manipula as requisições HTTP.<br/><br/>
                    - Chama os métodos do modelo para interagir com o banco de dados.<br/><br/>
                    - Envia respostas adequadas para o cliente com base no resultado das operações.</p><br />

                <p>No geral, o projeto está seguindo a estrutura MVC, onde o modelo trata da interação com o banco de dados, o controlador lida com a lógica de negócios e as rotas definem como as requisições HTTP são manipuladas. Lembre-se de que, devido à separação do frontend (ReactJS) e backend (Node.js), a camada de visualização (View) é gerenciada pelo ReactJS no lado do cliente.</p><br />
            </div>

            {/* ---------------------------------------------------------------------------------------------------------- */}
            <div style={{ lineHeight: "25px", marginTop: "50px" }}>
                <h1 style={{ textAlign: "initial" }}>Qual tipo de paradigma usar ?</h1><br />
                <p>
                    A escolha entre programação <span style={{ fontWeight: "700" }}>orientada a objetos</span> (usando classes) e programação  <span style={{ fontWeight: "700" }}>imperativa </span>
                    (usando funções e procedimentos) em um projeto Node.js com Express geralmente depende das preferências da equipe,
                    da natureza do projeto e do estilo de programação que se alinha melhor com as necessidades específicas.
                </p><br />

                <h2 style={{textDecoration: "underline"}}>Programação Orientada a Objetos (POO) com Classes:</h2><br />
                <h3>Vantagens:</h3>
                <h3 style={{ display: "inline" }}> &nbsp; 1 Abstração:</h3> <span>Classes permitem encapsular dados e comportamentos relacionados, fornecendo uma abstração mais clara e organizada do código.</span><br /><br />
                <h3 style={{ display: "inline" }}> &nbsp; 2 Reusabilidade:</h3> <span>O encapsulamento e a hierarquia de classes promovem a reutilização de código.</span><br /><br />
                <h3 style={{ display: "inline" }}> &nbsp; 4 Manutenibilidade:</h3> <span>Mudanças em uma parte do código podem ser feitas sem afetar diretamente outras partes, desde que a interface pública permaneça inalterada.</span><br /><br />

                <h3>Desvantagens:</h3>
                <h3 style={{ display: "inline" }}> &nbsp; 1 Complexidade:</h3> <span> O uso excessivo de herança e abstração pode levar a uma complexidade desnecessária.</span><br /><br />
                <h3 style={{ display: "inline" }}> &nbsp; 2 Curva de Aprendizado:</h3> <span>Pode ter uma curva de aprendizado mais íngreme para desenvolvedores que não estão familiarizados com os conceitos de orientação a objetos.</span><br /><br />

                <h2 style={{textDecoration: "underline"}}>Programação Imperativa com Funções:</h2><br />
                <h3>Vantagens:</h3>
                <h3 style={{ display: "inline" }}> &nbsp; 1 Simplicidade:</h3> <span>A abordagem imperativa muitas vezes é mais direta e simples, facilitando a compreensão para desenvolvedores iniciantes.</span><br /><br />
                <h3 style={{ display: "inline" }}> &nbsp; 2 Flexibilidade:</h3> <span>Pode ser mais flexível em alguns casos, especialmente para projetos menores ou tarefas mais simples.</span><br /><br />
                <h3 style={{ display: "inline" }}> &nbsp; 4 Performance:</h3> <span>Em alguns casos, a programação imperativa pode ser mais eficiente em termos de desempenho.</span><br /><br />

                <h3>Desvantagens:</h3>
                <h3 style={{ display: "inline" }}> &nbsp; 1 Dificuldade em Escalar:</h3> <span>Conforme o projeto cresce, a manutenção pode se tornar mais desafiadora sem uma estrutura clara de organização do código.</span><br /><br />
                <h3 style={{ display: "inline" }}> &nbsp; 2 Menos Reusabilidade:</h3> <span>Pode haver menos oportunidades de reutilização de código em comparação com a programação orientada a objetos.</span><br /><br />

                <h3>Escolhendo:</h3><br />
                <div style={{ lineHeight: "30px" }}>
                    <p>A escolha entre POO e programação imperativa depende do contexto e das preferências da equipe. <span style={{ fontWeight: "700" }}>Projetos grandes e complexos muitas vezes se beneficiam da estruturação oferecida pela orientação a objetos</span>, enquanto <span style={{ fontWeight: "700" }}>projetos menores ou equipes que preferem uma abordagem mais direta podem optar pela programação imperativa.</span></p><br />
                    <p style={{ color: "red" }}>Em muitos casos, uma abordagem híbrida é usada, aproveitando o melhor de ambos os estilos, conforme necessário. O importante é manter o código claro, organizado e fácil de manter, independentemente da abordagem escolhida.</p>
                </div>
            </div> <br />
        </>
    )
}

export default BackendHome