import React from "react";
import useCurrency from "../hooks/useCurrency";

const ReceiptItem = ({drink}) => {
    let extras = drink.extras.map((x) => <li>{x}</li>)
    let price = useCurrency(drink.cost)
    return (
        <div className = 'receipt-item'>
           <div>
             <p>{drink.size} {drink.base}</p>
             </div>
            <div>
                <ul>
                 {extras} 
                 </ul>
            <h3>{price}</h3>
            </div>

        </div>
    )
}

export default ReceiptItem;