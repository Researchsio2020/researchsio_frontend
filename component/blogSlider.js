import Link from "next/link";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import { db } from "../firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

function BlogSlider() {
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

  const [asd, setAsd] = useState();
  const settings = {
    dots: false,
    arrows: false,
    centerMode: false,
    slidesToShow: 3,
    draggable: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const renderArrows = () => {
    return (
      <div className="owl-nav">
        <div className="owl-prev" onClick={() => asd.slickPrev()}>
          <i className="fa fa-arrow-left"></i>
        </div>
        <div className="owl-next" onClick={() => asd.slickNext()}>
          <i className="fa fa-arrow-right"></i>
        </div>
      </div>
    );
  };
  return (
    <>
      <div
        className="blog-carousel1 owl-btn-1 owl-btn-center-lr  owl-btn-primary"
        style={{ position: "relative" }}
      >
        <Slider ref={(c) => setAsd(c)} {...settings}>
          {categories?.map((item, i) => {
            return (
              <div
                key={i}
                className="item wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay={`0.${i}s`}
              >
                <div className="dlab-blog style-1 bg-white text-center">
                  <div className="dlab-media">
                    <Link href={`/blog/${item.id}`}>
                      <a>
                        {/* <img src="images/blog/blog-grid-1/pic3.jpg" alt="" /> */}
                        <img src={item.image} alt={item.title} />
                      </a>
                    </Link>
                  </div>
                  <div className="dlab-info">
                    <h5 className="dlab-title">
                      <Link href={`/blog/${item.id}`}>
                        <a>{item.title}</a>
                      </Link>
                    </h5>
                    {/* <p className="m-b0">{item.description}</p> */}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.description?.substring(0, 100),
                      }}
                    ></div>
                    <div className="dlab-meta meta-bottom">
                      <ul>
                        <li className="post-date">
                          <i className="flaticon-clock m-r10"></i>
                          {item.date}
                        </li>
                        <li className="post-comment">
                          <a href="#">
                            <i className="flaticon-speech-bubble"></i>
                            <span>{item.comments.length}</span>
                          </a>
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
                                url={`https://researchsio.com/blog/${item.id}`}
                                quote={item.title}
                                hashtag="#researchsio"
                              >
                                <FacebookIcon logoFillColor="white"></FacebookIcon>
                              </FacebookShareButton>
                            </li>
                            <li>
                              {/* <a
                                className="fa fa-twitter"
                                href="https://twitter.com/login?lang=en"
                              ></a> */}
                              <WhatsappShareButton
                                url={`https://researchsio.com/blog/${item.id}`}
                                title={item.title}
                                hashtag="#researchsio"
                              >
                                <WhatsappIcon logoFillColor="white"></WhatsappIcon>
                              </WhatsappShareButton>
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
        </Slider>
        {renderArrows()}
      </div>
    </>
  );
}

export default BlogSlider;
