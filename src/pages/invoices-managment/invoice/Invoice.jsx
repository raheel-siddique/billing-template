
function Invoice() {
  return (
  <>
  <div className="main-content">
  <div className="page-content">
    <div className="container-fluid">
      {/* start page title */}
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0">Invoice</h4>
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);">Invoice</a>
                </li>
                <li className="breadcrumb-item active">Invoice</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* end page title */}
      <div className="row pb-4 gy-3">
        <div className="col-sm-4">
          <a
            href="invoice-add.html"
            className="btn btn-primary addMembers-modal"
          >
            <i className="las la-plus me-1" /> Add Invoices
          </a>
        </div>
        <div className="col-sm-auto ms-auto">
          <div className="d-flex gap-3">
            <div className="search-box">
              <input
                type="text"
                className="form-control"
                placeholder="Search for name or designation..."
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
      </div>
      <div className="row">
        <div className="col-xl-3 col-md-6">
          {/* card */}
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  <h4 className="fs-22 fw-semibold ff-secondary mb-2">
                    $
                    <span className="counter-value" data-target="559.25">
                      0
                    </span>
                    k
                  </h4>
                  <p className="text-uppercase fw-medium fs-14 text-muted mb-0">
                    Invoices Sent
                    <span className="text-success fs-14 mb-0 ms-1">
                      <i className="ri-arrow-right-up-line fs-13 align-middle" />{" "}
                      +89.24 %
                    </span>
                  </p>
                </div>
                <div className="avatar-sm flex-shrink-0">
                  <span className="avatar-title bg-light rounded-circle fs-3">
                    <i className="las la-file-alt fs-24 text-primary" />
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-end justify-content-between mt-4">
                <div>
                  <span className="badge bg-primary me-1">2,258</span>{" "}
                  <span className="text-muted">Invoices sent</span>
                </div>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
        {/* end col */}
        <div className="col-xl-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  <h4 className="fs-22 fw-semibold ff-secondary mb-2">
                    $
                    <span className="counter-value" data-target="409.66">
                      0
                    </span>
                    k
                  </h4>
                  <p className="text-uppercase fw-medium fs-14 text-muted mb-0">
                    Paid Invoices
                    <span className="text-danger fs-14 mb-0 ms-1">
                      <i className="ri-arrow-right-down-line fs-13 align-middle" />{" "}
                      +8.09 %
                    </span>
                  </p>
                </div>
                <div className="avatar-sm flex-shrink-0">
                  <span className="avatar-title bg-light rounded-circle fs-3">
                    <i className="las la-check-square fs-24 text-primary" />
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-end justify-content-between mt-4">
                <div>
                  <span className="badge bg-danger me-1">1,958</span>{" "}
                  <span className="text-muted">Paid by clients</span>
                </div>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
        {/* end col */}
        <div className="col-xl-3 col-md-6">
          <div className="card bg-primary">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  <h4 className="fs-22 fw-semibold ff-secondary mb-2 text-white">
                    $
                    <span className="counter-value" data-target="136.98">
                      0
                    </span>
                    k
                  </h4>
                  <p className="text-uppercase fw-medium fs-14 text-white-50 mb-0">
                    {" "}
                    Unpaid Invoices
                    <span className="text-danger fs-14 mb-0 ms-1">
                      <i className="ri-arrow-right-down-line fs-13 align-middle" />{" "}
                      +9.01 %
                    </span>
                  </p>
                </div>
                <div className="avatar-sm flex-shrink-0">
                  <span className="avatar-title bg-light-subtle text-light  rounded-circle fs-3">
                    <i className="las la-clock fs-24 text-white" />
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-end justify-content-between mt-4">
                <div>
                  <span className="badge bg-danger me-1">338</span>{" "}
                  <span className="text-white">Unpaid by clients</span>
                </div>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
        {/* end col */}
        <div className="col-xl-3 col-md-6">
          {/* card */}
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  <h4 className="fs-22 fw-semibold ff-secondary mb-2">
                    $
                    <span className="counter-value" data-target="84.20">
                      0
                    </span>
                    k
                  </h4>
                  <p className="text-uppercase fw-medium fs-14 text-muted mb-0">
                    {" "}
                    Cancelled Invoices
                    <span className="text-success fs-14 mb-0 ms-1">
                      <i className="ri-arrow-right-up-line fs-13 align-middle" />{" "}
                      +7.55 %
                    </span>
                  </p>
                </div>
                <div className="avatar-sm flex-shrink-0">
                  <span className="avatar-title bg-light rounded-circle fs-3">
                    <i className="las la-times-circle fs-24 text-primary" />
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-end justify-content-between mt-4">
                <div>
                  <span className="badge bg-primary me-1">502</span>{" "}
                  <span className="text-muted">Cancelled by clients</span>
                </div>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
        {/* end col */}
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive table-card">
                <table className="table table-hover table-nowrap align-middle mb-0">
                  <thead>
                    <tr className="text-muted text-uppercase">
                      <th style={{ width: 50 }}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="checkAll"
                            defaultValue="option"
                          />
                        </div>
                      </th>
                      <th scope="col">Invoice ID</th>
                      <th scope="col">Client</th>
                      <th scope="col" style={{ width: "20%" }}>
                        Email
                      </th>
                      <th scope="col">Date</th>
                      <th scope="col">Billed</th>
                      <th scope="col" style={{ width: "16%" }}>
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
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="check1"
                            defaultValue="option"
                          />
                        </div>
                      </td>
                      <td>
                        <p className="fw-medium mb-0">Lec-2152</p>
                      </td>
                      <td>
                        <img
                          src="assets/images/users/avatar-1.jpg"
                          alt=""
                          className="avatar-xs rounded-circle me-2"
                        />
                        <a
                          href="#javascript: void(0);"
                          className="text-body align-middle fw-medium"
                        >
                          Donald Risher
                        </a>
                      </td>
                      <td>morbi.quis@protonmail.org</td>
                      <td>20 Sep, 2022</td>
                      <td>$240.00</td>
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
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="check2"
                            defaultValue="option"
                          />
                        </div>
                      </td>
                      <td>
                        <p className="fw-medium mb-0">Lec-2153</p>
                      </td>
                      <td>
                        <img
                          src="assets/images/users/avatar-2.jpg"
                          alt=""
                          className="avatar-xs rounded-circle me-2"
                        />
                        <a
                          href="#javascript: void(0);"
                          className="text-body align-middle fw-medium"
                        >
                          Brody Holman
                        </a>
                      </td>
                      <td>metus@protonmail.org</td>
                      <td>12 Arl, 2022</td>
                      <td>$390.00</td>
                      <td>
                        <span className="badge bg-warning-subtle text-warning p-2">
                          Unpaid
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
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="check3"
                            defaultValue="option"
                          />
                        </div>
                      </td>
                      <td>
                        <p className="fw-medium mb-0">Lec-2154</p>
                      </td>
                      <td>
                        <img
                          src="assets/images/users/avatar-3.jpg"
                          alt=""
                          className="avatar-xs rounded-circle me-2"
                        />
                        <a
                          href="#javascript: void(0);"
                          className="text-body align-middle fw-medium"
                        >
                          Jolie Hood
                        </a>
                      </td>
                      <td>morbi.quis@protonmail.org</td>
                      <td>28 Mar, 2022</td>
                      <td>$440.00</td>
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
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="check4"
                            defaultValue="option"
                          />
                        </div>
                      </td>
                      <td>
                        <p className="fw-medium mb-0">Lec-2155</p>
                      </td>
                      <td>
                        <img
                          src="assets/images/users/avatar-4.jpg"
                          alt=""
                          className="avatar-xs rounded-circle me-2"
                        />
                        <a
                          href="#javascript: void(0);"
                          className="text-body align-middle fw-medium"
                        >
                          Buckminster Wong
                        </a>
                      </td>
                      <td>morbi.quis@protonmail.org</td>
                      <td>23 Aug, 2022</td>
                      <td>$520.00</td>
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
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="check5"
                            defaultValue="option"
                          />
                        </div>
                      </td>
                      <td>
                        <p className="fw-medium mb-0">Lec-2156</p>
                      </td>
                      <td>
                        <img
                          src="assets/images/users/avatar-5.jpg"
                          alt=""
                          className="avatar-xs rounded-circle me-2"
                        />
                        <a
                          href="#javascript: void(0);"
                          className="text-body align-middle fw-medium"
                        >
                          Howard Lyons
                        </a>
                      </td>
                      <td>neque.sed.dictum@icloud.org</td>
                      <td>18 Sep, 2022</td>
                      <td>$480.00</td>
                      <td>
                        <span className="badge bg-info-subtle text-info  p-2">
                          Refund
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
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="check6"
                            defaultValue="option"
                          />
                        </div>
                      </td>
                      <td>
                        <p className="fw-medium mb-0">Lec-2157</p>
                      </td>
                      <td>
                        <img
                          src="assets/images/users/avatar-6.jpg"
                          alt=""
                          className="avatar-xs rounded-circle me-2"
                        />
                        <a
                          href="#javascript: void(0);"
                          className="text-body align-middle fw-medium"
                        >
                          Howard Oneal
                        </a>
                      </td>
                      <td>metus@protonmail.org</td>
                      <td>12 Feb, 2022</td>
                      <td>$550.00</td>
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
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="check7"
                            defaultValue="option"
                          />
                        </div>
                      </td>
                      <td>
                        <p className="fw-medium mb-0">Lec-2158</p>
                      </td>
                      <td>
                        <img
                          src="assets/images/users/avatar-7.jpg"
                          alt=""
                          className="avatar-xs rounded-circle me-2"
                        />
                        <a
                          href="#javascript: void(0);"
                          className="text-body align-middle fw-medium"
                        >
                          Jena Hall
                        </a>
                      </td>
                      <td>morbi.quis@protonmail.org</td>
                      <td>30 Nov, 2022</td>
                      <td>$170.00</td>
                      <td>
                        <span className="badge bg-danger-subtle text-danger p-2">
                          Cancel
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
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="check8"
                            defaultValue="option"
                          />
                        </div>
                      </td>
                      <td>
                        <p className="fw-medium mb-0">Lec-2159</p>
                      </td>
                      <td>
                        <img
                          src="assets/images/users/avatar-8.jpg"
                          alt=""
                          className="avatar-xs rounded-circle me-2"
                        />
                        <a
                          href="#javascript: void(0);"
                          className="text-body align-middle fw-medium"
                        >
                          Paki Edwards
                        </a>
                      </td>
                      <td>dictum.phasellus.in@hotmail.org</td>
                      <td>23 Sep, 2022</td>
                      <td>$720.00</td>
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
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="check9"
                            defaultValue="option"
                          />
                        </div>
                      </td>
                      <td>
                        <p className="fw-medium mb-0">Lec-2160</p>
                      </td>
                      <td>
                        <img
                          src="assets/images/users/avatar-9.jpg"
                          alt=""
                          className="avatar-xs rounded-circle me-2"
                        />
                        <a
                          href="#javascript: void(0);"
                          className="text-body align-middle fw-medium"
                        >
                          James Diaz
                        </a>
                      </td>
                      <td>nascetur@yahoo.com</td>
                      <td>16 Aug, 2022</td>
                      <td>$820.00</td>
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
</div>
  </>
  )
}

export default Invoice