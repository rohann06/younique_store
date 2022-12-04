import { client, urlFor } from "../../lib/client";
import {BsExclamationCircle} from 'react-icons/bs';
import Reviews from "../../Components/Reviews";


const ProductDetails = ({ product }) => {
  const { image, name, details, price } = product;


  return (
    <div>
        <div className=" flex flex-wrap m-5 lg:flex-row lg:gap-16 lg:m-20 "> 
            <div>
                <div>
                    <img className=" bg-neutral-200 hover:bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 cursor-pointer rounded-3xl p-3 w-auto lg:max-h-96 " src={urlFor(image && image[0])} alt="Product Image"/>
                </div>
                {/* <div>
                    {image?.map((item, i) => {
                        
                        <img src={urlFor(item)} />
                    })}
                </div> */}
            </div>

            <div>
                <h1 className=" mt-4 text-4xl font-black font-Poppins text-slate-700 lg:mt-0">{name}</h1>
                <h4 className=" text-slate-400 my-1 text-sm  font-semibold lg:text-base ">{details}</h4>
                <h3 className=" my-5 text-2xl font-bold text-red-500">₹{price}</h3>

                <div className=" flex justify-start bg-amber-300/20 p-3 rounded-xl -my-2 text-yellow-500">
                    <BsExclamationCircle className="text-3xl lg:text-lg lg:my-1"/>
                    <p className=" m-1 text-sm"> Every T-shirt is unique for us and for you also,for that we're not adding any <span className=" font-semibold">"quantity button"</span></p>
                </div>
            </div>
        </div>

        {/* Reviews */}
        <div className=" text-center mt-20 lg:mt-10 mb-10">
          <h1 className=" text-slate-700 font-black text-4xl lg:text-5xl">Fren's Reviews</h1>
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
