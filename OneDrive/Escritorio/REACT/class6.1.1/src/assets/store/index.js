import { configureStore } from "@reduxjs/toolkit";
import countries from './slices/countries.slice.js';

export default configureStore({
    reducer:{
        countries
    }
})