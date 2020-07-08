import React from 'react'
import {connect} from 'react-redux'
import fetchProducts from '../actions/actions'

function Products (props){

    var prod = props.onProduct

    return (
       
            <div className = "col-md-4">
                <div className="thumbnail text-center">
                    <a href={`#${prod.id}`} >
                        <img src={prod.url} alr={prod.title}/>
                        <p>
                            {prod.title}
                        </p>
                    </a>
                    <div>
                        <b>Price: ${prod.price}  </b>
                        <button className="btn btn-primary"
                        onClick={(e) => props.onHandleAddToCart(e, prod)}
                        >Add To Cart</button>
                    </div>

                </div>
            </div>

            

        

    )

}

const mapStateToProps = state => ({products: state.products.items})

export default connect(mapStateToProps, fetchProducts)(Products)