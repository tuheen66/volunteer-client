import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const AddVolunteers = () => {
  const [deadline, setDeadline] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const { user } = useContext(AuthContext);

  const handleSubmitVolunteerPost = (e) => {
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
    const current_time = currentTime;
    const deadline_time = deadline;

    const newVolunteer = {
      post_title,
      photo,
      category,
      location,
      volunteers,
      description,
      userName,
      email,
      current_time,
      deadline_time,
    };
    console.log(newVolunteer);

    fetch("http://localhost:5000/volunteers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newVolunteer),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Volunteer post added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        form.reset();
      });
  };

  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold my-4 text-center text-gray-700">
        Add a new Volunteer Post
      </h2>

      <div className="w-[80%] gap-16 justify-between items-center mx-auto">
        <div className="   p-8 w-1/2 border-2 mx-auto border-gray-300 rounded-lg">
          <form onSubmit={handleSubmitVolunteerPost}>
            <label htmlFor="title">Post Title:</label>
            <input
              className="w-full p-2 rounded-lg border-2 border-gray-300"
              placeholder="Post Title"
              type="text"
              id="title"
              name="title"
              required
            />
            <br />
            <br />

            <label htmlFor="image_url">Image URL:</label>
            <input
              className="w-full p-2 rounded-lg border-2 border-gray-300"
              placeholder="Image URL "
              type="text"
              id="image_url"
              name="image"
              required
            />
            <br />
            <br />

            <label htmlFor="category">Category:</label>
            <select
              className="w-full p-2 rounded-lg border-2 border-gray-300"
              id="category"
              name="category"
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
                  type="text"
                  id="location"
                  name="location"
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="number-of-volunteers">
                  No of Volunteers Needed:
                </label>
                <input
                  className="w-full p-2 rounded-lg border-2 border-gray-300"
                  placeholder="No of Volunteers Needed"
                  type="text"
                  id="number-of-volunteers"
                  name="volunteers"
                  required
                />
              </div>
            </div>
            <br />
            <label htmlFor="description">Description:</label>
            <textarea
              className="w-full p-2 rounded-lg border-2 border-gray-300"
              id="description"
              name="description"
              rows="4"
              required
            ></textarea>
            <br />
            <br />

            {/* user name and email */}

            <label htmlFor="user-name">Organizer Name:</label>
            <input
              className="w-full p-2 rounded-lg border-2 border-gray-300"
              defaultValue={user?.displayName}
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
              defaultValue={user?.email}
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
                <label htmlFor="current_time">Current Time: </label>
                <br />

                <DatePicker
                  className="border-2 border-gray-300 required rounded-lg"
                  selected={currentTime}
                  showIcon
                  onChange={(date) => setCurrentTime(date)}
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                />
                {/* <input
                  className="p-2 mr-4 rounded-lg border-2 border-gray-300"
                  type="date"
                  id="current_time"
                  name="current_time"
                  required
                /> */}
              </div>

              <div>
                <label>Deadline: </label>
                <br />
                <DatePicker
                  className="border-2 border-gray-300 rounded-lg"
                  selected={deadline}
                  showIcon
                  onChange={(date) => setDeadline(date)}
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                />
              </div>
            </div>

            <input
              className="btn w-full bg-[#ff5252] text-white hover:bg-[#cc8e35]"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVolunteers;
