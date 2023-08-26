import React from "react";
import Card from "./Card";

type PropsType = {
  data: fetchBody[];
};
type user = fetchBody;

// type id = id;

const Lists = ({ data }: PropsType) => {
  // console.log("data: ", data);
  return (
    <div className="flex flex-wrap gap-4">
      {data.map((user, i) => (
        <Card user={user} key={i} />
      ))}
    </div>
  );
};

export default Lists;
