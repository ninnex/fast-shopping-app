import React, {useEffect, useState} from 'react'
import Products from './Products.js'
//import data from '../data-products.js'


async function getDbDate(){
    let res = await fetch("http://localhost:9000/getProducts")
    return res.json()
    
}

function ProductList (props){

    const [pl, setPl] = useState([])

    useEffect( () => {
        const getDb = async () => {
            const res = await fetch("http://localhost:9000/getProducts")
            const jsonres = await res.json()
            setPl(jsonres)
            
        }

        getDb()

    }, [] )
    
    function isEmpty(obj) {
        console.log(obj)
        for(var key in obj) {
            if(obj.hasOwnProperty(key))            
                return false;        
        }
        
        return true;

        
    }

    const handleLoad = () => {
        
            const getDb = async () => {
                const res = await fetch("http://localhost:9000/getProducts")
                const jsonres = await res.json()
                setPl(jsonres)
                
            }
    
            getDb()
            
        }

    return (
    
    <div class="container">
    <h1>Ecommerce Shopping Cart Application (Test Eduardo Barreto) </h1>       
    <hr/>
    <div class="row">
        <div class="col-md-8">
            
            <div class = "row">
                {isEmpty(pl) ? "==" :  pl.products.map(product => 
                    <Products onProduct={product} onHandleAddToCart={props.onHandleAddToCart} />
                    )}
            </div>

      
           
            </div>
            <div className="col-md-4"></div>
        </div>
        </div>
       
        )
}

export default ProductList

