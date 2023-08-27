import React from "react";

const TypeArray = () => {
    const cars = ["Saab", "Volvo", "BMW"];

    return (
        <>
            <h2>Como reconhecer uma matriz ( type )</h2><br />
            <p>O operador <strong>typeof</strong> retorna o objeto porque uma matriz JavaScript é um objeto.</p><br />
            <p>const cars = ["Banana", "Orange", "Apple"]; <br /> typeof cars;</p><br />
            <p>result: object</p><br />
            <h1>Solução 1:</h1><br />
            <h2 style={{ color: "red" }}>instanceof Array</h2><br />

            <p>{(cars instanceof Array) + " (cars instanceof Array) "}</p>
            <p>{(cars instanceof Object) + " (cars instanceof Object) "}</p>
            <p>{(cars instanceof String) + " (cars instanceof String)"}</p>
            <p>{(cars instanceof Number) + " (cars instanceof Number)"}</p><br />

            <h1>Solução 2:</h1><br />

            <h2 style={{color: "red"}}>constructor === Array</h2><br />
            <p>{(cars.constructor === Array) + " (cars.constructor === Array) "}</p><br />

            <h1>Solução 3:</h1><br />

            <h2 style={{color: "red"}}>Array.isArray([ ])</h2><br />
            <p>{Array.isArray(cars) + "  Array.isArray(cars) "}</p>
        </>
    )
}

export default TypeArray