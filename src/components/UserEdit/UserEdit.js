import React, { useEffect, useState } from "react";
import { useUserContext } from "../../pages/UserContext";
import { useParams, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./UserEdit.css";

function UserEdit() {
  const { users, editUser } = useUserContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    age: "",
    address: "",
    gender: "",
  });

  useEffect(() => {
    const user = users[id];
    if (user) {
      setFormData(user);
    }
  }, [id, users]);

  const handleUpdate = (e) => {
    e.preventDefault();
    editUser(id, formData);
    navigate("/user-list");
  };

  const handleCancel = () => {
    navigate("/user-list");
  };

  return (
    <div className="container">
      <h2 className="text-center mt-5">Chỉnh sửa người dùng</h2>
      <form onSubmit={handleUpdate}>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Tên"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            placeholder="Tuổi"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            placeholder="Địa chỉ"
          />
        </Form.Group>
        <Form.Select
          className="mb-3"
          value={formData.gender}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          aria-label="Default select example"
        >
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
        </Form.Select>
        <div className="d-flex  justify-content-center ">
          <Button type="submit" variant="primary" className="me-3">
            Cập nhật
          </Button>
          <Button type="button" onClick={handleCancel} variant="danger">
            Hủy
          </Button>
        </div>
      </form>
    </div>
  );
}

export default UserEdit;
