import React from "react";
import useCurrency from "../hooks/useCurrency";

const CartCard = ({drink}) => {
    const price = useCurrency(drink.cost)
    return (
        
        <div className ='cart-item'>
            <img src ="https://previews.123rf.com/images/blueee/blueee0906/blueee090600019/4962545-high-resolution-glass-of-soda-with-ice-an-pink-straw-on-white-background.jpg" />
            <div className="cart-info">
                <h2>{drink.name}</h2>
                <h4>{drink.base}</h4>
                <h4>{drink.size}</h4>
                <ul>
                    {drink.extras.map((extra) => <li>{extra}</li>)}
                </ul>
            </div>
            <h4 className="colored-text">{price}</h4>
        </div>
    )
}

export default CartCard