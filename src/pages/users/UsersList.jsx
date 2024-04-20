
function UsersList() {
  return (
    <div>
        <div className="main-content">
  <div className="page-content">
    <div className="container-fluid">
      {/* start page title */}
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0">User</h4>
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);">User</a>
                </li>
                <li className="breadcrumb-item active">User</li>
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
            <i className="las la-plus me-1" /> Add New
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
              <div className="table-responsive table-card">
                <table className="table table-hover table-nowrap align-middle mb-0">
                  <thead>
                    <tr className="text-muted text-uppercase">
                      <th scope="col">Member Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Mobile</th>
                      <th scope="col">Registered On</th>
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
                      <td>309-300-9739</td>
                      <td>20 Sep, 2022</td>
                      <td>
                        <span className="badge bg-success-subtle text-success  p-2">
                          Active
                        </span>
                      </td>
                      <td>
                        <ul className="list-inline hstack gap-2 mb-0">
                          <li
                            className="list-inline-item"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="View"
                          >
                            <a
                              href="#"
                              className="btn btn-soft-info btn-sm d-inline-block"
                            >
                              <i className="las la-eye fs-17 align-middle" />
                            </a>
                          </li>
                          <li
                            className="list-inline-item edit"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="Edit"
                          >
                            <a
                              href="#"
                              className="btn btn-soft-info btn-sm d-inline-block"
                            >
                              <i className="las la-pen fs-17 align-middle" />
                            </a>
                          </li>
                          <li
                            className="list-inline-item"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="Remove"
                          >
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-sm d-inline-block"
                            >
                              <i className="las la-file-download fs-17 align-middle" />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
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
                      <td>253-205-7394</td>
                      <td>12 Arl, 2022</td>
                      <td>
                        <span className="badge bg-danger-subtle text-danger  p-2">
                          Disabled
                        </span>
                      </td>
                      <td>
                        <ul className="list-inline hstack gap-2 mb-0">
                          <li
                            className="list-inline-item"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="View"
                          >
                            <a
                              href="#"
                              className="btn btn-soft-info btn-sm d-inline-block"
                            >
                              <i className="las la-eye fs-17 align-middle" />
                            </a>
                          </li>
                          <li
                            className="list-inline-item edit"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="Edit"
                          >
                            <a
                              href="#"
                              className="btn btn-soft-info btn-sm d-inline-block"
                            >
                              <i className="las la-pen fs-17 align-middle" />
                            </a>
                          </li>
                          <li
                            className="list-inline-item"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="Remove"
                          >
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-sm d-inline-block"
                            >
                              <i className="las la-file-download fs-17 align-middle" />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
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
                      <td>832-330-4300</td>
                      <td>28 Mar, 2022</td>
                      <td>
                        <span className="badge bg-success-subtle text-success  p-2">
                          Active
                        </span>
                      </td>
                      <td>
                        <ul className="list-inline hstack gap-2 mb-0">
                          <li
                            className="list-inline-item"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="View"
                          >
                            <a
                              href="#"
                              className="btn btn-soft-info btn-sm d-inline-block"
                            >
                              <i className="las la-eye fs-17 align-middle" />
                            </a>
                          </li>
                          <li
                            className="list-inline-item edit"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="Edit"
                          >
                            <a
                              href="#"
                              className="btn btn-soft-info btn-sm d-inline-block"
                            >
                              <i className="las la-pen fs-17 align-middle" />
                            </a>
                          </li>
                          <li
                            className="list-inline-item"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="Remove"
                          >
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-sm d-inline-block"
                            >
                              <i className="las la-file-download fs-17 align-middle" />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
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
                      <td>770-800-9825</td>
                      <td>23 Aug, 2022</td>
                      <td>
                        <span className="badge bg-success-subtle text-success  p-2">
                          Active
                        </span>
                      </td>
                      <td>
                        <ul className="list-inline hstack gap-2 mb-0">
                          <li
                            className="list-inline-item"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="View"
                          >
                            <a
                              href="#"
                              className="btn btn-soft-info btn-sm d-inline-block"
                            >
                              <i className="las la-eye fs-17 align-middle" />
                            </a>
                          </li>
                          <li
                            className="list-inline-item edit"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="Edit"
                          >
                            <a
                              href="#"
                              className="btn btn-soft-info btn-sm d-inline-block"
                            >
                              <i className="las la-pen fs-17 align-middle" />
                            </a>
                          </li>
                          <li
                            className="list-inline-item"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="Remove"
                          >
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-sm d-inline-block"
                            >
                              <i className="las la-file-download fs-17 align-middle" />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
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
                      <td>804-509-5073</td>
                      <td>18 Sep, 2022</td>
                      <td>
                        <span className="badge bg-danger-subtle text-danger  p-2">
                          Disabled
                        </span>
                      </td>
                      <td>
                        <ul className="list-inline hstack gap-2 mb-0">
                          <li
                            className="list-inline-item"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="View"
                          >
                            <a
                              href="#"
                              className="btn btn-soft-info btn-sm d-inline-block"
                            >
                              <i className="las la-eye fs-17 align-middle" />
                            </a>
                          </li>
                          <li
                            className="list-inline-item edit"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="Edit"
                          >
                            <a
                              href="#"
                              className="btn btn-soft-info btn-sm d-inline-block"
                            >
                              <i className="las la-pen fs-17 align-middle" />
                            </a>
                          </li>
                          <li
                            className="list-inline-item"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="Remove"
                          >
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-sm d-inline-block"
                            >
                              <i className="las la-file-download fs-17 align-middle" />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
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
                      <td>205-243-9746</td>
                      <td>12 Feb, 2022</td>
                      <td>
                        <span className="badge bg-success-subtle text-success  p-2">
                          Active
                        </span>
                      </td>
                      <td>
                        <ul className="list-inline hstack gap-2 mb-0">
                          <li
                            className="list-inline-item"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="View"
                          >
                            <a
                              href="#"
                              className="btn btn-soft-info btn-sm d-inline-block"
                            >
                              <i className="las la-eye fs-17 align-middle" />
                            </a>
                          </li>
                          <li
                            className="list-inline-item edit"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="Edit"
                          >
                            <a
                              href="#"
                              className="btn btn-soft-info btn-sm d-inline-block"
                            >
                              <i className="las la-pen fs-17 align-middle" />
                            </a>
                          </li>
                          <li
                            className="list-inline-item"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="Remove"
                          >
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-sm d-inline-block"
                            >
                              <i className="las la-file-download fs-17 align-middle" />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
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
                      <td>214-592-0512</td>
                      <td>30 Nov, 2022</td>
                      <td>
                        <span className="badge bg-danger-subtle text-danger  p-2">
                          Disabled
                        </span>
                      </td>
                      <td>
                        <ul className="list-inline hstack gap-2 mb-0">
                          <li
                            className="list-inline-item"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="View"
                          >
                            <a
                              href="#"
                              className="btn btn-soft-info btn-sm d-inline-block"
                            >
                              <i className="las la-eye fs-17 align-middle" />
                            </a>
                          </li>
                          <li
                            className="list-inline-item edit"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="Edit"
                          >
                            <a
                              href="#"
                              className="btn btn-soft-info btn-sm d-inline-block"
                            >
                              <i className="las la-pen fs-17 align-middle" />
                            </a>
                          </li>
                          <li
                            className="list-inline-item"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="Remove"
                          >
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-sm d-inline-block"
                            >
                              <i className="las la-file-download fs-17 align-middle" />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
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
                      <td>862-222-0853</td>
                      <td>23 Sep, 2022</td>
                      <td>
                        <span className="badge bg-success-subtle text-success  p-2">
                          Active
                        </span>
                      </td>
                      <td>
                        <ul className="list-inline hstack gap-2 mb-0">
                          <li
                            className="list-inline-item"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="View"
                          >
                            <a
                              href="#"
                              className="btn btn-soft-info btn-sm d-inline-block"
                            >
                              <i className="las la-eye fs-17 align-middle" />
                            </a>
                          </li>
                          <li
                            className="list-inline-item edit"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="Edit"
                          >
                            <a
                              href="#"
                              className="btn btn-soft-info btn-sm d-inline-block"
                            >
                              <i className="las la-pen fs-17 align-middle" />
                            </a>
                          </li>
                          <li
                            className="list-inline-item"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="Remove"
                          >
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-sm d-inline-block"
                            >
                              <i className="las la-file-download fs-17 align-middle" />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
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
                      <td>407-691-4701</td>
                      <td>16 Aug, 2022</td>
                      <td>
                        <span className="badge bg-success-subtle text-success  p-2">
                          Active
                        </span>
                      </td>
                      <td>
                        <ul className="list-inline hstack gap-2 mb-0">
                          <li
                            className="list-inline-item"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="View"
                          >
                            <a
                              href="#"
                              className="btn btn-soft-info btn-sm d-inline-block"
                            >
                              <i className="las la-eye fs-17 align-middle" />
                            </a>
                          </li>
                          <li
                            className="list-inline-item edit"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="Edit"
                          >
                            <a
                              href="#"
                              className="btn btn-soft-info btn-sm d-inline-block"
                            >
                              <i className="las la-pen fs-17 align-middle" />
                            </a>
                          </li>
                          <li
                            className="list-inline-item"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="Remove"
                          >
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-sm d-inline-block"
                            >
                              <i className="las la-file-download fs-17 align-middle" />
                            </a>
                          </li>
                        </ul>
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

export default UsersList