import React from "react";
import { Table, Button } from "react-bootstrap";
import { useUserContext } from "../../pages/UserContext";
import { useNavigate } from "react-router-dom";

function Result() {
  const { users } = useUserContext();
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/user-edit/${id}`); // Chuyển hướng đến trang chỉnh sửa
  };

  const handleDelete = (id) => {
    navigate(`/user-delete/${id}`); // Navigate to delete confirmation page
  };

  return (
    <div>
      <h1 className="text-center mt-5">Kết quả đăng ký</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Email</th>
            <th>Mật khẩu</th>
            <th>Họ và tên</th>
            <th>Tuổi</th>
            <th>Địa chỉ</th>
            <th>Giới tính</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user.id}>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.address}</td>
                <td>{user.gender}</td>
                <td>
                  <Button
                    onClick={() => handleEdit(index)}
                    className="me-3"
                    variant="primary"
                  >
                    Sửa
                  </Button>
                  <Button
                    onClick={() => handleDelete(user.id)}
                    variant="danger"
                  >
                    Xóa
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">Không có người dùng nào được đăng ký.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default Result;
