import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useUserContext } from "../../pages/UserContext";

function UserDelete() {
  const { id } = useParams();
  const { deleteUser, users } = useUserContext();
  const navigate = useNavigate();

  const handleConfirmDelete = () => {
    const userIndex = users.findIndex((user) => user.id === parseInt(id));
    if (userIndex !== -1) {
      deleteUser(userIndex);
      navigate("/user-list");
    } else {
      alert("Người dùng không tồn tại!");
    }
  };

  return (
    <div>
      <h1 className="text-center mt-5">Xác nhận xóa người dùng</h1>
      <p className="text-center mt-2">
        Bạn có chắc chắn muốn xóa người dùng này ?
      </p>
      <div className="d-flex  justify-content-center">
        <Button className="me-3" onClick={handleConfirmDelete} variant="danger">
          Xóa
        </Button>
        <Button onClick={() => navigate("/user-list")}>Hủy</Button>
      </div>
    </div>
  );
}

export default UserDelete;
