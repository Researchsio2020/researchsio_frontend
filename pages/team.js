import Link from "next/link";
import Footer from "../layout/footer";
import Header from "../layout/header";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";

function Team1() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "users")),
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
  return (
    <>
      <Header color="#ffffff" />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr overlay-primary-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Our Family</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Team
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Team --> */}
        <section
          className="content-inner"
          style={{ backgroundImage: "url(images/background/bg1.png)" }}
        >
          <div className="container">
            <div className="row">
              {users?.map((user) => {
                return (
                  <div
                    className="col-xl-4 col-md-6 wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                  >
                    <div className="dlab-team style-1 m-b30">
                      <div className="dlab-media dlab-img-effect zoom zoom-slow">
                        <img src={user.image} alt={user.username} />
                      </div>
                      <div className="dlab-content">
                        <div className="clearfix">
                          <h4 className="dlab-name">{user.username}</h4>
                          <span className="dlab-position">{user.role}</span>
                        </div>
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
            </div>
          </div>
        </section>

        {/* <!-- Call To action --> */}
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

export default Team1;
