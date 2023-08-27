import { useState, useEffect } from 'react'
import { FiTrash } from 'react-icons/fi'


const MudandoEstadoArray = () => {
    // states
    const [tasks, setTasks] = useState([])
    const [valueText, setValueText] = useState("")
    const [updateTask, setUpdateTask] = useState(-1)
    // const [task, setTask] = useState({ id: 0, title: "", isComplete: false })

    // criando um objeto
    let task = { id: 1, title: "", isComplete: true };

    // setando dados para esse objeto
    task = {
        id: tasks.length,
        title: valueText,
        isComplete: false
    }

    // obtendo value atual
    const currentTextValue = ({ target }) => {
        setValueText(target.value) // setando esse value atual para meu state
    }

    // adicionando uma task ###
    const addTask = () => {
        if(valueText === "" ) return alert("NÃO PODE HAVER CAMPO VÁZIO")

        // ao passar um parametro para o meu state obtenho o array atual
        setTasks(prevTasks => [...prevTasks, task])
        // Para adicionar uma Task no array, precisamos gerar um cópia do array atual (...prevTasks), depois adicionar a 
        // Task no array cópia e por fim usar o setTasks() para renderizar os novos valores que estão no array cópia, 
        // que será o array atualizado. Aqui iremos fazer todo esse processo apenas com uma linha de código e
        // assim temos a primeira forma de alterar um array:
        // >>> setTasks(prevTasks => [...prevTasks, task]) 
    }

    // método pega o ID atual para poder setar o que foi cliclado ( checked )
    const handleToggleTaskCompletion = (id) => {
        // obtendo o índice ( taskIndex )
        const taskIndex = tasks.findIndex((task) => {
            return task.id == id;
        });
        // cópia de todo meu array ( tempTasks )
        const tempTasks = [...tasks]

        tempTasks[taskIndex].isComplete = !tempTasks[taskIndex].isComplete

        setTasks(tempTasks)
    }

    // método remover um elemento no array ###
    function handleRemoveTask(id) {
        const taskIndex = tasks.findIndex((task) => {
            return task.id == id;
        });

        if (tasks[taskIndex].isComplete === false) return

        // O filter() método cria uma nova matriz com elementos de matriz que passam em um teste
        const newTasks = tasks.filter((element) => element.id !== id); //retorna todos os elementos exceto o elemento que tem o ID que foi passado no parametro 
        setTasks(newTasks);
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <button onClick={() => addTask()}>Adicionando Task</button>
                <input value={valueText} onChange={(e) => currentTextValue(e)} type="text" placeholder='escreva aqui nova task' style={{border: "solid 2px #000000" }}></input>
            </div>

            <ul>
                {/* map cria um novo Array e não altera o atual */}
                {tasks.map((item, i) => {
                    return (

                        updateTask === item.id ? <EditTask item={item} tasks={tasks} setTasks={setTasks} setUpdateTask={setUpdateTask} /> :
                            <li key={item.id} style={{ display: "flex" }}>
                                <div className={task.isComplete ? 'completed' : ''} style={{ display: "flex" }}>
                                    <label className="checkbox-container">
                                        <input
                                            type="checkbox"
                                            readOnly
                                            checked={item.isComplete}
                                            onClick={() => handleToggleTaskCompletion(item.id)}
                                        />
                                        <span className="checkmark"></span>
                                    </label>
                                    <p>{item.title}</p>
                                    {/* <li key={item.id}>{item.title}</li> */}
                                </div>

                                <button type="button" onClick={() => handleRemoveTask(item.id)}>
                                    <FiTrash size={16} />
                                </button>
                                <button onClick={() => handleEditTask(item.id)}>Edit</button>
                            </li>
                    )
                })}
            </ul>
            {/* =========================================================================================================================== */}

            {/* <p>{JSON.stringify(tasks, null, 6)}</p> */}

            <div style={{ borderBottom: "solid 3px #000000", marginTop: "100px" }}></div>
            <h1 style={{ fontSize: "32px" }}>Manipulando estado de um array no ReactJS</h1>
            <a href='https://pt.linkedin.com/pulse/mudando-o-estado-de-um-array-reactjs-thiago-oliveira'>Referência</a>
            <p style={{ marginBottom: "40px" }}></p>

            <p style={{ lineHeight: 1.5 }}>Neste exemplo iremos ver <strong>duas formas de alterar os valores de um array</strong><br /> utilizando o estado de um componente.</p><br /><br />

            <pre style={{ backgroundColor: "#e6e9ec", padding: "32px 32px 32px 32px" }}>{`interface Task {
                   id: number;
                   title: string;
                   isComplete: boolean;
            }`}</pre> <br />

            <p style={{ lineHeight: 1.5 }}>A nossa aplicação irá ser responsável por gerenciar um simples To-do list. Onde temos três funções básicas:</p><br />

            <p style={{ lineHeight: 1.5 }}>1. Adicionar uma Task, implementada na função <strong>handleCreateNewTask()</strong></p><br />
            <p style={{ lineHeight: 1.5 }}>2. Marcar uma Task como completa, implementada na função <strong>handleToggleTaskCompletion()</strong></p><br />
            <p style={{ lineHeight: 1.5 }}>2. Remover uma Task, implementada na função <strong>handleRemoveTask()</strong></p><br />

            <p style={{ lineHeight: "1.5", marginTop: "30px" }}>O componente TaskList irá renderizar um array de Tasks. Para podemos fazer as mudanças de adicionar ou remover uma Task iremos usar o estado do componente utilizando o <strong>Hook</strong> useState:</p>

            <pre style={{ marginTop: "30px", backgroundColor: "#e6e9ec", padding: "32px 32px 32px 32px" }}>
                {"const [tasks, setTasks] = useState([ ]);"}
            </pre>

            <p style={{ marginTop: "50px", border: "solid 2px #c3c3c3" }}>1. Adicionando Task com a função <strong>handleCreateNewTask():</strong></p>
            <p style={{ marginTop: "37px", lineHeight: "32px" }}>Para adicionar uma Task no array, precisamos gerar um <strong>cópia</strong> do array atual, depois adicionar a Task no array <strong>cópia</strong> e por fim usar o setTasks() para renderizar os novos valores que estão no array <strong>cópia</strong>, que será o array atualizado. Aqui iremos fazer todo esse processo apenas com uma linha de código e assim temos a <strong>primeira forma de alterar um array:</strong></p>

            <pre style={{ marginTop: "30px", backgroundColor: "#e6e9ec", padding: "32px 32px 32px 32px" }}>
                {"setTasks(prevTasks => [...prevTasks, task]);"}
            </pre>

            <p style={{ marginTop: "37px" }}>A seguir o código completo da função:</p>

            <pre style={{ marginTop: "30px", backgroundColor: "#e6e9ec", padding: "32px 32px 32px 32px" }}>
                {`let task: Task = {id:1, title:"", isComplete:true};

                  task = {       
                  id: Math.random() * max,
                  title: newTaskTitle,
                  isComplete: false
                 };


                setTasks(prevTasks => [...prevTasks, task]);`}
            </pre>

            <p style={{ marginTop: "50px", border: "solid 2px #c3c3c3" }}>2. Atualizando o status da Task com a função <strong>handleToggleTaskCompletion():</strong></p>
            <p style={{ lineHeight: "32px", marginTop: "50px" }}>Toda vez que o checkbox for clicado a função <strong>handleToggleTaskCompletion()</strong> será acionada e o id da Task em questão será enviado por parâmetro. Vamos achar o index da Task com função <strong>findIndex()</strong>, para assim podermos alterar o valor do campo isComplete.</p>
            <p style={{ lineHeight: "32px", marginTop: "50px" }}>Aqui iremos usar uma abordagem de cópia mais verbosa que é a <strong>segunda forma de alterar um array</strong>, pois iremos criar a cópia, editar a cópia e depois setar a cópia como o novo estado do array. Tal procedimento é visualizado nas 3 últimas linhas da função:</p>

            <pre style={{ marginTop: "30px", backgroundColor: "#e6e9ec", padding: "32px 32px 32px 32px" }}>
                {`const taskIndex = tasks.findIndex((task) => {
                        return task.id == id;
                  });

                  const tempTasks = [...tasks]; 
                  tempTasks[taskIndex].isComplete = !tempTasks[taskIndex].isComplete;
                  
                  setTasks(tempTasks);`}
            </pre>

            <p style={{ marginTop: "50px", border: "solid 2px #c3c3c3" }}>3. Removendo uma Task da lista com a função:</p>
            <p style={{ lineHeight: "32px", marginTop: "50px" }}>Na cópia do array, irei utilizar a função filter() para filtrar todas as Tasks cujo o id é diferente da que eu desejo remover, como podemos ver a seguir:</p>

            <pre style={{ marginTop: "30px", backgroundColor: "#e6e9ec", padding: "32px 32px 32px 32px" }}>
                {`function handleRemoveTask(id: number) {
                 const taskIndex = tasks.findIndex((task) => {
                  return task.id == id;
            });


                 const newTasks = tasks.filter((task) => task.id !== id);
                 setTasks(newTasks);
            }`}
            </pre>

        </>
    )

    // essa função está dentro do COMPONENT MudandoEstadoArray
    // ao clicar no button ( Edit ) o ID será setado o estado deixará de ser -1 
    function handleEditTask(id) {
        setUpdateTask(id)
    }
}

// COMPONENT *** 
const EditTask = ({ item, tasks, setTasks, setUpdateTask }) => {
    const handInputname = (event) => {
        const titleCurrent = event.target.value;
        const newlist = tasks.map((elem) => (
            elem.id === item.id ? { ...elem, title: titleCurrent } : elem
        ))

        setTasks(newlist)
    }

    const setID = () => {
        setUpdateTask(-1)
    }

    return (
        <>
            <input type="text" placeholder="editar task" onChange={(event) => handInputname(event)}></input>
            <button type="submit" onClick={() => setID()}>update</button>
        </>
    )
}

export default MudandoEstadoArray