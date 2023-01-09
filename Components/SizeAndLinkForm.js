import { FaLongArrowAltRight } from "react-icons/fa";

const BuyForm = () => {

  const submitHandler = () => {
    
  }

  return (
    <>
      <form>
        <div className=" mt-5">
          <label htmlFor="size">
            <h1 className=" text-slate-600 font-bold text-xl dark:text-slate-50">
              Size
            </h1>
          </label>
          <div className=" py-3 -ml-1">
            <button className="border-[3px] text-slate-500/50 font-semibold rounded-lg py-1 px-3 lg:text-lg mx-1 hover:text-red-500 hover:border-red-500 dark:text-slate-500 dark:border-slate-500 dark:hover:text-red-500 dark:hover:border-red-500">
              S
            </button>

            <button className="border-[3px] text-slate-500/50 font-semibold rounded-lg lg:text-lg py-1 px-3 mx-1 hover:text-red-500 hover:border-red-500 dark:text-slate-500 dark:border-slate-500 dark:hover:text-red-500 dark:hover:border-red-500 ">
              M
            </button>

            <button className="border-[3px] text-slate-500/50 font-semibold rounded-lg lg:text-lg py-1 px-3 mx-1 hover:text-red-500 hover:border-red-500 dark:text-slate-500 dark:border-slate-500 dark:hover:text-red-500  dark:hover:border-red-500">
              L
            </button>

            <button className="border-[3px] text-slate-500/50 font-semibold rounded-lg lg:text-lg py-1 px-3 mx-1 hover:text-red-500 hover:border-red-500 dark:text-slate-500 dark:border-slate-500 dark:hover:text-red-500 dark:hover:border-red-500 ">
              XL
            </button>

            <button className="border-[3px] text-slate-500/50 font-semibold rounded-lg lg:text-lg py-1 px-3 mx-1 hover:text-red-500 hover:border-red-500 dark:text-slate-500 dark:border-slate-500 dark:hover:text-red-500 dark:hover:border-red-500 ">
              XXL
            </button>

            <button className="border-[3px] text-slate-500/50 font-semibold rounded-lg lg:text-lg py-1 px-3 mx-1 hover:text-red-500 hover:border-red-500 dark:text-slate-500 dark:border-slate-500 dark:hover:text-red-500 dark:hover:border-red-500 ">
              XXXL
            </button>
          </div>

          <label htmlFor="size">
            <h1 className=" text-slate-600 font-bold text-xl dark:text-slate-50">
              NFT image Link
            </h1>
          </label>
          <input
            type="text"
            name="link"
            placeholder="Enter nft link"
            className=" focus:border-red-500 bg-transparent border-[3px] mt-2 p-2 w-full rounded-lg dark:border-slate-500 dark:focus:border-red-500"
          />

          <div className=" text-slate-50 bg-red-500 hover:bg-red-600 cursor-pointer font-semibold rounded-xl w-full text-center mt-5 text-lg">
            <button onClick={submitHandler} className=" scale-100 hover:scale-105 p-[9px]">
              BUY NOW
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default BuyForm;
