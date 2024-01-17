import { Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

function SignIn() {
  const { setExpiryTime, setAuth, setUserRole } = useContext(AuthContext);
  const [form, SetForm] = useState({
    email: "islamtalha01@gmail.com",
    password: "talha123",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        form,
        { withCredentials: true }
      );
      const accessToken = response?.data.data?.accessToken;
      const role = response?.data.data?.userRole;
      const userName = response?.data.data?.userName;

      setAuth({ user: userName, isAuthenticated: true, userRole: role,token:accessToken });
      localStorage.setItem('token',accessToken)
      toast.success("Logged In Successfully", {
        position: toast.POSITION.TOP_LEFT,
      });
      if (role === "admin") 
      {
        navigate("admin/dashboard");
      }
     else{
      navigate("/");
     }
  
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message, {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };
  const setField = (field, value) => {
    SetForm({ ...form, [field]: value });
    console.log(form);
  };
  return (
    <>
      <Row style={{ justifyContent: "center", marginTop: "50px" }}>
        <Col xs={12} md={8} lg={4}>
          <h1>Jobeet App Login</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your email"
                required
                onChange={(e) => setField("email", e.target.value)}
                value={form.email}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password "
                required
                onChange={(e) => setField("password", e.target.value)}
                value={form.password}
              />
            </Form.Group>
            <Form.Group>
              <Button type="submit" className="my-2" variant="dark">
                Log in
              </Button>
            </Form.Group>
            <div>
              No Account Already, Create One by Clicking Here
              <span style={{ marginleft: "20px" }}>
                <Link to={"/signUp"}> Register </Link>
              </span>
            </div>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default SignIn;
