import { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const BeAVolunteer = () => {
  const loadedVolunteerPost = useLoaderData();

  const navigate = useNavigate();

  const locations = useLocation();

  const { user } = useContext(AuthContext);

  const {
    post_title,
    photo,
    category,
    location,
    volunteers,
    userName,
    email,
    deadline_time,
    description,
  } = loadedVolunteerPost;

  const handleRequest = (e) => {
    e.preventDefault();

    const form = e.target;

    const post_title = form.title.value;
    const photo = form.image.value;
    const category = form.category.value;
    const location = form.location.value;
    const volunteers = form.volunteers.value;
    const description = form.description.value;
    const userName = form.userName.value;
    const email = form.email.value;
    const deadline_time = form.deadline.value;
    const volunteerName = form.volunteerName.value;
    const volunteerEmail = form.volunteerEmail.value;
    const suggestion = form.suggestion.value;
    const status = form.status.value;

    const requested = {
      post_title,
      photo,
      category,
      location,
      volunteers,
      description,
      userName,
      email,
      deadline_time,
      volunteerName,
      volunteerEmail,
      status,
      suggestion,
    };

    if (email === volunteerEmail) {
      Swal.fire({
        icon: "error",
        title: "Sorry...",
        text: "You cannot request to be volunteer in your own post",
      });
      navigate(locations?.state ? locations.state : "/");
     
    }

    fetch("http://localhost:5000/requested", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(requested),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Volunteer request added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold my-4 text-center text-gray-700">
        Be A Volunteer
      </h2>

      <div className="w-[80%] gap-16 justify-between items-center mx-auto">
        <div className="   p-8 w-1/2 border-2 mx-auto border-gray-300 rounded-lg">
          <form onSubmit={handleRequest}>
            <label htmlFor="title">Post Title:</label>
            <input
              className="w-full p-2 rounded-lg border-2 border-gray-300"
              placeholder="Post Title"
              defaultValue={post_title}
              type="text"
              id="title"
              name="title"
              required
              disabled
            />
            <br />
            <br />

            <label htmlFor="image_url">Image URL:</label>
            <input
              className="w-full p-2 rounded-lg border-2 border-gray-300"
              placeholder="Image URL "
              defaultValue={photo}
              type="text"
              id="image_url"
              name="image"
              required
              disabled
            />
            <br />
            <br />

            <label htmlFor="category">Category:</label>
            <select
              className="w-full p-2 rounded-lg border-2 border-gray-300"
              id="category"
              name="category"
              defaultValue={category}
              disabled
            >
              <option value="Community Service">Community Service</option>
              <option value="Animal Welfare">Animal Welfare</option>
              <option value="Disaster Relief">Disaster Relief</option>
              <option value="Environmental Conservation">
                Environmental Conservation
              </option>
            </select>
            <br />
            <br />

            <div className="flex justify-between gap-8">
              <div className="w-1/2">
                <label htmlFor="location">Location</label>
                <input
                  className="w-full p-2 rounded-lg border-2 border-gray-300"
                  placeholder="Location"
                  defaultValue={location}
                  type="text"
                  id="location"
                  name="location"
                  required
                  disabled
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="number-of-volunteers">
                  No of Volunteers Needed:
                </label>
                <input
                  className="w-full p-2 rounded-lg border-2 border-gray-300"
                  placeholder="No of Volunteers Needed"
                  defaultValue={volunteers}
                  type="text"
                  id="number-of-volunteers"
                  name="volunteers"
                  required
                  disabled
                />
              </div>
            </div>
            <br />
            <label htmlFor="description">Description:</label>
            <textarea
              className="w-full p-2 rounded-lg border-2 border-gray-300"
              id="description"
              name="description"
              defaultValue={description}
              rows="2"
              required
              disabled
            ></textarea>
            <br />
            <br />

            {/* user name and email */}

            <label htmlFor="user-name">Organizer Name:</label>
            <input
              className="w-full p-2 rounded-lg border-2 border-gray-300"
              defaultValue={userName}
              type="text"
              id="user-name"
              name="userName"
              required
              disabled
            />

            <br />
            <br />

            <label htmlFor="email">Organizer Email:</label>
            <input
              className="w-full p-2 rounded-lg border-2 border-gray-300"
              defaultValue={email}
              type="email"
              id="email"
              name="email"
              required
              disabled
            />
            <br />
            <br />
            <div className="flex justify-between mb-4">
              <div>
                <label>Deadline: </label>
                <br />
                <input
                  className="w-full p-2 rounded-lg border-2 border-gray-300"
                  defaultValue={deadline_time}
                  type="text"
                  id="deadline_time"
                  name="deadline"
                  required
                  disabled
                />
              </div>
            </div>

            <label htmlFor="volunteer-name">Volunteer Name:</label>
            <input
              className="w-full p-2 rounded-lg border-2 border-gray-300"
              defaultValue={user?.displayName}
              type="text"
              id="volunteer-name"
              name="volunteerName"
              required
              disabled
            />

            <br />
            <br />

            <label htmlFor="volunteerEmail">Volunteer Email:</label>
            <input
              className="w-full p-2 rounded-lg border-2 border-gray-300"
              defaultValue={user?.email}
              type="email"
              id="volunteerEmail"
              name="volunteerEmail"
              required
              disabled
            />
            <br />
            <br />

            <label htmlFor="suggestion">Suggestion</label>
            <input
              className="w-full p-2 rounded-lg border-2 border-gray-300"
              placeholder="suggestion"
              type="text"
              id="suggestion"
              name="suggestion"
              required
            />

            <br />
            <br />
            <label htmlFor="status">Status</label>
            <input
              className="w-full p-2 rounded-lg border-2 border-gray-300"
              defaultValue="Requested"
              type="text"
              id="status"
              name="status"
              required
              disabled
            />

            <br />
            <br />

            <input
              className="btn w-full bg-[#ff5252] text-white hover:bg-[#cc8e35]"
              type="submit"
              value="Request"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BeAVolunteer;
