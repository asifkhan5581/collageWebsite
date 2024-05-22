import React, { useState } from "react";
import "./registration.css";
import jsPDF from "jspdf";

const Registration = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    dob: "",
    qualification: "",
    totalMarks: "",
    obtainedMarks: "",
    percentage: "",
    grade: "",
    course: "",
    board: "",
    contactNo: "",
    email: "",
    homeAddress: "",
    permissionAgreement: false,
    registrationFee: false,
    monthlyFee: false,
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCourseChange = (e) => {
    setFormData({
      ...formData,
      course: e.target.value,
    });
  };

  const handleBoardChange = (e) => {
    setFormData({
      ...formData,
      board: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    generatePDF();
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setTextColor(0, 0, 0); // Black color

    // Add top header
    doc.setFontSize(20);
    doc.setTextColor(0, 0, 139); // Dark blue
    doc.text("Course Registration Form", 105, 10, { align: "center" });

    // Add the user image
    if (image) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const imgData = event.target.result;
        doc.addImage(imgData, "JPEG", 150, 20, 50, 50);
        addTextContent();
      };
      reader.readAsDataURL(image);
    } else {
      addTextContent();
    }

    function addTextContent() {
      doc.setFontSize(12);

      doc.setTextColor(0, 0, 0); // Black color

      doc.text(`Student's Name: ${formData.studentName}`, 10, 80);
      doc.text(`Father's Name: ${formData.fatherName}`, 10, 90);
      doc.text(`Date of Birth: ${formData.dob}`, 10, 100);
      doc.text(`Qualification: ${formData.qualification}`, 10, 110);
      doc.text(`Total Marks: ${formData.totalMarks}`, 10, 120);
      doc.text(`Obtained Marks: ${formData.obtainedMarks}`, 10, 130);
      doc.text(`Percentage: ${formData.percentage}`, 10, 140);
      doc.text(`Grade: ${formData.grade}`, 10, 150);
      doc.text(`Course: ${formData.course}`, 10, 160);
      doc.text(`Board: ${formData.board}`, 10, 170);
      doc.text(`Contact No: ${formData.contactNo}`, 10, 180);
      doc.text(`Email: ${formData.email}`, 10, 190);
      doc.text(`Home Address: ${formData.homeAddress}`, 10, 200);
      doc.text(
        `Permission Agreement: ${formData.permissionAgreement ? "Yes" : "No"}`,
        10,
        210
      );
      doc.text(
        `Registration Fee Paid: ${formData.registrationFee ? "Yes" : "No"}`,
        10,
        220
      );
      doc.text(
        `Monthly Fee Paid: ${formData.monthlyFee ? "Yes" : "No"}`,
        10,
        230
      );

      // General Instructions
      doc.setFontSize(16);
      doc.setTextColor(255, 255, 255); // White color
      doc.setFillColor(0, 0, 139); // Dark blue
      doc.rect(10, 240, 190, 10, "F");
      doc.text("General Instructions", 105, 245, { align: "center" });
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0); // Black color
      doc.text("1. Please ensure all information is accurate.", 10, 260);
      doc.text("2. Registration fee is non-refundable.", 10, 270);
      doc.text(
        "3. Keep a copy of the submitted form for your records.",
        10,
        280
      );
      doc.setFillColor(0, 0, 139); // Dark blue
      doc.rect(0, 285, 210, 10, "F");
      doc.setTextColor(255, 255, 255); // White color
      doc.text(
        "Address: Sadiqabad Phatak Khar District Bajaur Contact no.(0942220030/03038249185)",
        105,
        290,
        { align: "center" }
      );

      // Save the PDF
      doc.save("course-application.pdf");
    }
  };

  return (
    <div>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="header">
          <h3>Students Registration Form</h3>
        </div>

        <div className="form-group">
          <label>Upload Image *</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Student's Name *</label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Father's Name *</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Date of Birth *</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Higher Qualification *</label>
          <textarea
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Total Marks *</label>
            <input
              type="number"
              name="totalMarks"
              value={formData.totalMarks}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Obtained Marks *</label>
            <input
              type="number"
              name="obtainedMarks"
              value={formData.obtainedMarks}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Percentage *</label>
            <input
              type="number"
              name="percentage"
              value={formData.percentage}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Grade *</label>
            <input
              more
              ChatGPT
              jsx
              Copy
              code
              type="text"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Select Course *</label>
          <div className="checkbox-group">
            <label>
              <input
                type="radio"
                name="course"
                value="DIT"
                checked={formData.course === "DIT"}
                onChange={handleCourseChange}
                required
              />
              Diploma in Information Technology (DIT) - 01 Year
            </label>
            <label>
              <input
                type="radio"
                name="course"
                value="English"
                checked={formData.course === "English"}
                onChange={handleCourseChange}
                required
              />
              English Language Course
            </label>
            <label>
              <input
                type="radio"
                name="course"
                value="ComputerShort"
                checked={formData.course === "ComputerShort"}
                onChange={handleCourseChange}
                required
              />
              Computer Short Courses
            </label>
            <label>
              <input
                type="radio"
                name="course"
                value="WebDesign"
                checked={formData.course === "WebDesign"}
                onChange={handleCourseChange}
                required
              />
              Web Design and Development
            </label>
            <label>
              <input
                type="radio"
                name="course"
                value="Technical"
                checked={formData.course === "Technical"}
                onChange={handleCourseChange}
                required
              />
              Technical Courses
            </label>
            <label>
              <input
                type="radio"
                name="course"
                value="NA"
                checked={formData.course === "NA"}
                onChange={handleCourseChange}
                required
              />
              N/A - New Player
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Select Board *</label>
          <div className="checkbox-group">
            <label>
              <input
                type="radio"
                name="board"
                value="BTC"
                checked={formData.board === "BTC"}
                onChange={handleBoardChange}
                required
              />
              Board of Technical & Commerce Education
            </label>
            <label>
              <input
                type="radio"
                name="board"
                value="KPTB"
                checked={formData.board === "KPTB"}
                onChange={handleBoardChange}
                required
              />
              Khyber Pakhtunkhwa Trade Testing Board
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Contact No *</label>
          <input
            type="tel"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Home Address *</label>
          <textarea
            name="homeAddress"
            value={formData.homeAddress}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="permissionAgreement"
              checked={formData.permissionAgreement}
              onChange={handleChange}
              required
            />
            I agree and give my permission
          </label>
        </div>

        <div className="form-group">
          <label>
            I Agree to all Rules and Regulations of the College and will abide
            by as and when notified or modified accordingly.
          </label>
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="registrationFee"
              checked={formData.registrationFee}
              onChange={handleChange}
              required
            />
            Registration Fee - $4,100.00
          </label>
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="monthlyFee"
              checked={formData.monthlyFee}
              onChange={handleChange}
              required
            />
            Monthly Fee - $600.00
          </label>
        </div>

        <p>The Amount is in Pak Rupees</p>

        <div className="form-group">
          <label>Stripe Credit Card Payment *</label>
          <input
            type="text"
            name="creditCard"
            disabled
            placeholder="Credit Card field is disabled, Stripe keys are missing."
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Registration;
