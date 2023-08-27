import { useState } from 'react';

import "./styles.css"

// CRUD
const Task01 = () => {
    const [tasks, setTasks] = useState(["leite", "macarrao", "arroz"])
    const [upDataList, setUpDataList] = useState("")

    // add elemento no array
    const handleaddNewTask = (task) => {
        const ItemsCopy = Array.from(tasks) //O método Array.from() retorna uma matriz de qualquer objeto iterável.
        ItemsCopy.push({ id: tasks.length, value: task })
        setTasks(ItemsCopy)
    }

    // atulizando um elemento no array
    const handleUpDateTask = (element, index) => {
        const itemsCopy = Array.from(tasks) //O método Array.from() retorna uma matriz de qualquer objeto iterável.
        itemsCopy.splice(index, 1, element)
        setTasks(itemsCopy)
    }

    // deletando um elemento no array
    const handleDeleteTask = (index) => {
        const itemsCopy = Array.from(tasks) //O método Array.from() retorna uma matriz de qualquer objeto iterável.
        itemsCopy.splice(index, 1)
        setTasks(itemsCopy)
    }
    return (
        <div className="app">
            <div className="App-header">
                <div onSubmit={handleaddNewTask} />
                <p>List Items:</p>
                {tasks.map((element, index) => {
                    return (
                        <div>
                            <input onChange={(e) => setUpDataList(e.target.value)} placeholder='escreva aqui editar'></input>
                            <button onClick={() => handleDeleteTask(index)}>Delete</button>
                            <button onClick={() => handleUpDateTask(upDataList, index)}> {"id:"} {index} Editar</button>
                            {/* <button onClick={() => deleteTask(index)} style={{ margin: "0 5px 0 5px" }}>Delete: {element}</button> */}
                            {/* <div>{element}</div> */}
                        </div>
                    )
                })}
            </div>
            <div className="Array-preview">
                <pre>{JSON.stringify(tasks, null, 4)}</pre>
            </div>
        </div>
    )
}

export default Task01