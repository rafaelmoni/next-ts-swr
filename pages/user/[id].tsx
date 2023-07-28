import useFetch from "@/hooks/useFetch";
import { UserType } from "@/types";
import { NextPageContext } from "next";
//import { useEffect, useState } from "react";

const User = ({ id }: { id: string }) => {
  const { data: user } = useFetch<UserType>(
    `http://localhost:3000/api/server/user/${id}`
  );

  // const [user, setUser] = useState<UserType>();
  // useEffect(() => {
  //   fetch(`http://localhost:3000/api/server/user/${id}`).then(async (res) =>
  //     setUser(await res.json())
  //   );
  // }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <>
      <h1>User</h1>
      <span>{user.name}</span>
    </>
  );
};

export default User;

User.getInitialProps = async ({ query }: NextPageContext) => {
  const { id } = query;

  return { id };
};
