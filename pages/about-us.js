import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Header from "../layout/header-3";
import Footer from "../layout/footer";
import Counter from "../element/counter";
import TeamSlider from '../component/teamSlider';
import Testimonial from '../element/testimonial';
import Blog from '../element/blog';
import Link from 'next/link';
import Quote from '../element/quote';

function AboutUs1() {
    const [isOpen, setOpen] = useState(false)
    return (
      <>
        <Header />
        <div className="page-content bg-white">
          {/* <!-- Banner  --> */}
          <div
            className="dlab-bnr-inr overlay-primary-dark"
            style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1>About Us</h1>
                {/* <!-- Breadcrumb Row --> */}
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      About Us
                    </li>
                  </ul>
                </nav>
                {/* <!-- Breadcrumb Row End --> */}
              </div>
            </div>
          </div>
          {/* <!-- Banner End --> */}

          {/* <!-- About Us --> */}
          <section className="content-inner">
            <div className="container">
              <div className="row align-items-center">
                <div
                  className="col-lg-6 m-b30 wow fadeInLeft"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <div className="dz-media">
                    <img
                      src="images/about/img4.png"
                      className="move-3"
                      alt=""
                    />
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
                    You are passionate about research work, been dreaming to work as a professional researcher
                    yet don't know how and where to start. Your Journey is taking too long to initiate. Dont Worry !
                    We are here to support with all we have! Your Goal, Your Vision, Your Mission and we will be the 
                    best supporter of You! From a wide range of research topic choice to connect with the
                    best Researchers for consultation- We arrange anything that you need.  
                  </p>
                  <p className="m-b30">
                    We Provide the platform that is required to build your project from scratch. All you have to do is ask ! Lets see what we do
                  </p>
                  <div className="row">
                    <div className="col-lg-6">
                      <ul className="list-arrow primary">
                        <li>Student friendly Platform for research projects.</li>
                        <li>Schedule based Consultation at minimum cost.</li>
                        <li>Team work experience</li>
                        <li>Opportunity to expand your network and knowledge .</li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list-arrow primary">
                        <li>Experince of the new era of Research.</li>
                        <li>Support you to move abroad.</li>
                        <li>Project cost minimization.</li>
                        <li>First Hand Project Support.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Counter --> */}
          <Counter />

          {/* <!-- About Us --> */}
          <section className="content-inner-2">
            <div className="container">
              <div className="row align-items-center">
                <div
                  className="col-lg-6 wow fadeInLeft"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <div className="section-head style-1">
                    <h6 className="sub-title bgl-primary m-b20 text-primary">
                      Watch Us
                    </h6>
                    <h2 className="title m-b15">
                      Watch How Our Team Help You To Achive Goal
                    </h2>
                    <p>
                      As a online based reseach Platform, we value the time. We value of your idea, goal and finacial aspects. 
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-6">
                      <div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
                        <div className="icon-bx-sm bg-white">
                          <Link href="#">
                            <a className="icon-cell text-primary">
                              <i className="flaticon-chat"></i>
                            </a>
                          </Link>
                        </div>
                        <div className="icon-content">
                          <h4 className="dlab-title m-b5">Online Support</h4>
                          <p>
                           All our consultation sessions and meetings are arranged on online platform. So you can maintain the best schedule.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
                        <div className="icon-bx-sm bg-white">
                          <Link href="#">
                            <a className="icon-cell text-primary">
                              <i className="flaticon-bullhorn"></i>
                            </a>
                          </Link>
                        </div>
                        <div className="icon-content">
                          <h4 className="dlab-title m-b5">
                            Project Team
                          </h4>
                          <p>
                            We can connect you with the best team that is needed for your work to move forward and to be successfull.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 m-b30 wow fadeInRight"
                  data-wow-duration="2s"
                  data-wow-delay="0.4s"
                >
                  <div className="video-bx style-3">
                    <img src="images/video/pic3.jpg" alt="" />
                    <div className="video-btn">
                      <a
                        href="#"
                        className="popup-youtube"
                        onClick={() => setOpen(true)}
                      >
                        <i className="flaticon-play"></i>
                      </a>
                    </div>
                  </div>
                  <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="UpolBSznWp0"
                    onClose={() => setOpen(false)}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Team --> */}
          <section className="content-inner">
            <div className="container">
              <div className="section-head style-1 text-center">
                <h6 className="sub-title bgl-primary m-b20 text-primary">
                  Team
                </h6>
                <h2 className="title">Our Best Expertise</h2>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <TeamSlider />
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Testimonials --> */}
          <Testimonial />

          {/* <!-- Get A Quote --> */}
          <Quote />

          {/* <!-- Call To Action --> */}
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
                      You Want To Showcase Your Research Work In Top Journal ? Join With Us
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
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <a className="btn btn-link d-inline-flex align-items-center">
                      <i className="fa fa-angle-right m-r10"></i>Join Now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </>
    );
}

export default AboutUs1;
