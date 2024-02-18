import React, { useState } from "react";

const UserList = () => {
  const dummyData = [
    {
      id: 1,
      username: "Admin",
      email: "admin@gmail.com",
      password: "admin",
      phone: "01859522294",
    },
    {
      id: 2,
      username: "Shakif",
      email: "shakif@gmail.com",
      password: "shakif",
      phone: "01859843894",
    },
    {
      id: 1,
      username: "Asha",
      email: "asha@gmail.com",
      password: "asha",
      phone: "01854298344",
    },
  ];

  const [users, setUsers] = useState(dummyData);

  return (
    <div>
      <h2>List of Users</h2>
      <table>
        <thead>
          <tr>
            <th>User name</th>
            <th>Email</th>
            <th>password</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
