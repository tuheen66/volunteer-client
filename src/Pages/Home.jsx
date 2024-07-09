import { Link, useLoaderData } from "react-router-dom";
import BannerSlider from "../components/BannerSlider";
import VolunteerCardHome from "../components/VolunteerCardHome";
import NewsLetters from "../components/NewsLetters";
import Slider from "../components/Slider";

const Home = () => {
  const loadedVolunteers = useLoaderData();

  const volunteers = loadedVolunteers.slice(0, 6);

  return (
    <div className="w-[80%] mx-auto">
      <BannerSlider></BannerSlider>

      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-4">
          Volunteers Need Now
        </h2>

        <div className="grid grid-cols-3 gap-8">
          {volunteers.map((volunteer) => (
            <VolunteerCardHome
              key={volunteer._id}
              volunteer={volunteer}
            ></VolunteerCardHome>
          ))}
        </div>
        <div className="my-8 text-center w-full">
          <Link to="/needVolunteer">
            <button className="btn bg-[#cc8e35] w-1/4 text-white text-xl hover:bg-[#ff5252]">
              See All
            </button>
          </Link>
        </div>
      </div>
      <h2 className="text-center text-2xl font-semibold">Subscribe to our Newsletter to know about our upcoming charity events</h2>
      <div className="mb-8  mx-auto flex justify-between items-center pl-8 ">
      
        <NewsLetters></NewsLetters>
        <div className="w-[66%]">
          <Slider></Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;
