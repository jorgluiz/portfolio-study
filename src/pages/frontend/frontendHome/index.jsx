import { Container } from "./styles"

const FrontendHome = () => {
    return (
        <Container>
            <h1 style={{ textAlign: "center" }}>Tools used for front-end development</h1><br />

            <h1>HyperText Markup Language</h1><br />
            <p>HyperText Markup Language (HTML) é a espinha dorsal de qualquer processo de desenvolvimento de sites, sem o qual uma página da web não existe. Hipertexto significa que o texto tem links, denominados hiperlinks, embutidos nele. Quando um usuário clica em uma palavra ou frase que possui um hiperlink, ele traz outra página da web. Uma linguagem de marcação indica que o texto pode ser transformado em imagens, tabelas, links e outras representações. É o código HTML que fornece uma estrutura geral de como o site ficará. HTML foi desenvolvido por Tim Berners-Lee. A versão mais recente do HTML é chamada de HTML5 e foi publicada em 28 de outubro de 2014 pela recomendação do W3C. Esta versão contém novas e eficientes maneiras de lidar com elementos como arquivos de vídeo e áudio.</p><br />

            <h1>Cascading Style Sheets (CSS)</h1><br />
            <p style={{ display: "inline" }}>Cascading Style Sheets (CSS) controla o aspecto de apresentação do site e permite que seu site tenha uma aparência única. Ele faz isso mantendo folhas de estilo que ficam no topo de outras regras de estilo e são acionadas com base em outras entradas, como tamanho e resolução da tela do dispositivo. O CSS pode ser adicionado </p>
            <span className="inline-block"> nas tags HTML.</span>
            <div className="externamente-block">
                <strong>externamente</strong>
                <span className="externamente"><strong>Basicamente consiste em você colocar todo o código CSS em um arquivo externo .css e no html você apenas linkar/chamar esse arquivo para que o código seja estilizado. Ou seja, você vai chamar o CSS no HTML.</strong></span>
            </div>
            <div className="internamente-block">
                <strong>internamente</strong>
                <pre className="internamente">{`<!DOCTYPE html>
<html>
<head>

<style> <<<
body   {
       background-color: blue;
}
h1   {
       color: red;
       padding: 60px;
} 
</style>

</head> <<< 
<body>

<h1>Hostinger Tutoriais</h1>
<p>Este é o nosso parágrafo.</p>

</body>
</html>`}
                </pre>
            </div>
            <div className="inline-block">
                <strong>embutido (Inline)</strong>
                <div className="inline">
                    <p>O CSS inline é usado para dar estilo a um elemento HTML específico. Para este estilo de CSS, você somente vai precisar adicionar o atributo style para cada tag HTML, sem usar os seletores.</p><br />
                    <p style={{color: "red"}}>Este tipo de CSS não é realmente recomendado, já que cada tag HTML precisa ser estilizada de maneira individual. Gerenciar o seu site pode se tornar uma tarefa bem difícil de você só usa o CSS inline.</p><br />
                    <p style={{color: "green"}}>Contudo, o CSS Inline no HTML pode ser útil para algumas situações. Por exemplo, sem casos onde você não tem acesso aos arquivos CSS ou precisa aplicar estilos para um elemento único.</p>
                </div>
            </div><br />

            <h1>JavaScript</h1><br />
            <p>JavaScript é uma linguagem de programação imperativa baseada em eventos (em oposição ao modelo de linguagem declarativa do HTML) que é usada para transformar uma página HTML estática em uma interface dinâmica. O código JavaScript pode usar o Document Object Model (DOM), fornecido pelo padrão HTML, para manipular uma página da Web em resposta a eventos, como entrada do usuário.
                Usando uma técnica chamada AJAX, o código JavaScript também pode recuperar ativamente o conteúdo da web (independentemente da recuperação da página HTML original) e também reagir a eventos do lado do servidor, adicionando uma natureza verdadeiramente dinâmica à experiência da página da web.</p><br />
        </Container>
    )
}

export default FrontendHome