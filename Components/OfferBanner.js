import Image from "next/image";
import offerImage from "../public/offerImage.png";
import Confetti from "react-confetti";

const OfferBanner = () => {
  return (
    <>
      <div className="relative rounded-xl bg-red-600 w-full lg:rounded-3xl lg:p-0 lg:my-7 overflow-hidden">
        <Confetti width="1760px" height="515px" numberOfPieces='110' />
        <div className=" lg:flex lg:justify-around lg:items-center p-6 lg:p-0 ">
          <div className="  lg:px-10 lg:py-5 mt-7 lg:mt-0">
            <p className=" uppercase font-black font-body animate-bounce text-slate-50 text-[46px] lg:text-8xl">
              Free Surprise
            </p>
            <p className="  text-white font-Poppins font-extralight  text-xl lg:text-3xl dark:text-slate-50 -mb-5 lg:mt-3">
              Get a Free Surprise on{" "}
              <span className=" animate-spin text-white font-body font-extrabold text-[24px] lg:text-[35px]">
                Every 3 Purchases!
              </span>
            </p>
          </div>

          <div>
            <Image src={offerImage} alt="offer image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferBanner;
