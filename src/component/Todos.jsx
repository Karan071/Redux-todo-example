import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from "../features/todo/todoSlice"

const Todos = () => {
    const todos = useSelector(state => state.todos) 
    const dispatch = useDispatch()

    return (
        <div className='w-full flex flex-col justify-center items-center mt-10'>
            <h2 className='font-mono text-3xl font-semibold text-gray-700 mb-4'>
                Todos
            </h2>
            <ul className='w-full max-w-md flex flex-col space-y-2'>
                {todos.map((todo) => (
                    <li key={todo.id} className="flex items-center justify-between bg-gray-100 p-2 rounded shadow">
                        <span className="text-gray-800 font-medium">{todo.text}</span>
                        <button 
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="bg-red-500 text-white text-xs px-3 py-1 rounded hover:bg-red-600 transition duration-200 ease-in-out"
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos
