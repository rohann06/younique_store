import Link from "next/link";
import { urlFor } from "../lib/client";

const Products = ({ product: { image, name, slug, price } }) => {
  return (
    <>
      <div>
        <Link href={`/product/${slug.current}`}>
          <div className="lg:mx-10 scale-100 hover:scale-105 ease-in duration-200 drop-shadow-lg ">
            <img className=" bg-neutral-200 ease-in duration-200 hover:bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 cursor-pointer rounded-2xl h-40 lg:h-80 w-auto p-2 overflow-hidden dark:bg-slate-700/50 " src={urlFor(image && image[0])}/>
            <h4 className=" text-slate-800 font-semibold text-xl mt-3 lg:text-2xl dark:text-slate-400">{name}</h4>
            <p className=" font-extrabold text-lg">₹{price}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Products;
