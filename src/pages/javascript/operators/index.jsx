import { Tr, Th, Td } from "./styles";

const Operators = () => {
    return (
        <div id="topo">
            <p style={{ textAlign: "center", marginTop: "30px" }}>Types of JavaScript Operators</p><br />

            <p>Existem diferentes tipos de operadores JavaScript:</p><br />
            <ul>
                <li><a href="#aritmeticos">Operadores aritméticos</a></li>
                <li><a href="#atribuicao">Operadores de atribuição</a></li>
                <li><a href="#comparacao">Operadores de Comparação</a></li>
                <li><a href="#logicos">Operadores lógicos</a></li>
                <li>Operadores condicionais</li>
                <li>Operadores de tipo</li>
            </ul>

            <p id="aritmeticos" style={{ fontSize: "40px", marginTop: "200px" }}>Operadores aritméticos JavaScript</p>

            <table>
                <thead>
                    <Tr>
                        <Th>Operator</Th>
                        <Th >Description</Th>
                    </Tr>
                </thead>
                <tbody>
                    <Tr>
                        <Td>+</Td>
                        <Td>Addition</Td>
                    </Tr>
                    <Tr>
                        <Td>-</Td>
                        <Td>Subtraction</Td>
                    </Tr>
                    <Tr>
                        <Td>*</Td>
                        <Td>Multiplication</Td>
                    </Tr>
                    <Tr>
                        <Td>**</Td>
                        <Td>Exponentiation (ES2016)</Td>
                    </Tr>
                    <Tr>
                        <Td>/</Td>
                        <Td>Division</Td>
                    </Tr>
                    <Tr>
                        <Td>%</Td>
                        <Td>Modulus (Division Remainder)</Td>
                    </Tr>
                    <Tr>
                        <Td>++</Td>
                        <Td>Increment</Td>
                    </Tr>
                    <Tr>
                        <Td>--</Td>
                        <Td>Decrement</Td>
                    </Tr>
                </tbody>
            </table>
            {/* --------------------------------------------------------------------------------------------------- */}

            <p id="atribuicao" style={{ fontSize: "40px", marginTop: "200px" }}>Operadores de atribuição JavaScript</p>

            <table>
                <thead>
                    <Tr>
                        <Th>Operator</Th>
                        <Th>Example</Th>
                        <Th>Same As</Th>
                    </Tr>
                </thead>
                <tbody>
                    <Tr>
                        <Td>=</Td>
                        <Td>x = y</Td>
                        <Td>x = y</Td>
                    </Tr>
                    <Tr>
                        <Td>+=</Td>
                        <Td>x += y</Td>
                        <Td>x = x + y</Td>
                    </Tr>
                    <Tr>
                        <Td>-=</Td>
                        <Td>x -= y</Td>
                        <Td>x = x - y</Td>
                    </Tr>
                    <Tr>
                        <Td>*=</Td>
                        <Td>x *= y</Td>
                        <Td>x = x * y</Td>
                    </Tr>
                    <Tr>
                        <Td>/=</Td>
                        <Td>x /= y</Td>
                        <Td>x = x / y</Td>
                    </Tr>
                    <Tr>
                        <Td>%=</Td>
                        <Td>x %= y</Td>
                        <Td>x = x % y</Td>
                    </Tr>
                    <Tr>
                        <Td>**=</Td>
                        <Td>x **= y</Td>
                        <Td>x = x ** y</Td>
                    </Tr>
                </tbody>
            </table>
            {/* --------------------------------------------------------------------------------------------------- */}

            <p id="comparacao" style={{ fontSize: "40px", marginTop: "200px" }}>Operadores de Comparação JavaScript</p>

            <table>
                <thead>
                    <Tr>
                        <Th>Operator</Th>
                        <Th>Description</Th>
                    </Tr>
                </thead>
                <tbody>
                    <Tr>
                        <Td>=</Td>
                        <Td>equal to</Td>
                    </Tr>
                    <Tr>
                        <Td>===</Td>
                        <Td>equal value and equal type</Td>
                    </Tr>
                    <Tr>
                        <Td>!=</Td>
                        <Td>not equal</Td>
                    </Tr>
                    <Tr>
                        <Td>!==</Td>
                        <Td>not equal value or not equal type</Td>
                    </Tr>
                    <Tr>
                        <Td>{'>'}</Td>
                        <Td>greater than</Td>
                    </Tr>
                    <Tr>
                        <Td>{'<'}</Td>
                        <Td>less than</Td>
                    </Tr>
                    <Tr>
                        <Td>{'>='}</Td>
                        <Td>greater than or equal to</Td>
                    </Tr>
                    <Tr>
                        <Td>{'<='}</Td>
                        <Td>less than or equal to</Td>
                    </Tr>
                    <Tr>
                        <Td>{'?'}</Td>
                        <Td>ternary operator</Td>
                    </Tr>
                </tbody>
            </table>
            {/* --------------------------------------------------------------------------------------------------- */}

            <p id="logicos" style={{ fontSize: "40px", marginTop: "200px" }}>Operadores Lógicos JavaScript</p>

            <div style={{ position: "relative" }}>
                <a href="#topo" style={{ position: "absolute", right: "0" }}>voltar topo</a>
            </div>

            <table>
                <thead>
                    <Tr>
                        <Th>Operator</Th>
                        <Th>Description</Th>
                    </Tr>
                </thead>
                <tbody>
                    <Tr>
                        <Td>{'&&'}</Td>
                        <Td>logical and</Td>
                    </Tr>
                    <Tr>
                        <Td>{'||'}</Td>
                        <Td>logical or</Td>
                    </Tr>
                    <Tr>
                        <Td>!</Td>
                        <Td>logical not</Td>
                    </Tr>
                </tbody>
            </table>
            {/* <div style={{display: "flex", border: "1px solid #e0e6ed", marginTop: "30px"}}>
                <div>
                    <p>Operator</p>
                    <p>Operator</p>
                    <p>Operator</p>
                    <p>Operator</p>
                </div>
                <div>
                    <p>Description</p>
                    <p>Description</p>
                    <p>Description</p>
                    <p>Description</p>
                </div>
            </div> */}
            {/* <div style={{ height: "500px" }}>
                pix
            </div>
            <div style={{ height: "500px" }}>
                pix
            </div>
            <div id="ultimo" style={{ height: "500px" }}>
                <button><a top href="#topo">topo</a></button>
                <p>pix</p>
            </div> */}
        </div>
    )
}

export default Operators