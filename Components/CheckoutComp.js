import { urlFor } from "../lib/client";
import { createClient } from "@supabase/supabase-js";

const CheckoutComp = ({ product, size, link }) => {
  const { image, name, price } = product;

  // SupaBase
  const supabaseUrl = process.env.NEXT_PUBLIC_APP_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_APP_SUPABASE_ANON_KEY;

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  console.log(supabase);

  return (
    <form action="submit">
      <div className=" bg-neutral-200 dark:bg-slate-800 rounded-xl py-7 grid lg:grid-cols-2 lg:grid-flow mt-5 lg:my-32">
        <div className=" border-b-2 lg:border-b-0 lg:border-l-2 border-neutral-300 mx-5 lg:order-2">
          {/* Product details */}
          <div className=" flex justify-start  gap-5 mb-5 border-b-2 border-neutral-300 lg:border-neutral-500 lg:mx-24 lg:mt-10">
            <div className=" drop-shadow-lg mb-5">
              <img
                className=" dark:bg-slate-700/50 bg-neutral-300 hover:bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 cursor-pointer rounded-3xl p-2 w-[150px] h-[130px] lg:h-[150px] lg:w-[160px]"
                src={urlFor(image && image[0])}
                alt=""
              />
            </div>

            <div>
              <p className=" font-SecularOne dark:text-slate-100 font-bold text-xl lg:text-2xl">
                {name}
              </p>
              <p className=" text-red-600 font-extrabold lg:text-lg mb-2 lg:mb-4">
                ₹{price}
              </p>
              <p className="  text-neutral-400">
                Size: <span className=" font-bold text-black">( {size} )</span>
              </p>
              {/* <p  className="  text-neutral-400">Nft Link: {link}</p> */}
            </div>
          </div>

          {/* Prouct Price */}
          <div className=" flex justify-between mb-3 lg:mx-24">
            <div>
              <p className=" text-neutral-500 mb-1 font-semibold lg:text-lg">
                Shipping :
              </p>
              <p className=" text-black font-black text-xl lg:text-2xl dark:text-slate-200">
                Total :
              </p>
            </div>
            <div>
              <p className=" text-neutral-500 mb-1 font-semibold lg:text-lg">
                shipping price
              </p>
              <p className=" text-red-600 font-black text-xl lg:text-2xl">
                Total Price
              </p>
            </div>
          </div>
        </div>

        {/* Checkout Forms */}
        <div className=" mx-5 my-5 lg:mx-14">
          <p className=" mt-4 text-sm lg:text-base">Full name</p>
          <input
            placeholder=" full name"
            type="text"
            className=" dark:bg-slate-700/50 bg-neutral-300 w-full rounded-lg h-9 p-4 lg:h-10"
          />

          <p className=" mt-4 text-sm lg:text-base">Email Address</p>
          <input
            placeholder="email address"
            type="email"
            className=" dark:bg-slate-700/50 bg-neutral-300 w-full rounded-lg h-9 p-4 lg:h-10"
          />

          <p className=" mt-4 text-sm lg:text-base">Mobile number</p>
          <input
            type="tel"
            placeholder="+91 9726698451"
            pattern="+[0-9]{2} [0-9]{3}[0-9]{3}[0-9]{4}"
            className=" dark:bg-slate-700/50 bg-neutral-300 w-full rounded-lg h-9 p-4 lg:h-10"
          />

          <div className=" grid grid-cols-2 gap-7 lg:grid-cols-3 mt-5">
            <div>
              <p className=" text-sm lg:text-base">pincode</p>
              <input
                placeholder="pin code"
                type="text"
                className=" dark:bg-slate-700/50 bg-neutral-300 w-full rounded-lg h-9 p-4 lg:h-10"
              />
            </div>
            <div>
              <p className=" text-sm lg:text-base">Country</p>
              <input
                placeholder="country"
                type="text"
                className=" dark:bg-slate-700/50 bg-neutral-300 w-full rounded-lg h-9 p-4 lg:h-10"
              />
            </div>
            <div>
              <p className=" text-sm lg:text-base ">City</p>
              <input
                placeholder="city"
                type="text"
                className=" dark:bg-slate-700/50 bg-neutral-300 w-[170px] rounded-lg h-9 p-4 lg:h-10 lg:w-[235px]"
              />
            </div>
          </div>

          <p className=" mt-4 text-sm lg:text-base">Full Address</p>
          <textarea
            placeholder=" Enter you'r  full correct address..."
            rows="10"
            className=" dark:bg-slate-700/50 bg-neutral-300 w-full rounded-lg h-10 pl-4 lg:h-10"
          />

          <div className=" text-center mt-5 lg:mt-8">
            <button className=" bg-red-500 text-slate-50 rounded-lg font-medium font-Poppins px-12 py-2 lg:text-lg lg:hover:bg-red-700">
              Place order
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutComp;
