import React from "react";

const ReceiptItem = ({drink}) => {
    let extras = rink.extras.map((x) => <li>{x}</li>)
    let price = useCurrency(drink.cost)
    return (
        <div className = 'receipt-item'>
           <div>
            <p>{drink.size} {drink.base}</p>
            </div>
            <h3>price</h3>
            <ul>
                <li>thing</li>
                <li>thing</li>
                <li>thing</li>
                <li>thing</li>
                <li>thing</li>
                <li>thing</li>
            </ul>

        </div>
    )
}

export default ReceiptItem;