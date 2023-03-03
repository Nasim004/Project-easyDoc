import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./header.css";
import { FaBook, FaBuilding, FaHospitalUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch
  const logout = () => {
    localStorage.clear();
    console.log('entered');
    navigate("/hospital/login")
    console.log('entered 2');

  }

  return (
    <Navbar className="navbar" >
      <Container >
        <Navbar.Brand className="easydoc" href="#home">
          <Link to='/hospital/panel' className="easydoc"  >easyDoc Hospital Admin Panel</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-">
          <Navbar.Text className="justify-content-around">
            <Button variant="outline-dark m-3">
              <Link to='/hospital/department' ><FaBuilding /> Departments</Link>
            </Button>
            <Button variant="outline-dark m-3 ">
              <FaHospitalUser /> Doctors
            </Button>
            <Button variant="outline-dark m-3">
              <FaBook /> Bookings
            </Button>
            <Button variant="outline-dark m-3">
              <Link className="logout" onClick={logout}>
                Logout
              </Link>
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
