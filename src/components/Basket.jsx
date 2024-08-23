import { useState } from 'react';
import productService from '../services/productService';

const Basket = () => {
    const [quantity, setQuantity] = useState('');
    const [basketInfo, setBasketInfo] = useState(null);

    const handleCreateBasket = async () => {
        try {
            const response = await productService.createBasket(quantity);
            setBasketInfo(response.data);
        } catch (error) {
            console.error('Failed to create basket', error);
        }
    };

    return (
        <div>
            <h2>Create Basket</h2>
            <input 
                type="number" 
                placeholder="Quantity" 
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />
            <button onClick={handleCreateBasket}>Create Basket</button>
            {basketInfo && (
                <div>
                    <h3>Basket Information</h3>
                    <p>Basket ID: {basketInfo.basketId}</p>
                    <p>Quantity: {basketInfo.quantity}</p>
                </div>
            )}
        </div>
    );
};

export default Basket;