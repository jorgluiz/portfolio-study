const mysqlEorm = () => {
    return (
        <div>
            <h2 style={{textAlign: "center"}}>MySQL ou ORM</h2><br /><br />

            <h4>MySQL puro ou um ORM é uma decisão fundamental que pode impactar significativamente o desenvolvimento e a manutenção do projeto.</h4><br /><br />

            <p style={{ lineHeight: "30px" }}>A escolha entre usar MySQL puro ou um ORM (Object-Relational Mapping) como Sequelize ou TypeORM em um projeto com Node.js, Express e MySQL depende de vários fatores, incluindo o tamanho e complexidade do projeto, a experiência da equipe, os requisitos de desempenho, a facilidade de manutenção e preferências pessoais. Aqui estão alguns pontos a considerar:</p><br /><br />

            <span style={{ fontWeight: "700", border: "1px ridge #000000" }}>Usando MySQL Puro:</span><br /><br />
            <p style={{ lineHeight: "30px" }}><span style={{ fontWeight: "700" }}>Controle total:</span> Com MySQL puro, você tem controle total sobre as consultas SQL que são executadas no banco de dados. Isso pode ser útil para otimização de consultas complexas ou em casos onde você precisa de total flexibilidade.</p><br />
            <p style={{ lineHeight: "30px" }}><span style={{ fontWeight: "700" }}>Menos abstração:</span> Usar MySQL puro significa que você estará mais próximo do banco de dados e menos abstraído dele. Isso pode ser útil se você ou sua equipe são mais proficientes em SQL e querem manter o código mais enxuto.</p><br />
            <p style={{ lineHeight: "30px" }}><span style={{ fontWeight: "700" }}>Curva de aprendizado:</span> Pode haver uma curva de aprendizado mais íngreme para desenvolvedores menos experientes em SQL, já que eles precisarão escrever consultas SQL manualmente.</p><br />
            <span style={{ fontWeight: "700", border: "1px ridge #000000" }}>Usando um ORM:</span><br /><br />
            <p style={{ lineHeight: "30px" }}><span style={{ fontWeight: "700" }}>Abstração:</span> ORM como Sequelize ou TypeORM fornecem uma camada de abstração sobre o banco de dados, permitindo que você trabalhe com objetos JavaScript ao invés de escrever consultas SQL diretamente. Isso pode acelerar o desenvolvimento e tornar o código mais legível.</p><br />
            <p style={{ lineHeight: "30px" }}><span style={{ fontWeight: "700" }}>Produtividade:</span>ORM pode aumentar a produtividade, especialmente em projetos onde há muitas operações de CRUD (Create, Read, Update, Delete), pois eles fornecem métodos convenientes para lidar com essas operações.</p><br />
            <p style={{ lineHeight: "30px" }}><span style={{ fontWeight: "700" }}>Portabilidade do Banco de Dados:</span>Com ORM, a mudança de banco de dados (por exemplo, de MySQL para PostgreSQL) pode ser mais fácil, já que a maioria dos ORM oferece suporte a vários bancos de dados, e você pode precisar apenas fazer alterações mínimas no código.</p><br />
            <span style={{ fontWeight: "700" }}>Recomendação:</span><br /><br />
            <p style={{ lineHeight: "30px" }}><span style={{ fontWeight: "700" }}>Para projetos pequenos a médios e equipes com experiência em SQL:</span>  Usar MySQL puro pode ser uma escolha sensata, já que oferece mais controle e menos sobrecarga de aprendizado.</p><br />
            <p style={{ lineHeight: "30px" }}><span style={{ fontWeight: "700" }}>Para projetos maiores ou equipes com menos experiência em SQL:</span> Usar um ORM pode ser benéfico, pois pode acelerar o desenvolvimento e tornar o código mais portável e legível.</p><br />
            <p style={{ lineHeight: "30px" }}><span style={{ fontWeight: "700" }}>Considere também os requisitos específicos do projeto, como desempenho, escalabilidade e preferências da equipe.</span></p><br />
        </div>
    )
}

export default mysqlEorm