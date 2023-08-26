import React from "react";
import { useQuery } from "react-query";
import { getUser } from "../FetchFunc/fetchFunc";
import { useAppSelector } from "../app/hooks";
import { getId } from "../features/UserId";
import Loading from "./Loading";

const Detail = () => {
  // console.log(id);
  const id = useAppSelector(getId);
  const singleUserQuery = useQuery(["singleUser", id], () => getUser(id));
  // console.log(singleUserQuery.data.user);

  if (singleUserQuery.isLoading) {
    return <Loading />;
  }
  // console.log(singleUserQuery);
  let data: body = singleUserQuery?.data.user;

  return (
    <div>
      {singleUserQuery.isSuccess && (
        <div className=" max-w-8/12 rounded-md p-2 text-white bg-neutral-900 shadow-xl shadow-neutral-700 border-black border-1">
          <p>First Name - {data.firstName}</p>
          <p>Last Name - {data.lastName}</p>
          <p>Status - {data.status}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
