import { Container } from "./styles"

const Memo = () => {
    return (
        <Container>
            <h1 style={{ marginTop: "25px" }}>React Memo</h1><br />
            <div>
                <p><strong>O uso memo fará com que o React ignore a renderização de um componente se seus props não tiverem sido alterados.</strong></p>
            </div><br />
            <div>
                <p>Isso pode melhorar o desempenho.</p>
            </div><br /><br /><br />
            {/* <div style={{ backgroundColor: "#ffffcc", padding: "43px 30px 30px 10px" }}>
            </div><br /><br /> */}
            <div>
                <h1 style={{ color: "red" }}>Problema</h1>
            </div><br />
            <p><strong>Neste exemplo, o Todos componente é renderizado novamente mesmo quando todos não foram alterados.</strong></p>
            <pre>
                {`
                 return (
                    <>
                      <Todos />
                       <hr />
                       <div>
                        Count: {count}
                        <button onClick={increment}>+</button>
                       </div>
                    </>
                  );
                `}
            </pre><br />
            <p>Quando você clica no botão de incremento, o Todos componente é renderizado novamente.</p><br />
            <p>Se esse componente for complexo, pode causar problemas de desempenho.</p><br /><br />
            <h1 style={{ color: "green" }}>Solução</h1><br />
            <p>Para corrigir isso, podemos usar <strong style={{ color: "red" }}>memo</strong>.</p><br />
            <p style={{ fontSize: "30px" }}>Use <strong style={{ color: "red" }}>memo</strong> para evitar <strong style={{ color: "red" }}>Todos</strong> que o componente seja renderizado novamente desnecessariamente.</p><br />
            <p style={{ fontSize: "30px" }}>Envolva a <strong style={{ color: "red" }}>Todos</strong> <strong style={{ color: "#801b63" }}>export</strong> do componente em <strong style={{ color: "red" }}>memo</strong>:</p>
            <pre>
                {`
                import { memo } from "react";

                const Todos = ({ todos }) => {
                  console.log("child render");
                  return (
                    <>
                      <h2>My Todos</h2>
                      {todos.map((todo, index) => {
                        return <p key={index}>{todo}</p>;
                      })}
                    </>
                  );
                };
                
                export default memo(Todos);
                `}
            </pre>
        </Container>
    )
}

export default Memo