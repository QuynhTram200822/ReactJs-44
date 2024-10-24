import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  // Hàm xóa người dùng
  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  // Hàm chỉnh sửa thông tin người dùng
  const editUser = (index, updatedUser) => {
    setUsers((prevUsers) => {
      const newUsers = [...prevUsers];
      newUsers[index] = updatedUser;
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
