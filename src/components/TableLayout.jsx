import { useLoaderData } from "react-router-dom";

const TableLayout = () => {
  const volunteers = useLoaderData();

  return (
    <div className="">
      <h2 className="text-3xl font-bold text-center mb-4">Need Volunteers</h2>

<div className="text-center mb-8">
  <form >
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

                    <th>
                      <div className="join join-vertical">
                        
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

export default TableLayout;
