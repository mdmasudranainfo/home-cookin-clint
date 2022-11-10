import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const SingleService = ({ food }) => {
  const { description, title, photo, price, _id } = food;
  return (
    <div className="card shadow-xl">
      <PhotoProvider>
        <PhotoView src={photo}>
          <img src={photo} alt="" className="h-4/6" />
        </PhotoView>
      </PhotoProvider>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {description.length > 100 ? description.slice(0, 100) : description}
        </p>

        <div className="card-actions justify-between">
          <p className="text-2xl font-semibold">Price: {price}</p>
          <Link to={`/service/${_id}`} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
