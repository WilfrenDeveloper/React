import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const countriesSlice = createSlice({
    name: 'countries',
    initialState: null,
    reducers:{
        setCountries: (currentValue, action) => action.payload
    }

})

export const {setCountries} = countriesSlice.actions

export default countriesSlice.reducer

export const getCountriesThunk = (url) => (dispatch) => {
    
    axios.get(url)
    .then(res => dispatch(setCountries(res.data)))
    .catch(error => console.log(error))
}