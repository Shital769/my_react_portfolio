import React from "react";
import { Layout } from "./layout";
const Contact = () => {
  return (
    <Layout>
      <div className="contact">
        <h2>Get In Touch With Me</h2>
        <div className="contact-form-container">
          <div className="contact-form">
            <form action="https://formspree.io/f/mdorkwkd" method="POST">
              <div className="mb-3">
                <label htmlFor="FormControlInput1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="FormControlInput1"
                  placeholder="Enter Your Name"
                  name="sender-name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="FormControlInput2" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="FormControlInput2"
                  placeholder="Enter Your Email"
                  name="sender-email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="FormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  id="FormControlTeaxtArea1"
                  placeholder="Enter Your Message"
                  rows="10"
                  required
                >
                  {" "}
                </textarea>
              </div>

              <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-primary" type="submit">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
