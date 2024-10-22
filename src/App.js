import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import ReCAPTCHA from "react-google-recaptcha";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [capVal, setCapVal] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", pass);
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
                    <div className="justify-content-center mb-4 form">
                      <ReCAPTCHA
                        sitekey="6LeClmgqAAAAAAYunSq9Bhq9wjyRyLEq76FqRsQA"
                        onChange={(val) => {
                          setCapVal(val);
                        }}
                      />
                    </div>
                    <div className="d-flex justify-content-center col-12">
                      <Button
                        disabled={!capVal}
                        onClick={handleSubmit}
                        className="px-4 sign-in"
                      >
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

export default App;
