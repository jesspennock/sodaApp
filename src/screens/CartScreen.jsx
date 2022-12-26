import React, {useContext} from "react";
import GlobalContext from "../store/Global.Context";
import CartCard from "../components/CartCard";

const CartScreen = () => {
    const {state,dispatch} =useContext(GlobalContext)
    const cartDisplay = state.cart.map((drink)=> {
        return<CartCard drink={drink}/>
    })

    const cartTotal = state.cart.reduce((acc, drink) => {
        return acc + drink.cost
    }, 0)

    const total = useCurrency(cartTotal)


    }
    return (


        <div className = "main-page">
            <h1>My Cart</h1>
            <h2>{cartTotal}</h2>
            <div className = "cart-container">
                {cartDisplay}
            </div>
            <div className="order-form-button-container">
                <button>Checkout</button>
            </div>
        </div>
    )

export default CartScreen