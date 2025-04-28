import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { RiCheckboxBlankCircleFill, RiCheckboxCircleFill, RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux'
import { allTodo, completeTodo, deleteTodo } from '../redux/listSlice';


function ShowTodo() {

    const [showList, setShowList] = useState([])

    // useEffect(() => {
    //     const show = localStorage.getItem('todo')

    //     if (show) {
    //         setShowList(JSON.parse(show))
    //     }
    // }, [])

    const completedTask = (index) => {

        // console.log(showList.findIndex(index));

        // const change = lists.map((todo, i) =>
        //     i === index ? { ...todo, completed: !todo.completed } : todo
        // )

        // setShowList(change)

        // localStorage.setItem('todo', JSON.stringify(change))

        // console.log(change);

        dispatch(completeTodo(index ))


    }

    const deleteList = (index) => {
        
        dispatch(deleteTodo(index))

    }

    const dispatch = useDispatch()
    const lists = useSelector((state) => state.list.value)

    useEffect(()=>{
        dispatch(allTodo())
    },[dispatch])

    console.log(lists)

    return (
        <>
            <div className='w-full h-full text-white mt-6 text-2xl '>
                {
                    lists?.length > 0 ?
                    lists.map((item, index) => (
                            <div key={index} className='text-white text-lg flex justify-between items-center space-x-3 '>
                                <p>
                                    {index + 1}.
                                </p>
                                <p className={`${item.completed === true ? 'line-through' : ''}`}>
                                    {
                                        item.text
                                    }
                                </p>
                                <p className='cursor-pointer' onClick={() => completedTask(index)}>
                                    {
                                        item.completed === false ?
                                            <RiCheckboxBlankCircleFill />
                                            : <RiCheckboxCircleFill />

                                    }
                                </p>
                                <button className=' cursor-pointer ' onClick={()=>deleteList(index)}>
                                    <RiDeleteBin6Fill />
                                </button>
                            </div>
                        ))
                        : (
                            <p className='text-center'>No todos</p>
                        )
                }
            </div>
        </>
    )
}

export default ShowTodo