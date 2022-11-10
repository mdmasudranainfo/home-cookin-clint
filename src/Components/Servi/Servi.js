import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { authContext } from "../Context/UserContext";
import toast from "react-hot-toast";
import SingleReview from "./SingleReview/SingleReview";
import useTitle from "../Hooks/UseTitle";

const time = new Date().toLocaleTimeString();
const date = new Date().toDateString();
const timeDate = `${time}-${date}`;

const Servi = () => {
  useTitle("Service Details");
  // let location = useLocation();
  const navigate = useNavigate();
  const data = useLoaderData();
  // sort
  // data.sort((a, b) => {
  //   return a.timeDate - b.timeDate;
  // });

  //
  const { title, photo, description, price, rating, _id } = data;
  const { user } = useContext(authContext);
  // Riviews.........send post
  function ReviewHanlar(event) {
    event.preventDefault();
    if (!user?.email) {
      toast.error("Plase Login");
      navigate("/login");
      return;
    }
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const massege = form.massage.value;
    const review = {
      serviceID: _id,
      photo: user.photoURL,
      name,
      email,
      massege,
      title,
      image: photo,
      timeDate,
    };
    //  post data
    fetch("https://home-cookin-server.vercel.app/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully toasted!");

        form.reset();
      })
      .catch((err) => {
        toast.error(err.massege);
      });
    // ...........
  }

  // get data .......

  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch(`https://home-cookin-server.vercel.app/review?serviceID=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        const riminig = [...data].reverse();
        setReview(riminig);
      });
  }, [_id]);

  //
  // const riminig = [...review].reverse();
  // setReview(riminig);
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
      <div className="card bg-base-100 shadow-xl">
        <PhotoProvider>
          <PhotoView src={photo}>
            <img src={photo} alt="" className="h-4/6" />
          </PhotoView>
        </PhotoProvider>

        <div className="card-body">
          <h2 className="card-title font-semibold">{title}</h2>

          <div className="flex justify-between">
            <p className="text-xl font-semibold ">Price: ${price}</p>

            <div className="flex justify-between items-center ">
              <p className="text-xl font-semibold">{rating}</p>
              <span className="flex">
                <FaStar className="text-green-600"></FaStar>
                <FaStar className="text-green-600"></FaStar>
                <FaStar className="text-green-600"></FaStar>
                <FaStar className="text-green-600"></FaStar>
                <FaStarHalfAlt className="text-green-600"></FaStarHalfAlt>
              </span>
            </div>
          </div>
          <div className="card-actions justify-end">
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="">
        <form onSubmit={ReviewHanlar} className="sendRiview">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            defaultValue={user?.displayName}
            className="input input-bordered input-md w-full "
            required
          />
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            placeholder="Your Email"
            className="input input-bordered input-md w-full mt-3"
            required
          />
          <input
            type="text"
            name="massage"
            placeholder="Your Massage "
            className="input input-bordered input-md w-full mt-3"
            required
          />
          <div className="flex justify-center mt-3">
            <button className="btn btn-primary w-4/5">Submit</button>
          </div>
        </form>

        <div className="view">
          <div className="">
            {review?.map((rv) => (
              <SingleReview rv={rv} key={rv?._id}></SingleReview>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servi;
