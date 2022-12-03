import { urlFor } from "../lib/client";

const HeroBanner = ({heroBanner}) => {
    return ( 
        <div className=" relative rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 lg:h-200 w-full lg:rounded-3xl ">
            <div className=" lg:flex lg:py-10"> 
                <div className=" py-10 px-5 lg:px-10 lg:p-20">
                    <p className=" text-red-50 font-semibold ml-3 text-2xl lg:text-4xl">{heroBanner.smallText}</p>
                    <h3 className=" text-gray-900 my-3 ml-3 font-bold text-4xl lg:text-7xl">{heroBanner.midText}</h3>
                    <h1 className=" text-zinc-100 uppercase font-bold text-7xl lg:text-8xl">{heroBanner.largeText1}</h1>
                </div>

                <div className=" -my-10 lg:ml-40" >
                    <img src={urlFor(heroBanner.image)} alt='Hero images' height='100%' width='100%'/>
                </div>

                <div className=" absolute right-10 bottom-3 flex flex-col w-80 text-end">
                    <h5 className=" font-semibold text-lg text-slate-700 mr-4">Decription</h5>
                    <p className=" text-gray-800 font-Poppins text-sm font-light">{heroBanner.desc}</p>
                </div>
            </div>
        </div>
     );
}
 
export default HeroBanner;