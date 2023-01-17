import { useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { urlFor } from "../lib/client";
import CodModal from "./Modals/CodModal";
import DeliveryModal from "./Modals/DeliveryModal";
import ReturnModal from "./Modals/ReturnModal";
import ProductDetail from "./ProductDetail";
import Reviews from "./Reviews";
import SizeAndLinkForm from './SizeAndLinkForm';


const ProductComp = ({product}) => {

  const { image, name, details, price, mainprice } = product;

  //Modal state
  const [returnModal, setReturnModal] = useState(false);
  const [deliveryModal, setDeliveryModal] = useState(false);
  const [codModal, setCodModal] = useState(false);

  return (
    <>
      <div>
        <div className=" flex flex-wrap m-5 lg:flex-row lg:gap-16 lg:m-20">
          <div>
            <div className=" drop-shadow-lg">
              <img
                className=" bg-neutral-200 hover:bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 cursor-pointer rounded-3xl p-3 w-auto lg:max-h-[450px] dark:bg-slate-700/50"
                src={urlFor(image && image[0])}
                alt="Product Image"
              />
            </div>
          </div>

          <div>
            <h1 className=" mt-4 text-3xl font-black text-slate-600 lg:mt-0 lg:text-4xl dark:text-slate-50">
              {name}
            </h1>
            <h4 className=" text-slate-400 my-1 text-sm  font-semibold lg:text-base dark:text-slate-500">
              {details}
            </h4>
            <div className=" flex gap-3 mb-5">
              <h3 className=" mt-4  text-2xl font-bold text-red-500">
                ₹{price}
              </h3>
              <p className=" text-slate-400 text-[20px] line-through decoration-2 mt-4">
                ₹{mainprice}
              </p>
            </div>

            <div className=" flex justify-start bg-amber-300/20 p-3 rounded-xl -my-2 text-yellow-700 dark:text-yellow-500">
              <BsExclamationCircle className="text-3xl lg:text-lg lg:my-1" />
              <p className=" m-1 text-sm">
                {" "}
                Every T-shirt is unique for us and for you too, for that we're
                not giving any{" "}
                <span className=" font-semibold">"quantity buttons"</span>
              </p>
            </div>

            <SizeAndLinkForm />
          </div>

          {/* Prodct details*/}
          <ProductDetail
            details={details}
            setReturnModal={setReturnModal}
            setDeliveryModal={setDeliveryModal}
            setCodModal={setCodModal}
          />
        </div>

        {/* Reviews */}
        <div className=" text-center mt-20 lg:mt-10 mb-10">
          <h1 className=" text-slate-700 font-black text-4xl lg:text-5xl dark:text-slate-50">
            Fren's Reviews
          </h1>
          <Reviews />
        </div>
      </div>

      {/* Modals */}
      <ReturnModal
        isVisble={returnModal}
        onClose={() => setReturnModal(false)}
      />

      <CodModal isVisble={codModal} onClose={() => setCodModal(false)} />

      <DeliveryModal
        isVisble={deliveryModal}
        onClose={() => setDeliveryModal(false)}
      />
    </>
  );
};

export default ProductComp;
