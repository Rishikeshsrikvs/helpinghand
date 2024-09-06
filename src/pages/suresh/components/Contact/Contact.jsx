import React from "react";
import "./Contact.css";
import phone from "../Contact/contactimage/Phone.png";
import address from "../Contact/contactimage/Address.png";
import GmailLogo from "../Contact/contactimage/GmailLogo.png";
import img1 from "../Contact/contactimage/image1.png";
import img2 from "../Contact/contactimage/image2.png";
import img3 from "../Contact/contactimage/image3.png";
import img4 from "../Contact/contactimage/image4.png";
import img5 from "../Contact/contactimage/image5.png";
const Contact = () => {
  return (
    <>
      <div className="contactUs">
        <div className="contact-container">
          <div className="contact-heading">
            <h1>Contact Us</h1>
          </div>
          <div className="contact-content">
            <div className="contact-text">
              <h1>
                “ Helping one person might not change the whole world, but it
                could change the world for one person ”
              </h1>
            </div>
            <div className="contact-image">
              <div className="con-image1">
                <div className="con-img">
                  <img src={img1} alt="" />
                </div>
                <div className="con-img">
                  <img src={img4} alt="" />
                </div>
              </div>
              <div className="con-image2">
                <div className="con-img">
                  <img src={img3} alt="" />
                </div>
                <div className="con-img">
                  <img src={img5} alt="" />
                </div>
              </div>
              <div className="con-image3">
                <div className="con-img">
                  <img src={img2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="form-container">
            <form>
              <div class="form-row">
                <div class="form-group">
                  <label for="firstname">
                    Name <span class="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstname"
                  
                    required
                  />
                  <p>First Name</p>
                </div>
                <div class="form-group">
                  <label for="lastname">Last Name</label>
                  <input
                    type="text"
                    id="lastname"
                    required
                  />
                  <p>Last Name</p>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="email">
                    Email <span class="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder=""
                    required
                  />
                  <p>Example@Example.Com</p>
                </div>
                <div class="form-group">
                  <label for="phone">
                    Phone Number <span class="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                  />
                  <p>Enter Your Number</p>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group full-width">
                  <label for="message">Message</label>
                  <textarea
                    id="message"
                    rows="12"
                    
                  ></textarea>
                </div>
              </div>
              <div class="submit-row">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div className="center-text">
            <h3>
              You can get in touch at the addresses and telephone numbers
              mentioned or fill in the form to contact us.
            </h3>
          </div>

          <div className="contact-address">
            <div className="address-container">
              <div className="add-heading">
                <h1>Address</h1>
                <div className="address">
                  <ul className="address-icon">
                    <li>
                      <img src={address} alt="address" />
                    </li>
                    <li>
                      <img src={GmailLogo} alt="address" />
                    </li>
                    <li>
                      <img src={phone} alt="address" />
                    </li>
                  </ul>
                  <ul className="text">
                    <li>
                      <p>
                        No. 19, Kamaraj Nagar Main Road, Avadi, Chennai - 600071
                      </p>
                    </li>
                    <li>
                    
                      <p>helpinghandsavadi@gmail.com</p>
                    </li>
                    <li>
                      <p>9444885453 / 7358280982</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="map-container">
                <h1>map</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
