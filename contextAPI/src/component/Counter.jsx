import React, { useContext } from 'react'
import { CounterContext } from '../CounterContext/CounterContext'

function Counter() {


    const {count, decreaseCount, increaseCount} = useContext(CounterContext)

    return (
        <>
            <section>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '12px',
                    width: '100%',
                    padding: '16px',
                    fontSize: '32px'
                }}>

                    <button className='btn' onClick={decreaseCount} > - </button>
                    <p>{count}</p>
                    <button className='btn' onClick={increaseCount}> + </button>

                </div>

            </section>
        </>
    )
}

export default Counter