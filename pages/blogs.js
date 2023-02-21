import Header from "../layout/header-3";
import Footer from "../layout/footer";
import Link from "next/link";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

function BlogLargeRightSidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "blog")),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setCategories(list);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

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
              <h1>Blog Large</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Blog
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Blog Large --> */}
        <section
          className="content-inner bg-img-fix"
          style={{ backgroundImage: "url(images/background/bg1.png)" }}
        >
          <div className="container">
            <div className="row">
              {categories?.map((item, i) => {
                return (
                  <div className="col-xl-4 col-lg-6 col-sm-12 m-b50" key={i}>
                    <div className="dlab-blog style-1 bg-white text-center m-b50">
                      <div className="dlab-media dlab-img-effect zoom">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="dlab-info">
                        <h4 className="dlab-title">
                          <Link href={`/blog/${item.id}`}>
                            <a>{item.title}</a>
                          </Link>
                        </h4>
                        {/* <p className="m-b0">
                          Sed auctor magna lacus, in placerat nisl sollicitudin
                          ut. Morbi feugiat ante velit, eget convallis arcu
                          iaculis vel. Fusce in rhoncus quam. Integer dolor
                          arcu, ullamcorper sed auctor vitae, porttitor quis
                          erat. Donec sit amet semper massa.
                        </p> */}
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.description.substring(0, 100),
                          }}
                        ></div>
                        <div className="dlab-meta meta-bottom">
                          <ul>
                            <li className="post-date">
                              <i className="flaticon-clock m-r10"></i>
                              {item.date}
                            </li>
                            <li className="post-author">
                              <i className="flaticon-user m-r10"></i>By{" "}
                              {item.author}
                            </li>
                            <li className="post-comment">
                              <Link href="#">
                                <a>
                                  <i className="flaticon-speech-bubble"></i>
                                  <span>{item.comments?.length}</span>
                                </a>
                              </Link>
                            </li>
                            <li className="post-share">
                              <i className="flaticon-share"></i>
                              <ul>
                                <li>
                                  {/* <a
                                    className="fa fa-facebook"
                                    href="https://en-gb.facebook.com/"
                                  ></a> */}
                                  <FacebookShareButton
                                    url={`https://researchsio.com/${item.id}`}
                                    quote={item.title}
                                    hashtag="#researchsio"
                                  >
                                    <FacebookIcon logoFillColor="white"></FacebookIcon>
                                  </FacebookShareButton>
                                </li>
                                <li>
                                  <WhatsappShareButton
                                    url={`https://researchsio.com/${item.id}`}
                                    title={item.title}
                                    hashtag="#researchsio"
                                  >
                                    <WhatsappIcon logoFillColor="white"></WhatsappIcon>
                                  </WhatsappShareButton>
                                  {/* <a
                                    className="fa fa-twitter"
                                    href="https://twitter.com/login?lang=en"
                                  ></a> */}
                                </li>
                                {/* <li>
                                  <a
                                    className="fa fa-linkedin"
                                    href="https://www.linkedin.com/login"
                                  ></a>
                                </li> */}
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="col-12 m-b50">
                <nav aria-label="Blog Pagination">
                  <ul className="pagination text-center p-t20">
                    <li className="page-item">
                      <Link href="#">
                        <a className="page-link prev">Prev</a>
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link href="#">
                        <a className="page-link active">1</a>
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link href="#">
                        <a className="page-link">2</a>
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link href="#">
                        <a className="page-link">3</a>
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link href="#">
                        <a className="page-link next">Next</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>

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
                    You Want To Showcase Your Website In Top Join With Us
                  </h2>
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <Link href="/contact-us-1">
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

export default BlogLargeRightSidebar;
