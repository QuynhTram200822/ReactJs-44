import React from "react";
import "./SignIn.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";

import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function SignIn() {
  return (
    <div className="App ">
      <div className="container ">
        <div className="logo justify-content-center mb-0  ">
          <img src="/logo.png" className="logo-img  " alt="" />
        </div>
        <div className="form justify-content-center row ">
          <div className="col-md-8 col-12">
            <div className="card-group">
              <div className="card p-4">
                <div className="card-body">
                  <form>
                    <h1 className=" text"> Đăng nhập </h1>
                    <p className="text-muted">
                      {" "}
                      Đăng nhập tài khoản học viên của bạn{" "}
                    </p>
                    <div className="d-flex justify-content-center align-items-center col-12">
                      <span>
                        <GoogleLogin
                          onSuccess={(credentialResponse) => {
                            const decoded = jwtDecode(
                              credentialResponse?.credential
                            );
                            console.log(decoded);
                          }}
                          onError={() => {
                            console.log("Login Failed");
                          }}
                        />
                      </span>
                    </div>
                    <div className="d-flex justify-content-center col-12">
                      <Button className="mt-3 sign-in ">Về trang chủ</Button>
                    </div>
                  </form>
                </div>
              </div>
              <div className=" sub-logo text-black py-5 card">
                <div className="text-center d-flex justify-content-center align-items-center flex-column card-body">
                  <img className="avatar" src="/avatar.png" alt="" />
                  <h2 className="mt-2 text">
                    Mentor Lau Le - Kỹ sư công nghệ phần mềm
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
