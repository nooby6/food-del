import { createContext, useState } from 'react';
import { food_list } from '../assets/assets';

export const storeContext = createContext(null);

const StoreContextProvider = (props) => {

    const {cartItems, setCartItems} = useState({});

        const addToCart = (itemId) =>  {

    }

    const contextValue = {
        food_list
    }
    return (
        <storeContext.Provider value={contextValue}>
            {props.children}
        </storeContext.Provider>
    )    

}

export default StoreContextProvider;