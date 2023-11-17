import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    // Aquí van las actions
    /**
     * Primer parámetro de una action: Es el valor actual del estado
     * Segundo parámetro de una action: Especificamente la propiedad payload, captura la información enviada por argumento o parámetro
     */
    increment: (currentValue, action) => currentValue + action.payload,
    decrement: (currentValue, action) => currentValue - action.payload,
    reset: () => 0,
    setCounter: (currentValue, action) => action.payload
  }
})

export const { increment, decrement, reset } = counterSlice.actions

export default counterSlice.reducer // representante que va a la store