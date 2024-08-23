import axios from 'axios';

const API_URL = 'http://localhost:5000';

const getProductStock = async (productId) => {
    return await axios.get(`${API_URL}/stock/${productId}`);
};

const pickProduct = async (orderId, basketIdTo, pickedProducts) => {
    return await axios.post(`${API_URL}/picking`, {
        orderId,
        basketIdTo,
        pickedProducts
    });
};

const createBasket = async (quantity) => {
    return await axios.post(`${API_URL}/canasta`, { quantity });
};

export default {
    getProductStock,
    pickProduct,
    createBasket,
};