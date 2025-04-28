import './App.css'
import AddTodo from './components/AddTodo'
import ShowTodo from './components/ShowTodo'

function App() {

  return (
    <>
      <section className='w-full h-full flex justify-center  '>

        <div className='w-[32rem] h-max mt-32 '>

          <AddTodo />
          <ShowTodo />

        </div>

      </section>
    </>
  )
}

export default App
