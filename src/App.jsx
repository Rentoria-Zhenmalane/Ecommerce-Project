import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/Checkout/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} /> { /* path is the last part of the URL. HomePage has empty URL so set it to / .  element = which component to display*/}

      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
  )
}

export default App
//5:19
// Route requires 2 props: path and element

