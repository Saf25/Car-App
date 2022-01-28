import React from "react";
import "./Home.css";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { isAuth } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <div className="bg-bg">
      <div className="container">
        <h1>Our Mission: To&nbsp;Keep Your Car On&nbsp;the&nbsp;Road</h1>

        <div>Welcome to&nbsp;German Car Service!</div>
        <div className="btn_order-wrap btn-wrap">
          <br></br>
          <Button
            className="btn btn-warning"
            onClick={() => {
              if (isAuth) navigate("/profile");
              else navigate("/signup");
            }}
          >
            Schedule Service
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
