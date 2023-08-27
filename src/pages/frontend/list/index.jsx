import { useState } from "react";
import "./styles.css"

const List = () => {
    const [text, setText] = useState("")
    const [item, setItem] = useState([])

    // para add um elemento no array é preciso fazer um copia e add o novo elemento (Item)
    const addItem = () => {
        setItem([...item, text]) //OU setItem(prenv => [...prenv, text])
        setText("")
    }

    // get valor digitado no input
    const inputText = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <p>List of elements</p><br />

            <input value={text} className="input-list" onChange={inputText} ></input>
            <button onClick={addItem}>click for ADD</button><br /><br />

            <ul>
                {item.map((el, i) => {
                    return (
                        <li key={i}>{el}</li>
                    )
                })}
            </ul><br />
        </>
    )
}

export default List