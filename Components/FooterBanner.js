import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCube, Pagination } from "swiper";
import Link from "next/link";

//Images
import Image from "next/image";
import pic1 from "../public/1.jpg";
import pic2 from "../public/2.jpg";
import pic3 from "../public/3.jpg";
import pic4 from "../public/4.jpg";

const FooterBanner = ({ heroBanner }) => {
  return (
    <div className=" bg-neutral-200 tracking-wide relative rounded-xl mt-10 l h-150 lg:h-100 w-full p-10 lg:rounded-3xl dark:bg-slate-800">
      <div className="lg:flex lg:justify-center lg:gap-60 ">
        <div className=" p-6 mb-10  ">
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Autoplay, EffectCube, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image  src={pic1} alt="p1" />
            </SwiperSlide>
            <SwiperSlide>
              <Image  src={pic3} alt="p2" />
            </SwiperSlide>
            <SwiperSlide>
              <Image  src={pic2} alt="p3" />
            </SwiperSlide>
            <SwiperSlide>
              <Image  src={pic4} alt="p4" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className=" lg:py-20">
          <h1 className=" text-zinc-500 font-bold text-5xl lg:text-8xl lg:my-5 lg:w-50 dark:text-slate-600">
            {heroBanner.footerhaeding}
          </h1>
          <h2 className=" text-slate-500/75 font-Poppins font-extrabold text-sm mb-5 mt-5 lg:text-xl lg:mt-5 dark:text-slate-50">
            {heroBanner.footertext}
          </h2>
          <Link href={"/product/black-t-shirt"}>
          <button className=" bg-red-600 text-white font-Poppins px-5 py-2 rounded-xl">BUY NOW</button></Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
