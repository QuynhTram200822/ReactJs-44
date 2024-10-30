import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    const correctEmail = "user@example.com";
    const correctPassword = "password123";
    if (email === correctEmail && pass === correctPassword) {
      dispatch({ type: "SUCCESS" });
      navigate("/dashboard");
    } else {
      dispatch({ type: "FAILURE" });
      alert("Sai thông tin, vui lòng nhập lại");
    }
  };
  return (
    <div className="App ">
      <div className="container ">
        <div className="logo justify-content-center mb-4  ">
          <img src="/logo.png" className="logo-img  " alt="" />
        </div>
        <div className="form justify-content-center mb-4 row ">
          <div className="col-md-8 col-12">
            <div className="card-group">
              <div className="card p-4">
                <div className="card-body">
                  <form>
                    <h1> Đăng nhập </h1>
                    <p className="text-muted"> Đăng nhập tài khoản của bạn </p>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Nhập Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faLock} />
                      </InputGroup.Text>
                      <Form.Control
                        type="password"
                        placeholder="Nhập Mật Khẩu"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                      />
                    </InputGroup>
                    <div className="d-flex justify-content-center col-12">
                      <Button onClick={handleLogin} className="px-4 sign-in">
                        Đăng nhập
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
              <div className=" sub-logo text-black py-5 card">
                <div className="text-center d-flex justify-content-center align-items-center card-body">
                  <img src="/logo_sub.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
