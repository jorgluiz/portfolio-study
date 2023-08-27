import scss01 from "../../../assets/scss01.png"

const Scss = () => {
    const myContainer = {
        display: "flex",
        alignItems: "center",
    }
    const myStyle = {
        // marginBottom: "7px",
    }
    const circle = {
        height: "5px",
        width: "5px",
        borderRadius: "50px",
        backgroundColor: "#000",
        marginRight: "5px",
    }
    const ex = {
        height: "58px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#a2b9bc",
        sub1: {
            display: "flex",
            alignItems: "center",
            height: "58px",
            backgroundColor: "#b2ad7f"
        },
        sub2: {
            display: "flex",
            alignItems: "center",
            height: "58px",
            backgroundColor: "#878f99"
        }
    }
    const dica = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "58px",
        backgroundColor: "#fafabf"
    }
    return (
        <>
            <h1>O que é sass</h1><br />
            <div style={myContainer}>
                <div style={circle}></div>
                <p style={myStyle}><strong>Sass</strong> significa <strong>S</strong> yntactically <strong>Awesome</strong> <strong>S</strong> tyle <strong>s</strong> sheet _</p>
            </div>
            <p style={myStyle}>Sass é uma extensão do CSS</p>
            <p style={myStyle}>Sass é um pré-processador CSS</p>
            <p style={myStyle}>Sass é totalmente compatível com todas as versões de CSS</p>
            <p style={myStyle}>Sass reduz a repetição de CSS e, portanto, economiza tempo</p>
            <p style={myStyle}>Sass foi projetado por Hampton Catlin e desenvolvido por Natalie Weizenbaum em 2006</p>
            <p style={myStyle}>Sass é gratuito para baixar e usar</p><br /><br />
            <h1>Por que usar Sass?</h1><br />
            <p>As folhas de estilo estão ficando maiores, mais complexas e mais difíceis de manter. É aqui que um <strong>pré-processador CSS</strong> pode ajudar.</p><br />
            <p>O <strong>Sass</strong> permite que você use recursos que não existem no CSS, como <strong>variáveis</strong>, <strong>regras aninhadas</strong>, <strong>mixins</strong>, <strong>importações</strong>, <strong>herança</strong>, <strong>funções internas e outras coisas.</strong></p><br /><br />
            <h1>Um exemplo simples de por que o Sass é útil</h1><br />
            <p>Digamos que temos um site com três cores principais:</p><br />
            <div>
                <div style={ex}>
                    {"#a2b9bc"}
                </div>
                <div style={ex.sub1}>
                    {"#b2ad7f"}
                </div>
                <div style={ex.sub2}>
                    {"#878f99"}
                </div><br />
                <p>Então, quantas vezes você precisa digitar esses valores HEX? Muitas vezes. E as variações das mesmas cores?</p><br />
                <p>Em vez de digitar os valores acima várias vezes, você pode usar Sass e escrever isto:</p><br />
            </div><br />
            <img src={scss01} alt="" /><br /><br />
            <p>Então, ao usar o Sass, e a cor primária mudar, você só precisa alterá-la em um lugar.</p><br /><br />
            <h1>Como funciona o Sass?</h1><br />
            <p>Um navegador não entende o código Sass. Portanto, você precisará de um pré-processador Sass para converter o código Sass em CSS padrão.</p><br />
            <p>Este processo é chamado de transpilação. Portanto, você precisa fornecer a um transpiler (algum tipo de programa) algum código Sass e, em seguida, obter algum código CSS de volta.</p><br />
            <div style={dica}>
                <p><strong>Dica:</strong> Transpiling é um termo para pegar um código-fonte escrito em um idioma e transformá-lo/traduzi-lo em outro idioma.</p>
            </div><br /><br />
            <h1>Tipo de Arquivo Sass</h1><br />
            <p>Os arquivos Sass têm a extensão de arquivo <strong>{".scss"}</strong></p><br /><br /><br /><br /><br />
        </>
    )
}

export default Scss