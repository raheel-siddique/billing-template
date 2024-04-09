import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home.jsx';
import Layout from './Layout.jsx';
import Invoice from './pages/invoices-managment/invoice/Invoice.jsx';
import AddInvoice from './pages/invoices-managment/add-invoice/AddInvoice.jsx';
import InvoiceDetails from './pages/invoices-managment/invoice-details/InvoiceDetails.jsx';
import Payments from './pages/invoices-managment/payments/Payments.jsx';
import Taxes from './pages/invoices-managment/taxes/Taxes.jsx';
import Products from './pages/all-products/products/Products.jsx';
import AddProduct from './pages/all-products/add-product/AddProduct.jsx';


function App() {
  return (
    <Router>
      <div id="layout-wrapper">
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invoice">
            <Route index  element={<Invoice />} />
             <Route path="add" element={<AddInvoice />} />
             <Route path="details" element={<InvoiceDetails />} />
             <Route path="payments" element={<Payments />} />
             <Route path="taxes" element={<Taxes />} />



        
          </Route>

          <Route path="/products">
            <Route index  element={<Products />} />
            <Route path="add" element={<AddProduct />} />

            



        
          </Route>


          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
