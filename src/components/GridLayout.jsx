import { useLoaderData } from "react-router-dom";
import NeedVolunteerCard from "./NeedVolunteerCard";


const GridLayout = () => {
  const volunteers = useLoaderData();

  

  return (
    <div className="">
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

export default GridLayout;
