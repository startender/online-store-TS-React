import React from 'react'
import { IProduct } from '../types';
import ProductItem from './ProductItem';


const products: IProduct[] = [
  {
    _id: "sad",
    imagePath: "https://img.mvideo.ru/Pdb/small_pic/200/30043369b.jpg",
    name: "Монитор HP OMEN X",
    price: 3890,
  },
  {
    _id: "sad1",
    imagePath: "https://img.mvideo.ru/Pdb/small_pic/200/30064604b.jpg",
    name: "Монитор Samsung C49G95TSSI",
    price: 1790,
  },
  {
    _id: "sad123",
    imagePath: "https://img.mvideo.ru/Pdb/small_pic/200/30063889b.jpg",
    name: "Монитор Samsung C49RG90SSI",
    price: 1490,
  },
  {
    _id: "sad213",
    imagePath: "https://img.mvideo.ru/Pdb/small_pic/200/30025003b.jpg",
    name: "Монитор Acer Predator XB271HKb",
    price: 990,
  },
];

const Products = () => {


  return (
    <div className='mt-4'>
      {products.map(product => (
        <ProductItem product={product} key={product._id} />
      ))}
      

    </div>
  )
}

export default Products
