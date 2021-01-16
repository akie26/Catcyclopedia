import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HeaderSVGLogo, HeaderSVGText } from "../assets/misc/SVG";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { signOut } from "../redux/actions/auth";
import { FaAlignJustify } from "react-icons/fa";

const navlinks = [
  {
    text: "gallery",
    link: "/gallery",
  },
  {
    text: "breeds",
    link: "/breeds",
  },
  {
    text: "bookmarks",
    link: "/bookmarks",
  },
];

const Navigation = (props) => {
  const node = useRef();
  const [className, SetClassName] = useState();
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    SetClassName(`${showNav ? "navigation-open" : ""}`);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [showNav]);
  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setShowNav(false);
  };
  const dispatch = useDispatch();
  if (props.uuid) {
    return (
      <section>
        <div className="nav--wrap">
          <div className="logo-section">
            <HeaderSVGLogo />
            <HeaderSVGText />
          </div>
          <nav ref={node} className={`navigation ${className}`}>
            <section
              className="navigation__icon"
              onClick={() => setShowNav((showNav) => !showNav)}
            >
              <span className="topBar"></span>
              <span className="middleBar"></span>
              <span className="bottomBar"></span>
            </section>

            <ul className="navigation__ul">
              {navlinks.map((link, index) => (
                <li
                  key={index}
                  onClick={() => setShowNav((showNav) => !showNav)}
                >
                  <NavLink to={link.link}>{link.text}</NavLink>
                </li>
              ))}
              <NavLink activeClassName="link--active" to="/register">
                signIn
              </NavLink>
            </ul>
          </nav>
          <ul className="navigation--ul">
            {navlinks.map((link, ind) => (
              <li key={ind}>
                <NavLink activeClassName="link--active" to={link.link}>
                  {link.text}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink onClick={() => dispatch(signOut())} to="/">
                signOut
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    );
  }
  return (
    <section>
      <div className="nav--wrap">
        <div className="logo-section">
          <HeaderSVGLogo />
          <HeaderSVGText />
        </div>
        <nav ref={node} className={`navigation ${className}`}>
          <section
            className="navigation__icon"
            onClick={() => setShowNav((showNav) => !showNav)}
          >
            <span className="topBar"></span>
            <span className="middleBar"></span>
            <span className="bottomBar"></span>
          </section>

          <ul className="navigation__ul">
            {navlinks.map((link, index) => (
              <li key={index} onClick={() => setShowNav((showNav) => !showNav)}>
                <NavLink to={link.link}>{link.text}</NavLink>
              </li>
            ))}
            <NavLink activeClassName="link--active" to="/register">
              signIn
            </NavLink>
          </ul>
        </nav>
        <ul className="navigation--ul">
          {navlinks.map((link, ind) => (
            <li key={ind}>
              <NavLink activeClassName="link--active" to={link.link}>
                {link.text}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink activeClassName="link--active" to="/register">
              signIn
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    uuid: state.firebase.auth.uid,
  };
};

export default connect(mapStateToProps)(Navigation);
