import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice";

const UsersView = () => {
  const { isLoading, error, users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold text-black my-2 text-center">User data</h1>
      {isLoading && <h1>User data is loading ...</h1>}
      {error && <h2>{error.message}</h2>}
      <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mx-10">
        {users &&
          users?.map((user) => {
            const { id, name, email, username } = user;
            return (
              <div key={id} className="bg-orange-400 text-white p-10 rounded-lg text-center">
                <h1>{name}</h1>
                <h3>{username}</h3>
                <p>{email}</p>
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default UsersView;
