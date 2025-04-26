import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/counterSlice'

function Counter() {

    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()

   
  return (
    <>
        <section className=' w-full h-full text-[#fff]  '>

            <div className=' flex justify-center items-center gap-x-6 mt-96 '>

                <button onClick={() => dispatch(decrement())} className=' w-12 h-12 rounded-lg bg-[#646464] '> - </button>
                <p className='text-5xl'>{count}</p>
                <button onClick={() => dispatch(increment())} className=' w-12 h-12 rounded-lg bg-[#646464] '> + </button>

            </div>

        </section>
    </>
  )
}

export default Counter