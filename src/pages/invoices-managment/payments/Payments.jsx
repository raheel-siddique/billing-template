
function Payments() {
  return (
    <div>
        <div className="main-content">
  <div className="page-content">
    <div className="container-fluid">
      {/* start page title */}
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0">Payments</h4>
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);">Payments</a>
                </li>
                <li className="breadcrumb-item active">Payments</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* end page title */}
      <div className="row pb-4 gy-3">
        <div className="col-sm-4">
          <button
            className="btn btn-primary addPayment-modal"
            data-bs-toggle="modal"
            data-bs-target="#addpaymentModal"
          >
            <i className="las la-plus me-1" /> Add Payment
          </button>
        </div>
        <div className="col-sm-auto ms-auto">
          <div className="d-flex gap-3">
            <div className="search-box">
              <input
                type="text"
                className="form-control"
                id="searchMemberList"
                placeholder="Search for Result"
              />
              <i className="las la-search search-icon" />
            </div>
            <div className="">
              <button
                type="button"
                id="dropdownMenuLink1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className="btn btn-soft-info btn-icon fs-14"
              >
                <i className="las la-ellipsis-v fs-18" />
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                <li>
                  <a className="dropdown-item" href="#">
                    All
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Last Week
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Last Month
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Last Year
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              {/* Nav tabs */}
              <ul
                className="nav nav-tabs nav-tabs-custom nav-success mb-3"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-bs-toggle="tab"
                    href="#nav-border-top-all"
                    role="tab"
                    aria-selected="true"
                  >
                    All
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#nav-border-top-paid"
                    role="tab"
                    aria-selected="false"
                  >
                    Paid
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#nav-border-top-pending"
                    role="tab"
                    aria-selected="false"
                  >
                    Pending
                  </a>
                </li>
              </ul>
              <div className="tab-content text-muted pt-2">
                <div
                  className="tab-pane active"
                  id="nav-border-top-all"
                  role="tabpanel"
                >
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive table-card">
                        <table className="table table-hover table-nowrap align-middle mb-0">
                          <thead className="table-light">
                            <tr className="text-muted text-uppercase">
                              <th scope="col">Member</th>
                              <th scope="col">Date</th>
                              <th scope="col">Payment Details</th>
                              <th scope="col" style={{ width: "16%" }}>
                                Payment Type
                              </th>
                              <th scope="col" style={{ width: "12%" }}>
                                Amount
                              </th>
                              <th scope="col" style={{ width: "12%" }}>
                                Status
                              </th>
                              <th scope="col" style={{ width: "12%" }}>
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <a
                                  href="#javascript: void(0);"
                                  className="text-body align-middle fw-medium"
                                >
                                  Donald Risher
                                </a>
                              </td>
                              <td>20 Sep, 2022</td>
                              <td>Maintenance</td>
                              <td>Google Pay</td>
                              <td>$1200.00</td>
                              <td>
                                <span className="badge bg-success-subtle text-success p-2">
                                  Paid
                                </span>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-soft-secondary btn-sm dropdown"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="las la-ellipsis-h align-middle fs-18" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                        View
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                        Edit
                                      </button>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                        Download
                                      </a>
                                    </li>
                                    <li className="dropdown-divider" />
                                    <li>
                                      <a
                                        className="dropdown-item remove-item-btn"
                                        href="#"
                                      >
                                        <i className="las la-trash-alt fs-18 align-middle me-2 text-muted" />
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a
                                  href="#javascript: void(0);"
                                  className="text-body align-middle fw-medium"
                                >
                                  Brody Holman
                                </a>
                              </td>
                              <td>12 Arl, 2022</td>
                              <td>Flight Booking</td>
                              <td>Credit Card</td>
                              <td>$3600.00</td>
                              <td>
                                <span className="badge bg-danger-subtle text-danger p-2">
                                  Failed
                                </span>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-soft-secondary btn-sm dropdown"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="las la-ellipsis-h align-middle fs-18" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                        View
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                        Edit
                                      </button>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                        Download
                                      </a>
                                    </li>
                                    <li className="dropdown-divider" />
                                    <li>
                                      <a
                                        className="dropdown-item remove-item-btn"
                                        href="#"
                                      >
                                        <i className="las la-trash-alt fs-18 align-middle me-2 text-muted" />
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a
                                  href="#javascript: void(0);"
                                  className="text-body align-middle fw-medium"
                                >
                                  Jolie Hood
                                </a>
                              </td>
                              <td>28 Mar, 2022</td>
                              <td>Office Rent</td>
                              <td>Cash</td>
                              <td>$800.00</td>
                              <td>
                                <span className="badge bg-warning-subtle text-warning p-2">
                                  Pending
                                </span>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-soft-secondary btn-sm dropdown"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="las la-ellipsis-h align-middle fs-18" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                        View
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                        Edit
                                      </button>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                        Download
                                      </a>
                                    </li>
                                    <li className="dropdown-divider" />
                                    <li>
                                      <a
                                        className="dropdown-item remove-item-btn"
                                        href="#"
                                      >
                                        <i className="las la-trash-alt fs-18 align-middle me-2 text-muted" />
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a
                                  href="#javascript: void(0);"
                                  className="text-body align-middle fw-medium"
                                >
                                  Buckminster Wong
                                </a>
                              </td>
                              <td>23 Aug, 2022</td>
                              <td>Salary Payment</td>
                              <td>Google Pay</td>
                              <td>$1600.00</td>
                              <td>
                                <span className="badge bg-success-subtle text-success p-2">
                                  Paid
                                </span>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-soft-secondary btn-sm dropdown"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="las la-ellipsis-h align-middle fs-18" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                        View
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                        Edit
                                      </button>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                        Download
                                      </a>
                                    </li>
                                    <li className="dropdown-divider" />
                                    <li>
                                      <a
                                        className="dropdown-item remove-item-btn"
                                        href="#"
                                      >
                                        <i className="las la-trash-alt fs-18 align-middle me-2 text-muted" />
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a
                                  href="#javascript: void(0);"
                                  className="text-body align-middle fw-medium"
                                >
                                  Howard Lyons
                                </a>
                              </td>
                              <td>18 Sep, 2022</td>
                              <td>Maintenance</td>
                              <td>Bank Transfer</td>
                              <td>$3200.00</td>
                              <td>
                                <span className="badge bg-danger-subtle text-danger p-2">
                                  Failed
                                </span>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-soft-secondary btn-sm dropdown"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="las la-ellipsis-h align-middle fs-18" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                        View
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                        Edit
                                      </button>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                        Download
                                      </a>
                                    </li>
                                    <li className="dropdown-divider" />
                                    <li>
                                      <a
                                        className="dropdown-item remove-item-btn"
                                        href="#"
                                      >
                                        <i className="las la-trash-alt fs-18 align-middle me-2 text-muted" />
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a
                                  href="#javascript: void(0);"
                                  className="text-body align-middle fw-medium"
                                >
                                  Howard Oneal
                                </a>
                              </td>
                              <td>12 Feb, 2022</td>
                              <td>Online Product</td>
                              <td>Credit Card</td>
                              <td>$900.00</td>
                              <td>
                                <span className="badge bg-success-subtle text-success p-2">
                                  Paid
                                </span>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-soft-secondary btn-sm dropdown"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="las la-ellipsis-h align-middle fs-18" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                        View
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                        Edit
                                      </button>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                        Download
                                      </a>
                                    </li>
                                    <li className="dropdown-divider" />
                                    <li>
                                      <a
                                        className="dropdown-item remove-item-btn"
                                        href="#"
                                      >
                                        <i className="las la-trash-alt fs-18 align-middle me-2 text-muted" />
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a
                                  href="#javascript: void(0);"
                                  className="text-body align-middle fw-medium"
                                >
                                  Jena Hall
                                </a>
                              </td>
                              <td>30 Nov, 2022</td>
                              <td>Train Booking</td>
                              <td>Cash</td>
                              <td>$200.00</td>
                              <td>
                                <span className="badge bg-success-subtle text-success p-2">
                                  Paid
                                </span>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-soft-secondary btn-sm dropdown"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="las la-ellipsis-h align-middle fs-18" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                        View
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                        Edit
                                      </button>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                        Download
                                      </a>
                                    </li>
                                    <li className="dropdown-divider" />
                                    <li>
                                      <a
                                        className="dropdown-item remove-item-btn"
                                        href="#"
                                      >
                                        <i className="las la-trash-alt fs-18 align-middle me-2 text-muted" />
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a
                                  href="#javascript: void(0);"
                                  className="text-body align-middle fw-medium"
                                >
                                  Paki Edwards
                                </a>
                              </td>
                              <td>23 Sep, 2022</td>
                              <td>Maintenance</td>
                              <td>Google Pay</td>
                              <td>$1200.00</td>
                              <td>
                                <span className="badge bg-warning-subtle text-warning p-2">
                                  Pending
                                </span>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-soft-secondary btn-sm dropdown"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="las la-ellipsis-h align-middle fs-18" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                        View
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                        Edit
                                      </button>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                        Download
                                      </a>
                                    </li>
                                    <li className="dropdown-divider" />
                                    <li>
                                      <a
                                        className="dropdown-item remove-item-btn"
                                        href="#"
                                      >
                                        <i className="las la-trash-alt fs-18 align-middle me-2 text-muted" />
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a
                                  href="#javascript: void(0);"
                                  className="text-body align-middle fw-medium"
                                >
                                  James Diaz
                                </a>
                              </td>
                              <td>16 Aug, 2022</td>
                              <td>Bus Booking</td>
                              <td>Google Pay</td>
                              <td>$1800.00</td>
                              <td>
                                <span className="badge bg-danger-subtle text-danger p-2">
                                  Failed
                                </span>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-soft-secondary btn-sm dropdown"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="las la-ellipsis-h align-middle fs-18" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                        View
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                        Edit
                                      </button>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                        Download
                                      </a>
                                    </li>
                                    <li className="dropdown-divider" />
                                    <li>
                                      <a
                                        className="dropdown-item remove-item-btn"
                                        href="#"
                                      >
                                        <i className="las la-trash-alt fs-18 align-middle me-2 text-muted" />
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                          {/* end tbody */}
                        </table>
                        {/* end table */}
                      </div>
                      {/* end table responsive */}
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane"
                  id="nav-border-top-paid"
                  role="tabpanel"
                >
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive table-card">
                        <table className="table table-hover table-nowrap align-middle mb-0">
                          <thead className="table-light">
                            <tr className="text-muted text-uppercase">
                              <th scope="col">Member</th>
                              <th scope="col">Date</th>
                              <th scope="col">Payment Details</th>
                              <th scope="col" style={{ width: "16%" }}>
                                Payment Type
                              </th>
                              <th scope="col" style={{ width: "12%" }}>
                                Amount
                              </th>
                              <th scope="col" style={{ width: "12%" }}>
                                Status
                              </th>
                              <th scope="col" style={{ width: "12%" }}>
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <a
                                  href="#javascript: void(0);"
                                  className="text-body align-middle fw-medium"
                                >
                                  Donald Risher
                                </a>
                              </td>
                              <td>20 Sep, 2022</td>
                              <td>Maintenance</td>
                              <td>Google Pay</td>
                              <td>$1200.00</td>
                              <td>
                                <span className="badge bg-success-subtle text-success p-2">
                                  Paid
                                </span>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-soft-secondary btn-sm dropdown"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="las la-ellipsis-h align-middle fs-18" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                        View
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                        Edit
                                      </button>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                        Download
                                      </a>
                                    </li>
                                    <li className="dropdown-divider" />
                                    <li>
                                      <a
                                        className="dropdown-item remove-item-btn"
                                        href="#"
                                      >
                                        <i className="las la-trash-alt fs-18 align-middle me-2 text-muted" />
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a
                                  href="#javascript: void(0);"
                                  className="text-body align-middle fw-medium"
                                >
                                  Buckminster Wong
                                </a>
                              </td>
                              <td>23 Aug, 2022</td>
                              <td>Salary Payment</td>
                              <td>Google Pay</td>
                              <td>$1600.00</td>
                              <td>
                                <span className="badge bg-success-subtle text-success p-2">
                                  Paid
                                </span>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-soft-secondary btn-sm dropdown"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="las la-ellipsis-h align-middle fs-18" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                        View
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                        Edit
                                      </button>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                        Download
                                      </a>
                                    </li>
                                    <li className="dropdown-divider" />
                                    <li>
                                      <a
                                        className="dropdown-item remove-item-btn"
                                        href="#"
                                      >
                                        <i className="las la-trash-alt fs-18 align-middle me-2 text-muted" />
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a
                                  href="#javascript: void(0);"
                                  className="text-body align-middle fw-medium"
                                >
                                  Howard Oneal
                                </a>
                              </td>
                              <td>12 Feb, 2022</td>
                              <td>Online Product</td>
                              <td>Credit Card</td>
                              <td>$900.00</td>
                              <td>
                                <span className="badge bg-success-subtle text-success p-2">
                                  Paid
                                </span>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-soft-secondary btn-sm dropdown"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="las la-ellipsis-h align-middle fs-18" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                        View
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                        Edit
                                      </button>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                        Download
                                      </a>
                                    </li>
                                    <li className="dropdown-divider" />
                                    <li>
                                      <a
                                        className="dropdown-item remove-item-btn"
                                        href="#"
                                      >
                                        <i className="las la-trash-alt fs-18 align-middle me-2 text-muted" />
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a
                                  href="#javascript: void(0);"
                                  className="text-body align-middle fw-medium"
                                >
                                  Jena Hall
                                </a>
                              </td>
                              <td>30 Nov, 2022</td>
                              <td>Train Booking</td>
                              <td>Cash</td>
                              <td>$200.00</td>
                              <td>
                                <span className="badge bg-success-subtle text-success p-2">
                                  Paid
                                </span>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-soft-secondary btn-sm dropdown"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="las la-ellipsis-h align-middle fs-18" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                        View
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                        Edit
                                      </button>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                        Download
                                      </a>
                                    </li>
                                    <li className="dropdown-divider" />
                                    <li>
                                      <a
                                        className="dropdown-item remove-item-btn"
                                        href="#"
                                      >
                                        <i className="las la-trash-alt fs-18 align-middle me-2 text-muted" />
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                          {/* end tbody */}
                        </table>
                        {/* end table */}
                      </div>
                      {/* end table responsive */}
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane"
                  id="nav-border-top-pending"
                  role="tabpanel"
                >
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive table-card">
                        <table className="table table-hover table-nowrap align-middle mb-0">
                          <thead className="table-light">
                            <tr className="text-muted text-uppercase">
                              <th scope="col">Member</th>
                              <th scope="col">Date</th>
                              <th scope="col">Payment Details</th>
                              <th scope="col" style={{ width: "16%" }}>
                                Payment Type
                              </th>
                              <th scope="col" style={{ width: "12%" }}>
                                Amount
                              </th>
                              <th scope="col" style={{ width: "12%" }}>
                                Status
                              </th>
                              <th scope="col" style={{ width: "12%" }}>
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <a
                                  href="#javascript: void(0);"
                                  className="text-body align-middle fw-medium"
                                >
                                  Jolie Hood
                                </a>
                              </td>
                              <td>28 Mar, 2022</td>
                              <td>Office Rent</td>
                              <td>Cash</td>
                              <td>$800.00</td>
                              <td>
                                <span className="badge bg-warning-subtle text-warning p-2">
                                  Pending
                                </span>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-soft-secondary btn-sm dropdown"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="las la-ellipsis-h align-middle fs-18" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                        View
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                        Edit
                                      </button>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                        Download
                                      </a>
                                    </li>
                                    <li className="dropdown-divider" />
                                    <li>
                                      <a
                                        className="dropdown-item remove-item-btn"
                                        href="#"
                                      >
                                        <i className="las la-trash-alt fs-18 align-middle me-2 text-muted" />
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a
                                  href="#javascript: void(0);"
                                  className="text-body align-middle fw-medium"
                                >
                                  Paki Edwards
                                </a>
                              </td>
                              <td>23 Sep, 2022</td>
                              <td>Maintenance</td>
                              <td>Google Pay</td>
                              <td>$1200.00</td>
                              <td>
                                <span className="badge bg-warning-subtle text-warning p-2">
                                  Pending
                                </span>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-soft-secondary btn-sm dropdown"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="las la-ellipsis-h align-middle fs-18" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                        View
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                        Edit
                                      </button>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                        Download
                                      </a>
                                    </li>
                                    <li className="dropdown-divider" />
                                    <li>
                                      <a
                                        className="dropdown-item remove-item-btn"
                                        href="#"
                                      >
                                        <i className="las la-trash-alt fs-18 align-middle me-2 text-muted" />
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                          {/* end tbody */}
                        </table>
                        {/* end table */}
                      </div>
                      {/* end table responsive */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center mb-2 gy-3">
                <div className="col-md-5">
                  <p className="mb-0 text-muted">
                    Showing <b>1</b> to <b>5</b> of <b>10</b> results
                  </p>
                </div>
                <div className="col-sm-auto ms-auto">
                  <nav aria-label="...">
                    <ul className="pagination mb-0">
                      <li className="page-item disabled">
                        <span className="page-link">Previous</span>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item" aria-current="page">
                        <span className="page-link">2</span>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* end card-body */}
          </div>
        </div>
      </div>
    </div>
    {/* container-fluid */}
  </div>
  {/* End Page-content */}
  <footer className="footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6">© Invoika.</div>
        <div className="col-sm-6">
          <div className="text-sm-end d-none d-sm-block">
            Design &amp; Develop by Themesbrand
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

    </div>
  )
}

export default Payments