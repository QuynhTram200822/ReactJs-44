import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : []; // Khôi phục từ localStorage
  });
  // Hàm xóa người dùng
  const deleteUser = (id) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== id);
      localStorage.setItem("users", JSON.stringify(updatedUsers)); // Cập nhật localStorage
      return updatedUsers;
    });
  };

  // Hàm chỉnh sửa thông tin người dùng
  const editUser = (index, updatedUser) => {
    setUsers((prevUsers) => {
      const newUsers = [...prevUsers];
      newUsers[index] = updatedUser;
      localStorage.setItem("users", JSON.stringify(newUsers)); // Cập nhật localStorage
      return newUsers;
    });
  };

  return (
    <UserContext.Provider value={{ users, setUsers, deleteUser, editUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
