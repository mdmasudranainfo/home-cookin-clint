import React from "react";
import toast from "react-hot-toast";
import useTitle from "../Hooks/UseTitle";

const AddProduct = () => {
  useTitle("Add Product");
  const submitHandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const product = { title, price, rating, photo, description };
    // console.log(title, rating, photo, description, price);
    fetch("https://home-cookin-server.vercel.app/service", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Add success");
        }
        // console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={submitHandle} className="">
        <h1 className="text-primary text-3xl my-3 font-semibold">
          Add Product
        </h1>
        <input
          type="text"
          placeholder="Product title"
          name="title"
          className="input input-bordered input-md w-6/12"
        />

        <input
          type="text"
          placeholder="Price"
          name="price"
          className="input input-bordered block mt-2 input-md w-6/12"
        />
        <input
          type="text"
          placeholder="Rating"
          name="rating"
          className="input input-bordered block mt-2 input-md w-6/12"
        />
        <input
          type="text"
          placeholder="Photo URL"
          name="photo"
          className="input input-bordered block mt-2 input-md w-6/12"
        />
        <textarea
          placeholder="Description"
          type="text"
          className="mt-5 input input-bordered input-lg w-full h-36"
          name="description"
        ></textarea>
        <div className="flex justify-center my-3">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
