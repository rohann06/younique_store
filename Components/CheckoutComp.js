import { urlFor } from "../lib/client";
import { createClient } from "@supabase/supabase-js";
import { supabase } from "../supabseClient";
import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";
import Treasury from "../artifacts/contracts/Contract.sol/Treasury.json";
import { ethers } from "ethers";
import { cryptoConvert } from "../uitls";
import { useRouter } from "next/router";

const CheckoutComp = ({ product, size, link }) => {
  const { image, name, price, _id } = product;

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userMobileNumber, setUserMobileNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  // const [ethAmount, setEthAmout] = useState();

  const [disableButton, setDisableButton] = useState(true);
  const { address, isConnected } = useAccount();
  const [priceInEth, setPriceInEth] = useState(price + 5);
  const [totalPrice, setTotalPrice] = useState(price + 5);

  const router = useRouter();

  //Total prie


  const getEthPrice = async () => {
    await cryptoConvert.ready();
    const priceInEthi = cryptoConvert.USD.ETH(priceInEth);
    setPriceInEth(priceInEthi);
    console.log(priceInEth)
    console.log("priceInEth: ", priceInEthi);
  };

  useEffect(() => {
    getEthPrice();
  }, [price]);

  useEffect(() => {
    if (
      userName &&
      email &&
      (userMobileNumber.toString().length == 0 ||
        userMobileNumber.toString().length == 10) &&
      pincode &&
      country &&
      city &&
      fullAddress
    ) {
      setDisableButton(false);
    }
  }, [userName, email, userMobileNumber, pincode, country, city, fullAddress]);

  const { config } = usePrepareContractWrite({
    address: "0x533D29e0AC9C83760626B5C5064B54Eba521ae43",
    abi: Treasury.abi,
    functionName: "payment",
    overrides: {
      value: ethers.utils.parseEther(priceInEth.toString()),
    },
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  useEffect(() => {
    if (isSuccess) {
      console.log("success");
    }
    console.log("tx data", data);
  }, [data, isSuccess]);

  const submitHandler = async (e) => {
    e.preventDefault();

    await write();

    if (!isSuccess) {
      alert("Transaction failed");
      return;
    }

    try{
      const res = await supabase.from("orders").insert([
        {
          
          user_id: address,
          name: userName,
          productName: name,
          productId: _id,
          emailAddress: email,
          address,
          size: size,
          mobileNumber: userMobileNumber,
          pinCode: pincode,
          country: country,
          city: city,
          address: fullAddress,
          nftLink: link,
          shippingPrice: 5,
          totalPrice: price,
        },
      ]);
      console.log(res);
      router.push("/success");

    }catch (error){
      alert('Error while insurting data!')
      console.log(error)
    }
    // console.log(supabase);
    
  };

  return (
    <form action="submit" onSubmit={submitHandler}>
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
                ${price}
              </p>
              <p className="  text-neutral-400">
                Size:{" "}
                <span className=" font-bold text-black dark:text-slate-50">
                  ( {size} )
                </span>
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
                5$
              </p>
              <p className=" text-red-600 font-black text-xl lg:text-2xl">
                ${totalPrice}
              </p>
            </div>
          </div>
        </div>

        {/* Checkout Forms */}
        <div className=" mx-5 my-5 lg:mx-14">
          <p className=" mt-4 text-sm lg:text-base">Full name</p>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            placeholder=" full name"
            type="text"
            className=" dark:bg-slate-700/50 bg-neutral-300 w-full rounded-lg h-9 p-4 lg:h-10"
          />

          <p className=" mt-4 text-sm lg:text-base">Email Address</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email address"
            type="email"
            className=" dark:bg-slate-700/50 bg-neutral-300 w-full rounded-lg h-9 p-4 lg:h-10"
          />

          <p typeof="number" className=" mt-4 text-sm lg:text-base">
            Mobile number (optional)
          </p>
          <input
            value={userMobileNumber}
            onChange={(e) => setUserMobileNumber(e.target.value)}
            type="tel"
            placeholder="+91 9726698451"
            pattern="+[0-9]{2} [0-9]{3}[0-9]{3}[0-9]{4}"
            className=" dark:bg-slate-700/50 bg-neutral-300 w-full rounded-lg h-9 p-4 lg:h-10"
          />

          <div className=" grid grid-cols-2 gap-7 lg:grid-cols-3 mt-5">
            <div>
              <p className=" text-sm lg:text-base">PIN/ZIP code</p>
              <input
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                required
                placeholder="pin code"
                type="text"
                className=" dark:bg-slate-700/50 bg-neutral-300 w-full rounded-lg h-9 p-4 lg:h-10"
              />
            </div>

            <div>
              <p className=" text-sm lg:text-base ">City</p>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                placeholder="city"
                type="text"
                className=" dark:bg-slate-700/50 bg-neutral-300 w-[170px] rounded-lg h-9 p-4 lg:h-10 lg:w-[235px]"
              />
            </div>

            <div>
              <p className=" text-sm lg:text-base">Country</p>
              <input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                placeholder="country"
                type="text"
                className=" dark:bg-slate-700/50 bg-neutral-300 w-full rounded-lg h-9 p-4 lg:h-10"
              />
            </div>
          </div>

          <p className=" mt-4 text-sm lg:text-base">Full Address</p>
          <textarea
            value={fullAddress}
            onChange={(e) => setFullAddress(e.target.value)}
            required
            placeholder=" Enter you'r full correct address..."
            rows="10"
            className="dark:bg-slate-700/50 bg-neutral-300 w-full rounded-lg h-[5rem] pl-4 lg:h-10"
          />
          <div className=" text-center mt-5 lg:mt-8">
            {!isConnected ? (
              <div>
                <ConnectButton />
              </div>
            ) : (
              <button
                className={`bg-red-600 text-slate-50 rounded-lg font-medium font-Poppins px-12 py-2 lg:text-lg lg:hover:bg-red-700 ${
                  (disableButton || !write) && "cursor-not-allowed bg-red-600"
                }`}
              >
                Pay and Place order
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutComp;
