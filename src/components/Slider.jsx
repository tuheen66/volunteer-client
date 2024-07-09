import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Parallax, Scrollbar, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/parallax";
import "swiper/css/autoplay";
import "swiper/css/grid";
import "swiper/css/effect-coverflow";

import slider1 from "../assets/images/slider/slide01.jpg";
import slider2 from "../assets/images/slider/slide02.jpg";
import slider3 from "../assets/images/slider/slide03.jpg";
import slider4 from "../assets/images/slider/slide04.jpg";
import slider5 from "../assets/images/slider/slide05.jpg";
import slider6 from "../assets/images/slider/slide06.jpg";
import slider7 from "../assets/images/slider/slide07.jpg";
import slider8 from "../assets/images/slider/slide08.jpg";
import slider9 from "../assets/images/slider/slide09.jpg";
import slider10 from "../assets/images/slider/slide10.jpg";
import slider11 from "../assets/images/slider/slide11.jpg";
import slider12 from "../assets/images/slider/slide12.jpg";


const Slider = () => {
    return (
        <div className="mb-8 mt-8">
      {/* <h2 className="font-bold text-center text-4xl my-8">Paintings & Sketches</h2> */}
      <div className="">
        <Swiper
          className=""
          // install Swiper modules
          modules={[EffectCoverflow, Parallax, Autoplay, Scrollbar]}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          parallax
          autoplay={{
            delay: 1500,
          }}
          // pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          effect={"coverflow"}

          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img src={slider1} className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider4} className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider5} className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider6} className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider7} className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider8} className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider9} className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider10} className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider11} className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider12} className="w-full" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    );
};

export default Slider;