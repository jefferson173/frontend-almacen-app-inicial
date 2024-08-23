import { useState } from 'react';
import productService from '../services/productService';

const StockCheck = () => {
    const [stock, setStock] = useState(null);
    const [productId, setProductId] = useState('');

    const handleCheckStock = async () => {
        try {
            const response = await productService.getProductStock(productId);
            setStock(response.data);
        } catch (error) {
            console.error('Failed to check stock', error);
        }
    };

    return (
        <div>
            <h2>Check Stock</h2>
            <input 
                type="text" 
                placeholder="Product ID" 
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
            />
            <button onClick={handleCheckStock}>Check Stock</button>
            {stock && (
                <div>
                    <h3>Stock Information</h3>
                    <p>Product ID: {stock.productId}</p>
                    <p>Available Stock: {stock.available}</p>
                </div>
            )}
        </div>
    );
};

export default StockCheck;