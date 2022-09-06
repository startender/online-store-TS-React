import React, { FC } from 'react'
import { IProduct } from '../types';
import Quantity from './Quantity';

interface IProductItem {
  product: IProduct
}

const ProductItem: FC<IProductItem> = ({product}) => {

  const   addHandler = () => {
    console.log(product._id);
    
  }


  return (
    <div className='shadow-sm rounded-md p-5 w-4/5 mx-auto mt-7 bg-white flex justify-center flex-col text-center items-center'>
      <img src={product.imagePath} alt={product.name} width='200' />
      <div className='text-lg font-bold my-2' >{product.name}</div>
      <div className='text-sm text-gray-700' >{product.price}$</div>
      <Quantity count={0} />
      <button onClick={addHandler} className='bg-teal-300 font-semibold text-white rounded-sm px-3 py-1' >Add to cart</button>
    </div>
  )
}

export default ProductItem
