
function AddTransactions() {
  return (
    <div>
        <div className="main-content">
  <div className="page-content">
    <div className="container-fluid">
      {/* start page title */}
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0">New Transaction</h4>
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);">Account</a>
                </li>
                <li className="breadcrumb-item active">New Transaction</li>
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
              <form>
                <div className="mb-3">
                  <label className="form-label" htmlFor="desc">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="desc"
                    placeholder="Enter Description"
                    rows={3}
                    defaultValue={""}
                  />
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="credit/debit" className="form-label">
                        Credit / Debit
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected="">Select Credit / Debit</option>
                        <option value={1}>Credit</option>
                        <option value={2}>Debit</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="price">
                        Amount
                      </label>
                      <input
                        id="price"
                        name="price"
                        placeholder="Enter Amount"
                        type="number"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="attachment">
                    Attachment
                  </label>
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
                </div>
              </form>
          
              <div className="hstack gap-2 mt-4">
                <button type="submit" className="btn btn-primary">
                  Pay Now
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

export default AddTransactions