const typesPackage = () => {
    return (
        <div>
            <h2>Types package</h2><br />

            <span style={{ fontWeight: "700" }}>Ferramenta:</span>
            <p style={{ lineHeight: "30px" }}>Oferece funcionalidades específicas para uma tarefa particular. Pode ser uma ferramenta de análise, teste, depuração, etc. No caso do ESLint, é uma ferramenta de linting que ajuda na análise estática do código para identificar padrões problemáticos ou potenciais erros.</p><br />
            <span style={{ fontWeight: "700" }}>Biblioteca:</span>
            <p style={{ lineHeight: "30px" }}>Fornece um conjunto de funcionalidades reutilizáveis que podem ser incorporadas em um software. As bibliotecas são componentes modulares que os desenvolvedores podem usar para realizar tarefas específicas, como manipulação de strings, chamadas de API, processamento de dados, etc.</p><br />
            <span style={{ fontWeight: "700" }}>Framework:</span>
            <p style={{ lineHeight: "30px" }}>É uma estrutura mais abrangente que fornece uma estrutura geral para o desenvolvimento de aplicativos. Diferentemente de uma biblioteca, um framework muitas vezes controla o fluxo da aplicação e impõe uma estrutura específica. Os desenvolvedores trabalham dentro dessa estrutura para construir seus aplicativos.</p><br /><br />
            <p style={{ lineHeight: "30px" }}>Essas definições ajudam a entender as diferentes categorias de <span style={{ fontWeight: "700" }}>ferramentas</span>, <span style={{ fontWeight: "700" }}>bibliotecas</span> e <span style={{ fontWeight: "700" }}>frameworks</span> no contexto do desenvolvimento de software.</p><br /><br /><br />

            <h3>Vamos separar cada dependência, classificando-as conforme necessário:</h3><br />
            <p>Bibliotecas/Frameworks Principais:</p><br />
            <span style={{fontWeight: "700"}}>Express:</span>
            <p>Tipo: Framework</p>
            <p>Descrição: Framework de aplicativo web para Node.js. Facilita a criação de servidores web e o manuseio de rotas, solicitações e respostas HTTP.</p><br />
            <p>Dependências do Express:</p>
            <span style={{fontWeight: "700"}}>bcrypt :</span>
            <p>Tipo: Biblioteca</p>
            <p>Descrição: Utilizada para o hashing seguro de senhas.</p><br />
            <span style={{fontWeight: "700"}}>body-parser:</span>
            <p>Tipo: Middleware</p>
            <p>Descrição: Analisa dados do corpo de solicitações HTTP, facilitando a manipulação de dados enviados por formulários ou em formato JSON.</p><br />
            <span style={{fontWeight: "700"}}>cors:</span>
            <p>Tipo: Middleware</p>
            <p>Descrição: Habilita a política de mesma origem (CORS) no servidor Express, permitindo solicitações vindas de diferentes origens.</p><br />
            <span style={{fontWeight: "700"}}>dotenv:</span>
            <p>Tipo: Biblioteca</p>
            <p>Descrição: Carrega variáveis de ambiente a partir de um arquivo .env, facilitando a configuração de parâmetros sensíveis.</p><br />
            <span style={{fontWeight: "700"}}>env:</span>
            <p>Tipo: Biblioteca</p>
            <p>Descrição: Utilizada para carregar variáveis de ambiente no aplicativo.</p><br />
            <span style={{fontWeight: "700"}}>express-rate-limit:</span>
            <p>Tipo: Middleware</p>
            <p>Descrição: Limita a taxa de solicitações à API, ajudando a prevenir ataques de força bruta.</p><br />
            <span style={{fontWeight: "700"}}>fs:</span>
            <p>Tipo: Módulo do Core</p>
            <p>Descrição: Módulo do sistema de arquivos para interagir com o sistema de arquivos.</p><br />
            <span style={{fontWeight: "700"}}>jsonwebtoken:</span>
            <p>Tipo: Biblioteca</p>
            <p>Descrição: Implementa JSON Web Tokens (JWT) para autenticação.</p><br />
            <span style={{fontWeight: "700"}}>memory-cache:</span>
            <p>Tipo: Biblioteca</p>
            <p>Descrição: Módulo para armazenamento em cache na memória.</p><br />
            <span style={{fontWeight: "700"}}>mysql:</span>
            <p>Tipo: Biblioteca</p>
            <p>Descrição: Cliente MySQL para Node.js, permitindo a interação com bancos de dados MySQL.</p><br />
            <span style={{fontWeight: "700"}}>nodemailer:</span>
            <p>Tipo: Biblioteca</p>
            <p>Descrição: Módulo para enviar e-mails a partir do Node.js.</p><br />
            <span style={{fontWeight: "700"}}>nodemailer-express-handlebars:</span>
            <p>Tipo: Biblioteca</p>
            <p>Descrição: Motor de modelos para Nodemailer que utiliza Handlebars.</p><br />
            <span style={{fontWeight: "700"}}>nodemon:</span>
            <p>Tipo: Ferramenta</p>
            <p>Descrição: Monitora alterações nos arquivos e reinicia automaticamente a aplicação.</p><br />
            <span style={{fontWeight: "700"}}>path:</span>
            <p>Tipo: Módulo do Core</p>
            <p>Descrição: Módulo para manipular caminhos de arquivos e diretórios.</p><br />
            <span>DevDependencies:</span><br />
            <span style={{fontWeight: "700"}}>eslint:</span>
            <p>Tipo: Ferramenta</p>
            <p>Descrição: Ferramenta para identificar e corrigir problemas no código JavaScript.</p><br />
            <span style={{fontWeight: "700"}}>eslint-config-standard:</span>
            <p>Tipo: Configuração</p>
            <p>Descrição: Configuração do ESLint para seguir o estilo de código Standard.</p><br />
            <span style={{fontWeight: "700"}}></span>
            <p></p>
            <p></p>
        </div>
    )
}

export default typesPackage