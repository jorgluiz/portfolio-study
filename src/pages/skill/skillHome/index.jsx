import "./styles.css"

const skillHome = () => {
  return (
    <div className="list-dependence" style={{display: "flex", justifyContent: "space-evenly"}}>
      <div>
        <h3>Depedência desevolvimento Frontend</h3><br />
        <ul>
          <li><strong style={{color: "brown"}}>ESlint</strong> - É uma ferramenta de análise estática de código para <br /> identificar problemas no código JavaScript</li>
          <ul>
            <li><li><strong style={{color: "brown"}}>Typescript</strong> - É um superset de JavaScript que adiciona tipagem estática ao JavaScript.</li></li>
          </ul><br />
          <li><strong style={{color: "brown"}}>React.js</strong> - É uma biblioteca JavaScript para construir interfaces <br /> de usuário (UI) interativas e dinâmicas. <br />  Ele permite criar componentes reutilizáveis que representam partes <br />específicas da interface do usuário, facilitando o desenvolvimento <br />  de aplicativos web escaláveis e fáceis de manter.</li>
        </ul>
      </div>
      <div style={{display: "flex", flexDirection: "column"}}>
      <div>
        <h3>Depedência desevolvimento Backend</h3><br />
        <ul>
          <li><strong style={{color: "brown"}}>Express</strong></li>
          <ul>
          <li><strong style={{color: "brown"}}>Middleware</strong></li>
          <ul>
            <li>body-parser</li>
            <li>cookie-parser</li>
            <li>cors</li>
            <li>helmet</li>
            <li>morgan</li>
          </ul>
          <li><strong style={{color: "brown"}}>ORM:</strong> Sequelize, TypeORM e Knex.js.</li>
          <li><strong style={{color: "brown"}}>Joi, Validator.js ou express-validator.</strong></li>
          <li><strong style={{color: "brown"}}>JWT</strong></li>
          <li><strong style={{color: "brown"}}>Jest</strong></li>
          <li><strong style={{color: "brown"}}>dotenv</strong></li>
          <li><strong style={{color: "brown"}}>nodemon</strong></li>
          <li><strong style={{color: "brown"}}>Typescript</strong></li>
          <ul>
            <li>ESlint</li>
            <ul>
                <li><li>Babel</li></li>
            </ul>
          </ul>
          </ul>
        </ul><br />
        <p>Essas são apenas algumas das ferramentas e bibliotecas que <br />você pode usar em conjunto com o Express.js <br />para tornar o desenvolvimento de aplicativos web mais eficiente <br />e produtivo. A escolha das ferramentas específicas<br /> depende das necessidades do seu projeto<br /> e das preferências da equipe de desenvolvimento.</p>
      </div><br /><br />
      <div>
        <h3>Depedência desevolvimento Backend</h3><br />
        <ul>
            <li><strong style={{color: "brown"}}>mysql</strong></li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default skillHome;
