import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import StockCheck from './components/StockCheck';
import ProductPicker from './components/ProductPicker';
import Basket from './components/Basket';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/stock-check" element={<StockCheck />} />
                <Route path="/product-picker" element={<ProductPicker />} />
                <Route path="/basket" element={<Basket />} />
                {/* Reemplaza Redirect con Navigate */}
                <Route path="*" element={<Navigate to="/stock-check" />} />
            </Routes>
        </Router>
    );
}
export default App;