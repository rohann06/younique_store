import { GoPrimitiveDot } from "react-icons/go";
import { TbTruckDelivery } from "react-icons/tb";
import {MdMoneyOff} from "react-icons/md";
import {GiReturnArrow} from 'react-icons/gi';
import { useState } from "react";

const ProductDetail = ({details, setReturnModal, setDeliveryModal, setCodModal}) => {
   

  return (
    <div className=" mt-4 lg:-mt-4">
      <h1 className=" text-slate-700 font-semibold text-xl ">
        Product details
      </h1>
      <div className=" mt-2 text-sm font-semibold text-zinc-400">
        <ul>
          <li className=" my-2 flex">
            <GoPrimitiveDot className=" m-1 text-zinc-500" />
            {details}
          </li>
          <li className=" flex">
            <GoPrimitiveDot className=" m-1 text-zinc-500" />
            Style - Unisex Tshirt{" "}
          </li>
          <li className=" my-2 flex">
            <GoPrimitiveDot className=" m-1 text-zinc-500" />
            Care Instructions: Hand Wash Only
          </li>
          <li className=" flex">
            <GoPrimitiveDot className=" m-1 text-zinc-500" />
            Perfect Choice To Wear With Jeans Or Trosuers.
          </li>
          <li className=" my-2 flex">
            <GoPrimitiveDot className=" m-1 text-zinc-500" />
            Long Lasting Tees, Something That You Can Wear On Any Occasion
          </li>
        </ul>
      </div>

      <div className="  mt-5 text-red-600 flex justify-around">
        <div className="  hover:cursor-pointer">
          <div onClick={() => setDeliveryModal(true)} className=" border-red-600 hover:bg-red-600 hover:text-slate-50 border-2 rounded-full absolute  p-3 ml-2 lg:p-3 lg:text-3xl lg:ml-1">
            <TbTruckDelivery />
          </div>
          <p className=" text-slate-900 underline text-xs text-center mt-12 lg:mt-[60px] lg:font-bold dark:text-slate-50">
            Free Delivery
          </p>
          <p className=" text-center">🇮🇳</p>
        </div>

        <div className="  hover:cursor-pointer">
          <div onClick={() => setCodModal(true)} className=" border-red-600 hover:bg-red-600 hover:text-slate-50 border-2 rounded-full absolute  p-3 lg:p-3 lg:text-3xl lg:-ml-1">
            <MdMoneyOff />
          </div>
          <p className=" text-slate-900 underline text-xs text-center mt-12 lg:mt-[60px] lg:font-bold dark:text-slate-50">
            No C O D
          </p>
        </div>

        <div className="hover:cursor-pointer">
          <div onClick={() => setReturnModal(true)} className=" border-red-600 hover:bg-red-600 hover:text-slate-50 border-2 rounded-full absolute  p-3 ml-2 lg:p-3 lg:text-3xl lg:ml-1">
            <GiReturnArrow />
          </div>
          <p className=" text-slate-900 underline text-xs text-center mt-12 lg:mt-[60px] lg:font-bold dark:text-slate-50">
            Return Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
