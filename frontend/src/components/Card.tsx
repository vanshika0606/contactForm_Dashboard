import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { deleteUser } from "../FetchFunc/fetchFunc";
import { useAppDispatch } from "../app/hooks";
import { readDataForUpdate, readId } from "../features/UserId";

type PropsType = {
  user: fetchBody;
};

const Card = ({ user }: PropsType) => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  const mutation = useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("lists");
    },
  });

  const onDeleteUser = (id: (typeof user)["_id"]) => {
    mutation.mutate(id);
  };

  const setId = (id: (typeof user)["_id"]) => {
    console.log(id);
    dispatch(readId({ id }));
  };

  const getDataForUpdate = (user: fetchBody) => {
    dispatch(readDataForUpdate(user));
  };

  return (
    <div className=" max-w-[18rem] rounded-md p-2 text-white bg-neutral-900 shadow-xl shadow-neutral-700 border-black border-1">
      <p>First Name - {user.firstName}</p>
      <p>Last Name - {user.lastName}</p>
      <p>Status - {user.status}</p>

      <div className="flex flex-wrap gap-2 mt-2">
        <Link to="/detail">
          <button
            className="border border-1 rounded-full py-0.5 px-2 bg-cyan-800 hover:bg-cyan-700 shadow-sm shadow-neutral-700"
            onClick={() => setId(user._id)}
          >
            View Details
          </button>
        </Link>
        <Link to="/updateContact">
          <button
            className="border border-1 rounded-full py-0.5 px-2 bg-emerald-700 hover:bg-emerald-800 shadow-sm shadow-neutral-700"
            onClick={() => getDataForUpdate(user)}
          >
            Edit
          </button>
        </Link>

        <button
          className="border border-1 rounded-full py-0.5 px-2 bg-red-600 hover:bg-red-800 shadow-sm shadow-neutral-700"
          onClick={() => onDeleteUser(user._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
