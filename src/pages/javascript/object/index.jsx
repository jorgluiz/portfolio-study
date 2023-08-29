import objetoProp from "../../../assets/objetoProp.png"
import objetoMetodo from "../../../assets/objetoMetodo.png"
import objetoConstructor from "../../../assets/FNConstructor.png"
import objetoConstructorMethod from "../../../assets/FNConstructorMethod.png"

const Object = () => {
    return (
        <>
        <div style={{marginTop: "100px"}}></div>
            <h1 style={{textAlign: "center"}}>Como ter acesso a uma <span style={{color: "rgb(61, 177, 216)"}}>propriedade</span> e <span style={{color: "rgb(216, 193, 61)"}}>Método()</span>  de <span style={{ textDecoration: "underline" }}>Objeto</span> e </h1>
            <h1 style={{textAlign: "center"}}>como fazer uma instância de Objeto usando o perador <span style={{ color: "green" }}>New</span></h1>
            <br /><br /><br />
            <h3>acessando propriedade</h3><br />
            <img src={objetoProp}></img><br /><br /><br /><br /><br />

            <h3>acessando método</h3><br />
            <img src={objetoMetodo}></img><br /><br /><br /><br /><br />

            <h3 style={{textAlign: "center"}}>criando propria function constructor</h3><br />
            <img src={objetoConstructor}></img><br /><br /><br /><br /><br />

            <h3></h3>
            <img src={objetoConstructorMethod} />
        </>
    )
}

export default Object