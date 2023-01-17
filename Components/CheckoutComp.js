import Image from "next/image";
import pic1 from "../public/1.jpg";

const CheckoutComp = () => {
  return (
    <form action="submit">
      <div className=" bg-neutral-200 dark:bg-slate-800 rounded-xl py-7 grid lg:grid-cols-2 lg:grid-flow mt-5 lg:my-32">
        <div className=" border-b-2 lg:border-b-0 lg:border-l-2 border-neutral-300 mx-5 lg:order-2">

          {/* Product details */}
          <div className=" flex  gap-5 mb-5 border-b-2 border-neutral-300 lg:border-neutral-500 lg:mx-24 lg:mt-10">
            <div className=" bg-neutral-300 rounded-xl h-[150px] w-[150px] mb-6 dark:bg-slate-700/50">
              Image
            </div>

            <div>
              <p className=" font-SecularOne dark:text-slate-100 font-bold text-xl lg:text-2xl">Product name</p>
              <p className=" text-red-600 font-extrabold lg:text-lg">Price</p>
              <p className="  text-neutral-400">Size</p>
              <p className="  text-neutral-400">Nft Link</p>
            </div>
          </div>

          {/* Prouct Price */}
          <div className=" flex justify-between mb-3 lg:mx-24">
            <div>
              <p className=" text-neutral-500 mb-1 font-semibold lg:text-lg">Shipping :</p>
              <p className=" text-black font-black text-xl lg:text-2xl dark:text-slate-200">Total :</p>
            </div>
            <div>
              <p className=" text-neutral-500 mb-1 font-semibold lg:text-lg">shipping price</p>
              <p className=" text-red-600 font-black text-xl lg:text-2xl">Total Price</p>
            </div>
          </div>
        </div>

        {/* Checkout Forms */}
        <div className=" mx-5 my-5 lg:mx-14">
            <p className=" mt-4 text-sm lg:text-base">Full name</p>
            <input type="text" className=" dark:bg-slate-700/50 bg-neutral-300 w-full rounded-lg h-9 p-4 lg:h-10"/>

            <p className=" mt-4 text-sm lg:text-base">Email Address</p>
            <input type="email" className=" dark:bg-slate-700/50 bg-neutral-300 w-full rounded-lg h-9 p-4 lg:h-10"/>

            <p className=" mt-4 text-sm lg:text-base">Mobile number</p>
            <input type="tel" placeholder="+91 9726698451" pattern="+[0-9]{2} [0-9]{3}[0-9]{3}[0-9]{4}" className=" dark:bg-slate-700/50 bg-neutral-300 w-full rounded-lg h-9 p-4 lg:h-10"/>

            <div className=" grid grid-cols-2 gap-7 lg:grid-cols-3 mt-5">
                <div>
                    <p className=" text-sm lg:text-base">pincode</p>
                    <input type="text" className=" dark:bg-slate-700/50 bg-neutral-300 w-full rounded-lg h-9 p-4 lg:h-10"/>
                </div>
                <div>
                    <p className=" text-sm lg:text-base">Country</p>
                    <input type="text" className=" dark:bg-slate-700/50 bg-neutral-300 w-full rounded-lg h-9 p-4 lg:h-10"/>
                </div>
                <div>
                    <p className=" text-sm lg:text-base ">City</p>
                    <input type="text" className=" dark:bg-slate-700/50 bg-neutral-300 w-[170px] rounded-lg h-9 p-4 lg:h-10 lg:w-[235px]"/>
                </div>
            </div>

            <p className=" mt-4 text-sm lg:text-base">Full Address</p>
            <input type="text" className=" dark:bg-slate-700/50 bg-neutral-300 w-full rounded-lg h-10 pl-4 lg:h-10"/>

            <div className=" text-center mt-5 lg:mt-8">
                <button className=" bg-red-500 text-slate-50 rounded-lg font-medium font-Poppins px-12 py-2 lg:text-lg lg:hover:bg-red-700">Place order</button>
            </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutComp;
