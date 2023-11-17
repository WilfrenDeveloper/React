import { useDispatch } from "react-redux"
import { deleteProduct } from "../store/slices/products.slice"

const Product = ({ prod, index }) => {
  
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteProduct(index))
  }
  
  return (
    <li><button onClick={handleDelete}>❌</button> {prod}</li>
  )
}

export default Product