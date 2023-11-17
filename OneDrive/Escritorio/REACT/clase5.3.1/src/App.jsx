import { useSelector } from 'react-redux'
import './App.css'
import FormProducts from './components/FormProducts'
import Product from './components/Product'

function App() {

  const products = useSelector(store => store.products)

  console.log(products)

  return (
    <div>
      <h1>Practica react redux</h1>
      <FormProducts />
      <ul>
        {
          products.map((prod, index) => (
            <Product 
              key={index}
              prod={prod}
              index={index}
            />
          ))
        }
      </ul>
    </div>
  )
}

export default App
