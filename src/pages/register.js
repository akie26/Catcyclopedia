import React from "react";
import { signIn, signUp } from "../redux/actions/auth";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Register = (props) => {
  const useInput = ({ type }) => {
    const [value, setValue] = React.useState("");
    const input = (
      <input
        className="input"
        placeholder={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
      />
    );
    return [value, input];
  };
  const [email, setEmail] = useInput({ type: "email" });
  const [password, setPassword] = useInput({ type: "password" });

  const [signUpForm, setSignUp] = React.useState(false);

  const creds = {
    email: email,
    password: password,
  };
  const [validated, setValidate] = React.useState(false);
  const dispatch = useDispatch();
  const signInButton = (creds) => {
    if (!creds.email && !creds.password) {
      setValidate(true);
    } else {
      setValidate(false);
      dispatch(signIn(creds));
    }
  };

  const signUpButton = (creds) => {
    if (!creds.email && !creds.password) {
      setValidate(true);
    } else {
      setValidate(false);
      dispatch(signUp(creds));
    }
  };

  if (props.uid) return <Redirect to="/bookmarks" />;

  return !signUpForm ? (
    <section>
      <div className="main">
        <p className="sign" align="center">
          Sign in
        </p>
        <div className="form1">
          {setEmail}
          <span style={validated ? { opacity: "1" } : { opacity: "0" }}>
            Email cant be blank!
          </span>
          {setPassword}
          <span style={validated ? { opacity: "1" } : { opacity: "0" }}>
            password cant be blank!
          </span>
          <button onClick={() => signInButton(creds)} className="submit">
            SIGN IN
          </button>
        </div>
        <p className="forgot" align="center">
          <button onClick={() => setSignUp(true)} href="#">
            DON'T HAVE AN ACCOUNT?
          </button>
        </p>
      </div>
    </section>
  ) : (
    <section>
      <div className="main">
        <p className="sign" align="center">
          Sign Up
        </p>
        <div className="form1">
          {setEmail}
          <span style={validated ? { opacity: "1" } : { opacity: "0" }}>
            Email cant be blank!
          </span>
          {setPassword}
          <span style={validated ? { opacity: "1" } : { opacity: "0" }}>
            Password cant be blank!
          </span>
          <button onClick={() => signUpButton(creds)} className="submit">
            SIGN UP
          </button>
        </div>
        <p className="forgot" align="center">
          <button onClick={() => setSignUp(false)} href="#">
            ALREADY HAVE AN ACCOUNT?
          </button>
        </p>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
  };
};

export default connect(mapStateToProps)(Register);
