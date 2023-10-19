import { useState } from "react"

const Counter = ({
    initialValue = 0,
    upgrade = 1,
    minValue = -Infinity,
    maxValue = Infinity
}) => {

  const [counter, setCounter] = useState(initialValue)

  const handleClick = () => {
    if (counter < maxValue){
        setCounter(counter + upgrade)
    }
  }

  const handleClickReset = () => {
    setCounter(initialValue)
  }

  const handleClick2 = () => {
    if (counter > minValue){
        setCounter(counter - upgrade)
    }
  }

  return(
    <div>
        <h2>{counter}</h2>
        <button onClick={handleClick2}>-{upgrade}</button>
        <button onClick={handleClickReset}>Reset</button>
        <button onClick={handleClick}>+{upgrade}</button>
        
    </div>
  )
}

export default Counter