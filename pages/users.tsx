import useFetch from "@/hooks/useFetch";
import { UserType } from "@/types";
import Link from "next/link";
//import { useEffect, useState } from "react";

const Users = () => {
  const { data: users } = useFetch<UserType[]>(
    "http://localhost:3000/api/server/users"
  );

  // const [users, setUsers] = useState<User[]>([]);
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/server/users").then(async (res) =>
  //     setUsers(await res.json())
  //   );
  // }, []);

  if (!users) return <p>Loading...</p>;

  return (
    <>
      <h1>Users</h1>
      {users.map(({ id, name }) => (
        <div key={id}>
          <Link
            href={{
              pathname: "/user/[id]",
              query: { id },
            }}
          >
            <p>{name}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Users;
