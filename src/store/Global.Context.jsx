import { createContext, useReducer } from "react";

const GlobalContext = createContext()

const initialState = {
    cart: [],
    total: 0
}

const GlobalContextProvider = (props) => {

    const reducer = (state, action) => {
        switch(action.type) {
            case "ADDTOCART":
                return{...state, cart: [...state.cart, action.payload]}
            case "RESETCART":
                return{...state, cart: []}
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

return (
    <GlobalContext.Provider value={{state,dispatch}}>
        {props.children}
    </GlobalContext.Provider>
)
}

export default GlobalContext
export {GlobalContextProvider}