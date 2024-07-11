import { useLoaderData } from "react-router-dom";
import NeedVolunteerCard from "./NeedVolunteerCard";
import { useState } from "react";

const GridLayout = () => {
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
      <h2 className="text-3xl font-bold text-center mb-4">Need Volunteers</h2>

      <div className="mb-8 text-center">
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
      <div className="grid lg:grid-cols-3 gap-8">
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

export default GridLayout;
