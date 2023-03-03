import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import axios from "../../../utils/axios";
import { change } from "../../../Redux/emailReducer";
import { adminLogin } from "../../../utils/Constants";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    const data = JSON.stringify({
      email,
      password,
    });
    axios
      .post(adminLogin, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("admin", String(response.data.payload.email));
        if (response.status == 200) {
          dispatch(change(response.data.payload.email));
          navigate("/admin/panel");
        }
      });
  };

  return (
    <MDBContainer fluid>
      <form onSubmit={handleLogin}>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Login
                </p>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    label="Email"
                    id="form1"
                    type="text"
                    name="email"
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
                className="order-1 order-lg-2 d-flex align-items-center  "
              >
                <MDBCardImage
                  className="loginpageimage"
                  src="../../../Images/Images 3.jpg"
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

export default AdminLogin;
