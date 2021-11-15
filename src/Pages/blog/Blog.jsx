import React from "react";
//css
import classes from "./blog.module.css";
//components
import Sidebar from "../../Components/sidebar/Sidebar";

const Blog = () => {
  return (
    <div className={classes.blogParentDiv}>
      <Sidebar />
      <h4 className={classes.title}>Haven't started blogging yet... 😔</h4>
    </div>
  );
};

export default Blog;
