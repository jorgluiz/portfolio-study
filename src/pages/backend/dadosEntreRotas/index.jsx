import locals from "../../../assets/locals.png"

const passarDadosEntreRotas = () => {
  return (
    <>
      <h1>Passar dados entre rotas</h1><br /><br />

      <div>
        <span style={{ fontWeight: "900" }}>1. Middleware:</span><br /><br />
        <p><span style={{ fontWeight: "800" }}>Cenário Adequado:</span> O uso de middleware é adequado quando você precisa processar ou modificar os dados da requisição antes que cheguem à rota final. Pode ser útil para autenticação, validação de dados, etc.</p><br />
        <p><span style={{ fontWeight: "800" }}>Vantagens:</span> Permite a execução de lógica antes que a rota seja alcançada.</p><br />
        <p><span style={{ fontWeight: "800" }}>Desvantagens:</span> Os dados podem ser perdidos se o servidor for reiniciado.</p><br /><br />

        <span style={{ fontWeight: "900" }}>1. Banco de Dados:</span><br /><br />
        <p><span style={{ fontWeight: "800" }}>Cenário Adequado:</span> Útil quando você precisa armazenar dados de forma persistente e acessá-los mesmo após reinicializações do servidor.</p><br />
        <p><span style={{ fontWeight: "800" }}>Vantagens:</span> Dados persistem entre reinicializações do servidor.</p><br />
        <p><span style={{ fontWeight: "800" }}>Desvantagens:</span> Pode ser mais complexo de configurar e manter, especialmente para casos simples.</p><br /><br />

        <span style={{ fontWeight: "900" }}>1. Arquivo (File System - fs):</span><br /><br />
        <p><span style={{ fontWeight: "800" }}>Cenário Adequado:</span> Ideal para casos simples onde não é necessário persistência de longo prazo, mas você ainda deseja manter os dados temporariamente.</p><br />
        <p><span style={{ fontWeight: "800" }}>Vantagens:</span> Simples de implementar para dados temporários.</p><br />
        <p><span style={{ fontWeight: "800" }}>Desvantagens:</span> Os dados são perdidos se o servidor for reiniciado.</p><br /><br />

        <span style={{ fontWeight: "900" }}>1. Memória Cache:</span><br /><br />
        <p><span style={{ fontWeight: "800" }}>Cenário Adequado:</span>  A memória cache é adequada quando você precisa armazenar dados temporários de forma eficiente em memória, evitando acesso repetido a recursos mais lentos, como banco de dados ou sistemas externos.</p><br />
        <p><span style={{ fontWeight: "800" }}>Vantagens:</span> Permite acesso rápido aos dados temporários, reduzindo a carga no servidor e melhorando o desempenho da aplicação.</p><br />
        <p><span style={{ fontWeight: "800" }}>Desvantagens:</span> Os dados armazenados na memória cache podem ser perdidos se o servidor for reiniciado, e a capacidade de armazenamento é limitada pela memória disponível no servidor.</p><br /><br /><br />

        <p style={{ lineHeight: "25px" }}>Esses são os cenários mais comuns e suas respectivas vantagens e desvantagens. A escolha do método de armazenamento depende das necessidades específicas da sua aplicação, como requisitos de desempenho, complexidade de implementação e durabilidade dos dados.</p><br /><br />

        <h3>E por último não menos importante, o uso do <span style={{ fontWeight: "700" }}>`app.locals`</span></h3><br />
        <p>O uso de <span style={{ fontWeight: "700" }}>app.locals</span> em Node.js tem algumas vantagens específicas em comparação com outras formas de armazenamento de dados:</p><br />
        <p style={{ lineHeight: "30px" }}><span style={{ fontWeight: "800", lineHeight: "30px" }}>Acesso Global:</span>  As variáveis definidas em app.locals estão disponíveis globalmente em toda a aplicação Express. Isso significa que você pode acessar essas variáveis de qualquer rota, middleware ou template sem precisar passá-las explicitamente entre eles.</p><br />
        <p style={{ lineHeight: "30px" }}><span style={{ fontWeight: "800", lineHeight: "30px" }}>Eficiência de Memória:</span> Os dados armazenados em app.locals são mantidos na memória durante toda a vida útil do aplicativo Node.js. Isso evita a necessidade de recarregar ou recalcular os dados a cada requisição, o que pode melhorar o desempenho e reduzir a carga no servidor.</p><br />
        <p style={{ lineHeight: "30px" }}><span style={{ fontWeight: "800", lineHeight: "30px" }}>Facilidade de Uso:</span> É simples definir e acessar variáveis em app.locals. Você pode atribuir valores a essas variáveis em qualquer lugar do seu código, e elas serão imediatamente disponíveis em toda a aplicação.</p><br />
        <p style={{ lineHeight: "30px" }}><span style={{ fontWeight: "800", lineHeight: "30px" }}>Não Persistência:</span> Ao contrário do armazenamento em banco de dados ou em arquivos, os dados em app.locals não são persistentes entre reinicializações do servidor. Isso pode ser uma vantagem em alguns casos, especialmente para dados temporários que não precisam ser mantidos a longo prazo.</p><br />
        <p style={{ lineHeight: "30px" }}><span style={{ fontWeight: "800", lineHeight: "30px" }}>Escopo Controlado:</span> Embora as variáveis em app.locals sejam acessíveis globalmente, elas ainda têm um escopo controlado dentro do contexto da aplicação Express. Isso ajuda a evitar poluição do namespace global e facilita a organização e manutenção do código.</p><br /><br />

        <p style={{ lineHeight: "30px" }}>Em resumo, app.locals é uma opção conveniente e eficiente para armazenar dados globais em uma aplicação Express, especialmente para dados temporários ou de configuração que não precisam ser persistentes entre reinicializações do servidor.</p>
        <p style={{ fontWeight: "800" }}>Ex: usando app.locals</p>
        <img src={locals}></img>
      </div>
    </>
  )
}

export default passarDadosEntreRotas