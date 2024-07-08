import { useLoaderData } from "react-router-dom";
import NeedVolunteerCard from "../components/NeedVolunteerCard";

const NeedVolunteer = () => {

    const volunteers = useLoaderData();


  return (
    <div className="w-[80%] mx-auto">
      <h2 className="text-3xl font-bold text-center my-8">Need Volunteers</h2>

      <div className="grid grid-cols-3 gap-8">
        {
        volunteers.map(volunteer=><NeedVolunteerCard key={volunteer._id} volunteer={volunteer}></NeedVolunteerCard>)
        }
      </div>
    </div>
  );
};

export default NeedVolunteer;
