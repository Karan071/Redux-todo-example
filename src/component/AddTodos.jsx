import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from "../features/todo/todoSlice"

const AddTodos = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (input.trim() === '') return // Avoid adding empty todos
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form
            onSubmit={addTodoHandler}
            className='w-full flex justify-center items-center space-x-3 mt-10'
        >
            <input 
                type="text"
                className='font-mono bg-gray-300 rounded-full border border-gray-700 focus:ring-2 focus:ring-indigo-400 text-base outline-none py-2 px-10 leading-8 transition-colors duration-200 ease-in-out'
                placeholder='Enter a Todo'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                aria-label="Enter a todo"
            />
            <button
                type='submit'
                disabled={!input.trim()} // Disable button when input is empty
                className={`rounded-full px-6 py-2 text-white font-bold font-mono transition-colors duration-200 ease-in-out ${
                    input.trim()
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-gray-400 cursor-not-allowed'
                }`}
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodos
