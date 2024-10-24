import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useUserContext } from "../../pages/UserContext";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import ReCAPTCHA from "react-google-recaptcha";

import { useFormik } from "formik";
import * as Yup from "yup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faLocationDot,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

let nextId = 0;

function SignUp() {
  const [isChecked, setIsChecked] = useState(true);
  const [capVal, setCapVal] = useState(null);

  const { setUsers } = useUserContext();

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      age: "",
      address: "",
      gender: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email không đúng định dạng!")
        .required("Email không thể trống!"),
      password: Yup.string().required("Mật khẩu không thể trống!"),
      name: Yup.string().required("Name không thể trống!"),
      age: Yup.number()
        .required("Tuổi không thể trống!")
        .positive("Tuổi phải lớn hơn 0!")
        .integer("Tuổi phải là số nguyên!"),
      address: Yup.string()
        .required("Địa chỉ không thể trống!")
        .max(20, "Địa chỉ tối đa có 6 ký tự"),
    }),
    onSubmit: (values) => {
      const gender = isChecked ? "Nam" : "Nữ";
      const newUser = {
        id: nextId++, // Tạo ID duy nhất
        ...values,
        gender,
      };
      console.log(newUser);
      setUsers((prevUsers) => [...prevUsers, newUser]); // Thêm người dùng mới vào mảng
      navigate("/user-list");
    },
  });

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Đổi trạng thái checkbox
  };

  return (
    <div className="App ">
      <div className="container ">
        <div className="logo justify-content-center mb-4">
          <img src="/logo.png" className="logo-img" alt="" />
        </div>
        <div className="form justify-content-center mb-4 row ">
          <div className="col-md-8 col-12">
            <div className="card-group">
              <div className="card p-4">
                <div className="card-body">
                  <form onSubmit={formik.handleSubmit}>
                    <h1>Đăng ký</h1>
                    <p className="text-muted">Đăng ký tài khoản của bạn</p>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Nhập Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      />
                    </InputGroup>
                    {formik.errors.email && formik.touched.email && (
                      <p> {formik.errors.email}</p>
                    )}
                    <InputGroup className="mb-3">
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faLock} />
                      </InputGroup.Text>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Nhập Mật Khẩu"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                      />
                    </InputGroup>
                    {formik.errors.password && formik.touched.password && (
                      <p> {formik.errors.password}</p>
                    )}
                    <InputGroup className="mb-3">
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser} />
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Họ và tên"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                      />
                    </InputGroup>
                    {formik.errors.name && formik.touched.name && (
                      <p> {formik.errors.name}</p>
                    )}
                    <InputGroup className="mb-3">
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faHeart} />
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Nhập tuổi của bạn"
                        name="age"
                        value={formik.values.age}
                        onChange={formik.handleChange}
                      />
                    </InputGroup>
                    {formik.errors.age && formik.touched.age && (
                      <p> {formik.errors.age}</p>
                    )}
                    <InputGroup className="mb-3">
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faLocationDot} />
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Nhập địa chỉ"
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                      />
                    </InputGroup>
                    {formik.errors.address && formik.touched.address && (
                      <p> {formik.errors.address}</p>
                    )}
                    <div className="justify-content-center mb-4">
                      <Form.Check
                        name="gender"
                        // label="Nam"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                    </div>

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
                        type="submit"
                        className="px-4 sign-in"
                      >
                        Đăng ký
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="sub-logo text-black py-5 card">
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

export default SignUp;
