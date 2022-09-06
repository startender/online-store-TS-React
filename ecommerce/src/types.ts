import { Dispatch, SetStateAction } from "react"

export interface IProduct {
  _id: string
  name: string
  imagePath: string
  price: number
}
export interface ICartItem extends IProduct {
  count: number

}

export type TypeSetState<T> = Dispatch<SetStateAction<T>>
