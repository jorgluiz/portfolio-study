import { Container } from "./styles"

const UltimaVersaoReact = () => {
    return (
        <Container>
            <h1 style={{ marginTop: "25px" }}>Atualize para o React 18</h1><br></br><br></br>
            <div>
                <p>A atualização de um aplicativo React <strong>existente</strong> para a versão 18 requer apenas duas etapas.</p><br></br>
                <div style={{ backgroundColor: "#ffffcc", padding: "10px 10px 10px 15px" }}>
                    <p>Se você já estiver usando a versão mais recente que <strong>create-react-app</strong> usa o React versão 18, pode pular esta seção.</p><br></br><br></br>
                </div>
                <div><br></br>
                    <h1>Passo 1: Instale o React 18</h1><br></br>
                    <p>Para instalar a versão mais recente, na pasta do seu projeto, execute o seguinte no <strong>terminal:</strong></p>
                </div><br></br>
                <div style={{backgroundColor: "#000", padding: "10px 10px 10px 15px", borderLeft: "4px solid #04AA6D"}}>
                    <p style={{color: "#fff"}}>npm &nbsp; i &nbsp; {"<"} &nbsp; react@latest &nbsp; &nbsp; react-dom@latest</p>
                </div><br /><br /><br />
                <div>
                    <h1>Etapa 2: usar a nova API raiz</h1>
                </div><br />
                <p><strong>Para aproveitar os recursos simultâneos do React 18, você precisará usar a nova API raiz para renderização do cliente.</strong></p><br /><br />
                <div>
                    <h1>{"// Before"}</h1>
                    <p><strong><span style={{color: "red"}}>import &nbsp;</span>{"ReactDOM from 'react-dom'"}</strong></p>
                    <p><strong>{"ReactDOM.render(<App />, document.getElementById('root'))"}</strong></p><br />

                    <h1>{"// After"}</h1>
                    <p><strong><span style={{color: "red"}}>import &nbsp;</span>{"ReactDOM from 'react-dom/client'"}</strong></p>
                    <p><strong>{"const root = ReactDOM.createRoot(document.getElementById('root'))"}</strong></p>
                    <p><strong>{" root.render(<App />)"}</strong></p>
                </div>
            </div>
        </Container>
    )
}

export default UltimaVersaoReact