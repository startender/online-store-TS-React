import React from 'react'
import { FC }  from 'react';
import { TypeSetState } from '../types';

interface IQuantity {
  count: number
  setCount: TypeSetState<number>
}

const Quantity: FC<IQuantity> = ({ count, setCount }) => {

  return (
    <div className='flex items-center my-2'>

      <button onClick={() => setCount((count: number) =>{ 
        if (count === 0) {
          return count
        }
        return count-1})}>-</button>
        <input type='number' className='mx-2' onChange={e => setCount(+e.target.value)} value={count} />

      <button onClick={() => count < 30 && setCount((count: number) => count+1) } >+</button>

    </div>
  )
}

export default Quantity
