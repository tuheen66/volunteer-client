import { Link, useLoaderData } from "react-router-dom";
import BannerSlider from "../components/BannerSlider";
import VolunteerCardHome from "../components/VolunteerCardHome";
import NewsLetters from "../components/NewsLetters";
import Slider from "../components/Slider";
import { Helmet } from "react-helmet-async";
import WeServe from "../components/WeServe";

const Home = () => {
  const loadedVolunteers = useLoaderData();

  const volunteers = loadedVolunteers.slice(0, 6);

  return (
    <div className="w-[80%] mx-auto">
      <Helmet>
        <title>Benevo | Home</title>
      </Helmet>

      <BannerSlider></BannerSlider>

      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-4">
          Volunteers Need Now
        </h2>

        <div className="grid lg:grid-cols-3 gap-12">
          {volunteers.map((volunteer) => (
            <VolunteerCardHome
              key={volunteer._id}
              volunteer={volunteer}
            ></VolunteerCardHome>
          ))}
        </div>
        <div className="my-8 text-center w-full">
          <Link to="/needVolunteer">
            <button className="btn bg-[#cc8e35] md:w-1/4 text-white text-xl hover:bg-[#ff5252]">
              See All
            </button>
          </Link>
        </div>
      </div>
      <h2 className="text-center text-2xl font-semibold">
        Subscribe to our Newsletter to know about our upcoming charity events
      </h2>
      <div className="mb-8  mx-auto flex flex-col lg:flex-row justify-between items-center pl-8 ">
        <NewsLetters></NewsLetters>
        <div className="w-full lg:w-[66%]">
          <Slider></Slider>
        </div>
        
      </div>
      <div>
          <WeServe></WeServe>
        </div>
    </div>
  );
};

export default Home;
