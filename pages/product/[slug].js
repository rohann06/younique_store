import { client, urlFor } from "../../lib/client";

//Components
import Reviews from "../../Components/Reviews";
import SizeAndLinkForm from "../../Components/SizeAndLinkForm";
import ProductDetail from "../../Components/ProductDetail";
import ReturnModal from "../../Components/Modals/ReturnModal";
import CodModal from "../../Components/Modals/CodModal";

// React Icons
import { BsExclamationCircle } from "react-icons/bs";
import { Fragment, useState } from "react";
import DeliveryModal from "../../Components/Modals/DeliveryModal";
import ProductComp from "../../Components/ProductComp";
import CheckoutComp from "../../Components/CheckoutComp";

const ProductDetails = ({ product }) => {
  const [activeState, setActiveState] = useState(0);

  return (
    <Fragment>
      {activeState == 0 ? (
        <ProductComp setActiveState={setActiveState} product={product} />
      ) : (
        <CheckoutComp />
      )}
    </Fragment>
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
