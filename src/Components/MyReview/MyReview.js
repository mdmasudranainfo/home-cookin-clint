import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { authContext } from "../Context/UserContext";
import MyReviewSingle from "../MyReviewSingle/MyReviewSingle";

const MyReview = () => {
  const [review, setReview] = useState([]);
  const { user } = useContext(authContext);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [user?.email]);

  //
  // const [reviews,setReviews] =useState()
  const deleteHandle = (item) => {
    const agree = window.confirm(`Are you delete ${item.name}`);

    fetch(`http://localhost:5000/delete/${item._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Deleted successfully");
        }
        const riminig = review.filter((Rev) => Rev._id !== item._id);
        setReview(riminig);
      });
  };
  return (
    <div>
      {review.length === 0 && (
        <p className="text-center text-3xl my-52">No Reviews</p>
      )}
      {review.map((rv) => (
        <MyReviewSingle
          rv={rv}
          deleteHandle={deleteHandle}
          key={rv?._id}
        ></MyReviewSingle>
      ))}
    </div>
  );
};

export default MyReview;
