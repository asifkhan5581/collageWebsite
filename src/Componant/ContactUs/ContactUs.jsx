import React from "react";
import "./contact.css";
function ContactUs() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <div className="contact-heading">
        <h1>Contact Us</h1>
      </div>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="contact-col col">
              <h1>
                Send us a message <i class="fa-regular fa-message"></i>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis ratione, adipisci perferendis ad enim doloremque
                voluptate et corrupti asperiores fugiat fuga facere consectetur
                natus placeat incidunt similique, animi earum pariatur accusamus
                numquam! Maxime eaque, similique dicta nihil asperiores est
                provident quos magni sit adipisci excepturi velit id distinctio
                itaque quaerat voluptatibus laborum quas,
              </p>
              <ul>
                <li>
                  <i class="fa-regular fa-envelope"></i>example123@gmail.com
                </li>
                <li>
                  <i class="fa-solid fa-phone-volume"></i>+92383-2838299
                </li>
                <li>
                  <i class="fa-solid fa-location-dot"></i>Address: itaque
                  quaerat voluptatibus laborum quas,
                </li>
              </ul>
            </div>
            <div className="contact-col col">
              <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter your name..."
                  required
                />
                <label>Phone Number</label>
                <input
                  type="number"
                  name="number"
                  id=""
                  placeholder="Enter your phone Number..."
                  required
                />
                <label>Write your message here</label>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Enter your message..."
                  required
                ></textarea>
                <br />
                <button type="submit" className="btnn">
                  Submit Now <i class="fa-solid fa-arrow-right-long"></i>
                </button>
                <span>{result}</span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
