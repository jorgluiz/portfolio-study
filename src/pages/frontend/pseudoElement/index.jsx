import styled from "styled-components";

import smiley from "../../../assets/smile.png"

const H3 = styled.h3`

&:hover[target=before]::before {
    content: url(${smiley});
}

&:hover[target=after]::after {
    content: url(${smiley});
}
`;

const PseudoElement = () => {
    return (
        <>
            <h1 style={{ fontSize: "32px", textAlign: "center" }}>CSS - O pseudo-elemento ::before</h1><br /><br />

            <p>O <span style={{ color: "red", lineHeight: 1.8 }}>::before</span> pseudo-elemento pode ser usado para inserir algum conteúdo antes do conteúdo de um elemento.</p><br />

            <p>O exemplo a seguir insere uma imagem <strong>antes</strong> do conteúdo de cada elemento {"<h1>"}</p><br />

            <H3 target="before"> insere o conteúdo antes do conteúdo de um elemento.</H3><br /><br />

            {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

            <h1 style={{ fontSize: "32px", textAlign: "center" }}>CSS - O pseudo-elemento ::after</h1><br /><br />

            <p>O <span style={{ color: "red", lineHeight: 1.8 }}>::after</span> pseudoelemento pode ser usado para inserir algum conteúdo após o conteúdo de um elemento.</p><br />

            <p>O exemplo a seguir insere uma imagem <strong>após</strong> o conteúdo de cada elemento  {"<h1>"}</p><br />

            <H3 target="after">insere o conteúdo após do conteúdo de um elemento. </H3>
        </>
    )
}

export default PseudoElement