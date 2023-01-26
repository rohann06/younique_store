const OfferBanner = () => {
  return (
    <div className="relative rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 lg:h-200 w-full lg:rounded-3xl">
      <div className=" lg:flex lg:py-10">
        <div className=" py-10 px-5 lg:px-10 lg:p-20">
            <p className=" text-zinc-100 uppercase font-black text-2xl lg:text-8xl">
            <span className="text-4xl"> Free Surprise</span> <br /> with Every <span className="text-5xl">3</span> Purchases!
            </p>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
