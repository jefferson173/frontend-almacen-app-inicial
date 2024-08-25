import { useState } from 'react';
import productService from '../services/productService';

const ProductPicker = () => {
    const [orderId, setOrderId] = useState('');
    const [basketIdTo, setBasketIdTo] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [estado, setEstado] = useState('');
    const [id, setId] = useState('');
    const [pickedProducts, setPickedProducts] = useState([]);

    const handlePickProduct = async () => {
        try {
            const response = await productService.pickProduct(orderId, basketIdTo, pickedProducts, cantidad, estado, id);
            alert(`Products picked successfully: ${response.data.message}`);
        } catch (error) {
            console.error('Failed to pick products', error);
        }
    };

    return (
        <div>
            <h2>Pick Products</h2>
            <input 
                type="text" 
                placeholder="Order ID" 
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Basket ID To" 
                value={basketIdTo}
                onChange={(e) => setBasketIdTo(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Basket ID To" 
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Basket ID To" 
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Basket ID To" 
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <textarea
                placeholder="Picked Products (JSON format)"
                value={JSON.stringify(pickedProducts)}
                onChange={(e) => setPickedProducts(JSON.parse(e.target.value))}
            />
            <button onClick={handlePickProduct}>Pick Products</button>
        </div>
    );
};

export default ProductPicker;