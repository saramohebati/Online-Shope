import React, { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((json) => {
        setUser(json);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="h-full p-10">
      <div className="flex items-center pt-10 border-b">
        <div className="uppercase text-sm font-semibold">
          <h1 className="font-bold font-semibold">Profile</h1>
        </div>
      </div>
      <div className="flex text-center flex-col pt-4">
        {user.map((item) => (
          <div key={item.id}>
            <div>User Name:{item.username}</div>
            <div>Email: {item.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
