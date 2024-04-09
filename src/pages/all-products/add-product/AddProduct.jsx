
function AddProduct() {
  return (
    <div>
        <div className="main-content">
  <div className="page-content">
    <div className="container-fluid">
      {/* start page title */}
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0">New Product</h4>
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);">Product</a>
                </li>
                <li className="breadcrumb-item active">New Product</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* end page title */}
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <div className="p-2">
                <form>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="productname">
                      Product Name
                    </label>
                    <input
                      id="productname"
                      name="productname"
                      placeholder="Enter Product Name"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div style={{display:'flex', justifyContent:'center', alignItems:'center'}} className="dropzone mb-3">
                    <div className="fallback">
                      <input name="file" type="file" hidden multiple="multiple" />
                    </div>
                    <div style={{display:'flex', justifyContent:'center',flexDirection:'column', alignItems:'center'}} className="dz-message needsclick">
                      <div className="mb-3">
                        <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                      </div>
                      <h4>Drop files here or click to upload.</h4>
                    </div>
                  </div>
                  <ul className="list-unstyled" id="dropzone-preview">
                    <li className="mt-2" id="dropzone-preview-list">
                      {/* This is used as the file preview template */}
                      <div className="border rounded">
                        <div className="d-flex p-2">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar-sm bg-light rounded">
                              <img
                                data-dz-thumbnail=""
                                className="img-fluid rounded d-block"
                                src="/new-document.png"
                                alt="Dropzone-Image"
                              />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <div className="pt-1">
                              <h5 className="fs-14 mb-1" data-dz-name="">
                                &nbsp;
                              </h5>
                              <p
                                className="fs-13 text-muted mb-0"
                                data-dz-size=""
                              />
                              <strong
                                className="error text-danger"
                                data-dz-errormessage=""
                              />
                            </div>
                          </div>
                          <div className="flex-shrink-0 ms-3">
                            <button
                              data-dz-remove=""
                              className="btn btn-sm btn-danger"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  {/* end dropzon-preview */}
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="brand">
                          Product Brand
                        </label>
                        <input
                          id="brand"
                          name="brand"
                          placeholder="Enter Product Brand"
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="price">
                          Product Price
                        </label>
                        <input
                          id="price"
                          name="price"
                          placeholder="Enter Price"
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="choices-single-default"
                          className="form-label"
                        >
                          Category
                        </label>
                        <select
                          className="form-select"
                          data-trigger=""
                          name="choices-single-category"
                          id="choices-single-category"
                        >
                          <option value="SL">Select</option>
                          <option value="EL">Electronic</option>
                          <option value="FA">Fashion</option>
                          <option value="FI">Fitness</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="choices-single-specifications"
                          className="form-label"
                        >
                          Specifications
                        </label>
                        <select
                          className="form-select"
                          data-trigger=""
                          name="choices-single-category"
                          id="choices-single-specifications"
                        >
                          <option value="HI" selected="">
                            High Quality
                          </option>
                          <option value="LE" selected="">
                            Leather
                          </option>
                          <option value="NO">Notifications</option>
                          <option value="SI">Sizes</option>
                          <option value="DI">Different Color</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="productdesc">
                      Product Description
                    </label>
                    <textarea
                      className="form-control"
                      id="productdesc"
                      placeholder="Enter Description"
                      rows={4}
                      defaultValue={""}
                    />
                  </div>
                </form>
                <div className="hstack gap-2 mt-4">
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-light">
                    Discard
                  </button>
                </div>
              </div>
            </div>
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

export default AddProduct