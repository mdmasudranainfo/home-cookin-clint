import React, { useContext, useEffect, useState } from "react";
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
  console.log(review);
  return (
    <div>
      {review.map((rv) => (
        <MyReviewSingle rv={rv} key={rv?._id}></MyReviewSingle>
      ))}
    </div>
  );
};

export default MyReview;
