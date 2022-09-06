import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux';
import { IProduct } from '../types';
import Quantity from './Quantity';
import { addToCart } from '../store/cart/actions';


interface IProductItem {
  product: IProduct
}

const ProductItem: FC<IProductItem> = ({product}) => {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch()

  const   addHandler = () => {
    dispatch(addToCart(product, count))
    
  }


  return (
    <div
      className="p-7 w-4/5 mx-auto mt-7 flex justify-center flex-col text-center items-center overflow-hidden"
      style={{
        borderRadius: 50,
        background: "linear-gradient(145deg, #cacaca, #f0f0f0)",
        boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
      }}
    >
      <img src={product.imagePath} alt={product.name} className='w-full rounded-lg' />
      <div className="text-lg font-bold my-2">{product.name}</div>
      <div className="text-sm text-gray-700">{product.price}$</div>
      <Quantity count={count} setCount={setCount} />
      <button
        onClick={addHandler}
        className="bg-teal-300 font-semibold text-white rounded-sm px-3 py-1"
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductItem
