import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MyRequestedPosts = () => {
  const { user } = useContext(AuthContext);
  const [myPosts, setMyPosts] = useState([]);

  const url = `http://localhost:5000/requested?volunteerEmail=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyPosts(data));
  }, [url]);


  




  return (
    <div>
      <div className="w-[80%] mx-auto">
        <h2 className="my-8 text-center font-bold text-4xl">
          List of Requested posts by - {user?.displayName}
        </h2>
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
                  <th>Deadline</th>
                  <th>Action</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {myPosts.map((myPost) => (
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
                    <td>{myPost.deadline_time} </td>

                    <th>
                      <div className="join join-vertical">
                        <button className="btn btn-sm text-white  bg-[#ff5252]">
                          Cancel
                        </button>
                      </div>
                    </th>
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

export default MyRequestedPosts;
