export const NextHome = () => {
    return (
        <div>
            <h1>Criando projeto next.js</h1><br />
            <p>Inicialmente vamos criar um projeto base do Next.js:</p><br /><br />
            <p>Vamos rodar o create next app no terminal:</p><br />
            <div style={{ display: "flex", alignItems: "center", height: "72px", width: "665px", background: "#111111", color: "white", borderRadius: "10px" }}>
                <p style={{ margin: "0 0 0 20px", fontSize: "16px" }}>npx create-next-app nome_do_seu_projeto</p>
            </div><br /><br />

            <p><span style={{ fontSize: "20px" }}>pasta styles</span> {"->"} vamos criar ela dentro do src, na minha opinião e mais organizado.</p><br />
            <p><span style={{ fontSize: "20px" }}>Arquivos dentro da pasta public</span>{"->"} São assets da Vercel que não vamos usar.</p><br />
            <p><span style={{ fontSize: "20px" }}>pasta API dentro de pages</span>{"->"}  Essa pasta serve para escrevermos funções que vão ser executadas <br /> no servidor da Vercel caso você queira hospedar seu projeto lá.</p><br />

            <p><span style={{ fontSize: "20px" }}>Typescript</span></p><br />
            <p>Escolhi usar typescript devido aos benefícios que ele trás atualmente como o Intellisense, permitindo pegar erros na hora, sem falar das funcionalidades que ainda não estão disponíveis no ES.</p><br />
            <div style={{ display: "flex", alignItems: "center", height: "72px", width: "665px", background: "#111111", color: "white", borderRadius: "10px" }}>
                <p style={{ margin: "0 0 0 20px", fontSize: "16px" }}>yarn add typescript @types/react @types/node  <span style={{ color: "#f9690e" }}>-D </span></p>
            </div><br /><br />
            <p>Em seguida vamos trocar os formatos de alguns arquivos para os do typescript:</p><br />
            <p style={{ fontSize: "20px" }}>pages/_app.js {"->"} pages/_app.tsx</p><br />
            <p style={{ fontSize: "20px" }}>EsLint</p><br />
            <p>Primeiramente vamos instalar ele como dependência:</p><br />
            <div style={{ display: "flex", alignItems: "center", height: "72px", width: "665px", background: "#111111", color: "white", borderRadius: "10px" }}>
                <p style={{ margin: "0 0 0 20px", fontSize: "16px" }}>yarn add eslint  <span style={{ color: "#f9690e" }}>-D </span></p>
            </div><br />
            <p>Em seguida vamos rodar o init:</p><br />
            <div style={{ display: "flex", alignItems: "center", height: "72px", width: "665px", background: "#111111", color: "white", borderRadius: "10px" }}>
                <p style={{ margin: "0 0 0 20px", fontSize: "16px" }}>yarn init eslin</p>
            </div><br />
            <p>Com isso vamos fazer a configuração com o CLI do Eslint:</p><br />
            <p>Vamos escolher a terceira opção, checar sintaxe, encontrar problemas e forçar um estilo de código</p><br />
            <p>Aqui vamos selecionar a primeira opção, pôs estamos utilizando import/export</p><br />
            <p>Aqui também vai ser a primeira opção, estamos utilizando React</p><br />
            <p>Vamos dizer que sim, o projeto utiliza Typescript</p><br />
            <p>Agora vamos selecionar às duas opções com a barra de espaço, vamos rodar o projeto no navegador, mas o Next também utiliza o Node, logo nos queremos que os dois sejam vistos</p><br />
            <p>Aqui vamos escolher a primeira opção, utilizar um guia de estilo popular</p><br />
            <p>Vamos escolher o guia do Standard</p><br />
            <p>Aqui vamos escolher a terceira opção JSON como arquivo de configuração para o eslint</p><br />
            <p>Por final, vamos escolher sim, para instalar as dependências necessárias</p><br />
        </div>
    )
}