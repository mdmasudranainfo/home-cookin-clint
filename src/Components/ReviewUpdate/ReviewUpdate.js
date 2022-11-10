import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import useTitle from "../Hooks/UseTitle";

const ReviewUpdate = () => {
  useTitle("Update");
  const review = useLoaderData();
  // review.sort({timeDate-1});
  console.log(review);
  const submitHandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;
    // console.log(message);
    fetch(`https://home-cookin-server.vercel.app/update/${review._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          toast.success("successfully updated");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <form onSubmit={submitHandle}>
      <h1 className="text-primary text-3xl my-3 font-semibold">
        Update Your Review
      </h1>
      <input
        type="text"
        defaultValue={review.title}
        placeholder="Type here"
        className="input input-bordered input-md w-6/12"
        readOnly
      />

      <input
        type="text"
        defaultValue={review.email}
        placeholder="Type here"
        className="input input-bordered block mt-2 input-md w-6/12"
        readOnly
      />
      <textarea
        type="text"
        className="mt-5 input input-bordered input-lg w-full h-36"
        defaultValue={review.massege}
        name="message"
      ></textarea>
      <div className="flex justify-center my-3">
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default ReviewUpdate;
