import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";
import Link from "next/link";

function TeamSlider() {
  // get all users form firebase
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "users"), where("showHome", "==", true)),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setUsers(list);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    arrows: false,
    speed: 5000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <Slider
        {...settings}
        className="team-carousel1 owl owl-carousel owl-none owl-theme owl-dots-primary-full"
      >
        {users?.map((user, i) => {
          return (
            <div
              key={i}
              className="item wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay={`0.${i}s`}
            >
              <div className="dlab-team style-1 m-b10">
                <div className="dlab-media">
                  {/* <img src="images/team/pic1.jpg" alt="" /> */}
                  <img src={user.image} alt={user.username} />
                </div>
                <div className="dlab-content">
                  <div className="clearfix">
                    <h4 className="dlab-name">
                      <Link href="/team">{user.username}</Link>
                    </h4>
                    <span className="dlab-position">{user.role}</span>
                  </div>
                  {/* social  */}
                  <ul className="dlab-social-icon primary-light">
                    {user.facebook && (
                      <li>
                        <a
                          href={user.facebook}
                          target="_bland"
                          className="fa fa-facebook"
                        ></a>
                      </li>
                    )}
                    {user.instagram && (
                      <li>
                        <a
                          href={user.instagram}
                          target="_bland"
                          className="fa fa-instagram"
                        ></a>
                      </li>
                    )}
                    {user.twitter && (
                      <li>
                        <a
                          href={user.twitter}
                          target="_bland"
                          className="fa fa-twitter"
                        ></a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default TeamSlider;
