import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/Checkout/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage';

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} /> { /* path is the last part of the URL. HomePage has empty URL so set it to / .  element = which component to display*/}

      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage />} />
    </Routes>
  )
}

export default App
//5:19
// Route requires 2 props: path and element

