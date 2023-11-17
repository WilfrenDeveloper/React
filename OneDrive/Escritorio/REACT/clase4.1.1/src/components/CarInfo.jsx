
const CarInfo = ({ car, deleteCar, setInfoUpdate }) => {

  const handleDelete = () => {
    deleteCar('/cars', car.id)
  }

  const handleEdit = () => {
    setInfoUpdate(car)
  }

  return (
    <article>
      <h2>#{car.id} {car.brand} {car.model}</h2>
      <ul>
        <li>
          <span>Color: </span><span>{car.color}</span>
        </li>
        <li>
          <span>Price: </span><span>{car.price}</span>
        </li>
        <li>
          <span>Year: </span><span>{car.year}</span>
        </li>
      </ul>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </article>
  )
}

export default CarInfo