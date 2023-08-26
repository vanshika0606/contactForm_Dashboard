import React, { useState } from "react";
import Lists from "./Lists";
import { useNavigate } from "react-router-dom";
import { getLists } from "../FetchFunc/fetchFunc";
import { useQuery } from "react-query";
import Loading from "./Loading";

const NoContactsPage = () => {
  const listsQuery = useQuery("lists", getLists);
  // let data: body[];
  const navigate = useNavigate();
  const AddContactForm = () => {
    navigate("/addContact");
  };
  // console.log(listsQuery.data);

  if (listsQuery.isLoading) {
    return <Loading />;
  }

  const NotFoundList = () => {
    return (
      <div className="border-2 border-black flex p-2 w-1/3 text-xl items-center m-auto">
        <div className="text-4xl font-bold w-1/3">&#215;</div>
        <div className="whitespace-pre-wrap">
          No Contact Found Please add Contact from Create Contact Form
        </div>
      </div>
    );
  };

  return (
    <div className="p-2 ">
      <button
        className="rounded-full border-2 border-black text-lg py-1 px-4 bg-neutral-800
            text-white  hover:bg-neutral-900 mb-3"
        onClick={AddContactForm}
      >
        Create Contact
      </button>
      {listsQuery.data.users.length === 0 ? (
        <NotFoundList />
      ) : (
        <Lists data={listsQuery.data.users} />
      )}
    </div>
  );
};

export default NoContactsPage;
