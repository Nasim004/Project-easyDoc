import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import AuthContext from "../../../context/AuthProvider";
// import { userLogout } from "../../utils/Constants";
import { useDispatch } from "react-redux";

function Header() {
  // useEffect(() => {
  //   let a = { auth };
  //   setAuth(a);
  // }, []);

  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  // const handleLogout = () => {
  //   axios.get(userLogout).then(() => {
  //     setAuth([]);
  //     navigate("/");
  //   });
  // };

  const dispatch = useDispatch
  const logout = ()=>{
     localStorage.clear();
     dispatch({type:"logout"})
     navigate("/")
  }

  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand className="easydoc" href="#home">
          easyDoc
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {auth ? (
              <span>
                <Button variant="outline-dark btn-rounded">
                  <Link className="userRegister" onClick={logout}>
                    Logout
                  </Link>
                </Button>
              </span>
            ) : (
              <span>
                <Link className="userRegister" to="/signup">
                  Register /{" "}
                </Link>
                <Link className="userLogin" to="/login">
                  Login
                </Link>
              </span>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
