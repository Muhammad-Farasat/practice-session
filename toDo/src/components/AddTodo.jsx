import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/listSlice'

function AddTodo() {


  const [list, setList] = useState('')

  const dispatch = useDispatch()

  // const todos = useSelector((state)=> sta)

  const addList = () => {

    if (list.trim() === "") return; 

    const allTodo = {text: list,  completed: false}

    dispatch(addTodo(allTodo))
    
    setList('')
  }

  


  return (
    <>
      <div className=' space-x-4 '>
        
        <input type="text" placeholder='Add To-Do ' value={list} onChange={(e) => setList(e.target.value)} className=' text-white w-96 px-2 py-1.5 border-2 rounded-sm ' />

        <button onClick={addList} className='bg-[#2d9d94] px-4 py-1.5 text-white rounded-sm cursor-pointer '>Add</button>

      </div>
    </>
  )
}

export default AddTodo