
function Login() {
  return (
    <div>
        <div className="account-pages">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-11">
        <div className="auth-full-page-content d-flex min-vh-100 py-sm-5 py-4">
          <div className="w-100">
            <div className="d-flex flex-column h-100 py-0 py-xl-4">
              <div className="text-center mb-5">
                <a href="index.html">
                  <span className="logo-lg">
                    <img src="assets/images/logo-dark.png" alt="" height={21} />
                  </span>
                </a>
              </div>
              <div className="card my-auto overflow-hidden">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="p-lg-5 p-4">
                      <div className="text-center">
                        <h5 className="mb-0">Welcome Back !</h5>
                        <p className="text-muted mt-2">
                          Sign in to continue to Invoika.
                        </p>
                      </div>
                      <div className="mt-4">
                        <form
                          action="https://themesbrand.com/invoika/layouts/index.html"
                          className="auth-input"
                        >
                          <div className="mb-3">
                            <label htmlFor="username" className="form-label">
                              Username
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="username"
                              placeholder="Enter username"
                            />
                          </div>
                          <div className="mb-2">
                            <label
                              htmlFor="userpassword"
                              className="form-label"
                            >
                              Password
                            </label>
                            <div className="position-relative auth-pass-inputgroup mb-3">
                              <input
                                type="password"
                                className="form-control pe-5 password-input"
                                placeholder="Enter password"
                                id="password-input"
                              />
                              <button
                                className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                type="button"
                                id="password-addon"
                              >
                                <i className="las la-eye align-middle fs-18" />
                              </button>
                            </div>
                          </div>
                          <div className="form-check form-check-primary fs-16 py-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="remember-check"
                            />
                            <div className="float-end">
                              <a
                                href="auth-resetpassword.html"
                                className="text-muted text-decoration-underline fs-14"
                              >
                                Forgot your password?
                              </a>
                            </div>
                            <label
                              className="form-check-label fs-14"
                              htmlFor="remember-check"
                            >
                              Remember me
                            </label>
                          </div>
                          <div className="mt-2">
                            <button
                              className="btn btn-primary w-100"
                              type="submit"
                            >
                              Log In
                            </button>
                          </div>
                          <div className="mt-4 text-center">
                            <div className="signin-other-title">
                              <h5 className="fs-15 mb-3 title">Sign in with</h5>
                            </div>
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <a
                                  href="javascript:void()"
                                  className="social-list-item bg-primary text-white border-primary"
                                >
                                  <i className="mdi mdi-facebook" />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a
                                  href="javascript:void()"
                                  className="social-list-item bg-info text-white border-info"
                                >
                                  <i className="mdi mdi-twitter" />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a
                                  href="javascript:void()"
                                  className="social-list-item bg-danger text-white border-danger"
                                >
                                  <i className="mdi mdi-google" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="mt-4 text-center">
                            <p className="mb-0">
                              Dont have an account ?{" "}
                              <a
                                href="auth-signup.html"
                                className="fw-medium text-primary text-decoration-underline"
                              >
                                {" "}
                                Signup now{" "}
                              </a>{" "}
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex h-100 bg-auth align-items-end">
                      <div className="p-lg-5 p-4">
                        <div className="bg-overlay bg-primary" />
                        <div className="p-0 p-sm-4 px-xl-0 py-5">
                          <div
                            id="reviewcarouselIndicators"
                            className="carousel slide auth-carousel"
                            data-bs-ride="carousel"
                          >
                            <div className="carousel-indicators carousel-indicators-rounded">
                              <button
                                type="button"
                                data-bs-target="#reviewcarouselIndicators"
                                data-bs-slide-to={0}
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                              />
                              <button
                                type="button"
                                data-bs-target="#reviewcarouselIndicators"
                                data-bs-slide-to={1}
                                aria-label="Slide 2"
                              />
                              <button
                                type="button"
                                data-bs-target="#reviewcarouselIndicators"
                                data-bs-slide-to={2}
                                aria-label="Slide 3"
                              />
                            </div>
                            {/* end carouselIndicators */}
                            <div className="carousel-inner mx-auto">
                              <div className="carousel-item active">
                                <div className="testi-contain text-center">
                                  <h5 className="fs-20 text-white mb-0">
                                    “I feel confident imposing on myself”
                                  </h5>
                                  <p className="fs-15 text-white-50 mt-2 mb-0">
                                    Vestibulum auctor orci in risus iaculis
                                    consequat suscipit felis rutrum aliquet
                                    iaculis augue sed tempus In elementum
                                    ullamcorper lectus vitae pretium Nullam
                                    ultricies diam eu ultrices sagittis.
                                  </p>
                                </div>
                              </div>
                              <div className="carousel-item">
                                <div className="testi-contain text-center">
                                  <h5 className="fs-20 text-white mb-0">
                                    “Our task must be to free widening circle”
                                  </h5>
                                  <p className="fs-15 text-white-50 mt-2 mb-0">
                                    Curabitur eget nulla eget augue dignissim
                                    condintum Nunc imperdiet ligula porttitor
                                    commodo elementum Vivamus justo risus
                                    fringilla suscipit faucibus orci luctus
                                    ultrices posuere cubilia curae ultricies
                                    cursus.
                                  </p>
                                </div>
                              </div>
                              <div className="carousel-item">
                                <div className="testi-contain text-center">
                                  <h5 className="fs-20 text-white mb-0">
                                    “I ve learned that people forget what you”
                                  </h5>
                                  <p className="fs-15 text-white-50 mt-2 mb-0">
                                    Pellentesque lacinia scelerisque arcu in
                                    aliquam augue molestie rutrum Fusce
                                    dignissim dolor id auctor accumsan vehicula
                                    dolor vivamus feugiat odio erat sed quis
                                    Donec nec scelerisque magna
                                  </p>
                                </div>
                              </div>
                            </div>
                            {/* end carousel-inner */}
                          </div>
                          {/* end review carousel */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end card */}
              <div className="mt-5 text-center">
                <p className="mb-0 text-muted">
                  © Invoika. Crafted with{" "}
                  <i className="mdi mdi-heart text-danger" /> by Themesbrand
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end col */}
    </div>
    {/* end row */}
  </div>
  {/* end container */}
</div>

    </div>
  )
}

export default Login