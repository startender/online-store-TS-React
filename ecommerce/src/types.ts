export interface IProduct {
  _id: string
  name: string
  imagePath: string
  price: number
}
export interface ICartItem extends IProduct {
  count: number

}
