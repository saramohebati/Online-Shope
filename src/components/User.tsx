import { useEffect, useState } from "react";

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
          <h1 className="font-b font-semibold">Profile</h1>
        </div>
      </div>
      <div className="flex text-center flex-col pt-4 font-bold">
        {user.slice(0, 1).map((item) => (
          <div key={item["id"]}>
            <div>User Name: {item["username"]}</div>
            <div>Email: {item["email"]}</div>
            <div>Phone: {item["phone"]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
