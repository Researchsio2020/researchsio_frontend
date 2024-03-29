import Link from "next/link";

function Cta() {
  return (
    <>
      <section
        style={{
          backgroundImage: "url(images/background/bg5.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row action-box style-1 align-items-center">
            <div
              className="col-xl-7 col-lg-8 col-md-8 wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="section-head style-1">
                <h6 className="sub-title bgl-primary m-b20 text-primary">
                  More With Us
                </h6>
                <h2 className="title">
                  You Want To Showcase Your Research Work In Top Journal? Join With Us
                </h2>
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSeNx4dpne7L-MDQ534tThNRBvO92U5E3u6gP_p6wgh09uz9ug/viewform"
                target="_blank" rel="noopener noreferrer"
              >
                <a className="btn btn-link d-inline-flex align-items-center">
                  <i className="fa fa-angle-right m-r10"></i>Join Now
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cta;
