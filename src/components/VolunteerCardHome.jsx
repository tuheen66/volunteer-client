import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const VolunteerCardHome = ({ volunteer }) => {


    
  const { photo, post_title, category, deadline_time } = volunteer;

  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{post_title}</h2>
        
        <p>
          <span className="font-bold">Category:</span> {category}
        </p>
        <p>
          <span className="font-bold">Deadline:</span> {deadline_time}
        </p>
        <div className=" flex justify-center gap-4 mt-4">
          <Link className="w-full">
            <button className="btn bg-[#ff5252] btn-sm w-full text-white">
              View Details
            </button>
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default VolunteerCardHome;
