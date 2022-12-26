import React, {useEffect, useState, useRef, useContext} from "react";
import axios from "axios";
import GlobalContext from "../store/Global.Context";


const OrderScreen = () => {
    const [bases,setBases] = useState([])
    const [extras, setExtras] = useState([])

    const {state, dispatch} = useContext(GlobalContext)

    const [userExtras, setUserExtras] = useState([])
    const [size, setSize] = useState([])
    const baseRef = useRef()
    const notesRef = useRef()

    console.log(state.cart)

    useEffect(() => {
        getData()
    }, [])

    const handleSizeChange = (e) => {
        setSize(e.target.value)

    }
    const addToCart = (e)=> {
        e.preventDefault()
        let cost = 0
        if(size  === "Small") {
            let newTotal = 3.50
            newTotal += (userExtras.length * .1)
            cost = newTotal
        }
        if(size  === "Medium") {
            let newTotal = 4.00
            newTotal += (userExtras.length * .1)
            cost = newTotal
        }
        if(size  === "Large") {
            let newTotal = 4.20
            newTotal += (userExtras.length * .1)
            cost = newTotal
        }
        if(size  === "X-Large") {
            let newTotal = 4.35
            newTotal += (userExtras.length * .1)
            cost = newTotal
        }
        const drink = {
            name: "Custom Order",
            size: size,
            base: baseRef.current.value,
            extras: userExtras,
            notes: notesRef.current.value,
            cost: cost
        }
        // console.log(drink)
        dispatch({type:"ADDTOCART", payload: drink})
 }

    const handleExtras = (e) => {
        if(userExtras.includes(e.target.value)){
            let newState = userExtras.filter((x) => x!==e.target.value)
            setUserExtras(newState)
        } else {
            setUserExtras([...userExtras, e.target.value])
        }
    }

    const getData = () => {
        axios
        .get('/api/getOptions')
        .then((res) => {
            setBases(res.data.bases)
            setExtras(res.data.extras)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    const baseOptions = bases.map((drink) => {
        return <option value={drink.name}>{drink.name}</option>
    })

    const extraOptions = extras.map((x) => {
        return(
            <div className="extra">
                <label htmlFor={`extras-`+ x.id}>{x.name}</label>
                <input type="checkbox" name="extras" id={`extras-`+ x.id} value={x.name} onChange={handleExtras}/>
            </div>
        )
    })
    
    return (
        <div className = "main-page">
            <h1>Order Up!</h1>
            <form onSubmit={addToCart}>
                <h3>Select Size</h3>
                <div className="size-container">
                    <label htmlFor="small">Small</label>
                    <input type="radio" id ="small" name="size"value="small" onChange={handleSizeChange}/>
                    <label htmlFor="medium">Medium</label>
                    <input type="radio"id = "medium" name="size" value="medium" onChange={handleSizeChange}/>
                    <label htmlFor="large">Large</label>
                    <input type="radio" id = "large" name="size" value="large" onChange={handleSizeChange}/>
                    <label htmlFor="x-large">X-Large</label>
                    <input type="radio" id = "x-large" name="size"value="x-large" onChange={handleSizeChange}/>
                </div>
                <select name ="" id="" ref={baseRef}>
                    <option value =""> Select a Base</option>
                    {baseOptions}
                </select>
                <h3>Extras</h3>
                <div className="extras-container">
                    {extraOptions}
                </div>
                <textarea rows={6} placeholder="notes about your order" ref={notesRef}/>
                <div className="order-form-button-container">
                    <button>Add to Cart</button>
                </div>
            </form>
        </div>
    )
}
export default OrderScreen