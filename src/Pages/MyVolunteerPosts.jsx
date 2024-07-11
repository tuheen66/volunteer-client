import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const MyVolunteerPosts = () => {
  const { user } = useContext(AuthContext);
  const [myPosts, setMyPosts] = useState([]);

  const url = `https://volunteer-management-server-eight.vercel.app/volunteer?email=${user?.email}`;

  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setMyPosts(res.data);
    });

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setMyPosts(data));
  }, [url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://volunteer-management-server-eight.vercel.app/volunteers/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");

              const remainingVolunteerPosts = myPosts.filter(
                (myPost) => myPost._id !== id
              );

              setMyPosts(remainingVolunteerPosts);
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Benevo | My Volunteer Posts</title>
      </Helmet>
      <div className="w-[80%] mx-auto">
        <h2 className="my-8 text-center font-bold text-4xl">
          List of Volunteer posts by - {user?.displayName}
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
                {myPosts.length > 0 ? (
                  myPosts.map((myPost) => (
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
                          <Link to={`/updatePost/${myPost._id}`}>
                            <button className="btn btn-sm bg-[#44bd32]  mb-2  text-white">
                              Update
                            </button>
                          </Link>
                          <button
                            onClick={() => handleDelete(myPost._id)}
                            className="btn btn-sm text-white  bg-[#ff5252]"
                          >
                            Delete
                          </button>
                        </div>
                      </th>
                    </tr>
                  ))
                ) : (
                  <div className="text-center mt-20 text-4xl text-red-500 font-bold">
                    <p>You do not have any need volunteer posts</p>
                  </div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyVolunteerPosts;
