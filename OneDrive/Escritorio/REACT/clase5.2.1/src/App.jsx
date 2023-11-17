import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, reset } from './store/slices/counter.slice'

function App() {

  const counter = useSelector(store => store.counter)

  const dispatch = useDispatch()
  
  const stepValue = 10

  const handleMinus = () => {
    dispatch(decrement(stepValue))
  }

  const handleReset = () => {
    dispatch(reset())
  }

  const handlePlus = () => {
    dispatch(increment(stepValue))
  }
  

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleMinus}>-{stepValue}</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handlePlus}>+{stepValue}</button>
    </div>
  )
}

export default App
