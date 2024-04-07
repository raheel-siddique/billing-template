import { useState } from "react"
import SideMenuList from "../SideMenuList";


const menuItemsAuth = [
    {
      label: 'Sign In',
      icon: 'las la-sign-in-alt',
      url: '#',
      key: 't-signin'
    },
    {
      label: 'Sign Up',
      icon: 'las la-user-plus',
      url: '#',
      key: 't-signup'
    },
    {
      label: 'Password Reset',
      icon: 'las la-key',
      url: '#',
      key: 't-password-reset'
    },
    {
      label: 'Lock Screen',
      icon: 'las la-lock',
      url: '#',
      key: 't-lock-screen'
    }
  ];


const menuItemsInvoices = [
    {
      label: 'Invoice',
      icon: 'las la-sign-in-alt',
      url: '#',
      key: 't-invoice'
    },
    {
      label: 'Add Invoice',
      icon: 'las la-user-plus',
      url: '#',
      key: 't-Add Invoice'
    },
    {
      label: 'Invoice Details',
      icon: 'las la-key',
      url: '#',
      key: 't-Invoice Details'
    },
    {
      label: 'Payments',
      icon: 'las la-lock',
      url: '#',
      key: 't-Payments'
    },
    {
        label: 'Taxes',
        icon: 'las la-lock',
        url: '#',
        key: 't-Taxes'
      }
  ];

  const menuItemsProducts = [
   
    {
      label: 'Product List',
      icon: 'las la-user-plus',
      url: '#',
      key: 't-Product List'
    },
    {
      label: 'Add Product',
      icon: 'las la-key',
      url: '#',
      key: 't-Add Product'
    },
    
  ];

  const menuItemsReports = [
   
    {
      label: 'Payment Summary',
      icon: 'las la-user-plus',
      url: '#',
      key: 't-Payment Summary'
    },
    {
      label: 'Sale Report',
      icon: 'las la-key',
      url: '#',
      key: 't-Sale Report'
    },
    {
        label: 'Expenses Report',
        icon: 'las la-key',
        url: '#',
        key: 't-Expenses Report'
      },
  ];

  const menuItemsUsers = [
   
    {
      label: 'Users List',
      icon: 'las la-user-plus',
      url: '#',
      key: 't-Users List'
    },
    {
      label: 'Add User',
      icon: 'las la-key',
      url: '#',
      key: 't-Add User'
    },
  
  ];



  const menuItemsTransactions = [
   
    {
      label: 'Transactions List',
      icon: 'las la-user-plus',
      url: '#',
      key: 't-Transactions List'
    },
    {
      label: 'New Transaction',
      icon: 'las la-key',
      url: '#',
      key: 't-New Transaction'
    },
  
  ];
function Sidebar() {

    const [openAuthSide,setOpenAuthSide]=useState(false);
    const [openInvoicesSide,setOpenInvoicesSide]=useState(false);
    const [openProductsSide,setOpenProductsSide]=useState(false);
    const [openReportssSide,setOpenReportssSide]=useState(false);
    const [openUsersSide,setOpenUsersSide]=useState(false);
    const [openTransactionsSide,setOpenTransactionsSide]=useState(false);







  

    const handleToggleAuthSide = () => {
        setOpenAuthSide(!openAuthSide);
        setOpenInvoicesSide(false)
        setOpenProductsSide(false)
        setOpenReportssSide(false)
        setOpenTransactionsSide(false)
        setOpenUsersSide(false)
    };
    const handleToggleInvoices = () => {
        setOpenInvoicesSide(!openInvoicesSide);
        setOpenAuthSide(false)
        setOpenProductsSide(false)
        setOpenReportssSide(false)
        setOpenTransactionsSide(false)
        setOpenUsersSide(false)

    };
    const handleToggleProducts = () => {
        setOpenProductsSide(!openProductsSide);
        setOpenAuthSide(false);
        setOpenInvoicesSide(false)
        setOpenReportssSide(false)
        setOpenTransactionsSide(false)
        setOpenUsersSide(false)
        

    };
    const handleToggleReports = () => {
        setOpenReportssSide(!openReportssSide);
        setOpenProductsSide(false);
        setOpenAuthSide(false);
        setOpenInvoicesSide(false)
        setOpenTransactionsSide(false)
        setOpenUsersSide(false)

    };
    const handleToggleUsers = () => {
        setOpenUsersSide(!openUsersSide);
        setOpenReportssSide(false);
        setOpenProductsSide(false);
        setOpenAuthSide(false);
        setOpenInvoicesSide(false)
        setOpenTransactionsSide(false)

    };

    const handleToggleTransactions = () => {
        setOpenTransactionsSide(!openTransactionsSide);
        setOpenUsersSide(false);
        setOpenReportssSide(false);
        setOpenProductsSide(false);
        setOpenAuthSide(false);
        setOpenInvoicesSide(false)

    };
    
  return (
    <div>
        <div className="app-menu navbar-menu">
                <a href="index.html" className="logo logo-dark">
                    <span className="logo-sm">
                        <img src="assets/images/logo-sm.png" alt="" height="22" />
                    </span>
                    <span className="logo-lg">
                        <img src="assets/images/logo-dark.png" alt="" height="21" />
                    </span>
                </a>
               
               

            <div id="scrollbar">
                <div className="container-fluid">

                    <div id="two-column-menu">
                    </div>
                    <ul className="navbar-nav" id="navbar-nav">
                        <li className="menu-title"><span data-key="t-menu">Menu</span></li>
                        <li className="nav-item">  
                            <a className="nav-link menu-link" href="index.html">
                                <i className="las la-house-damage"></i> <span data-key="t-dashboard">Dashboard</span>
                            </a>
                        </li>

                        <li className="menu-title"><i className="ri-more-fill"></i> <span data-key="t-pages">Pages</span></li>

                      

                        <SideMenuList handleToggleAuthSide={handleToggleInvoices} openAuthSide={openInvoicesSide} titleClass="las la-file-invoice" menuTitle="Invoices Management" menuItemsAuth={menuItemsInvoices} />
                        <SideMenuList handleToggleAuthSide={handleToggleProducts} openAuthSide={openProductsSide} titleClass="las la-sign-in-alt" menuTitle="Products" menuItemsAuth={menuItemsProducts} />
                        <SideMenuList handleToggleAuthSide={handleToggleReports} openAuthSide={openReportssSide} titleClass="las la-key" menuTitle="Reports" menuItemsAuth={menuItemsReports} />
                        <SideMenuList handleToggleAuthSide={handleToggleUsers} openAuthSide={openUsersSide} titleClass="las la-users" menuTitle="Users" menuItemsAuth={menuItemsUsers} />
                        <SideMenuList handleToggleAuthSide={handleToggleTransactions} openAuthSide={openTransactionsSide} titleClass="las la-users" menuTitle="Transactions" menuItemsAuth={menuItemsTransactions} />





                        <SideMenuList handleToggleAuthSide={handleToggleAuthSide} openAuthSide={openAuthSide} titleClass="las la-cog" menuTitle="Authentication" menuItemsAuth={menuItemsAuth} />

                     

                        <div className="help-box text-center">
                            <img src="assets/images/create-invoice.png" className="img-fluid" alt="" />
                            <p className="mb-3 mt-2 text-muted">Upgrade To Pro For More Features</p>
                            <div className="mt-3">
                                <a href="invoice-add.html" className="btn btn-primary"> Create Invoice</a>
                            </div>
                        </div>

                    </ul>
                </div>
            </div>

            <div className="sidebar-background"></div>
        </div>
    </div>
  )
}

export default Sidebar