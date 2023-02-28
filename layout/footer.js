import Link from "next/link";

function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer
        className="site-footer style-1"
        id="footer"
        style={{ backgroundImage: "url(images/background/bg10.png)" }}
      >
        <div className="footer-top">
          <div className="container">
            <div
              className="footer-info wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.8s"
            >
              <div className="row align-items-center">
                <div className="col-xl-6 col-md-4">
                  <div className="footer-logo">
                    {/* <a href="/"><img src="images/logo-white.png" alt=""/></a>  */}
                    <a href="/">
                      <img src="images/logo.png" alt="" width="320px" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="icon-bx-wraper left m-b10">
                    <div className="icon-lg">
                      <Link href="#">
                        <a className="icon-cell">
                          <i className="flaticon-email"></i>
                        </a>
                      </Link>
                    </div>
                    <div className="icon-content">
                      <p>
                        +88 01791 925 491
                        <br />
                        info@researchsio.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="icon-bx-wraper left m-b10">
                    <div className="icon-lg">
                      <Link href="#">
                        <a className="icon-cell">
                          <i className="flaticon-location"></i>
                        </a>
                      </Link>
                    </div>
                    <div className="icon-content">
                      <p>Mirpur 1, Dhaka-1216</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="widget widget_about">
                  <h5 className="footer-title">About Us</h5>
                  <p>
                    An Online Research and Research Consultation Platform Supporting The Youth To Achieve Their Goal. 
                  </p>
                  <div className="dlab-social-icon">
                    <ul>
                      <li>
                        <a
                          className="fa fa-facebook"
                          href="https://en-gb.facebook.com/"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa fa-instagram"
                          href="https://www.instagram.com/"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa fa-researchgate.net"
                          href="https://researchgate.net/"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-2 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">Our links</h5>
                  <ul>
                    <li>
                      <Link href="#">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>About Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Team</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Blog</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">Our Services</h5>
                  <ul>
                    <li>
                      <Link href="#">
                        <a>Strategy & Research</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Research Plan Design </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Solution</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Software Based Research</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Research Equipment </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.8s"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">Other links</h5>
                  <ul>
                    <li>
                      <Link href="#">
                        <a>FAQ</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Portfolio</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Privacy Policy</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Terms & Conditions</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Support </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- footer bottom part --> */}
        <div
          className="footer-bottom wow fadeIn"
          style={{ backgroundColor: "#11A9F0" }}
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <span className="copyright-text">
                  Copyright © 2023{" "}
                  <a href="https://dexignzone.com/" target="_blank">
                    RESEARCHSIO
                  </a>
                  . All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer End --> */}
    </>
  );
}

export default Footer;
