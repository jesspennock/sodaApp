import React, {useState, useContext, useEffect} from 'react';
import ReceiptItem from '../components/ReceiptItem';
import useCurrency from '../hooks/useCurrency';
import GlobalContext from '../store/Global.Context';


const ReceiptScreen = () => {

    const {state, dispatch} = useContext(GlobalContext)

    const subTotal = state.cart.reduce((acc, drink) => {
        return acc + drink.cost
    }, 0)

    let total = subTotal + (subTotal * .07)
    subTotal = useCurrency(subTotal)
    total = useCurrency(total)
    return (
        <div>
            <h1>Thank you!</h1>

        </div>
    )
}

export default ReceiptScreen;