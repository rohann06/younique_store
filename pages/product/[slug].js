import { client, urlFor } from "../../lib/client";
import {BsExclamationCircle} from 'react-icons/bs';
import Reviews from "../../Components/Reviews";
import BuyForm from "../../Components/BuyForm";


const ProductDetails = ({ product }) => {
  const { image, name, details, price } = product;


  return (
    <div>
        <div className=" flex flex-wrap m-5 lg:flex-row lg:gap-16 lg:m-20"> 
            <div>
                <div className=" drop-shadow-lg">
                    <img className=" bg-neutral-200 hover:bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 cursor-pointer rounded-3xl p-3 w-auto lg:max-h-[450px] dark:bg-slate-700/50" src={urlFor(image && image[0])} alt="Product Image"/>
                </div>
                {/* <div>
                    {image?.map((item, i) => {
                        
                        <img src={urlFor(item)} />
                    })}
                </div> */}
            </div>

            <div>
                <h1 className=" mt-4 text-3xl font-black text-slate-600 lg:mt-0 lg:text-4xl dark:text-slate-50">{name}</h1>
                <h4 className=" text-slate-400 my-1 text-sm  font-semibold lg:text-base dark:text-slate-500">{details}</h4>
                <h3 className=" mt-4 mb-3 text-2xl font-bold text-red-500">₹{price}</h3>

                <div className=" flex justify-start bg-amber-300/20 p-3 rounded-xl -my-2 text-yellow-700 dark:text-yellow-500">
                    <BsExclamationCircle className="text-3xl lg:text-lg lg:my-1"/>
                    <p className=" m-1 text-sm"> Every T-shirt is unique for us and for you too, for that we're not giving any <span className=" font-semibold">"quantity buttons"</span></p>
                </div>

                <BuyForm />

            </div>
        </div>

        {/* Reviews */}
        <div className=" text-center mt-20 lg:mt-10 mb-10">
          <h1 className=" text-slate-700 font-black text-4xl lg:text-5xl dark:text-slate-50">Fren's Reviews</h1>
          <Reviews />
        </div>
    </div>
  );
};


// Static Paths
export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {slug {current}}`;
  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

// Static Props
export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);

  return {
    props: { product },
  };
};

export default ProductDetails;
