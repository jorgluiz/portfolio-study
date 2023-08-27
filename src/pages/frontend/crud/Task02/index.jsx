import { useRef, useState } from 'react'
import "./styles.css"

function Task02() {
    // state
    const [lists, setList] = useState([])
    const [updateState, setUpdateState] = useState(-1)
    console.log(updateState)

    return (
        <div className='crud' style={{ border: "solid 2px #000000" }}>
            <div>
                <AddList setList={setList} /> {/* Component */}
                <form onSubmit={handleSubmit}>
                    <table className='table01'>
                        {
                            lists.map((current) => (
                                updateState === current.id ? <EditList current={current} lists={lists} setList={setList} /> :

                                    <tr key={current.id}>
                                        <td className='td-list'>{current.name}</td>
                                        <td className='td-list'>{current.price}</td>
                                        <td>
                                            <button className='edit' onClick={() => handleEdit(current.id)}>Edit</button>
                                            <button className='delete' type='button' onClick={() => handleDelete(current.id)}>Delete</button>
                                        </td>
                                    </tr>
                            ))
                        }
                    </table>
                </form>
            </div>
        </div>
    )

    // method
    function handleEdit(id) {
        setUpdateState(id)
    }
    // method
    function handleDelete(id) {
        const newlist = lists.filter((li) => li.id !== id)
        setList(newlist)
    }
    // method
    function handleSubmit(event) {
        event.preventDefault()
        const name = event.target.elements.name.value
        const price = event.target.elements.price.value
        const newlist = lists.map((elem) => (
            elem.id === updateState ? { ...elem, name: name, price: price } : elem
        ))

        setList(newlist)
        setUpdateState(-1)
    }
}

// COMPONENT *** 
function AddList({ setList }) {
    const nameRef = useRef()
    const priceRef = useRef()

    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const price = event.target.elements.price.value;
        const newlist = {
            id: Math.random() * 100,
            name,
            price
        }
        setList(prevList => prevList.concat(newlist))
        nameRef.current.value = ""
        priceRef.current.value = ""
    }
    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter Name" ref={nameRef} />
            <input type="text" name="price" placeholder="Enter Price" ref={priceRef} />
            <button type="submit">Add</button>
        </form>
    )
}
// =========================   =========================   =========================   =========================

// COMPONENT *** 
function EditList({ current, lists, setList }) {
    function handInputname(event) {
        const value = event.target.value;
        const newlist = lists.map((elem) => (
            elem.id === current.id ? { ...elem, name: value } : elem
        ))

        setList(newlist)
    }
    function handInputprice(event) {
        const value = event.target.value;
        const newlist = lists.map((elem) => (
            elem.id === current.id ? { ...elem, price: value } : elem
        ))

        setList(newlist)
    }
    return (
        <tr className="edit-text">
            <td><input type="text" onChange={handInputname} name='name' value={current.name} /></td>
            <td><input type="text" onChange={handInputprice} name='price' value={current.price} /></td>
            <td><button type='submit'>Update</button></td>
        </tr>
    )
}
// =========================   =========================   =========================   =========================

export default Task02;