import React from "react";

const BlogMenu = ({ filtercat }) => {
  return (
    <>
      <div className="blogs-menu">
        <ul>
          <li onClick={() => filtercat("all")}>All</li>
          <li onClick={() => filtercat("latest")}>Latest</li>
          <li onClick={() => filtercat("mostpopular")}>Most Popular</li>
          <li onClick={() => filtercat("mostread")}>Most Read</li>
        </ul>
      </div>
    </>
  );
};

export default BlogMenu;
