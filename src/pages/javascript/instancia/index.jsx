const Instancia = () => {
    return (
        <>
            <h1>O que é instanciar um objeto?</h1><br /><br />

            <p>Instanciar um objeto é um processo por meio do qual</p>
            <p>se realiza a cópia de um <strong>objeto</strong> ou <strong>função</strong></p><br />
            <p><strong>Ex:</strong></p>
            <pre>{`
          // This constructor functon may be converted to a class declaration

          class produto {
              constructor(nome, preco) {
                   this.nome  = nome,
                   this.preco = preco
              }
          }

          // instância object
          const  p1 =  new  produto("caneta",  1.85)
          console.log(p1)

          ____________
          __________________
          ______________________

          // Function constructor
          const  multiply  =  new Function("x",  "y",  "return  x  *  y");
          ______________________
          __________________
          ____________
        `}</pre>
            <p><a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions">Referência</a></p>
        </>
    )
}

export default Instancia