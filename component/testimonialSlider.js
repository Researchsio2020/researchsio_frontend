import { useState, useEffect } from "react";
import Slider from "react-slick";
import { db } from "../firebase";
import { collection, onSnapshot, query } from "firebase/firestore";

function TestimonialSlider() {
  const [testimonials, setTestimonial] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "testimonial")),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setTestimonial(list);
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
    dots: true,
    arrows: false,
    centerMode: true,
    slidesToShow: 3,
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
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
      <div className="testimonials-carousel1 owl-carousel owl-theme owl-btn-2 owl-btn-white owl-btn-center">
        <Slider ref={(c) => setAsd(c)} {...settings}>
          {testimonials?.map((item, i) => {
            return (
              <div
                className="item wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay={`0.${i}s`}
              >
                <div className="testimonial-1">
                  <div className="testimonial-text">
                    <p>“{item.description}”</p>
                  </div>
                  <div className="testimonial-detail">
                    <div className="testimonial-pic">
                      <img src="images/testimonials/pic3.jpg" alt="" />
                    </div>
                    <div className="clearfix">
                      <strong className="testimonial-name">{item.title}</strong>
                      <span className="testimonial-position">
                        {item.category}
                      </span>

                      <ul className="star-rating">
                        {Array.from({ length: item.rating }, (_, i) => (
                          <li key={i}>
                            <i className="fa fa-star text-warning"></i>
                          </li>
                        ))}
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

export default TestimonialSlider;
