import Link from "next/link";

function AboutUs() {
  return (
    <>
      <section className="content-inner" id="aboutNav">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 m-b30 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="dz-media">
                <img src="images/about/img4.png" className="move-1" alt="" />
              </div>
            </div>
            <div
              className="col-lg-6 m-b30 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div className="section-head style-1 mb-4">
                <h6 className="sub-title bgl-primary m-b20 text-primary">
                  About Us
                </h6>
                <h2 className="title">
                  How We Can Help You Achieve Your Research Goal
                </h2>
              </div>
              <p>
                Researchsio provides a platform to guide and support YOU on Your journey with
    your research project. The required consultancy, team and tools thats will help you to build 
    your dream project and give it a reality. 
              </p>
              <p className="m-b30">
                We have qualified Researchers and Consultant who will guide you on how to start!
              </p>
              <img src="images/Sign..png" alt="" />
              <h4 className="m-b30">Md. Salman Faisal (Founder)</h4>
              <Link href="/about-us-1">
                <a className="btn btn-link d-inline-flex align-items-center">
                  <i className="fa fa-angle-right m-r10"></i>Learn More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
