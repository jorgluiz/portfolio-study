import { Container } from "./styles"

const packageFlag = "<package>  <flag>"


const SettingReact = () => {
    return (
        <Container>

            <p><strong>Npm é um gerenciador de pacotes para o Node.JS</strong></p><br />

            <p>- npm i -g create-react-app (instalação global)</p><br />
            <p>- npm create-react-app exercicios</p><br />
            <p style={{ textIndent: "3ch" }}>Segundo a documentação oficial do pacote create-react-app que pode ser acessada neste link, os comandos acima devem ser utilizados para versões do npm
                que sejam inferiores à versão 5.2 ***</p><br />
            <p style={{ textIndent: "3ch" }}>Enquanto para a versão 5.2 ou versões mais novas, você deve executar o comando abaixo para criar o seu projeto React:</p><br />
            <p>- npx create-react-app <strong>exercicios</strong></p>
            <p>- npx create-react-app <strong>.</strong></p><br />

            <p><strong>O Yarn é um sistema de empacotamento de software desenvolvido em 2016 pelo Facebook para o ambiente de tempo de execução JavaScript Node.js.</strong></p><br />

            <p>- yarn create react-app my-app <strong>( my-app )</strong> nome aplicação</p>
            <p>- yarn create react-app <strong>. </strong> <strong>( . )</strong> aplicação pasta atual</p><br />

            <p><span style={{color: "red"}}>- yarn remove</span> <strong>{packageFlag}</strong> usa as mesmas <span style={{color: "red"}}>flags</span> que o comando yarn <span style={{color: "red"}}>install</span>. </p>

        </Container>
    )
}

export default SettingReact