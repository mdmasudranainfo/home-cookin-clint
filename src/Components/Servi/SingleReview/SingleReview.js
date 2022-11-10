import React from "react";

const SingleReview = ({ rv }) => {
  return (
    <div className="card w-full bg-white text-black shadow-xl my-4">
      <div className="card-body ">
        <div className="flex justify-start items-center">
          <img className="h-15 w-10 rounded-full" alt="" src={rv?.photo} />
          <h3 className="text-2xl font-bold  ml-1">{rv?.name}</h3>
        </div>
        <p>{rv?.massege}</p>
        <p>{rv?.timeDate}</p>
      </div>
    </div>
  );
};

export default SingleReview;
