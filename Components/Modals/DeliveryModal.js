const DeliveryModal = ({isVisble, onClose}) => {

    if(!isVisble) return null;

    return ( 
        <div className=" fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className=" w-full mx-8 lg:w-[600px]">
                <div className=" bg-slate-100 p-2 rounded-lg">
                    <div className=" flex justify-between px-2 border-b-2 pb-2 text-black">

                        <p className=" font-Poppins font-medium ">Delivery methods</p>

                        <button onClick={()=> onClose()} className=" font-bold text-sm border-2 px-2 rounded-md hover:border-red-600 hover:text-red-600">X</button>
                    </div>
                    <div>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default DeliveryModal;