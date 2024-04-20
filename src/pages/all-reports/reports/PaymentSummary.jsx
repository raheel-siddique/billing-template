
function PaymentSummary() {
  return (
    <div>
        <div className="main-content">
  <div className="page-content">
    <div className="container-fluid">
      {/* start page title */}
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0">Payment Summary</h4>
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);">Report</a>
                </li>
                <li className="breadcrumb-item active">Payment Summary</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* end page title */}
      <div className="row pb-4 gy-3">
        <div className="col-sm-4">
          <div className="d-flex">
            <div className="search-box">
              <input
                type="text"
                className="form-control"
                placeholder="Search for Result"
              />
              <i className="las la-search search-icon" />
            </div>
          </div>
        </div>
        <div className="col-sm-auto ms-auto">
          <div className="d-flex gap-2">
            <button type="button" className="btn btn-soft-primary fs-14">
              <i className="las la-filter fs-16 align-middle me-2" />
              Filter
            </button>
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
                  Print
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Export to Excel
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive table-card">
                <table className="table table-hover table-nowrap align-middle mb-0">
                  <thead>
                    <tr className="text-muted text-uppercase">
                      <th scope="col">Date</th>
                      <th scope="col">Invoice ID</th>
                      <th scope="col">Client</th>
                      <th scope="col">Billed</th>
                      <th scope="col" style={{ width: "16%" }}>
                        Payment Type
                      </th>
                      <th scope="col" style={{ width: "12%" }}>
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>20 Sep, 2022</td>
                      <td>
                        <p className="fw-medium mb-0">Lec-2152</p>
                      </td>
                      <td>
                        <a
                          href="#javascript: void(0);"
                          className="text-body align-middle fw-medium"
                        >
                          Donald Risher
                        </a>
                      </td>
                      <td>$240.00</td>
                      <td>
                        <span className="badge bg-success-subtle text-success p-2">
                          Google Pay
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
                      <td>12 Arl, 2022</td>
                      <td>
                        <p className="fw-medium mb-0">Lec-2153</p>
                      </td>
                      <td>
                        <a
                          href="#javascript: void(0);"
                          className="text-body align-middle fw-medium"
                        >
                          Brody Holman
                        </a>
                      </td>
                      <td>$390.00</td>
                      <td>
                        <span className="badge bg-warning-subtle text-warning p-2">
                          Cash
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
                      <td>28 Mar, 2022</td>
                      <td>
                        <p className="fw-medium mb-0">Lec-2154</p>
                      </td>
                      <td>
                        <a
                          href="#javascript: void(0);"
                          className="text-body align-middle fw-medium"
                        >
                          Jolie Hood
                        </a>
                      </td>
                      <td>$440.00</td>
                      <td>
                        <span className="badge bg-success-subtle text-success p-2">
                          Google Pay
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
                      <td>23 Aug, 2022</td>
                      <td>
                        <p className="fw-medium mb-0">Lec-2155</p>
                      </td>
                      <td>
                        <a
                          href="#javascript: void(0);"
                          className="text-body align-middle fw-medium"
                        >
                          Buckminster Wong
                        </a>
                      </td>
                      <td>$520.00</td>
                      <td>
                        <span className="badge bg-success-subtle text-success p-2">
                          Google Pay
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
                      <td>18 Sep, 2022</td>
                      <td>
                        <p className="fw-medium mb-0">Lec-2156</p>
                      </td>
                      <td>
                        <a
                          href="#javascript: void(0);"
                          className="text-body align-middle fw-medium"
                        >
                          Howard Lyons
                        </a>
                      </td>
                      <td>$480.00</td>
                      <td>
                        <span className="badge bg-warning-subtle text-warning p-2">
                          Cash
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
                      <td>12 Feb, 2022</td>
                      <td>
                        <p className="fw-medium mb-0">Lec-2157</p>
                      </td>
                      <td>
                        <a
                          href="#javascript: void(0);"
                          className="text-body align-middle fw-medium"
                        >
                          Howard Oneal
                        </a>
                      </td>
                      <td>$550.00</td>
                      <td>
                        <span className="badge bg-success-subtle text-success p-2">
                          Google Pay
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
                      <td>30 Nov, 2022</td>
                      <td>
                        <p className="fw-medium mb-0">Lec-2158</p>
                      </td>
                      <td>
                        <a
                          href="#javascript: void(0);"
                          className="text-body align-middle fw-medium"
                        >
                          Jena Hall
                        </a>
                      </td>
                      <td>$170.00</td>
                      <td>
                        <span className="badge bg-danger-subtle text-danger p-2">
                          Credit Card
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
                      <td>23 Sep, 2022</td>
                      <td>
                        <p className="fw-medium mb-0">Lec-2159</p>
                      </td>
                      <td>
                        <a
                          href="#javascript: void(0);"
                          className="text-body align-middle fw-medium"
                        >
                          Paki Edwards
                        </a>
                      </td>
                      <td>$720.00</td>
                      <td>
                        <span className="badge bg-danger-subtle text-danger p-2">
                          Credit Card
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
                      <td>16 Aug, 2022</td>
                      <td>
                        <p className="fw-medium mb-0">Lec-2160</p>
                      </td>
                      <td>
                        <a
                          href="#javascript: void(0);"
                          className="text-body align-middle fw-medium"
                        >
                          James Diaz
                        </a>
                      </td>
                      <td>$820.00</td>
                      <td>
                        <span className="badge bg-success-subtle text-success p-2">
                          Google Pay
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
      <div className="row align-items-center mb-4 gy-3">
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

export default PaymentSummary