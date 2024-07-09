import { Link, useLoaderData } from "react-router-dom";

const VolunteerPostDetails = () => {
  const postDetails = useLoaderData();
  const {
    _id,
    post_title,
    photo,
    category,
    location,
    volunteers,
    description,
    deadline_time,
  } = postDetails;

  
  return (
    <div className="w-[80%] mx-auto mb-8 ">
      <h2 className="font-bold text-3xl text-center my-8">{post_title}</h2>
      <div className="grid lg:grid-cols-2 gap-8 mb-4 items-center p-4">
        <div className="">
          <img
            className=" mx-auto rounded-lg shadow-xl shadow-gray-800"
            src={photo}
            alt=""
          />
        </div>

        <div>
          <div className=" space-y-4 px-4 mb-4 ">
            <p></p>
            <p>
              <span className="font-bold">Category: </span>
              {category}
            </p>
            <p>
              <span className="font-bold">Location: </span>
              {location}
            </p>
            <p>
              <span className="font-bold">No of volunteers needed: </span>
              {volunteers}
            </p>
            <p>
              <span className="font-bold">Deadline: </span>
              {deadline_time}
            </p>

            <p className="text-justify">
              <span className="font-bold ">Description:</span> {description}
            </p>
          </div>
          <Link to={`/beAVolunteer/${_id}`}>
            <button className="btn bg-[#ff5252] text-white ">
              Be a Volunteer
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPostDetails;
