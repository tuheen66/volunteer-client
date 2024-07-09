import { useLoaderData } from "react-router-dom";
import NeedVolunteerCard from "../components/NeedVolunteerCard";
import { useState } from "react";

const NeedVolunteer = () => {
  const loadedVolunteers = useLoaderData();

  const [volunteers, setVolunteers] = useState(loadedVolunteers);

  const handleSearch = (e) => {
    e.preventDefault();

    const form = e.target;
    const search = form.search.value;
   

    const searchedVolunteer = volunteers.filter(
      (volunteer) => volunteer.post_title === search
    );
    setVolunteers(searchedVolunteer);

    form.reset();

    if (search === "") {
      setVolunteers(loadedVolunteers);
    }
  };

  return (
    <div className="w-[80%] mx-auto">
      <h2 className="text-3xl font-bold text-center my-8">Need Volunteers</h2>

      <div className="my-8 text-center">
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

      <div className="grid grid-cols-3 gap-8">
        {volunteers.map((volunteer) => (
          <NeedVolunteerCard
            key={volunteer._id}
            volunteer={volunteer}
          ></NeedVolunteerCard>
        ))}
      </div>
    </div>
  );
};

export default NeedVolunteer;
