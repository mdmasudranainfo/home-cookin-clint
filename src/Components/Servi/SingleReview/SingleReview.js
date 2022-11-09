import React from "react";

const SingleReview = ({ rv }) => {
  return (
    <div className="card w-full bg-primary text-black shadow-xl my-4">
      <div className="card-body  text-center">
        <div className="flex justify-center items-center">
          <h3 className="text-2xl font-bold  ">{rv?.name}</h3>
          <img className="h-15 w-10 rounded-full" alt="" src={rv?.photo} />
        </div>
        <p>{rv?.massege}</p>
      </div>
    </div>
  );
};

export default SingleReview;
