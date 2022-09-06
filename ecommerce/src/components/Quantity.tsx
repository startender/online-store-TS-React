import React from 'react'
import { useState, FC } from 'react';

const Quantity: FC<{count: number}> = () => {
  const [count, setCount] = useState(0);


  return (
    <div className='flex items-center my-2'>

      <button onClick={() => setCount(prev => prev+1) } >+</button>
        <input type='number' className='mx-2' onChange={e => setCount(+e.target.value)} value={count} />
      <button onClick={() => setCount(prev => prev-1)}>-</button>

    </div>
  )
}

export default Quantity
