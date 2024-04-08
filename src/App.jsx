import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home.jsx';
import Layout from './Layout.jsx';
import Invoice from './pages/invoices-managment/invoice/Invoice.jsx';
// import AddInvoice from './pages/invoice/AddInvoice.jsx';
// import InvoiceDetails from './pages/invoice/InvoiceDetails.jsx';
// import Payments from './pages/invoice/Payments.jsx';

function App() {
  return (
    <Router>
      <div id="layout-wrapper">
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invoice">
            <Route index  element={<Invoice />} />
            {/* <Route path="add" element={<AddInvoice />} />
            <Route path="details" element={<InvoiceDetails />} />
            <Route path="payments" element={<Payments />} /> */}
            {/* Add more sub-routes here */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
