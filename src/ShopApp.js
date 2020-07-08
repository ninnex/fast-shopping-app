import React, {useState, useEffect} from 'react'
import ShopHeader from './components/ShopHeader.js'
import ProductList from './components/ProductsList.js'
import Basket from './components/Basket.js'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import productReducer from './reducers/productReducer'




function ShopApp () {

    let sdobj = { products: [], filteredProducts : [], cartItems : []}

    

    const [shopdata, setShopdata] = useState(sdobj)
    

    

    useEffect(async () => {
        
        // let res =  await fetch('http://localhost:9000/getProducts')
        // let ladata = await res.json()
        
    
       
        
        
        if(localStorage.getItem("cartitems") !== null ){            
            const cartItems = JSON.parse(localStorage.getItem("cartitems"))
            setShopdata({...shopdata, cartItems})
        }
        else
            setShopdata(sdobj);
            
       
        return () => {
            //setShopdata({...shopdata, cartItems: []})
            //localStorage.setItem("cartitems", JSON.stringify(shopdata.cartItems))
        }
    },[])




    var handleAddToCart = (e, product) => {

        
        //setShopdata(shopdata)
        let alreadyInCart = false
        shopdata.cartItems.forEach(item => {
            if(product.id === item.id){
                
                alreadyInCart = true
                item.count++;
                setShopdata({...shopdata, ...shopdata.cartItems, item})
                console.log(item)
            }
        });

        if(!alreadyInCart){
            const cartItems = shopdata.cartItems
            product.count = 1            
            cartItems.push(product)
            setShopdata({...shopdata, cartItems})
        }

        localStorage.setItem("cartitems", JSON.stringify(shopdata.cartItems))

        
    }

    var handleRemoveFromCart = (e, productId) => {
        console.log(productId)
        
        shopdata.cartItems.forEach (item => {
            if(productId === item.id){                
                item.count = 0
                setShopdata({...shopdata, ...shopdata.cartItems, item})
                console.log(item)
            }

        })

        //console.log(shopdata.cartItems)

        localStorage.setItem("cartitems", JSON.stringify(shopdata.cartItems))

    }

    return <React.StrictMode>
    <ShopHeader />
    <ProductList         
        onHandleAddToCart={handleAddToCart}         
        onProducts={"pl"} />
    <Basket onCartItems={shopdata.cartItems}
        onHandleRemoveFromCart={handleRemoveFromCart}         
        />
     </React.StrictMode>

    
}






export default ShopApp