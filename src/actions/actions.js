import {FETCH_PRODUCTS} from './actionTypes'
import React, {useState} from 'react'

 const fetchProducts = () => dispatch => {
              
 
  
        return dispatch({ type:FETCH_PRODUCTS, payload: 1})
}

export default fetchProducts