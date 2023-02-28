import React, { useState } from "react";
import { toast } from "react-toastify";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
// import ReCAPTCHA from "react-google-recaptcha";

// function onChange(value) {
//   console.log("Captcha value:", value);
// }

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function Quote() {
  const [contact, setContact] = useState(initialState);
  const [isLoading, setIsLoading] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = contact;

    if (!name || !email || !phone || !message) {
      toast.error("Please fill out all fields");
      return;
    }

    try {
      setIsLoading(true);
      const id = new Date().getTime().toString();
      await setDoc(doc(db, "contact", id), {
        timeStamp: serverTimestamp(),
        date: new Date().toLocaleDateString("en-GB"),
        name,
        email,
        phone,
        message,
      });
      setIsLoading(false);
      setContact(initialState);
      toast.success("Successfully Submitted!");
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      toast.error("Failed to Submit!");
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value });
  };

  return (
    <>
      <section
        id="quoteNav"
        className="content-inner"
        style={{ backgroundImage: "url(images/background/bg1.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-7 m-b30 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="section-head style-1">
                <h6 className="sub-title bgl-primary m-b20 text-primary">
                  Have A Question?
                </h6>
                <h2 className="title">
                We Love To Support Passionate Researchers to Build Their Projects.
                </h2>
              </div>
              <form onSubmit={handleSubmit} className="dlab-form dzForm">
                {/* <div className="dzFormMsg"></div>
                <input
                  type="hidden"
                  className="form-control"
                  name="dzToDo"
                  value="Contact"
                /> */}
                <div className="row">
                  <div className="col-sm-12">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="la la-user"></i>
                        </span>
                      </div>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        value={contact.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="la la-envelope"></i>
                        </span>
                      </div>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        value={contact.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="la la-phone"></i>
                        </span>
                      </div>
                      <input
                        name="phone"
                        type="number"
                        className="form-control"
                        placeholder="Phone No."
                        value={contact.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="la la-sms"></i>
                        </span>
                      </div>
                      <textarea
                        name="message"
                        className="form-control"
                        placeholder="Message"
                        value={contact.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  {/* <div className="col-sm-12">
                    <div className="input-group">
                      <div
                        className="g-recaptcha"
                        data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                        data-callback="verifyRecaptchaCallback"
                        data-expired-callback="expiredRecaptchaCallback"
                      ></div>
                      <input
                        className="form-control d-none"
                        style={{ display: "none" }}
                        data-recaptcha="true"
                        required
                        data-error="Please complete the Captcha"
                      />
                    </div>
                  </div>
                  <ReCAPTCHA
                    sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                    onChange={onChange}
                  /> */}
                  <div className="col-sm-12 mt-2">
                    <button
                      type="submit"
                      className="btn btn-link d-inline-flex align-items-center"
                    >
                      <i className="fa fa-angle-right m-r10"></i>Submit Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              className="col-xl-6 col-lg-5 m-b30 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div className="dlab-media cf-r-img">
                <img src="images/about/img2.png" className="move-1" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Quote;
