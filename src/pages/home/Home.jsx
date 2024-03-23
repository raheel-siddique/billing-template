
function Home() {

   

  return (
    <div>
          <div className="main-content">

<div className="page-content">
    <div className="container-fluid">

        <div className="row">
            <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0" >Dashboard</h4>

                    <div className="page-title-right">
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item"><a href="">Dashboard</a></li>
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-xl-5">
                <div className="card">
                    <div className="card-body">
                        <div className="row align-items-center gy-4">
                            <div className="col-sm-8">
                                <div className="box">
                                    <h5 className="fs-20 text-truncate">Professional Invoices Made Easy.</h5>
                                    <p className="text-muted fs-15">Quickly understand who your best customers little and motivation to pay thair bills.</p>
                                    <a href="#" className="btn btn-primary"> Warch Tutorial</a>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="text-center px-2">
                                    <img src="./invoice-widget.png" className="img-fluid" style={{height: "141px"}} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-7">
                <div className="card dash-mini">
                    <div className="card-header border-0 align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">This Weeks Overview</h4>
                        <div className="flex-shrink-0">
                            <div className="dropdown card-header-dropdown">
                                <a className="text-reset" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="fw-semibold text-uppercase fs-14">Sort by: </span><span className="text-muted">Current Week<i className="las la-angle-down fs-12 ms-2"></i></span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="#">Today</a>
                                    <a className="dropdown-item" href="#">Last Week</a>
                                    <a className="dropdown-item" href="#">Last Month</a>
                                    <a className="dropdown-item" href="#">Current Year</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-body pt-1">
                        <div className="row">
                            <div className="col-lg-4 mini-widget pb-3 pb-lg-0">
                                <div className="d-flex align-items-end">
                                    <div className="flex-grow-1">
                                        <h2 className="mb-0 fs-24"><span className="counter-value" data-target="197">54</span></h2>
                                        <h5 className="text-muted fs-16 mt-2 mb-0">Clients Added</h5>
                                        <p className="text-muted mt-3 pt-1 mb-0 text-truncate"> <span className="badge bg-info me-1">1.15%</span>  since last week</p>
                                    </div>
                                    <div className="flex-shrink-0 text-end dash-widget">
                                        <div id="mini-chart1" data-colors='["--in-primary", "--in-light"]' className="apex-charts"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 mini-widget py-3 py-lg-0">
                                <div className="d-flex align-items-end">
                                    <div className="flex-grow-1">
                                        <h2 className="mb-0 fs-24"><span className="counter-value" data-target="634">124</span></h2>
                                        <h5 className="text-muted fs-16 mt-2 mb-0">Contracts Signed</h5>
                                        <p className="text-muted mt-3 pt-1 mb-0 text-truncate"> <span className="badge bg-danger me-1">1.15%</span>  since last week</p>
                                    </div>
                                    <div className="flex-shrink-0 text-end dash-widget">
                                        <div id="mini-chart2" data-colors='["--in-primary", "--in-light"]' className="apex-charts"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 mini-widget pt-3 pt-lg-0">
                                <div className="d-flex align-items-end">
                                    <div className="flex-grow-1">
                                        <h2 className="mb-0 fs-24"><span className="counter-value" data-target="512">214</span></h2>
                                        <h5 className="text-muted fs-16 mt-2 mb-0">Invoice Sent</h5>
                                        <p className="text-muted mt-3 pt-1 mb-0 text-truncate"> <span className="badge bg-info me-1">3.14%</span>  since last week</p>
                                    </div>
                                    <div className="flex-shrink-0 text-end dash-widget">
                                        <div id="mini-chart3" data-colors='["--in-primary", "--in-light"]' className="apex-charts"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-xl-8">
                <div className="card">
                    <div className="card-header border-0 align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Payment Activity</h4>
                        <div>
                            <button type="button" className="btn btn-soft-info btn-sm">
                                ALL
                            </button>
                            <button type="button" className="btn btn-soft-info btn-sm">
                                1M
                            </button>
                            <button type="button" className="btn btn-soft-info btn-sm">
                                6M
                            </button>
                            <button type="button" className="btn btn-info btn-sm">
                                1Y
                            </button>
                        </div>
                    </div>
                    <div className="card-body py-1">
                        <div className="row gy-2">
                            <div className="col-md-4">
                                <h4 className="fs-22 mb-0">$23,590.00</h4>
                            </div>
                            <div className="col-md-8">
                                <div className="d-flex main-chart justify-content-end">
                                    <div className="px-4 border-end">
                                        <h4 className="text-primary fs-22 mb-0">$584k <span className="text-muted d-inline-block fs-17 align-middle ms-0 ms-sm-2">Incomes</span></h4>
                                    </div>
                                    <div className="ps-4">
                                        <h4 className="text-primary fs-22 mb-0">$324k <span className="text-muted d-inline-block fs-17 align-middle ms-0 ms-sm-2">Expenses</span></h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="stacked-column-chart" className="apex-charts" data-colors='["--in-primary", "--in-light"]' dir="ltr"></div>
                    </div>
                </div>
            </div>

            <div className="col-xl-4">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-start">
                            <div className="flex-grow-1 overflow-hidden">
                                <h5 className="card-title mb-2 text-truncate">Structure</h5>
                            </div>
                            <div className="flex-shrink-0 ms-2">
                                <div className="dropdown">
                                    <a className="text-reset" href="#" data-bs-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <span className="fw-semibold text-uppercase fs-14">Sort By:</span> <span
                                            className="text-muted">Weekly<i className="las la-angle-down fs-12 ms-2"></i></span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a className="dropdown-item" href="#">Yearly</a>
                                        <a className="dropdown-item" href="#">Monthly</a>
                                        <a className="dropdown-item" href="#">Weekly</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="structure-widget" data-colors='["--in-primary", "--in-primary-rgb, 0.7", "--in-light"]' className="apex-charts" dir="ltr"></div> 


                        <div className="px-2">
                            <div className="structure-list d-flex justify-content-between border-bottom">
                                <p className="mb-0"><i className="las la-dot-circle fs-18 text-primary me-2"></i>Invoiced</p>
                                <div>
                                    <span className="pe-2 pe-sm-5">$56,236</span>
                                    <span className="badge bg-primary"> + 0.2% </span>
                                </div>
                            </div>
                            <div className="structure-list d-flex justify-content-between border-bottom">
                                <p className="mb-0"><i className="las la-dot-circle fs-18 text-primary me-2"></i>Collected</p>
                                <div>
                                    <span className="pe-2 pe-sm-5">$12,596</span>
                                    <span className="badge bg-primary"> - 0.7% </span>
                                </div>
                            </div>
                            <div className="structure-list d-flex justify-content-between pb-0">
                                <p className="mb-0"><i className="las la-dot-circle fs-18 text-primary me-2"></i>Outstanding</p>
                                <div>
                                    <span className="pe-2 pe-sm-5">$1,568</span>
                                    <span className="badge bg-primary"> + 0.4% </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-xl-5">
                <div className="card">
                    <div className="card-header border-0 align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Quick Invoice</h4>
                        <div>
                            <button type="button" className="btn btn-soft-secondary btn-sm">
                            <i className="las la-plus fs-18 align-middle"></i>
                            </button>
                         
                        </div>
                    </div>

                    <div className="card-body pt-0">
                        <form>
                           <div className="row">
                                <div className="col-xl-6">
                                    <div className="mb-3">
                                        <label>Customer Name</label>
                                        <input type="text" placeholder="Enter name" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-xl-6">
                                    <div className="mb-3">
                                        <label>Customer Email</label>
                                        <input type="text" placeholder="Enter email" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-xl-12">
                                    <div className="mb-3">
                                        <label htmlFor="companyAddress">Customer Address</label>
                                        <textarea className="form-control" id="companyAddress" rows="2" placeholder="Company Address" required=""></textarea>
                                    </div>
                                </div>
                           </div>

                            <table className="table table-sm table-borderless table-nowrap align-middle mb-0">
                                <tbody>
                                    <tr>
                                        <td>Sub Total</td>
                                        <td className="text-end">$699.96</td>
                                    </tr>
                                    <tr>
                                        <td>Estimated Tax (12.5%)</td>
                                        <td className="text-end">$44.99</td>
                                    </tr>
                                    <tr>
                                        <td>Discount <small className="text-muted">(Invoika15)</small></td>
                                        <td className="text-end">- $53.99</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping Charge</td>
                                        <td className="text-end">$65.00</td>
                                    </tr>
                                    <tr className="border-top border-top-dashed fs-15">
                                        <th scope="row">Total Amount</th>
                                        <th className="text-end">$755.96</th>
                                    </tr>
                                </tbody>
                            </table>

                           <div className="row mt-2">
                                <div className="col-6">
                                    <a href="#" className="btn btn-light w-100">Add More Details</a>
                                </div>
                                <div className="col-6">
                                    <a href="#" className="btn btn-primary w-100">Send Money</a>
                                </div>
                           </div>

                          
                        </form>
                    </div>
                </div>
            </div>

            <div className="col-xl-4">
                <div className="card">
                    <div className="card-header border-0 align-items-center d-flex pb-2">
                        <h4 className="card-title mb-0 flex-grow-1">Payment Overview</h4>
                        <div>
                            <div className="dropdown">
                                <a className="text-reset" href="#" id="dropdownMenuYear" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="fw-semibold text-uppercase fs-14">Sort By: </span> <span className="text-muted">Monthly<i className="las la-angle-down fs-12 ms-2"></i></span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuYear">
                                    <a className="dropdown-item" href="#">Monthly</a>
                                    <a className="dropdown-item" href="#">Yearly</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body pt-0">
                        <div id="payment-overview" data-colors='["--in-primary", "--in-light"]' className="apex-charts" dir="ltr"></div>  
                        <div className="row mt-3 text-center">
                            <div className="col-6 border-end">
                                <div className="my-1">
                                   <p className="text-muted text-truncate mb-2">Received Amount</p>
                                    <h4 className="mt-2 mb-0 fs-20">$45,070.00</h4>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="my-1">
                                   <p className="text-muted text-truncate mb-2">Due Amount</p>
                                    <h4 className="mt-2 mb-0 fs-20">$32,400.00</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-start mb-1">
                            <div className="flex-grow-1">
                                <h5 className="card-title">Recent Transaction</h5>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="dropdown">
                                    <a className="text-muted" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="las la-ellipsis-h fs-20"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a className="dropdown-item" href="#">Yearly</a>
                                        <a className="dropdown-item" href="#">Monthly</a>
                                        <a className="dropdown-item" href="#">Weekly</a>
                                        <a className="dropdown-item" href="#">Today</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mx-n3 px-3" data-simplebar style={{maxHeight: "418px"}}>
                                <p className="text-muted mb-0">Recent</p>
                                <div className="border-bottom sales-history">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar-sm flex-shrink-0">
                                            <span className="avatar-title bg-primary rounded-circle fs-3">
                                                <i className="lab la-paypal fs-22"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3 overflow-hidden">
                                            <h5 className="fs-15 mb-1 text-truncate">Salary Payment</h5>
                                            <p className="fs-14 text-muted text-truncate mb-0">20 Sep, 2022</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <span className="badge fs-12 bg-danger-subtle text-danger">- $62.45</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-bottom sales-history">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar-sm flex-shrink-0">
                                            <span className="avatar-title bg-primary rounded-circle fs-3">
                                                <i className="lab la-buffer fs-22"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3 overflow-hidden">
                                            <h5 className="fs-15 mb-1 text-truncate">Online Product</h5>
                                            <p className="fs-14 text-muted text-truncate mb-0">28 Mar, 2022</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <span className="badge fs-12 bg-success-subtle text-success">+ $45.84</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-muted mt-3 mb-0">Yesterday</p>

                                <div className="border-bottom sales-history">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar-sm flex-shrink-0">
                                            <span className="avatar-title bg-primary rounded-circle fs-3">
                                                <i className="las la-file-image fs-22"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3 overflow-hidden">
                                            <h5 className="fs-15 mb-1 text-truncate">Maintenance</h5>
                                            <p className="fs-14 text-muted text-truncate mb-0">18 Sep, 2022</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <span className="badge fs-12 bg-success-subtle text-success">+ $25.52</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-bottom sales-history">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar-sm flex-shrink-0">
                                            <span className="avatar-title bg-primary rounded-circle fs-3">
                                                <i className="las la-bus fs-22"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3 overflow-hidden">
                                            <h5 className="fs-15 mb-1 text-truncate">Bus Booking</h5>
                                            <p className="fs-14 text-muted text-truncate mb-0">30 Nov, 2022</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <span className="badge fs-12 bg-danger-subtle text-danger">- $84.45</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-bottom sales-history">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar-sm flex-shrink-0">
                                            <span className="avatar-title bg-primary rounded-circle fs-3">
                                                <i className="lab la-telegram-plane fs-22"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3 overflow-hidden">
                                            <h5 className="fs-15 mb-1 text-truncate">Flight Booking</h5>
                                            <p className="fs-14 text-muted text-truncate mb-0">12 Feb, 2022</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <span className="badge fs-12 bg-success-subtle text-success">+ $53.23</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="pb-0 sales-history">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar-sm flex-shrink-0">
                                            <span className="avatar-title bg-primary rounded-circle fs-3">
                                                <i className="las la-store-alt fs-22"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3 overflow-hidden">
                                            <h5 className="fs-15 mb-1 text-truncate">Office Rent</h5>
                                            <p className="fs-14 text-muted text-truncate mb-0">12 Arl, 2022</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <span className="badge fs-12 bg-success-subtle text-success">+ $42.63</span>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-xl-7">
                <div className="card">
                    <div className="card-header border-0 align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Sales Revenue</h4>
                        <div className="dropdown">
                            <a className="text-reset" href="#" id="dropdownMenuYear" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="fw-semibold text-uppercase fs-14">Sort By: </span> <span className="text-muted">Years<i className="las la-angle-down fs-12 ms-2"></i></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuYear">
                                <a className="dropdown-item" href="#">Monthly</a>
                                <a className="dropdown-item" href="#">Yearly</a>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-xl-7">
                                <div className="py-3">
                                    <div id="world-map-markers" style={{height: "317px"}}></div>
                                </div>
                            </div>

                            <div className="col-xl-5">
                                <div className="table-responsive">
                                        <table className="table table-centered align-middle table-nowrap mb-0">
                                            <thead>
                                                <tr className="text-uppercase">
                                                    <th style={{width: "500px"}}>Countrie</th>
                                                    <th style={{width: "30%"}}>Order</th>
                                                    <th style={{width: "15%"}}>Earning</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img src="./flags/us.svg" className="rounded" alt="user-image" height="22" />
                                                            <div className="flex-grow-1 ms-3">
                                                                <p className="mb-0 text-truncate">US</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>6253</td>
                                                    <td>$26,524</td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img src="./flags/italy.svg" className="rounded" alt="user-image" height="22" />
                                                            <div className="flex-grow-1 ms-3">
                                                                <p className="mb-0 text-truncate">Italy</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>5563</td>
                                                    <td>$32,562</td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img src="./flags/spain.svg" className="rounded" alt="user-image" height="22" />
                                                            <div className="flex-grow-1 ms-3">
                                                                <p className="mb-0 text-truncate">Spain</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>3258</td>
                                                    <td>$65,214</td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img src="./flags/french.svg" className="rounded" alt="user-image" height="22" />
                                                            <div className="flex-grow-1 ms-3">
                                                                <p className="mb-0 text-truncate">French</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>6325</td>
                                                    <td>$63,254</td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img src="./flags/russia.svg" className="rounded" alt="user-image" height="22" />
                                                            <div className="flex-grow-1 ms-3">
                                                                <p className="mb-0 text-truncate">Russia</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>8652</td>
                                                    <td>$53,621</td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img src="./flags/ae.svg" className="rounded" alt="user-image" height="22" />
                                                            <div className="flex-grow-1 ms-3">
                                                                <p className="mb-0 text-truncate">Arabic</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>4256</td>
                                                    <td>$86,526</td>
                                                </tr>
                                            
                                            </tbody>
                                        </table>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="col-xl-5">
                <div className="card">
                    <div className="card-header border-0 align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Invoice List</h4>
                        <div className="dropdown">
                            <a className="text-reset" href="#" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="fw-semibold text-uppercase fs-14">Sort By: </span>  <span className="text-muted">Weekly<i className="las la-angle-down fs-12 ms-2"></i></span>
                              
                            </a>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                                <a className="dropdown-item" href="#">Monthly</a>
                                <a className="dropdown-item" href="#">Yearly</a>
                            </div>
                        </div>
                    </div>
                    <div className="card-body pt-2">
                        <div className="table-responsive table-card">
                            <table className="table table-striped table-nowrap align-middle mb-0">
                                <thead>
                                    <tr className="text-muted text-uppercase">
                                        <th style={{width: "50px"}}>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="checkAll" value="option" />
                                            </div>
                                        </th>
                                        <th scope="col">Invoice ID</th>
                                        <th scope="col">Client</th>
                                        <th scope="col">Date</th>
                                        <th scope="col" style={{width: "16%"}}>Status</th>
                                        <th scope="col" style={{width: "12%"}}>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="check1" value="option" />
                                            </div>
                                        </td>
                                        <td><p className="mb-0">Lec-2152</p></td>
                                        <td><img src="./users/avatar-1.jpg" alt="" className="avatar-xs rounded-circle me-2" />
                                            <a href="#" className="text-body align-middle">Donald Risher</a>
                                        </td>
                                        <td>20 Sep, 2022</td>
                                        <td><span className="badge bg-success-subtle text-success p-2">Paid</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="las la-ellipsis-h align-middle fs-18"></i>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li>
                                                        <button className="dropdown-item" href="#"><i className="las la-eye fs-18 align-middle me-2 text-muted"></i>
                                                            View</button>
                                                    </li>
                                                    <li>
                                                        <button className="dropdown-item" href="#"><i className="las la-pen fs-18 align-middle me-2 text-muted"></i>
                                                            Edit</button>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#"><i className="las la-file-download fs-18 align-middle me-2 text-muted"></i>
                                                            Download</a>
                                                    </li>
                                                    <li className="dropdown-divider"></li>
                                                    <li>
                                                        <a className="dropdown-item remove-item-btn" href="#">
                                                            <i className="las la-trash-alt fs-18 align-middle me-2 text-muted"></i>
                                                            Delete
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="check2" value="option" />
                                            </div>
                                        </td>
                                        <td><p className="mb-0">Lec-2153</p></td>
                                        <td><img src="./users/avatar-2.jpg" alt="" className="avatar-xs rounded-circle me-2" />
                                            <a href="#" className="text-body align-middle">Brody Holman</a>
                                        </td>
                                        <td>12 Arl, 2022</td>
                                        <td><span className="badge bg-warning-subtle text-warning p-2">Unpaid</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="las la-ellipsis-h align-middle fs-18"></i>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li>
                                                        <button className="dropdown-item" href="#"><i className="las la-eye fs-18 align-middle me-2 text-muted"></i>
                                                            View</button>
                                                    </li>
                                                    <li>
                                                        <button className="dropdown-item" href="#"><i className="las la-pen fs-18 align-middle me-2 text-muted"></i>
                                                            Edit</button>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#"><i className="las la-file-download fs-18 align-middle me-2 text-muted"></i>
                                                            Download</a>
                                                    </li>
                                                    <li className="dropdown-divider"></li>
                                                    <li>
                                                        <a className="dropdown-item remove-item-btn" href="#">
                                                            <i className="las la-trash-alt fs-18 align-middle me-2 text-muted"></i>
                                                            Delete
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="check3" value="option" />
                                            </div>
                                        </td>
                                        <td><p className="mb-0">Lec-2154</p></td>
                                        <td><img src="./users/avatar-3.jpg" alt="" className="avatar-xs rounded-circle me-2" />
                                            <a href="#" className="text-body align-middle">Jolie Hood</a>
                                        </td>
                                        <td>28 Mar, 2022</td>
                                        <td><span className="badge bg-success-subtle text-success p-2">Paid</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="las la-ellipsis-h align-middle fs-18"></i>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li>
                                                        <button className="dropdown-item" href="#"><i className="las la-eye fs-18 align-middle me-2 text-muted"></i>
                                                            View</button>
                                                    </li>
                                                    <li>
                                                        <button className="dropdown-item" href="#"><i className="las la-pen fs-18 align-middle me-2 text-muted"></i>
                                                            Edit</button>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#"><i className="las la-file-download fs-18 align-middle me-2 text-muted"></i>
                                                            Download</a>
                                                    </li>
                                                    <li className="dropdown-divider"></li>
                                                    <li>
                                                        <a className="dropdown-item remove-item-btn" href="#">
                                                            <i className="las la-trash-alt fs-18 align-middle me-2 text-muted"></i>
                                                            Delete
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="check5" value="option" />
                                            </div>
                                        </td>
                                        <td><p className="mb-0">Lec-2156</p></td>
                                        <td><img src="./users/avatar-5.jpg" alt="" className="avatar-xs rounded-circle me-2" />
                                            <a href="#" className="text-body align-middle">Howard Lyons</a>
                                        </td>
                                        <td>18 Sep, 2022</td>
                                        <td><span className="badge bg-info-subtle text-info p-2">Refund</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="las la-ellipsis-h align-middle fs-18"></i>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li>
                                                        <button className="dropdown-item" href="#"><i className="las la-eye fs-18 align-middle me-2 text-muted"></i>
                                                            View</button>
                                                    </li>
                                                    <li>
                                                        <button className="dropdown-item" href="#"><i className="las la-pen fs-18 align-middle me-2 text-muted"></i>
                                                            Edit</button>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#"><i className="las la-file-download fs-18 align-middle me-2 text-muted"></i>
                                                            Download</a>
                                                    </li>
                                                    <li className="dropdown-divider"></li>
                                                    <li>
                                                        <a className="dropdown-item remove-item-btn" href="#">
                                                            <i className="las la-trash-alt fs-18 align-middle me-2 text-muted"></i>
                                                            Delete
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="check6" value="option" />
                                            </div>
                                        </td>
                                        <td><p className="mb-0">Lec-2157</p></td>
                                        <td><img src="./users/avatar-6.jpg" alt="" className="avatar-xs rounded-circle me-2" />
                                            <a href="#" className="text-body align-middle">Howard Oneal</a>
                                        </td>
                                        <td>12 Feb, 2022</td>
                                        <td><span className="badge bg-success-subtle text-success p-2">Paid</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="las la-ellipsis-h align-middle fs-18"></i>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li>
                                                        <button className="dropdown-item" href="#"><i className="las la-eye fs-18 align-middle me-2 text-muted"></i>
                                                            View</button>
                                                    </li>
                                                    <li>
                                                        <button className="dropdown-item" href="#"><i className="las la-pen fs-18 align-middle me-2 text-muted"></i>
                                                            Edit</button>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#"><i className="las la-file-download fs-18 align-middle me-2 text-muted"></i>
                                                            Download</a>
                                                    </li>
                                                    <li className="dropdown-divider"></li>
                                                    <li>
                                                        <a className="dropdown-item remove-item-btn" href="#">
                                                            <i className="las la-trash-alt fs-18 align-middle me-2 text-muted"></i>
                                                            Delete
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="check7" value="option" />
                                            </div>
                                        </td>
                                        <td><p className="mb-0">Lec-2158</p></td>
                                        <td><img src="./users/avatar-7.jpg" alt="" className="avatar-xs rounded-circle me-2" />
                                            <a href="#" className="text-body align-middle">Jena Hall</a>
                                        </td>
                                        <td>30 Nov, 2022</td>
                                        <td><span className="badge bg-danger-subtle text-danger p-2">Cancel</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="las la-ellipsis-h align-middle fs-18"></i>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li>
                                                        <button className="dropdown-item" href="#"><i className="las la-eye fs-18 align-middle me-2 text-muted"></i>
                                                            View</button>
                                                    </li>
                                                    <li>
                                                        <button className="dropdown-item" href="#"><i className="las la-pen fs-18 align-middle me-2 text-muted"></i>
                                                            Edit</button>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#"><i className="las la-file-download fs-18 align-middle me-2 text-muted"></i>
                                                            Download</a>
                                                    </li>
                                                    <li className="dropdown-divider"></li>
                                                    <li>
                                                        <a className="dropdown-item remove-item-btn" href="#">
                                                            <i className="las la-trash-alt fs-18 align-middle me-2 text-muted"></i>
                                                            Delete
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

<footer className="footer">
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-6">
                <script>document.write(new Date().getFullYear())</script> © Invoika.
            </div>
            <div className="col-sm-6">
                <div className="text-sm-end d-none d-sm-block">
                    Design & Develop by Themesbrand
                </div>
            </div>
        </div>
    </div>
</footer>
</div>
    </div>
  )
}

export default Home