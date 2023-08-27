import styled from "styled-components";

const Container = styled.div`

& > ul[target="animationsCSS"] > li {
    color: red;
    line-height: 27px;
    list-style-type: square;
    font-family: Consolas,"courier new";
}

& > ul[target="animationDirection"] > li > span {
    color: red;
    font-family: Consolas,"courier new";
}
& > ul[target="animationDirection"] > li {
    font-size: 18px;
    font-family: Consolas,"courier new";
}
`;

const Animation01 = styled.div`

height: 100px;
width: 250px;

background-color: #16291f;
animation-name: animation01;
animation-duration: 4s;
/* animation-delay: 2s;  Atrasar uma Animação*/ 

  @keyframes animation01 {
  from {background-color: red;}
  to {background-color: #ffee00;}
}
`;
const Animation02 = styled.div`

height: 250px;
width: 250px;

background-color: #808502;
&:hover {
animation-name: animationexemple2;
animation-duration: 4s;
/* animation-delay: 2s;  Atrasar uma Animação*/ 


  @keyframes animationexemple2 {
  0%   {background-color: red; border-radius: 0%;}
  25%  {background-color: yellow; border-radius: 25%;}
  50%  {background-color: blue; border-radius: 50%;}
  100% {background-color: green; border-radius: 100%;}
}
}
`;
const Animation03 = styled.div`

position: relative;
height: 100px;
width: 100px;
background-color: #808502;

&:hover {
animation-name: animationexemple3;
animation-duration: 4s;
/* animation-delay: 2s;  Atrasar uma Animação*/ 

@keyframes animationexemple3 {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left:200px; top:0px;}
  50%  {background-color:blue; left:200px; top:200px;}
  75%  {background-color:green; left:0px; top:200px;}
  100% {background-color:red; left:0px; top:0px;}
}
}
`;
const Animation04 = styled.div`

position: relative;
height: 100px;
width: 100px;
background-color: #808502;

&:active {
animation-name: animationexemple4;
animation-duration: 4s;
animation-delay: -2s;  /* No exemplo a seguir, a animação iniciará como se já estivesse sendo reproduzida por 2 segundos: */

@keyframes animationexemple4 {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left:200px; top:0px;}
  50%  {background-color:blue; left:200px; top:200px;}
  75%  {background-color:green; left:0px; top:200px;}
  100% {background-color:red; left:0px; top:0px;}
}
}
`;
const Animation05 = styled.div`

position: relative;
height: 100px;
width: 100px;
background-color: #808502;

&:hover {
animation-name: animationexemple5;
animation-duration: 4s;
animation-delay: 2s;  /* No exemplo a seguir, a animação iniciará como se já estivesse sendo reproduzida por 2 segundos: */
animation-iteration-count: 3;

@keyframes animationexemple5 {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left: calc(100% - 75%); top:0px;}
  50%  {background-color:blue; left: calc(100% - 75%); top: calc(100% - 41%);}
  75%  {background-color:green; left:0px; top: calc(100% - 41%);}
  100% {background-color:red; left:0px; top:0px;}
}
}
`;
const Animation06 = styled.div`

position: relative;
height: 100px;
width: 100px;
border-radius: 50%;
background-color: #808502;

animation-name: animationexemple6;
animation-duration: 4s;
animation-delay: 2s;  /* No exemplo a seguir, a animação iniciará como se já estivesse sendo reproduzida por 2 segundos: */
animation-iteration-count: infinite;

@keyframes animationexemple6 {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left: calc(100%); top:0px; height: 5px; width: 5px;}
  50%  {background-color:blue; left: calc(100%); top: calc(100% - 41%); height: 5px; width: 5px;}
  75%  {background-color:green; left: 0px; top: calc(100% - 41%);} /*  75%  {background-color:green; left:0px; top: calc(100% - 41%);} */
  100% {background-color:red; left:0px; top:0px;}
}
`;
const Animation07 = styled.div`

position: relative;
height: 100px;
width: 100px;
border-radius: 50%;
background-color: #808502;

animation-name: animationexemple6;
animation-duration: 4s;
animation-delay: 2s;  /* No exemplo a seguir, a animação iniciará como se já estivesse sendo reproduzida por 2 segundos: */
animation-iteration-count: infinite;
animation-direction: reverse;

@keyframes animationexemple6 {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left: calc(100%); top:0px; height: 5px; width: 5px;}
  50%  {background-color:blue; left: calc(100%); top: calc(100% - 41%); height: 5px; width: 5px;}
  75%  {background-color:green; left: 0px; top: calc(100% - 41%);} /*  75%  {background-color:green; left:0px; top: calc(100% - 41%);} */
  100% {background-color:red; left:0px; top:0px;}
}
`;
const Animation08 = styled.div`

position: relative;
height: 100px;
width: 100px;
border-radius: 50%;
background-color: #808502;

animation-name: animationexemple6;
animation-duration: 4s;
animation-delay: 2s;  /* No exemplo a seguir, a animação iniciará como se já estivesse sendo reproduzida por 2 segundos: */
animation-iteration-count: infinite;
animation-direction: alternate;

@keyframes animationexemple6 {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left: calc(100%); top:0px; height: 5px; width: 5px;}
  50%  {background-color:blue; left: calc(100%); top: calc(100% - 41%); height: 5px; width: 5px;}
  75%  {background-color:green; left: 0px; top: calc(100% - 41%);} /*  75%  {background-color:green; left:0px; top: calc(100% - 41%);} */
  100% {background-color:red; left:0px; top:0px;}
}
`;
const Animation09 = styled.div`

position: relative;
height: 100px;
width: 100px;
border-radius: 50%;
background-color: #808502;

animation-name: animationexemple6;
animation-duration: 4s;
animation-delay: 2s;  /* No exemplo a seguir, a animação iniciará como se já estivesse sendo reproduzida por 2 segundos: */
animation-iteration-count: infinite;
animation-direction: alternate-reverse;

@keyframes animationexemple6 {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left: calc(100%); top:0px; height: 5px; width: 5px;}
  50%  {background-color:blue; left: calc(100%); top: calc(100% - 41%); height: 5px; width: 5px;}
  75%  {background-color:green; left: 0px; top: calc(100% - 41%);} /*  75%  {background-color:green; left:0px; top: calc(100% - 41%);} */
  100% {background-color:red; left:0px; top:0px;}
}
`;
const Animation10 = styled.div`

position: relative;
height: 100px;
width: 100px;
border-radius: 50%;
background-color: #808502;

position: relative;
animation: animationexemple10 5s ease-in-out 2s infinite alternate;

@keyframes animationexemple10 {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left:200px; top:0px;}
  50%  {background-color:blue; left:200px; top:200px;}
  75%  {background-color:green; left:0px; top:200px;}
  100% {background-color:red; left:0px; top:0px;}
}
`;
const DivAnimation = styled.div`
display: flex;
justify-content: space-between;
height: 270px; 
border: solid 2px #000000;
`;
const DivAnimation01 = styled.div`
width: 200px;
height: 50px;
background-color: red;
position: relative;

animation: DivAnimation01 5s; /* abreviação animação */
animation-iteration-count: 3;
animation-timing-function: linear;
animation-fill-mode: forwards;

@keyframes DivAnimation01 {
  from {left: 0px;}
  to {left: 273px;}
}
`;
const DivAnimation02 = styled.div`
width: 200px;
height: 50px;
background-color: red;
position: relative;

/* abreviação animação */
animation: divAnimation02 5s infinite;
animation-timing-function: ease;

@keyframes divAnimation02 {
  from {left: 0px;}
  to {left: 300px;}
}
`;
const DivAnimation03 = styled.div`
width: 200px;
height: 50px;
background-color: red;
position: relative;

/* abreviação animação */
animation: divAnimation03 5s infinite;
animation-timing-function: ease-in;

@keyframes divAnimation03 {
  from {left: 0px;}
  to {left: 300px;}
}
`;
const DivAnimation04 = styled.div`
width: 200px;
height: 50px;
background-color: red;
position: relative;

/* abreviação animação */
animation: divAnimation04 5s infinite;
animation-timing-function: ease-out;

@keyframes divAnimation04 {
  from {left: 0px;}
  to {left: 300px;}
}
`;
const DivAnimation05 = styled.div`
width: 200px;
height: 50px;
background-color: red;
position: relative;

/* abreviação animação */
animation: divAnimation05 5s infinite;
animation-timing-function: ease-in-out;

@keyframes divAnimation05 {
  from {left: 0px;}
  to {left: 300px;}
}
`;
const DivAnimation06 = styled.div`
width: 200px;
height: 50px;
background-color: red;
position: relative;

animation: divAnimation06 5s; /* abreviação animação */
animation-iteration-count: 3;
animation-timing-function: linear;
animation-fill-mode: forwards;

@keyframes divAnimation06 {
  from {right: 0px; text: left;}
  to  {right: 273px; text-align: right;}
}
`;
const DivAnimation07 = styled.div`
width: 200px;
height: 50px;
background-color: red;
text-align: right;
position: relative;

/* abreviação animação */
animation: divAnimation07 5s infinite;
animation-timing-function: ease;

@keyframes divAnimation07 {
  from {right: 0px;}
  to {right: 273px;}
}
`;
const DivAnimation08 = styled.div`
width: 200px;
height: 50px;
background-color: red;
text-align: right;
position: relative;

/* abreviação animação */
animation: divAnimation08 5s infinite;
animation-timing-function: ease-in;

@keyframes divAnimation08 {
  from {right: 0px;}
  to {right: 273px;}
}
`;
const DivAnimation09 = styled.div`
width: 200px;
height: 50px;
background-color: red;
text-align: right;
position: relative;

/* abreviação animação */
animation: divAnimation09 5s infinite;
animation-timing-function: ease-out;

@keyframes divAnimation09 {
  from {right: 0px;}
  to {right: 273px;}
}
`;
const DivAnimation10 = styled.div`
width: 200px;
height: 50px;
background-color: red;
text-align: right;
position: relative;

/* abreviação animação */
animation: divAnimation10 5s infinite;
animation-timing-function: ease-in-out;

@keyframes divAnimation10 {
  from {right: 0px;}
  to {right: 273px;}
}
`;

const Forwards = styled.div`

width: 100px;
height: 50px;
background-color: #ff0000;
color: #000000;
position: relative;

animation-name: forward;
animation-duration: 3s;  
animation-fill-mode: forwards;

@keyframes forward {
  from {top: 0px;}
  to {top: 200px; background-color: blue; color: #ffffff;}
}
`;
const Backwards = styled.div`

width: 100px;
height: 50px;
background-color: #ff0000;
color: #000000;
position: relative;

animation-name: backward;
animation-duration: 3s;  
animation-fill-mode: backwards;

@keyframes backward {
  from {top: 0px;}
  to {top: 200px; background-color: blue; color: white;}
}
`;
const Both = styled.div`

width: 100px;
height: 50px;
background-color: #ff0000;
color: #000000;
position: relative;

animation-name: bothh;
animation-duration: 3s;  
animation-fill-mode: both;

@keyframes bothh {
  from {top: 0px;}
  to {top: 200px; background-color: blue; color: white}
}
`;
const AnimationsPage = () => {
  return (
    <Container>
      <h1 style={{ margin: "10px 0 10px 0", fontSize: "32px" }}>Animações CSS</h1>
      <p style={{ margin: "0 0 50px 0" }}>CSS permite a animação de elementos HTML sem usar JavaScript ou Flash!</p>

      <ul style={{ margin: "20px 0 60px 40px", width: "calc(100% - 40px)" }} target="animationsCSS">
        <li>@keyframes</li>
        <li>animation-name</li>
        <li>animation-duration</li>
        <li>animation-delay</li>
        <li>animation-iteration-count</li>
        <li>animation-direction</li>
        <li>animation-timing-function</li>
        <li>animation-fill-mode</li>
        <li>animation</li>
      </ul>

      <h1 style={{ margin: "0 0 10px 0", fontSize: "32px" }}>O que são animações CSS?</h1>

      <div style={{ lineHeight: "50px" }}>
        <p style={{ fontFamily: "Sofia" }}>Uma animação permite que um elemento mude gradualmente de um estilo para outro.</p>

        <p style={{ fontFamily: "Sofia" }}>Você pode alterar quantas propriedades CSS quiser, quantas vezes quiser.</p>

        <p style={{ fontFamily: "Sofia" }}>Para usar a animação CSS, você deve primeiro especificar alguns quadros-chave para a animação.</p>

        <p style={{ fontFamily: "Sofia" }}>Os quadros-chave contêm os estilos que o elemento terá em determinados momentos.</p>
      </div>

      <h1 style={{ margin: "40px 0 10px 0", fontSize: "32px" }}>A regra @keyframes</h1>

      <p>Quando você especifica estilos CSS dentro da <span style={{ color: "red" }}>@keyframes</span> regra, a animação mudará</p>
      <p>gradualmente do estilo atual para o novo estilo em determinados momentos.</p>

      <div className="a1" style={{ display: "flex", alignItems: "center", height: "300px", border: "solid 2px #000000", marginTop: "30px" }}>
        <Animation01></Animation01>
      </div>
      {/* ================================================================================================================================== */}
      <p style={{ margin: "0 0 40px 0" }}><strong>Nota</strong>: Quando uma animação termina, ela volta ao seu estilo original.</p>

      <p style={{ fontFamily: "Sofia", fontSize: "26px", margin: "0 0 40px 0" }}><strong>Observação</strong>: a <span style={{ color: "red" }}>animation-duration</span> propriedade define quanto tempo uma animação deve levar para ser concluída. Se a <span style={{ color: "red" }}>animation-duration</span> propriedade não for especificada, nenhuma animação ocorrerá, pois o valor padrão é 0s (0 segundos). </p>

      <p style={{ fontFamily: "Sofia", fontSize: "26px", margin: "0 0 40px 0" }}>No exemplo acima, especificamos quando o estilo será alterado usando as palavras-chave "from" e "to" (que representam 0% (início) e 100% (completo)).</p>

      <p style={{ fontFamily: "Sofia", fontSize: "26px", margin: "0 0 40px 0" }}>Também é possível usar por cento. Ao usar a porcentagem, você pode adicionar quantas alterações de estilo desejar.</p>

      <p style={{ fontFamily: "Sofia", fontSize: "26px", margin: "0 0 40px 0" }}>O exemplo a seguir mudará a cor de fundo do elemento {"<div>"} quando a animação estiver 25% concluída, 50% concluída e novamente quando a animação estiver 100% concluída:</p>

      <div style={{ display: "flex", alignItems: "center", height: "300px", border: "solid 2px #000000", marginTop: "30px" }}>
        <Animation02></Animation02>
      </div>
      <p><strong>Nota</strong>: Quando uma animação termina, ela volta ao seu estilo original.</p>
      {/* ================================================================================================================================== */}
      <p style={{ marginTop: "100px" }}>O exemplo a seguir mudará a <strong>cor de fundo</strong> e a <strong>posição</strong> do elemento {"<div>"}</p>
      <div style={{ display: "flex", height: "300px", border: "solid 2px #000000" }}>
        <Animation03></Animation03>
      </div>
      <p><strong>Nota</strong>: Quando uma animação termina, ela volta ao seu estilo original.</p>
      {/* ================================================================================================================================== */}
      <p style={{ marginTop: "100px", marginBottom: "30px", lineHeight: "1.5", fontFamily: "Sofia", fontSize: "25px" }}><strong>Valores negativos</strong> também são permitidos. Se estiver usando valores negativos, a animação começará como se já estivesse sendo reproduzida por N segundos.</p>
      <p style={{ fontFamily: "Sofia", fontSize: "25px" }}>No exemplo a seguir, a animação iniciará como se já estivesse sendo reproduzida por 2 segundos:</p>
      <div style={{ display: "flex", height: "300px", border: "solid 2px #000000" }}>
        <Animation04>Click e segure</Animation04>
      </div>
      <p style={{ marginBottom: "70px" }}><strong>Nota</strong>: Quando uma animação termina, ela volta ao seu estilo original.</p>
      {/* ================================================================================================================================== */}
      <h1 style={{ fontSize: "40px", fontFamily: "Sofia", margin: "0 0 30px 0" }}>Definir quantas vezes uma animação deve ser executada</h1>
      <p style={{ margin: "0 0 70px 0" }}>A <span style={{ color: "red" }}>animation-iteration-count</span> propriedade especifica o número de vezes que uma animação deve ser executada.</p>

      <div style={{ display: "flex" }}>
        <p style={{ width: "50%" }}>O exemplo a seguir executará a animação 3 vezes antes de parar:</p>
        <p style={{ width: "50%" }}>O exemplo a seguir usa o valor "infinito" para fazer a animação continuar para sempre: (<strong>infinit</strong>)</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", border: "solid 2px #000000", height: "350px", marginBottom: "70px" }}>
        <div style={{ height: "300px", width: "50%", border: "solid 2px #000000" }}>
          <Animation05></Animation05>
        </div>
        <div style={{ height: "300px", width: "50%", border: "solid 2px #000000" }}>
          <Animation06></Animation06>
        </div>
      </div>
      {/* ================================================================================================================================== */}
      <h1 style={{ fontSize: "40px", fontFamily: "Sofia", margin: "0 0 30px 0" }}>Executar animação na direção reversa ou ciclos alternativos</h1>
      <p style={{ margin: "0 0 50px 0" }}>A <span style={{ color: "red" }}>animation-direction</span> propriedade especifica se uma animação deve ser reproduzida para frente, para trás ou em ciclos alternados.</p>
      <p style={{ margin: "0 0 50px 0" }}>A propriedade animation-direction pode ter os seguintes valores:</p>

      <ul style={{ padding: "0 0 0 50px", marginBottom: "50px" }} target="animationDirection">
        <li><span>normal</span> - A animação é reproduzida normalmente (para frente). Isso é padrão</li>
        <li><span>reverse</span> - A animação é reproduzida na direção inversa (para trás)</li>
        <li><span>alternate </span> - A animação é reproduzida primeiro para frente e depois para trás</li>
        <li><span>alternate-reverse</span> - A animação é reproduzida primeiro para trás e depois para a frente</li>
      </ul>

      <p>O exemplo a seguir executará a animação na direção inversa (para trás):</p>

      <div style={{ display: "flex", height: "300px", border: "solid 2px #000000", marginBottom: "100px" }}>
        <Animation07></Animation07>
      </div>

      <p>O exemplo a seguir usa o valor "<strong>alternate</strong>" para fazer a animação avançar primeiro e depois retroceder:</p>
      <div style={{ display: "flex", height: "300px", border: "solid 2px #000000", marginBottom: "100px" }}>
        <Animation08></Animation08>
      </div>

      <p>O exemplo a seguir usa o valor "<strong>alternate-reverse</strong>" para fazer a animação rodar primeiro para trás e depois para frente:</p>
      <div style={{ display: "flex", height: "300px", border: "solid 2px #000000" }}>
        <Animation09></Animation09>
      </div>
      {/* ================================================================================================================================== */}
      <h1 style={{ fontSize: "40px", fontFamily: "Sofia", margin: "110px 0 30px 0" }}>Especifique a curva de velocidade da animação</h1>
      <p style={{ margin: "0 0 30px 0" }}>A <span style={{ color: "red" }}>animation-timing-function</span> propriedade especifica a curva de velocidade da animação.</p>
      <p style={{ margin: "0 0 30px 0" }}>A propriedade animation-timing-function pode ter os seguintes valores:</p>

      <ul style={{ marginBottom: "30px" }} target="animationDirection">
        <li><span>ease</span> - Especifica uma animação com início lento, rápido e final lento <strong>(este é o padrão)</strong></li>
        <li><span>linear</span> - Especifica uma animação com a mesma velocidade do início ao fim</li>
        <li><span>ease-in </span> - Especifica uma animação com início lento</li>
        <li><span>ease-out</span> - Especifica uma animação com final lento</li>
        <li><span>ease-in-out</span> - Especifica uma animação com início e fim lentos</li>
        <li><span>cubic-bezier(n,n,n,n)</span> - Permite definir seus próprios valores em uma função cúbica-bezier</li>
      </ul>

      <p>O exemplo a seguir mostra algumas das diferentes curvas de velocidade que podem ser usadas:</p>
      <DivAnimation>
        <div>
          <DivAnimation01>linear</DivAnimation01>
          <DivAnimation02>ease</DivAnimation02>
          <DivAnimation03>ease-in</DivAnimation03>
          <DivAnimation04>ease-out</DivAnimation04>
          <DivAnimation05>ease-in-out</DivAnimation05>
        </div>

        <div>
          <DivAnimation06>linear</DivAnimation06>
          <DivAnimation07>ease</DivAnimation07>
          <DivAnimation08>ease-in</DivAnimation08>
          <DivAnimation09>ease-out</DivAnimation09>
          <DivAnimation10>ease-in-out</DivAnimation10>
        </div>
      </DivAnimation>
      {/* ================================================================================================================================== */}
      <h1 style={{ fontSize: "40px", fontFamily: "Sofia", margin: "60px 0 30px 0" }}>Especifique o modo de preenchimento para uma animação</h1>
      <p style={{ margin: "0 0 30px 0", fontFamily: "Sofia", fontSize: "25px" }}>A <span style={{ color: "red" }}>animation-fill-mode</span> propriedade especifica um estilo para o elemento de destino quando a animação não está sendo reproduzida (antes de começar, depois de terminar ou ambos).</p>

      <ul style={{ marginBottom: "30px" }} target="animationDirection">
        <li><span>none</span> - Valor padrão. A animação não aplicará nenhum estilo ao elemento antes ou depois de sua execução</li>
        <li><span>forwards</span> - O elemento manterá os valores de estilo definidos pelo último quadro-chave (depende da direção da animação e da contagem de iterações da animação)</li>
        <li><span>backwards </span> - O elemento obterá os valores de estilo definidos pelo primeiro quadro-chave (depende da direção da animação) e os reterá durante o período de atraso da animação</li>
        <li><span>both</span> - A animação seguirá as regras tanto para frente quanto para trás, estendendo as propriedades da animação em ambas as direções</li>
      </ul>

      <div style={{ display: "flex", justifyContent: "space-around", border: "solid 2px #000000", height: "255px", marginBottom: "40px" }}>
        <Forwards>forwards</Forwards>
        <Backwards>backwards</Backwards>
        <Both>both</Both>
      </div>
      {/* ================================================================================================================================== */}
      <h1 style={{ fontSize: "40px", fontFamily: "Sofia", margin: "60px 0 30px 0" }}>Propriedade abreviada de animação</h1>

      <div style={{ display: "flex", alignItems: "center", background: "#15202b", height: "270px", marginBottom: "100px", lineHeight: "35px" }}>
        <div style={{ marginLeft: "30px" }}>
          <span style={{ display: "block" }}><span style={{ color: "#ff9999" }}>{"div"}</span> <span style={{ color: "white" }}>{"}"}</span></span>
          <span style={{ display: "block" }}><span style={{ color: "#c5a5c5" }}> animation-name</span><span style={{ color: "white", lineHeight: "30px" }}>:</span> <span style={{ color: "#88c999" }}> example</span><span style={{ color: "white" }}>;</span></span>
          <span style={{ display: "block" }}><span style={{ color: "#c5a5c5" }}> animation-duration</span><span style={{ color: "white", lineHeight: "30px" }}>:</span> <span style={{ color: "#88c999" }}> 5s</span><span style={{ color: "white" }}>;</span></span>
          <span style={{ display: "block" }}><span style={{ color: "#c5a5c5" }}> animation-timing-function</span><span style={{ color: "white", lineHeight: "30px" }}>:</span> <span style={{ color: "#88c999" }}> ease-in-out</span><span style={{ color: "white" }}>;</span></span>
          <span style={{ display: "block" }}><span style={{ color: "#c5a5c5" }}> animation-delay</span><span style={{ color: "white", lineHeight: "30px" }}>:</span> <span style={{ color: "#88c999" }}> 2s</span><span style={{ color: "white" }}>;</span></span>
          <span style={{ display: "block" }}><span style={{ color: "#c5a5c5" }}> animation-iteration-count</span><span style={{ color: "white", lineHeight: "30px" }}>:</span> <span style={{ color: "#88c999" }}> infinite</span><span style={{ color: "white" }}>;</span></span>
          <span style={{ display: "block" }}><span style={{ color: "#c5a5c5" }}> animation-direction</span><span style={{ color: "white", lineHeight: "30px" }}>:</span> <span style={{ color: "#88c999" }}> alternate</span><span style={{ color: "white" }}>;</span></span>
          <span style={{ display: "block" }}><span style={{ color: "white" }}>{"}"}</span></span>
        </div>
      </div>

      <p style={{ fontSize: "30px", fontFamily: "Sofia" }}>O mesmo efeito de animação acima pode ser obtido usando a animationpropriedade abreviada:</p>

      <div style={{ display: "flex", alignItems: "center", background: "#e7e9eb", height: "200px" }}>
        <div style={{ display: "flex", alignItems: "center", background: "#15202b", width: "100%", lineHeight: "35px" }}>
          <div style={{ marginLeft: "30px" }}>
            <span style={{ display: "block" }}><span style={{ color: "#ff9999" }}>{"div"}</span> <span style={{ color: "white" }}>{"}"}</span></span>
            <span style={{ display: "block" }}><span style={{ color: "#c5a5c5" }}> animation</span><span style={{ color: "white", lineHeight: "30px" }}>:</span> <span style={{ color: "#88c999" }}> example 5s ease-in-out 2s infinite alternate</span><span style={{ color: "white" }}>;</span></span>
            <span style={{ display: "block" }}><span style={{ color: "white" }}>{"}"}</span></span>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", height: "300px", border: "solid 2px #000000", marginBottom: "100px" }}>
        <Animation10></Animation10>
      </div>
      <ul>
        <p><strong>Aqui estão algumas referências</strong></p>
        <li><a href="https://desenvolvimentoparaweb.com/css/animacoes-css-introducao/#:~:text=%40keyframes,-Imagine%20que%20cada&text=Keyframes%20s%C3%A3o%20a%20base%20de,linha%20do%20tempo%20(timeline).&text=Inicia%2Dse%20com%20a%20pr%C3%B3pria,%2C%20%E2%80%9Cfade%2Dout%E2%80%9D.">Introdução a Animações CSS</a></li>
      </ul>
    </Container>
  )
}

export default AnimationsPage