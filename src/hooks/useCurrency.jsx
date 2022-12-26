import {useState, useEffect} from 'react';

const useCurrency = (num) => {
    const [price, setPrice] = useState(num)
    const formatter = new Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD'
    })
    useEffect(() => {
        let newPrice = formatter.
    })

return price

};

export default useCurrency;