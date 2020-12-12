import React from "react";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import Styles from "./upvotePost.module.css";

export default function UpvotePost() {
  return (
    <div
      style={{ marginLeft: "15vw", marginRight: "15vw", marginBottom: "5vw" }}
    >
      <div className={Styles.content}>like the post ?</div>
      <div className={Styles.logos}>
        <a href="https://www.facebook.com/home.php?ref=wizard" target="_blank">
          <FaFacebookSquare style={{ color: "black", fontSize: "1.8vw" }} />
        </a>
        <a href="https://mobile.twitter.com/login" target="_blank">
          <FaTwitterSquare style={{ color: "black", fontSize: "1.8vw" }} />
        </a>
        <a href="https://www.linkedin.com/login/" target="_blank">
          <FaLinkedin style={{ color: "black", fontSize: "1.8vw" }} />
        </a>
      </div>
    </div>
  );
}
