const BuyForm = () => {
    return ( 
        <>
            <form>
                <div className=" mt-5">
                    <label htmlFor="size"><h1 className=" text-slate-600 font-bold text-xl dark:text-slate-50">Size</h1></label>
                    <div className=" py-3 -ml-1">
                        <button className="border-[3px] text-slate-500/50 font-semibold rounded-lg text-lg py-2 px-3 mx-1 hover:text-red-500 hover:border-red-500 dark:text-slate-500 dark:border-slate-500 dark:hover:text-red-500 dark:hover:border-red-500">S</button>

                        <button className="border-[3px] text-slate-500/50 font-semibold rounded-lg text-lg py-2 px-3 mx-1 hover:text-red-500 hover:border-red-500 dark:text-slate-500 dark:border-slate-500 dark:hover:text-red-500 dark:hover:border-red-500 ">M</button>

                        <button className="border-[3px] text-slate-500/50 font-semibold rounded-lg text-lg py-2 px-3 mx-1 hover:text-red-500 hover:border-red-500 dark:text-slate-500 dark:border-slate-500 dark:hover:text-red-500  dark:hover:border-red-500">L</button>

                        <button className="border-[3px] text-slate-500/50 font-semibold rounded-lg text-lg py-2 px-3 mx-1 hover:text-red-500 hover:border-red-500 dark:text-slate-500 dark:border-slate-500 dark:hover:text-red-500 dark:hover:border-red-500 ">XL</button>

                        <button className="border-[3px] text-slate-500/50 font-semibold rounded-lg text-lg py-2 px-3 mx-1 hover:text-red-500 hover:border-red-500 dark:text-slate-500 dark:border-slate-500 dark:hover:text-red-500 dark:hover:border-red-500 ">XXL</button>

                        <button className="border-[3px] text-slate-500/50 font-semibold rounded-lg text-lg py-2 px-3 mx-1 hover:text-red-500 hover:border-red-500 dark:text-slate-500 dark:border-slate-500 dark:hover:text-red-500 dark:hover:border-red-500 ">XXXL</button>
                    </div>

                    <label htmlFor="size"><h1 className=" text-slate-600 font-bold text-xl dark:text-slate-50">NFT image Link</h1></label>
                    <input type="text" name="link" placeholder="Enter nft link"  className=" focus:border-red-500 bg-transparent border-[3px] mt-2 p-2 w-full rounded-lg dark:border-slate-500 dark:focus:border-red-500"/>
                </div>
            </form>
        </>
     );
}
 
export default BuyForm;