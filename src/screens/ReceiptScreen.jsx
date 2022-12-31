import React, {useState, useContext, useEffect} from 'react';
import ReceiptItem from '../components/ReceiptItem';
import useCurrency from '../hooks/useCurrency';
import GlobalContext from '../store/Global.Context';


const ReceiptScreen = () => {
    const {state, dispatch} = useContext(GlobalContext)
    const [order, setOrder]= useState(state.cart)
   

    let subTotal = order.reduce((acc, drink) => {
        return acc + drink.cost
    }, 0)

    let total = subTotal + (subTotal * 0.07)

    subTotal = useCurrency(subTotal)
    total = useCurrency(total)

    let receiptItemDisplay = order.map((drink)=> {
       return <ReceiptItem drink={drink}/>

    })

    useEffect(() => {
        dispatch({type: 'RESETCART'})
    }, [])

    return (
        <div>
            <h1>Thank you!</h1>
            {receiptItemDisplay}
            <p>Subtotal: {subTotal}</p>
            <h3>Total:{total}</h3>
        </div>
    )
}

export default ReceiptScreen;