import { useRef } from "react"
import { addProduct } from "../store/slices/products.slice"
import { useDispatch } from "react-redux"

const FormProducts = () => {

  const inputProduct = useRef()
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    const inputValue = inputProduct.current.value.trim()
    if(inputValue.length > 2) {
      dispatch(addProduct(inputValue))
    }
    inputProduct.current.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputProduct} type="text" />
      <button>Agregar</button>
    </form>
  )
}

export default FormProducts