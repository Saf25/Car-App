import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/userSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuth, userInfo } = useSelector((state) => state.user);
  return (
    <div className="n">
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/">Home</Link>
        {!isAuth ? (
          <>
            <Link to="/signIn">SignIn</Link>
            <Link to="/signUp">SignUp</Link>
          </>
        ) : (
          <>
            <p style={{ cursor: "pointer" }} onClick={() => dispatch(logout())}>
              Logout
            </p>
            <Link to="/profile">{userInfo.name}</Link>
          </>
        )}
        <Link to="/posts">My Cars</Link>
        <Link to="/contactus">Contact Us</Link>
      </nav>
    </div>
  );
};
export default Navbar;
