import Link from "next/link";
import React, { useEffect } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { runFireworks } from "../lib/utils";

const Success = () => {
  useEffect(() => {
    runFireworks();
  },[]);

  return (
    <div className=" mx-5 lg:mx-40 lg:my-40 my-28">
      <div className=" bg-neutral-300 rounded-2xl grid p-14 lg:p-20">
        <div className=" mx-auto my-8 lg:my-10 text-green-500 ">
          <BsPatchCheckFill className=" text-6xl lg:text-7xl text-center" />
        </div>

        <p className=" text-center text-xl lg:text-3xl font-SecularOne font-black my-5">
          Thank you for your order{" "}
        </p>
        <p className=" text-center text-sm lg:text-base text-slate-500 mb-5">
          We appreciate your help and hope you are satisfied with your purchase.
        </p>

        <Link href={"/"}>
          <button className=" text-slate-50 bg-red-600 font-semibold rounded-xl px-5 py-3 lg:text-lg m-auto lg:px-7 lg:py-3 uppercase mt-5">
            Continue shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
