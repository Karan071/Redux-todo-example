import './App.css'
import AddTodos from './component/AddTodos'
import Todos from './component/Todos'

function App() {
  return (
    <>
      <h1 className='flex justify-center items-center mt-6 text-4xl font-mono'>Todo Application Using Redux-toolkit!</h1>
      <AddTodos/>
      <Todos/>
    </>
  )
}

export default App
