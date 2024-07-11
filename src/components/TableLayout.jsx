import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const TableLayout = () => {
  const loadedVolunteers = useLoaderData();

  

  const [volunteers, setVolunteers] = useState(loadedVolunteers);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchText = e.target.search.value;

    const searchVolunteer = loadedVolunteers.filter(
      (vol) => vol.post_title === searchText
    );

    setVolunteers(searchVolunteer);

    form.reset();
  };

  return (
    <div className="">
      <div className="text-center mb-8">
        <form onSubmit={handleSearch}>
          <input
            className="border-2 border-gray-300 px-4 py-3 rounded-lg"
            type="text"
            name="search"
            placeholder="search by post title"
          />
          <input
            className="btn bg-[#ff5252] text-white hover:bg-[#cc8e35]"
            type="submit"
            value="Search"
          />
        </form>
      </div>
      <div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Post Title</th>
                  <th>Location</th>
                  <th>No of Volunteer needed</th>
                  <th>Location</th>
                  <th>Deadline</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {volunteers.map((myPost) => (
                  <tr key={myPost._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className=" w-16 h-16">
                            <img src={myPost.photo} alt="" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{myPost.post_title}</td>
                    <td>{myPost.location} </td>
                    <td>{myPost.volunteers} </td>
                    <td>{myPost.location} </td>
                    <td>{myPost.deadline_time} </td>
                    <td>
                       <Link to={`/viewDetails/${myPost._id}`} className="w-full">
                        <button className="btn bg-[#ff5252] btn-sm w-full text-white">
                          View Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableLayout;
