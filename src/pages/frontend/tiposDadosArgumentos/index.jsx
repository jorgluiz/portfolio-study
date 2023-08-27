import { useState } from "react";

const TiposDadosArguments01 = () => {
    const [input, setInput] = useState("")

    function handleInput(e) {
        if (isNaN(e.target.value) === true) {
            typeArgument(e.target.value)
        } else typeArgument(Number(e.target.value))
    }

    function typeArgument(v) {
        if(isNaN(v) === true) setInput(typeof arguments[0])
        if(isNaN(v) === false) setInput(typeof arguments[0])
    }

    return (
        <div>
            <label style={{ display: "flex", flexDirection: "column" }}>
                Coloque aqui um tipos de dados
                <input value={input}  onChange={(e) => handleInput(e)} style={{ backgroundColor: "#02c955", width: "200px" }} />
            </label><br /><br />

            <p>Tipo de dados passado como argumento: <strong>{input}</strong></p>
        </div>
    )

}

export default TiposDadosArguments01