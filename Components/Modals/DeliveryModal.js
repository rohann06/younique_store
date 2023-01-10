const DeliveryModal = ({isVisble, onClose}) => {

    if(!isVisble) return null;

    return ( 
        <div className=" fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center ">
            <div className=" w-full mx-8 lg:w-[600px] mb-12 ">
                <div className=" bg-slate-100 p-2 rounded-lg px-3">
                    <div className=" flex justify-between  border-b-2 pb-2 text-black">

                        <p className=" font-Poppins font-medium ">Shipping Conditions</p>

                        <button onClick={()=> onClose()} className=" font-bold text-sm border-2 px-2 rounded-md hover:border-red-600 hover:text-red-600">X</button>
                    </div>
                    <div className=" my-2 lg:my-5">
                        <p className=" text-gray-400"> Anywhere in <span className=" text-gray-500 font-semibold">India</span> the Shipping will be <span className=" text-gray-500 font-semibold">free</span>, besides the shipping charges will weary according to the country.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default DeliveryModal;