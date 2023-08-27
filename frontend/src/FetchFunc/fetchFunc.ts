import { initial } from "../features/UserId";

const BASE_URL = "https://contactform-wnpu.onrender.com"

export const getLists = async () => {
  const result = await fetch(BASE_URL+"/api/get")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });

  return result;
};

export const postContact = async (body: body) => {
  const { firstName, lastName, status } = body;
  const result = await fetch(BASE_URL +"/api/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      status,
    }),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });

  return result;
};

export const getUser = async (id: id) => {
  const result = await fetch(BASE_URL+"/api/get/" + id)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });

  return result;
};

export const deleteUser = async (id: id) => {
  const result = await fetch(BASE_URL + "/api/delete/" + id, {
    method: "DELETE",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });

  return result;
};

export const updateUser = async (body: initial) => {
  const { firstName, lastName, status, id } = body;
  const result = await fetch(BASE_URL + "/api/update/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      status,
    }),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });

  return result;
};
