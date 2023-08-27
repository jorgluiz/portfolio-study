import { Container } from "./styles"

const Started = () => {
    return (
        <Container>
            <h1 style={{ marginTop: "25px" }}><strong>Para usar o React na produção, você precisa do npm que está incluído no Node.js</strong></h1><br /><br />
            <div>
                <div>
                    <p>Para obter uma visão geral do que é React, você pode escrever o código React diretamente em HTML.</p><br />
                    <p>Mas, para usar o React em produção, você precisa do npm e do Node.js instalados.</p><br></br>
                    <h1>Reagir diretamente em HTML</h1><br></br>
                    <p>A maneira mais rápida de começar a aprender React é escrever React diretamente em seus arquivos HTML.</p><br></br>
                    <p>Comece incluindo três scripts, <strong>os dois primeiros nos permitem escrever o código React em nossos JavaScripts e o terceiro, Babel, nos permite escrever a sintaxe JSX e ES6 em navegadores mais antigos.</strong></p><br></br>
                </div>
                <div>
                    <pre>
                        {`
                       <!DOCTYPE html>
                       <html>
                           <head>
                               <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
                               <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
                               <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
                           </head>
                           <body>
   
                               <div id="mydiv"></div>
   
                               <script type="text/babel">
                                   function Hello() {
                                   return <h1>Hello World!</h1>;
                                }
   
                                   const container = document.getElementById('mydiv');
                                   const root = ReactDOM.createRoot(container);
                                   root.render(<Hello />)
                               </script>
   
                           </body>
                       </html>
                    `}
                    </pre>
                </div><br></br><br></br>

                <div>
                    <h1>Configurando um ambiente React</h1><br></br>
                    <p>Se você tiver npx e Node.js instalados, poderá criar um aplicativo React usando create-react-app.</p><br></br>
                    <div style={{ backgroundColor: "#ffffcc" }}>
                        <p style={{ textAlign: "center" }}>Se você já instalou create-react-app globalmente anteriormente, é recomendável desinstalar o pacote para garantir que o npx sempre use a versão mais recente do create-react-app.</p><br></br>
                        <p style={{ textAlign: "center" }}>Para desinstalar, execute este comando: npm uninstall -g create-react-app.</p><br></br>
                    </div><br></br>
                    <p><strong>npx create-react-app my-react-app</strong></p><br></br>
                    <p>O <strong>create-react-app</strong> configurará tudo o que você precisa para executar um aplicativo React.</p><br></br>
                    <p>Execute este comando para executar o aplicativo React <strong>npm start</strong></p>
                </div>
            </div>

        </Container>
    )
}

export default Started