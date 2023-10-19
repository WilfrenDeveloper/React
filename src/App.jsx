
import { useState } from 'react'
import Counter from './components/Counter'
import "./style.css"


function App() {
  
  const [isShow, setIsShow] = useState(false)

  const handleShow = () => {
    setIsShow(!isShow)
  }

  return (
   <div>
    <h1>Estados</h1>
    <Counter />
    <Counter
      initialValue={1000}
      upgrade={50}
      maxValue={1200}
    />
    <Counter
      initialValue={10}
      upgrade={5}
      minValue={-20}
      maxValue={60}
    />

    <hr />
    <button onClick={handleShow}>Show / Hide</button>
    <br />
    {
      isShow 
      ? <img src="https://static.wixstatic.com/media/fe4a4f_b69dcfe1351c415f8891f2450817680b~mv2.jpg/v1/fit/w_1000%2Ch_620%2Cal_c%2Cq_80,enc_auto/file.jpg" alt="axolote" />
      : <h3>Hay una imagen oculta</h3>
    }
    
   </div>

  )
}

export default App
