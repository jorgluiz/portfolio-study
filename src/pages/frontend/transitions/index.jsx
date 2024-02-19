import styled from "styled-components";

const Container = styled.div`

& > ul > li {
    margin: 5px;
    list-style-type: circle;
}

& > ul > li > red {
    color: red;
}
`;
const Transicao01 = styled.div`

height: 100px;
width: 250px;
background-color: purple;
border: solid 2px #ffffff;

transition: width 2s;

&:hover {
width: calc(100% - 50%);
}
`;
const Transicao02 = styled.div`

height: 100px;
width: 250px;
background-color: purple;
border: solid 2px #ffffff;

transition: width 7s, height 10s;

&:hover {
width: calc(100% - 50%);
height: calc(100%);
}
`;
const Linear = styled.div`

height: 50px;
width: 100px;
background-color: red; 

transition-timing-function: linear;
transition: width 2s;

&:hover {
width: 50%;
}
`;
const Ease = styled.div`

height: 50px;
width: 100px;
background-color: red; 

transition-timing-function: ease;
transition: width 2s;

&:hover {
width: 50%;
}
`;
const EaseIn = styled.div`

height: 50px;
width: 100px;
background-color: red; 

transition-timing-function: ease-in;
transition: width 2s;

&:hover {
width: 50%;
}
`;
const EaseOut = styled.div`

height: 50px;
width: 100px;
background-color: red; 

transition-timing-function: ease-out;
transition: width 2s;

&:hover {
width: 50%;
}
`;
const EaseInOut = styled.div`

height: 50px;
width: 100px;
font-size: 18px;
background-color: red; 

transition-timing-function: ease-in-out;
transition: width 2s;

&:hover {
width: 50%;
}
`;
const TransitionTransform = styled.div`

height: 100px;
width: 250px;
background-color: purple;
border: solid 2px #ffffff;

transition: width 10s, height 20s, transform 30s;

&:hover {
width: calc(100%);
height: calc(100%);
transform: scale(2);
}
`;
const TransitionAbreviada = styled.div`

height: 100px;
width: 250px;
background-color: purple;
border: solid 2px #ffffff;

transition: width 2s linear 2s;

&:hover {
width: calc(100% - 50%);
} 
`;

const TransitionPage = () => {
    return (
        <Container>
            <h1 style={{ margin: "10px 0 10px 0", fontSize: "32px" }}>Transições CSS</h1>
            <p style={{ margin: "0 0 50px 0" }}>As transições CSS permitem que você altere os valores das propriedades sem problemas, durante um determinado período.</p>

            <ul style={{ margin: "0 0 80px 20px", width: "calc(100% - 40px)" }}>
                <li>transition</li>
                <li>transition-delay</li>
                <li>transition-duration</li>
                <li>transition-property</li>
                <li>transition-timing-function</li>
            </ul>

            <p>Agora, vamos especificar um novo valor para a propriedade width quando um usuário passa o mouse sobre o elemento {"<div>"}:</p>
            <div style={{ display: "flex", alignItems: "center", height: "300px", border: "solid 2px #000000" }}>
                <Transicao01></Transicao01>
            </div>
            <p style={{ margin: "0 0 80px 0" }}>Observe que, quando o cursor sair do elemento, ele voltará gradualmente ao seu estilo original.</p>
            {/* ====================================================================================================================================== */}
            <h1 style={{ marginTop: "40px", fontSize: "30px" }}>Alterar vários valores de propriedade</h1>
            <p style={{ marginTop: "20px", marginBottom: "20px" }}>O exemplo a seguir adiciona um efeito de transição para a propriedade <strong>width</strong> e <strong>height</strong>, com uma duração de <strong>7 segundos para a largura</strong> e <strong>10 segundos para a altura</strong>:</p>

            <div style={{ display: "flex", alignItems: "center", height: "300px", border: "solid 2px #000000", marginBottom: "60px" }}>
                <Transicao02></Transicao02>
            </div>
            {/* ====================================================================================================================================== */}

            <h1 style={{ fontSize: "40px", marginBottom: "21px" }}>Especifique a curva de velocidade da transição</h1>
            <p>A <strong style={{ color: "red", fontSize: "20px", fontFamily: "Inconsolata" }}>transition-timing-functionpropriedade</strong> especifica a curva de velocidade do efeito de transição.</p>
            <p style={{ lineHeight: "100px" }}>A propriedade de função de tempo de transição pode ter os seguintes valores:</p>

            <ul style={{ margin: "0 0 50px 20px", width: "calc(100% - 40px)" }}>
                <li><red>ease -</red>  especifica um efeito de transição com início lento, rápido e final lento (este é o padrão)</li>
                <li><red>linear -</red> especifica um efeito de transição com a mesma velocidade do início ao fim</li>
                <li><red>ease-in -</red> especifica um efeito de transição com um início lento</li>
                <li><red>ease-out -</red> especifica um efeito de transição com final lento</li>
                <li><red>ease-in-out -</red> especifica um efeito de transição com início e fim lentos</li>
                <li><red>cubic-bezier(n,n,n,n)</red> - permite definir seus próprios valores em uma função cúbica-bezier</li>
            </ul>

            <p>O exemplo a seguir mostra algumas das diferentes curvas de velocidade que podem ser usadas:</p>

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "300px", border: "solid 2px #000000", marginBottom: "60px" }}>
                <Linear>Linear</Linear>
                <Ease>Ease</Ease>
                <EaseIn>Ease-In</EaseIn>
                <EaseOut>Ease-Out</EaseOut>
                <EaseInOut>Ease-In-Out</EaseInOut>
            </div>
            {/* ====================================================================================================================================== */}

            <h1 style={{ fontSize: "32px" }}>Transition + Transformation</h1>

            <p style={{ lineHeight: "100px" }}>O exemplo a seguir adiciona um efeito de <strong>transition</strong> à <strong>transform</strong>:</p>
            <p><strong>transition</strong>: width 10s, height 20s, transform 30s;</p>
            <p>{"&"}:hover {"{"}</p>
            <p>width: calc(100%);</p>
            <p>height: calc(100%);</p>
            <p><strong>transform</strong>: scale(2);</p>
            <p>{"}"}</p>

            <div style={{ display: "flex", alignItems: "center", height: "300px", border: "solid 2px #000000", marginBottom: "60px" }}>
                <TransitionTransform></TransitionTransform>
            </div>
            {/* ====================================================================================================================================== */}
            <p style={{ margin: "0 0 40px 0" }}>As propriedades de transição CSS podem ser especificadas uma a uma, assim:</p>

            <div style={{ display: "flex", alignItems: "center", background: "#15202b", height: "190px" }}>
                <div style={{ marginLeft: "30px" }}>
                    <span style={{ display: "block" }}><span style={{ color: "#ff9999" }}>{"div"}</span> <span style={{ color: "white" }}>{"}"}</span></span>
                    <span style={{ display: "block" }}><span style={{ color: "#c5a5c5" }}>transition-property</span><span style={{ color: "white", lineHeight: "30px" }}>:</span> <span style={{ color: "#88c999" }}> width</span><span style={{ color: "white" }}>;</span></span>
                    <span style={{ display: "block" }}><span style={{ color: "#c5a5c5" }}> transition-duration</span><span style={{ color: "white", lineHeight: "30px" }}>:</span> <span style={{ color: "#88c999" }}> 2s</span><span style={{ color: "white" }}>;</span></span>
                    <span style={{ display: "block" }}><span style={{ color: "#c5a5c5" }}>transition-timing-function</span><span style={{ color: "white", lineHeight: "30px" }}>:</span> <span style={{ color: "#88c999" }}> linear</span><span style={{ color: "white" }}>;</span></span>
                    <span style={{ display: "block" }}><span style={{ color: "#c5a5c5" }}>transition-delay</span><span style={{ color: "white", lineHeight: "30px" }}>:</span> <span style={{ color: "#88c999" }}> 1s</span><span style={{ color: "white" }}>;</span></span>
                    <span style={{ display: "block" }}><span style={{ color: "white" }}>{"}"}</span></span>
                </div>
            </div>

            <p style={{ fontSize: "25px", margin: "60px 0 20px 0", border: "solid 1px #000000" }}>ou usando a propriedade abreviada <span style={{ color: "red" }}>transition</span>:</p>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", height: "300px", border: "solid 2px #000000", marginBottom: "60px" }}>
                <p>property <span style={{ color: "red" }}>white</span>; property <span style={{ color: "#88c999" }}>duration</span>; property <span style={{ color: "#fb6666" }}>transition-timing-function</span>; property <span style={{ color: "purple" }}>delay</span></p>
                <p>transition: <span  style={{ color: "red" }}>width</span> <span style={{ color: "#88c999" }}>2s</span> <span style={{ color: "#fb6666" }}>linear</span> <span style={{ color: "purple" }}>2s;</span></p>
                <TransitionAbreviada></TransitionAbreviada>
            </div>
        </Container>
    )
}

export default TransitionPage