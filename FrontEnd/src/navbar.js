import React, { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { GiMuscleUp } from "react-icons/gi";
import Styles from "./navbar.module.css";
import { useHistory } from "react-router-dom";
import { RiMenuAddFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "./SignUpComponents/actions";
import { CgProfile } from "react-icons/cg";

export default function NavBar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [scrolled, setscrolled] = useState(false);
  const userName = useSelector((state) => state.userName);

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setscrolled(true);
    } else setscrolled(false);
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div>
      <div
        style={{
          display: "flex",
          backgroundColor: "white",
          alignItems: "center",
          width: "100vw",
        }}
      >
        <div style={{ flex: "3" }}></div>
        <div className={Styles.tel_phone_logo}>
          <FiPhoneCall />
        </div>
        <div className={Styles.tel_phone}>+ 92 - 34563 - 45</div>

        <div className={Styles.logout} onClick={() => dispatch(logOut())}>
          Logout
        </div>
      </div>

      <div className={scrolled ? Styles.navBarScrolled : Styles.navBar}>
        <div className={Styles.flexStart}>
          <div style={{ display: "flex" }}>
            <div className={Styles.webLogo}>
              &nbsp;
              <GiMuscleUp />
            </div>
            <div className={Styles.webName}>
              Gym<span style={{ color: "tomato" }}>Hut</span>
            </div>
          </div>
        </div>
        <div className={Styles.centerFlex}>
          <h3 className={Styles.navLinks} onClick={() => history.push("/")}>
            Home
          </h3>
          <h3
            className={Styles.navLinks}
            onClick={() => history.push("./courses")}
          >
            Courses
          </h3>
          <h3
            className={Styles.navLinks}
            onClick={() => history.push("./blogs")}
          >
            Blogs
          </h3>
          <h3
            className={Styles.navLinks}
            onClick={() => history.push("/membership")}
          >
            Membership
          </h3>
          <h3
            className={Styles.navLinks}
            onClick={() => history.push("/about")}
          >
            About Us
          </h3>
          <h3
            className={Styles.navLinks}
            onClick={() => history.push("/contact")}
          >
            Contact
          </h3>
        </div>
        <div className={Styles.endFlex}>
          <div style={{ display: "flex" }}>
            {userName === "" ? (
              <div
                className={Styles.login}
                onClick={() =>
                  history.push({
                    pathname: "./signUp",
                    type: "signup",
                    recentPage: window.location.pathname,
                  })
                }
              >
                Sign in
              </div>
            ) : (
              <div
                className={
                  userName.split(/[ ,]+/)[0].length > 6
                    ? Styles.longUserContainer
                    : Styles.userContainer
                }
              >
                <div className={Styles.profileLogo}>
                  <CgProfile />
                  &nbsp;
                </div>{" "}
                <div className={Styles.userName}>
                  {userName.split(/[ ,]+/)[0]}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={Styles.endFlex_1}>
          <RiMenuAddFill className={Styles.menu} />
        </div>
      </div>
    </div>
  );
}
