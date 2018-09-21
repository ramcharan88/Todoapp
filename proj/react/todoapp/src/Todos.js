import React  from 'react'

const Todos = ({todos, deleteTodo})=> {
    const todoList=todos.length ? (
        todos.map(todo=> {
            return(
            <div className="collection-item" key={todo.id}>
            <h6>{todo.content}
            <button className= ".right-align" onClick={() => {deleteTodo(todo.id)}}> x</button></h6>
            
            </div>    
            )

        })
    ) : (
       <p className="center"> you have no todos </p>
    )

    return(
        <div className="todos collection">
        {todoList}

        </div>
    )
}
export default Todos;