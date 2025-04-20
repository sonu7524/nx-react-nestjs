import { Route, Routes, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from '../components/Navbar';
import ProductPage from './pages/ProductPage';
import Footer from '../components/Footer';
import CartPage from './pages/CartPage';
import OrderDetailPage from './pages/OrderDetailPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import CheckoutPage from './pages/CheckoutPage';

export function App() {
  return (
    <div>
      <div className='navbar-container navbar-container-top border-b shadow-sm sticky top-0 z-50 bg-gray-100'>
        <Navbar />
      </div>
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/products/:productId"
          element={
            <ProductPage />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage />
          }
        />
        <Route
          path="/orders/:orderId"
          element={
            <OrderDetailPage />
          }
        />
        <Route
          path="/orders/all"
          element={
            <OrderHistoryPage />
          }
        />
        <Route
          path="/orders/:orderId/checkout"
          element={
            <CheckoutPage />
          }
        />
        <Route
          path="*"
          element={
            <div className="flex flex-col items-center justify-center h-screen">
              <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
              <Link to="/" className="mt-4 text-blue-500 hover:underline">
                Go back to Home
              </Link>
            </div>
          }
        />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
