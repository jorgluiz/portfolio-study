const escalabilidade = () => {
    return (
        <>
            <h1>Escalabilidade de um projeto</h1><br />

            <p style={{ lineHeight: "30px" }}>Organização do código em uma estrutura de diretórios como essa tem a ver com escalabilidade, manutenibilidade e clareza do código. Vamos abordar alguns pontos-chave:</p><br />

            <p style={{ fontWeight: "700"}}>Separação de Responsabilidades:</p>
            <p style={{lineHeight: "30px"}}>Ao dividir o código em diferentes diretórios, como <span style={{fontWeight: "700"}}>`controllers`</span>, <span style={{fontWeight: "700"}}>`middleware`</span>, <span style={{fontWeight: "700"}}>`models`</span>, etc., você está seguindo o princípio da separação de responsabilidades. Cada diretório tem uma função clara e definida no aplicativo. Por exemplo, os controladores lidam com a lógica de manipulação das requisições HTTP, os middlewares fornecem funções intermediárias para processar requisições, os modelos representam a camada de acesso a dados, etc.</p><br />
            <p style={{ fontWeight: "700"}}>Escalabilidade:</p>
            <p style={{lineHeight: "30px"}}>Uma estrutura bem organizada facilita a adição de novos recursos e funcionalidades ao aplicativo. Quando o código está organizado de forma modular e coesa, é mais fácil adicionar novos controladores, modelos, middlewares, etc., à medida que o aplicativo cresce. Além disso, facilita a localização e a compreensão do código existente, o que é crucial para fazer alterações e correções.</p>
            <p style={{ fontWeight: "700"}}>Manutenibilidade:</p>
            <p style={{lineHeight: "30px"}}>Uma estrutura organizada torna o código mais fácil de manter. Quando os diferentes componentes do aplicativo estão claramente separados e têm nomes descritivos, é mais simples entender como eles funcionam e fazer alterações conforme necessário. Isso é especialmente importante em projetos de longo prazo, nos quais o código precisa ser mantido e atualizado regularmente.</p>
            <p style={{ fontWeight: "700"}}>Clareza do Código:</p>
            <p style={{lineHeight: "30px"}}>Uma estrutura de diretórios bem definida ajuda a manter o código claro e legível. Quando os arquivos estão agrupados logicamente em diretórios com nomes descritivos, é mais fácil para os desenvolvedores entenderem a estrutura do aplicativo e localizarem rapidamente o código relevante. Isso também é útil para novos membros da equipe que precisam se familiarizar com o projeto.</p><br /><br />
            <p style={{lineHeight: "30px"}}>Em resumo, a organização do código em uma estrutura de diretórios como a mencionada não só facilita o desenvolvimento inicial do aplicativo, mas também torna o aplicativo mais escalável, fácil de manter e entender, o que é essencial para o sucesso a longo prazo do projeto.</p>
        </>
    )
}

export default escalabilidade