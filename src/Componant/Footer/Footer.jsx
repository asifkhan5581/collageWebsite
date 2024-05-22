import React from "react";
import logo from "../../images/logo.jpg";
import "./Footer.css";
const List = [
  "Sign",
  "Vinyl Banner",
  "Car Megnitics",
  "Bumper Sticker",
  "Decals/ Stricker",
  "Accessories",
];
const about =
  " Our custom signs are printed on high quality materials with some of the most advanced printing equipment available.";
const facebook = <i className="fab fa-facebook-f"></i>;
const instagram = <i className="fab fa-instagram"></i>;
const twitter = <i className="fab fa-twitter"></i>;
const loc = "Time:Open today :09:00 a.m. – 06:00 p.m.";
const phone = "Phone: 000-123-456";
const email = "Email: info@Createsign4u.com";
const loction = "Loction: Located in Hamilton, ON";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-column col-lg-3 col-md-6 ">
              <div className="footer-logo">
                <img src={logo} alt="Logo" />
              </div>
              <p className=" mt-2">{about}</p>
              <div className="social-icons">
                <a href="#">{facebook}</a>
                <a href="#">{twitter}</a>
                <a href="#">{instagram}</a>
              </div>
            </div>
            <div className="footer-column col-lg-3 col-md-6 ">
              <h3>Helps</h3>
              <ul>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Frequently Ask Question</a>
                </li>
                <li>
                  <a href="#">Priceing</a>
                </li>
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">Order Status</a>
                </li>
              </ul>
            </div>
            <div className="footer-column col-lg-3 col-md-6 ">
              <h3>Product</h3>
              <ul>
                {List.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
            <div className="footer-column col-lg-3 col-md-6 ">
              <h3>Get In Touch</h3>
              <p>{email}</p>
              <p>{phone}</p>
              <p>{loction}</p>
              <p>{loc}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
