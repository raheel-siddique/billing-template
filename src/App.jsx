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
import PaymentSummary from './pages/all-reports/reports/PaymentSummary.jsx';
import ExpensesReports from './pages/all-reports/reports/ExpensesReports.jsx';
import SaleReports from './pages/all-reports/reports/SaleReports.jsx';
import UsersList from './pages/users/UsersList.jsx';
import AddUser from './pages/users/AddUser.jsx';
import AllTransactions from './pages/transactions/AllTransactions.jsx';
import AddTransactions from './pages/transactions/AddTransactions.jsx';
import Login from './pages/auth/login/Login'
import SignUp from './pages/auth/sign-up/SignUp'

import ResetPassword from './pages/auth/reset-password/ResetPassword'





function App() {
  
  return (
    <Router>
      <div id="layout-wrapper">
    <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invoice">
            <Route index element={<Invoice />} />
            <Route path="add" element={<AddInvoice />} />
            <Route path="details" element={<InvoiceDetails />} />
            <Route path="payments" element={<Payments />} />
            <Route path="taxes" element={<Taxes />} />




          </Route>

          <Route path="/products">
            <Route index element={<Products />} />
            <Route path="add" element={<AddProduct />} />






          </Route>


          <Route path="/reports">
            <Route index element={<PaymentSummary />} />
            <Route path="expenses-reports" element={<ExpensesReports />} />
            <Route path="sales-reports" element={<SaleReports />} />








          </Route>


          <Route path="/users">
            <Route index element={<UsersList />} />
            <Route path="add-user" element={<AddUser />} />








          </Route>

          <Route path="/transactions">
            <Route index element={<AllTransactions />} />
            <Route path="new-transaction" element={<AddTransactions />} />








          </Route>
          <Route path="/auth">
          <Route path="sign-in" element={<Login />} />

            <Route path="sign-up" element={<SignUp />} />
            <Route path="reset-password" element={<ResetPassword />} />









          </Route>



        </Routes>
      </div>
    </Router>
  );
}

export default App;
