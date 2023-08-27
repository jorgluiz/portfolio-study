import { Container } from "./styles"

const ReactJSX = () => {
    return (
        <Container>
            <h1 style={{ marginTop: "25px" }}>O que é JSX?</h1><br></br>
            <div>
                <p>JSX significa JavaScript XML.</p><br />
                <p>JSX nos permite escrever HTML em React.</p><br /><br />
                <h1>Codificação JSX</h1><br />
                <p><strong>JSX nos permite escrever elementos HTML em JavaScript e colocá-los no DOM sem quaisquer métodos</strong></p>
                <p><span style={{ color: "red" }}>createElement()</span>  e/ou <span style={{ color: "red" }}>appendChild()</span>.</p><br />
                <p>JSX converte tags HTML em elementos de react.</p><br />
                <div style={{ backgroundColor: "#ffffcc", padding: "43px 30px 30px 10px" }}>
                    <p>Você não é obrigado a usar o JSX, mas o JSX torna mais fácil escrever aplicativos React.</p><br />
                </div><br />
                <p><strong>JSX</strong></p>
                <div style={{ border: "2px solid #a80000", padding: "5px 5px 5px 5px" }}>
                    <p><strong style={{ color: "#801b63" }}>const</strong> myElement = <strong style={{ color: "#801b63" }}>{"<h1>"}</strong> I Love JSX! <strong style={{ color: "#801b63" }}>{"<h1>"}</strong>;</p><br />
                </div><br />
                <p><strong>Sem JSX</strong></p>
                <div style={{ border: "2px solid #a80000", padding: "5px 5px 5px 5px" }}>
                    <p><strong style={{ color: "#801b63" }}>const</strong> myElement = React.<strong style={{ color: "#0862bb" }}>createElement</strong><strong style={{ color: "#690" }}>{"('h1'"}, {"{}"} {", 'I do not use JSX!')"}</strong>;</p><br />
                </div><br />
                <p>Como você pode ver no primeiro exemplo, o JSX nos permite escrever HTML diretamente no código JavaScript.</p><br />
                <p>JSX é uma extensão da linguagem JavaScript baseada em ES6 e é traduzida para JavaScript regular em tempo de execução.</p><br /><br />
                <h1>Expressões em JSX</h1><br />
                <p>Com JSX você pode escrever expressões dentro de chaves <strong style={{color: "red"}}>{"{ }"}</strong>.</p>
                <p><strong style={{ color: "#801b63" }}>const</strong> myElement = <strong>{"<h1>"}</strong>React is {"{5 + 5}"} times better with JSX<strong>{"</h1>"}</strong>;</p><br /><br />
                <h1>Inserindo um Grande Bloco de HTML</h1><br />
                <p>Para escrever HTML em várias linhas, coloque o HTML entre parênteses:</p><br />
                <pre>
                    {`
                    const myElement = (
                        <ul>
                          <li>Apples</li>
                          <li>Bananas</li>
                          <li>Cherries</li>
                        </ul>
                      );
                    `}
                </pre><br /><br /><br />
                <h1>Um elemento de nível superior</h1><br />
                <p>O código HTML deve ser agrupado em UM elemento de nível superior.</p><br />
                <p>Portanto, se você gosta de escrever dois parágrafos, deve colocá-los dentro de um elemento pai, como um <span style={{color: "red"}}><strong>div</strong></span> elemento.</p><br />
                <pre>
                    {`
                    const myElement = (
                        <div>
                          <p>I am a paragraph.</p>
                          <p>I am a paragraph too.</p>
                        </div>
                      );
                    `}
                </pre><br /><br /><br />
                <div style={{ backgroundColor: "#ffffcc", padding: "50px 25px 50px 50px" }}>
                    <p><strong>Observe</strong> que, para incorporar uma expressão JavaScript dentro do JSX, o JavaScript deve ser colocado entre chaves, <strong>{"{ }"}</strong>.</p>
                </div>
                <p><strong style={{ color: "#801b63" }}>const</strong> myElement =  <strong style={{ color: "#801b63" }}>{"<h1>"}</strong>{`{(x)"} < {"10 ? "Hello" : "Goodbye"}`} <strong style={{ color: "#801b63" }}>{"<h1>"}</strong>;</p>
            </div>
        </Container>
    )
}

export default ReactJSX