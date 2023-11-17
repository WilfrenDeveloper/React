import { useEffect } from "react";
import { useForm } from "react-hook-form";

const FormCar = ({ createCar, infoUpdate, updateCar }) => {

  const { handleSubmit, register, reset } = useForm()

  useEffect(() => {
    reset(infoUpdate)
  }, [infoUpdate])

  const submit = data => {
    if(infoUpdate){
      //Update
      updateCar(`/cars`, infoUpdate.id, data)
    } else {
      //Create
      createCar('/cars', data)
    }
    reset({
      brand: '',
      model: '',
      color: '',
      year: '',
      price: ''
    })
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="brand">Brand</label>
        <input {...register('brand')} type="text" id="brand" />
      </div>
      <div>
        <label htmlFor="model">Model</label>
        <input {...register('model')} type="text" id="model" />
      </div>
      <div>
        <label htmlFor="color">Color</label>
        <input {...register('color')} type="text" id="color" />
      </div>
      <div>
        <label htmlFor="year">Year</label>
        <input {...register('year')} type="number" id="year" />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input {...register('price')} type="text" id="price" />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default FormCar;
