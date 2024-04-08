import { useState } from "react"
import SideMenuList from "../SideMenuList";
import './Sidebar.css'
import { menuItemsAuth, menuItemsInvoices,menuItemsProducts,menuItemsReports,menuItemsTransactions,menuItemsUsers } from "../../../constants/menuItems";
import { Link } from "react-router-dom";



function Sidebar() {
  const [showScrollbar, setShowScrollbar] = useState(false);
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
               
               

            <div id="scrollbar"
             className={`scrollbar-container ${showScrollbar ? 'show-scrollbar' : ''}`}
             onMouseEnter={() => setShowScrollbar(true)}
             onMouseLeave={() => setShowScrollbar(false)}
            >
                <div className="container-fluid">

                    <div id="two-column-menu">
                    </div>
                    <ul className="navbar-nav" id="navbar-nav">
                        <li className="menu-title"><span data-key="t-menu">Menu</span></li>
                        <li className="nav-item">  
                            <Link className="nav-link menu-link" to="/">
                                <i className="las la-house-damage"></i> <span data-key="t-dashboard">Dashboard</span>
                            </Link>
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