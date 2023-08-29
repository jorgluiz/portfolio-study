import { Container } from "./styles"

const packageFlag = "<package>  <flag>"


const SettingReact = () => {
    return (
        <Container>

            <p style={{ border: "1px solid #111" }}><strong>Npm é um gerenciador de pacotes para o Node.JS</strong></p><br />

            <p>- npm i -g create-react-app (instalação global)</p><br />
            <p>- npm create-react-app exercicios</p><br />
            <p style={{ textIndent: "3ch" }}>Segundo a documentação oficial do pacote create-react-app que pode ser acessada neste link, os comandos acima devem ser utilizados para versões do npm
                que sejam inferiores à versão 5.2 ***</p><br />
            <p style={{ textIndent: "3ch" }}>Enquanto para a versão 5.2 ou versões mais novas, você deve executar o comando abaixo para criar o seu projeto React:</p><br />
            <p>- npx create-react-app <strong>exercicios</strong></p>
            <p>- npx create-react-app <strong>.</strong></p><br />

            <p style={{ border: "1px solid #111" }}><strong>O Yarn é um sistema de empacotamento de software desenvolvido em 2016 pelo Facebook para o ambiente de tempo de execução JavaScript Node.js.</strong></p><br />

            <p>- yarn create react-app my-app <strong>( my-app )</strong> nome aplicação</p>
            <p>- yarn create react-app <strong>. </strong> <strong>( . )</strong> aplicação pasta atual</p><br />

            <p><span style={{ color: "red" }}>- yarn<strong> remove</strong></span> <strong>{packageFlag}</strong> usa as mesmas <span style={{ color: "red" }}>flags</span> que o comando yarn <span style={{ color: "red" }}>install</span>. </p><br /><br />

            <p><a href="https://community.revelo.com.br/crie-um-projeto-react-js-com-vite-js-do-zero/#:~:text=Al%C3%A9m%20de%20ser%20um%20gerador,mais%20detalhes%20sobre%20o%20Vite.">Referência</a></p>
            <h1 style={{fontSize: "29px"}}>Crie um projeto React.js com Vite.js do zero</h1><br />
            <p><strong>Ferramentas</strong></p><br />
            <ul>
                <li style={{marginBottom: "5px"}}>1. Visual Studio Code (editor de código-fonte).</li>
                <li style={{marginBottom: "5px"}}>2. Vite.js (Ferramenta frontend que gera a estrutura do projeto (React, Vue, Vanilla, etc.).</li>
                <li style={{marginBottom: "5px"}}>3. React.js (biblioteca Frontend com JavaScript)</li>
                <li style={{marginBottom: "5px"}}>4. NPM (Node Package Manager ou gerenciador de pacotes).</li>
                <li style={{marginBottom: "5px"}}>5. Netlify (plataforma web em nuvem).</li>
            </ul><br /><br />
            <p><strong>NPM ou yarn</strong></p>
            <p>São ferramentas de gerenciamento de pacotes (Node Package Manager) para bibliotecas JavaScript vinculadas ao Node.js.</p><br />
            <p><strong>Vite.js</strong></p><br />
            <p>É uma ferramenta para o frontend JavaScript com a qual você pode gerar estrutura de código de vários <span style={{textDecoration: "underline", fontSize: "20px"}}>frameworks</span> como <strong>React</strong>, <strong>Vanilla</strong>, <strong>Vue</strong>, <strong>Svelte</strong> e outros. Além de ser um gerador muito rápido, o Vite.js nos poupa muito tempo configurando outras bibliotecas.</p>

        </Container>
    )
}

export default SettingReact