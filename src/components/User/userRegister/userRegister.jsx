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
import { userSignup } from "../../../utils/Constants";
import { useNavigate } from "react-router-dom";
import axios from "../../../utils/axios";

function UserSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [muncipality, setMuncipality] = useState("");
  const [district, setDistrict] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const data = JSON.stringify({
      name,
      email,
      phone,
      muncipality,
      district,
      password,
    });
    e.preventDefault();
    axios
      .post(userSignup, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.status);
        navigate("/login");
      });
  };

  return (
    <MDBContainer fluid>
      <form onSubmit={handleSubmit}>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  REGISTER
                </p>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon=" me-3" size="lg" />
                  <MDBInput
                    label="Your Full Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    id="form1"
                    type="text"
                    className="w-100"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon=" me-3" size="lg" />
                  <MDBInput
                    label="Your Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    id="form2"
                    type="email"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon=" me-3" size="lg" />
                  <MDBInput
                    label="Your Mobile Number"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    id="form5"
                    type="text"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon=" me-3" size="lg" />
                  <MDBInput
                    label="Your District"
                    value={district}
                    onChange={(e) => {
                      setDistrict(e.target.value);
                    }}
                    id="form6"
                    type="text"
                  />
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon=" me-3" size="lg" />
                  <MDBInput
                    label="Your Muncipality"
                    value={muncipality}
                    onChange={(e) => {
                      setMuncipality(e.target.value);
                    }}
                    id="form9"
                    type="text"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon=" me-3" size="lg" />
                  <MDBInput
                    label="Password"
                    id="form3"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                  />
                </div>

                <MDBBtn className="mb-4" size="lg">
                  Register
                </MDBBtn>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage src="../../../Images/Image1.jpg" fluid />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </form>
    </MDBContainer>
  );
}

export default UserSignup;
