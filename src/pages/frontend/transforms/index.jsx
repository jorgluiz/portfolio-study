import styled from "styled-components";
import { Link } from "react-router-dom"

const Container = styled.div`

`;

const Transforms = styled.div`

& > ul > li {
    margin-top: 5px;
    color: red;
}
`;

const Translate = styled.div`

height: 200px;
width: 300px;
margin-bottom: 100px;
background-color: yellow;
margin-right: 346px;

&:hover {

transform: translate(10px, 20px);
}
`;

const TranslateNegative = styled.div`

position: relative;
height: 200px;
width: 300px;
margin-bottom: 100px;
background-color: blue;
left: 0;
/* margin-left: 108px; */

&:hover {

transform: translate(-10px, -20px);
}
`;

const Rotate = styled.div`

height: 100px;
width: 200px;
margin-left: 100px;
/* margin-bottom: 100px; */
background-color: yellow;
border: solid 2px #000000;

transition-duration: 10s;

&:hover {
    transform: rotate(360deg);
}
`;

const RotateNegative = styled.div`

height: 100px;
width: 200px;
margin-left: 100px;
/* margin-bottom: 100px; */
background-color: yellow;
border: solid 2px #000000;

transition-duration: 10s;

&:hover {
    transform: rotate(-360deg);
}
`;

const Scale = styled.div`

height: 100px;
width: 210px;
margin-left: 100px;
background-color: yellow;
border: solid 2px #000000;

transition-duration: 3s;

&:hover {

transform: scale(2, 3);
}
`;

const ScaleDiminuir = styled.div`

height: 100px;
width: 250px;
margin-left: 100px;
background-color: yellow;
border: solid 2px #000000;

transition-duration: 3s;

&:hover {

transform: scale(0.5, 0.5);
}
`;

const ScaleX = styled.div`

height: 100px;
width: 250px;
margin-left: 100px;
background-color: yellow;
border: solid 2px #000000;

transition-duration: 3s;

&:hover {

transform: scaleX(2);
}
`;

const ScaleXDiminuir = styled.div`

height: 100px;
width: 250px;
margin-left: 100px;
background-color: yellow;
border: solid 2px #000000;

transition-duration: 3s;

&:hover {

transform: scaleX(0.5);
}
`;

const ScaleY = styled.div`

height: 100px;
width: 250px;
margin-left: 100px;
background-color: yellow;
border: solid 2px #000000;

transition-duration: 3s;

&:hover {

transform: scaleY(2);
}
`;

const ScaleYDiminuir = styled.div`

height: 100px;
width: 250px;
margin-left: 100px;
background-color: yellow;
border: solid 2px #000000;

transition-duration: 3s;

&:hover {

transform: scaleY(0.5);
}
`;

const SkewX = styled.div`

height: 100px;
width: 250px;
margin-left: 100px;
background-color: yellow;
border: solid 2px #000000;

transition-duration: 3s;

&:hover {

transform: skewX(20deg);
}
`;

const SkewY = styled.div`

height: 100px;
width: 250px;
margin-left: 100px;
background-color: yellow;
border: solid 2px #000000;

transition-duration: 3s;

&:hover {

transform: skewY(20deg);
}
`;

const Skew = styled.div`

height: 100px;
width: 250px;
margin-left: 100px;
background-color: yellow;
border: solid 2px #000000;

transition-duration: 3s;

&:hover {

transform: skew(20deg, 10deg);
}

&[target="skewY"] {

width: 400px;
transition-duration: 3s;

&:hover {

transform: skew(20deg);
}
}
`;

const Matrix = styled.div`

height: 100px;
width: 250px;
margin-left: 100px;
background-color: yellow;
border: solid 2px #000000;

transition-duration: 3s;

&:hover {

transform: matrix(1, -0.3, 0, 1, 0, 0);
}
`;

const RotateX = styled.div`

height: 100px;
width: 250px;
margin-left: 100px;
background-color: yellow;
border: solid 2px #000000;

transition-duration: 3s;

&:hover {

transform: rotateX(150deg);
}
`;

const RotateY = styled.div`

height: 100px;
width: 250px;
margin-left: 100px;
background-color: yellow;
border: solid 2px #000000;

transition-duration: 3s;

&:hover {

transform: rotateY(150deg);
}
`;

const RotateZ = styled.div`

height: 100px;
width: 250px;
margin-left: 100px;
background-color: yellow;
border: solid 2px #000000;

transition-duration: 3s;

&:hover {

transform: rotateZ(45deg);
}
`;


// _____________________________________________________________________________________________________________________________

const Transforms3D = styled.div`


`;

const TransformsPage = () => {
    return (
        <Container>
            <Transforms>
                <h1 style={{ margin: "10px 0 10px 0", fontSize: "32px" }}>Transformações CSS 2D</h1>
                <p style={{ margin: "0 0 100px 0" }}>As transformações CSS permitem <strong>mover</strong>, <strong>girar</strong>, <strong>dimensionar</strong> e <strong>inclinar elementos</strong>.</p>

                <h1 style={{ margin: "0 0 10px 0", fontSize: "32px" }}>Métodos de Transformações CSS 2D</h1>
                <p>Com a propriedade CSS <strong>transform</strong> você pode usar os seguintes métodos de transformação 2D:</p>

                <ul style={{ margin: "20px 0 80px 20px", width: "calc(100% - 40px)" }}>
                    <li><strong style={{color: "#111"}}>transform:</strong> translate();</li>
                    <li><strong style={{color: "#111"}}>transform:</strong> rotate();</li>
                    <li><strong style={{color: "#111"}}>transform:</strong> scaleX();</li>
                    <li><strong style={{color: "#111"}}>transform:</strong> scaleY();</li>
                    <li><strong style={{color: "#111"}}>transform:</strong> scale();</li>
                    <li><strong style={{color: "#111"}}>transform:</strong> skewX();</li>
                    <li><strong style={{color: "#111"}}>transform:</strong> skewY();</li>
                    <li><strong style={{color: "#111"}}>transform:</strong> skew();</li>
                    <li><strong style={{color: "#111"}}>transform:</strong> matrix();</li>
                </ul>

                <p style={{ margin: "0 0 60px 0" }}>O <strong>translate(X Y)</strong> método move um elemento de sua posição atual (de acordo com os parâmetros fornecidos para o eixo X e o eixo Y).</p>

                <div style={{ display: "flex", flexWrap: "wrap", border: "solid 2px #000000", marginBottom: "60px" }}>
                    <Translate>
                        <p>Este elemento div é movido 10pixels para a direita e 20pixels para baixo de sua posição atual.</p>
                    </Translate>

                    <TranslateNegative>
                        <p style={{ color: "white" }}>Este elemento div é movido 10pixels para a esquerda e 20pixels para cima de sua posição atual.</p>
                    </TranslateNegative>

                    <Link to="/move-element-x-y">Veja esse outro exemplo</Link>
                </div>
                {/* ===================================================================================================================================== */}
                <p style={{ margin: "0 0 60px 0" }}>O <strong>rotate()</strong> método gira um elemento no sentido <strong>horário</strong> ou <strong>anti-horário</strong> de acordo com um determinado grau.</p>

                <div style={{ display: "flex", alignItems: "center", height: "300px", border: "solid 2px #000000", marginBottom: "60px" }}>
                    <Rotate />
                    <RotateNegative />

                    {/* <TranslateNegative>
                        <p style={{ color: "white" }}>Este elemento div é movido 10pixels para a esquerda e 20pixels para cima de sua posição atual.</p>
                    </TranslateNegative> */}
                </div>
                {/* ===================================================================================================================================== */}
                <p style={{ margin: "0 0 60px 0" }}>O <strong>scale()</strong> método aumenta ou diminui o tamanho de um elemento (de acordo com os parâmetros fornecidos para largura e altura).</p>

                <div style={{ display: "flex", alignItems: "center", height: "300px", border: "solid 2px #000000", marginBottom: "60px" }}>
                    <Scale>Esse elemento div tem duas vezes sua largura original e três vezes sua altura original.</Scale>
                    <ScaleDiminuir>O exemplo a seguir diminui o elemento {"<div>"} para metade de sua largura e altura originais: </ScaleDiminuir>
                </div>
                {/* ===================================================================================================================================== */}
                <p style={{ margin: "0 0 60px 0" }}>O <strong>scaleX()</strong> método aumenta ou diminui a largura de um elemento.</p>

                <div style={{ display: "flex", alignItems: "center", height: "300px", border: "solid 2px #000000", marginBottom: "60px" }}>
                    <ScaleX>Este elemento div tem o dobro de sua largura original.</ScaleX>
                    <ScaleXDiminuir>O exemplo a seguir diminui o elemento {"<div>"} para metade de sua largura original: </ScaleXDiminuir>
                </div>
                {/* ===================================================================================================================================== */}
                <p style={{ margin: "0 0 60px 0" }}>O <strong>scaleY()</strong> método aumenta ou diminui a altura de um elemento.</p>

                <div style={{ display: "flex", alignItems: "center", height: "300px", border: "solid 2px #000000", marginBottom: "60px" }}>
                    <ScaleY>Este elemento div tem três vezes sua altura original.</ScaleY>
                    <ScaleYDiminuir>O exemplo a seguir diminui o elemento {"<div>"} para metade de sua largura original: </ScaleYDiminuir>
                </div>
                {/* ===================================================================================================================================== */}
                <p style={{ margin: "0 0 60px 0" }}>O <strong>skewX()</strong> método inclina um elemento ao longo do eixo X pelo ângulo dado.</p>

                <div style={{ display: "flex", alignItems: "center", height: "300px", border: "solid 2px #000000", marginBottom: "60px" }}>
                    <SkewX>Este é um elemento div normal. Este elemento div é inclinado 20 graus ao longo do eixo X.</SkewX>

                </div>
                {/* ===================================================================================================================================== */}
                <p style={{ margin: "0 0 60px 0" }}>O <strong>skewY()</strong> método inclina um elemento ao longo do eixo Y pelo ângulo dado.</p>

                <div style={{ display: "flex", alignItems: "center", height: "300px", border: "solid 2px #000000", marginBottom: "60px" }}>
                    <SkewY>O exemplo a seguir inclina o elemento {"<div>"} 20 graus ao longo do eixo Y:</SkewY>

                </div>
                {/* ===================================================================================================================================== */}
                <p style={{ margin: "0 0 60px 0" }}>O <strong>skew()</strong> método inclina um elemento ao longo dos eixos X e Y pelos ângulos fornecidos.</p>

                <div style={{ display: "flex", alignItems: "center", height: "300px", border: "solid 2px #000000", marginBottom: "60px" }}>
                    <Skew>O exemplo a seguir inclina o elemento {"<div>"} 20 graus ao longo do eixo X e 10 graus ao longo do eixo Y:</Skew>

                    <Skew target="skewY">Se o segundo parâmetro não for especificado, ele terá um valor zero. Portanto, o exemplo a seguir inclina o elemento {"<div>"} 20 graus ao longo do eixo X:</Skew>
                </div>
                {/* ===================================================================================================================================== */}
                <p style={{ margin: "0 0 20px 0" }}>O <strong>matrix()</strong> método combina todos os métodos de transformação 2D em um..</p>
                <p style={{ margin: "0 0 20px 0" }}>O método matrix() recebe seis parâmetros, contendo funções matemáticas, que permitem girar, dimensionar, mover (translate) e inclinar elementos.</p>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "300px", border: "solid 2px #000000", marginBottom: "60px" }}>
                    <p style={{ marginBottom: "50px" }}>Os parâmetros são os seguintes: matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())</p>
                    <Matrix></Matrix>
                </div>
                {/* ===================================================================================================================================== */}

                <h1 style={{ margin: "0 0 10px 0", fontSize: "32px" }}>Métodos de Transformações CSS 3D</h1>
                <p>Com a propriedade CSS <strong>transform</strong> você pode usar os seguintes métodos de transformação 3D:</p>

                <ul style={{ margin: "20px 0 80px 20px", width: "calc(100% - 40px)" }}>
                    <li>rotateX()</li>
                    <li>rotateY()</li>
                    <li>rotateZ()</li>
                </ul>

                <p style={{ margin: "0 0 60px 0" }}>O método <strong>rotateX()</strong></p>

                <div style={{ display: "flex", alignItems: "center", height: "300px", border: "solid 2px #000000", marginBottom: "60px" }}>
                    <RotateX>O rotateX() método gira um elemento em torno de seu eixo X em um determinado grau:</RotateX>
                </div>
                {/* ===================================================================================================================================== */}

                <p style={{ margin: "0 0 60px 0" }}>O método <strong>rotateY()</strong></p>

                <div style={{ display: "flex", alignItems: "center", height: "300px", border: "solid 2px #000000", marginBottom: "60px" }}>
                    <RotateY>O rotateY() método gira um elemento em torno de seu eixo Y em um determinado grau:</RotateY>
                </div>
                {/* ===================================================================================================================================== */}

                <p style={{ margin: "0 0 60px 0" }}>O método <strong>rotateZ()</strong></p>

                <div style={{ display: "flex", alignItems: "center", height: "300px", border: "solid 2px #000000", marginBottom: "60px" }}>
                    <RotateZ>O rotateZ() método gira um elemento em torno de seu eixo Z em um determinado grau:</RotateZ>
                </div>
            </Transforms>
        </Container>
    )
}

export default TransformsPage