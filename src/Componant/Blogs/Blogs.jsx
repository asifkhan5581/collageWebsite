import React, { useState } from "react";
import "./blogs.css";
import BlogContant from "./BlogsContant";
import BlogMenu from "./BlogMenu";
const Blogs = () => {
  const blogHeading =
    " At IPS Institute, we empower you through education and skills. Find the latest tips, trends, and insights in professional training and  personal growth.";
  const [blogs, setblogs] = useState(BlogContant);
  const filtercat = (catitem) => {
    if (catitem === "all") {
      setblogs(BlogContant);
    } else {
      const update = BlogContant.filter((element) => {
        return element.category === catitem;
      });
      setblogs(update);
    }
  };
  return (
    <>
      <div className="main-blogs">
        <div className="blog-heading">
          <h1>Welcome to the IPS Institute Blog</h1>
          <p>{blogHeading}</p>
        </div>
      </div>
      <BlogMenu filtercat={filtercat} blogs={blogs}></BlogMenu>
      <div className="container-fluid mt-5">
        <div className="row">
          {blogs.map((contant, index) => {
            return (
              <div className="col-lg-3 col-md-4">
                <div className="blog-card mt-5" key={index}>
                  <div className="blog-image">
                    <img src={contant.BlogImage} alt="" />
                  </div>
                  <div className="card-body">
                    <h3>{contant.BlogTitle}</h3>
                    <div className="date">
                      <span>{contant.date}</span>
                      <span>{contant.time}</span>
                    </div>
                    <p>{contant.BlogDesc}</p>
                  </div>

                  <div className="card-button d-flex align-content-center justify-content-center">
                    <button>Read More</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="blog-button d-flex align-content-center justify-content-center mt-5 ">
          <button>Load More</button>
        </div>
      </div>
    </>
  );
};

export default Blogs;
