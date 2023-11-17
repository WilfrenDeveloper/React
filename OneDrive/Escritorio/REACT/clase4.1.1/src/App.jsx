import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormCar from './components/FormCar'
import CarInfo from './components/CarInfo'

function App() {

  const [infoUpdate, setInfoUpdate] = useState()

  const url = 'http://cars-crud.academlo.tech'

  const [ cars, getCars, createCar, deleteCar, updateCar ] = useCrud(url)

  useEffect(() => {
    getCars('/cars')
  }, [])

  return (
    <div>
      <h1>Pepito</h1>
      <FormCar
        createCar={createCar}
        infoUpdate={infoUpdate}
        updateCar={updateCar}
      />
      <div className='container'>
        {
          cars?.map(car => (
            <CarInfo 
              key={car.id}
              car={car}
              deleteCar={deleteCar}
              setInfoUpdate={setInfoUpdate}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
