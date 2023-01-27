import Image from "next/image";
import offerImage from "../public/offerImage.png";
import { runFireworks } from "../lib/utils";
import { useEffect } from "react";

const OfferBanner = () => {
  return (
    <div className="relative rounded-xl bg-neutral-100 w-full lg:rounded-3xl lg:p-0 lg:my-7">
      <div className=" lg:flex lg:justify-around lg:items-center p-6 lg:p-0 lg: ">
        <div className="  lg:px-10 lg:py-5">
          <p className=" uppercase font-black animate-bounce bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 inline-block text-transparent bg-clip-text text-[46px] lg:text-8xl">
            Free Surprise
          </p>
          <p className="  text-slate-500/75 font-Poppins font-extrabold text-xl lg:text-3xl dark:text-slate-50 -mb-5 lg:mt-3">
            Get a Free Surprise on{" "}
            <span className="text-slate-600 text-[23px] lg:text-[32px]">
              Every 3 Purchases!
            </span>
          </p>
        </div>

        <div>
          <Image src={offerImage} alt="offer image" />
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
