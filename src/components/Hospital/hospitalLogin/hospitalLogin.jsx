import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "../../../utils/axios";
import { hospitalLogin } from "../../../utils/Constants";
import { change } from "../../../Redux/usernameReducer";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function HospitalLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    const data = JSON.stringify({
      username,
      password,
    });
    axios
      .post(hospitalLogin, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
        console.log(response.data.payload.username);
        localStorage.setItem(
          "hospital",
          String(response.data.payload.username)
        );
        if (response.status == 200) {
          dispatch(change(response.data.payload.username));
          setAuth(response);
          navigate("/hospital/panel");
        }
      });
  };

  return (
    <MDBContainer fluid>
      <form onSubmit={handleLogin}>
        <MDBCard className="text-black">
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  HOSPITAL LOGIN
                </p>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    label="Username"
                    id="form1"
                    type="text"
                    name="username"
                    className="w-100"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    label="Password"
                    id="form3"
                    name="password"
                    type="password"
                  />
                </div>

                <MDBBtn type="submit" className="mb-4" size="lg">
                  Login
                </MDBBtn>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center "
              >
                <MDBCardImage
                  className="loginpageimage"
                  src="../../../Images/Images 2.jpg"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </form>
    </MDBContainer>
  );
}
export default HospitalLogin;
