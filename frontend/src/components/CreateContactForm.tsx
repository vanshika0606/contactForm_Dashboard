import React, { useState, ChangeEvent } from "react";
import { postContact } from "../FetchFunc/fetchFunc";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

const CreateContactForm = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [body, setBody] = useState<body>({
    firstName: "",
    lastName: "",
    status: "",
  });

  const onFirstChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBody((prevBody) => ({
      ...prevBody,
      [e.target.name]: e.target.value,
    }));
  };

  const onLastChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBody((prevBody) => ({
      ...prevBody,
      [e.target.name]: e.target.value,
    }));
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBody((prevBody) => ({
      ...prevBody,
      [e.target.name]: e.target.value,
    }));
  };

  const mutation = useMutation(postContact, {
    onSuccess: () => {
      queryClient.invalidateQueries("lists");
    },
  });

  const onSaveContact = () => {
    console.log(body);
    mutation.mutate(body);
    navigate("/");
    // postContact(body);
  };

  return (
    <div className="text-md">
      <form className="flex flex-col w-2/5 gap-1 m-auto bg-neutral-800 text-white p-5">
        <label htmlFor="firstName" className="mt-2">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="outline-none px-2 text-black"
          value={body.firstName}
          onChange={onFirstChange}
        />
        <label htmlFor="lastName" className="mt-1">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="outline-none px-2 text-black"
          value={body.lastName}
          onChange={onLastChange}
        />
        <p className="mt-1">Status</p>
        <label className="status">
          <input
            type="radio"
            name="status"
            value="active"
            onChange={onStatusChange}
          />
          Active
        </label>
        <label className="status">
          <input
            type="radio"
            name="status"
            value="inactive"
            onChange={onStatusChange}
          />
          In Active
        </label>
        <button
          type="button"
          className="border border-1 rounded-full py-0.5 px-2 bg-neutral-700 
                    text-white hover:bg-neutral-900 shadow-sm shadow-neutral-700 mt-2"
          onClick={onSaveContact}
        >
          Save Contact
        </button>
      </form>
    </div>
  );
};

export default CreateContactForm;
