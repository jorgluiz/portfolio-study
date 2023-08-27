import { Container } from "./styles"
import imageParadigma from "../../../assets/paradigmas/paradigma.jpg"

const Paradigmas = () => {
    return (
        <Container>
            <div className="img-paradigma">
                <img src={imageParadigma}></img>
            </div>
            <div className="paradigma-imperativo-declarativo">
                <div className="paradigma01">
                    <p><strong>Desvantagens.</strong> Apesar de tudo isso, a programação imperativa em projetos grandes tem difícil legibilidade e manutenibilidade, focando sempre em como a tarefa deve ser feita e não em o que deve ser feito, gerando tratamentos de dados confusos e programas mais suscetível a erros.</p><br />
                    <p><strong>vantagens.</strong> O Imperativo trabalha com dados mutáveis. O código Imperativo está sempre modificando e mexendo nas variáveis.</p>
                </div>

                <div className="paradigma02">
                    <p className="center-paradigma02"><strong>Benefícios em termo de manutenção: </strong></p><br />
                    <p>- Funções pequenas que fazem uma única responsabilidade</p>
                    <p>- Reutilizar o código</p>
                    <p>- Qualidade de código</p>
                    <p>- código paralelo</p><br />
                    <p><strong>Declarativo</strong> o foco é dados imutáveis, você não altera os dados existentes, você cria novos dados como evolução do já existente. Isso dá uma vantagem de trabalhar com multiprocessamento.</p><br />
                    <p style={{ textIndent: "3ch" }}><strong>OBS:</strong> A maioria dos projetos, o gargalo não está necessariamente no desempenho,
                        o gargalo está num código mal escrito, problema com mutabilidade, código com baixo reúso</p>
                </div>
            </div><br /><br /><br />
            <p>________________________________________________________________</p>
            <div style={{marginLeft: "10px"}}>
                <a href="https://pt.stackoverflow.com/questions/441261/como-juntar-dois-arrays-de-objetos-por-chaves-diferentes" target="_blank" rel="noreferrer">Referência</a>
                <h1>Como unir dois array de objetos </h1>
                <p>Para unir dois arrays em apenas um, combinando as propriedades onde </p>
                <p><strong>car.id</strong> for igual a <strong>carMarca.id</strong> tendo então o seguinte resultado:</p><br />
                <div style={{ display: "flex" }}>
                    <div>
                        <p>{`const car = [`}</p>
                        <p>{`{ id: 1, modelo: "Fox", cor: "preto" },`}</p>
                        <p>{`{ id: 2, modelo: "Honda", cor: "cinza" }`}</p>
                        <p>{"]"}</p><br /><br />
                    </div> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                    <div>
                        <p>{`const carMarca = [`}</p>
                        <p>{`{ id: 1, marca: "volkswagen", ano_fabricacao: "2023" },`}</p>
                        <p>{`{ id: 2, marca: "Honda",ano_fabricacao: "2024" }`}</p>
                        <p>{"]"}</p><br /><br />
                    </div>
                </div><br />
                <div>
                    <p>{`const merged = carMarca.map((cMarca) =>`} <strong>{'('}</strong>{'{'}</p>
                    <p>{`...car.find((c) => c.id === cMarca.id),`}</p>
                    <p>{`...cMarca`}</p>
                    <p>{`}`} <strong>{')'}</strong> {');'}</p>
                </div><br />

                <pre>
                    <p><strong>OUTPUT</strong></p>
                    {`
                    [
                        {
                          id: 1,
                          modelo: 'Fox',
                          cor: 'preto',
                          marca: 'volkswagen',
                          ano_fabricacao: '2023'
                        },
                        {
                          id: 2,
                          modelo: 'Honda',
                          cor: 'cinza',
                          marca: 'Honda',
                          ano_fabricacao: '2024'
                        }
                      ]
                      
                    `}
                </pre>
            </div>
        </Container>
    )

}

export default Paradigmas
