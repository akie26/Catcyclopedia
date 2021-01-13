import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderSVGLogo, HeaderSVGText } from "../assets/misc/SVG";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { signOut } from "../redux/actions/auth";

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
  const dispatch = useDispatch();
  if (props.uuid) {
    return (
      <nav>
        <div className="nav--wrap">
          <div className="logo-section">
            <HeaderSVGLogo />
            <HeaderSVGText />
          </div>
          <ul>
            {navlinks.map((link, ind) => (
              <li key={ind}>
                <NavLink activeClassName="link--active" to={link.link}>
                  {link.text}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                activeClassName="link--active"
                to="/gallery"
                onClick={() => dispatch(signOut())}
              >
                signOut
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  return (
    <nav>
      <div className="nav--wrap">
        <div className="logo-section">
          <HeaderSVGLogo />
          <HeaderSVGText />
        </div>
        <ul>
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
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    uuid: state.firebase.auth.uid,
  };
};

export default connect(mapStateToProps)(Navigation);
