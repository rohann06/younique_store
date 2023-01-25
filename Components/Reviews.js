const Reviews = () => {
  return (
    <div className=" bg-neutral-200 mt-10 rounded-2xl dark:bg-slate-800 ">
      <div className=" py-40">
        <h5 className=" text-gray-600/30 text-4xl font-black my-5 lg:text-6xl lg: -mt-2 mb-20 dark:text-slate-600">No reviews yet...</h5>

        <p className=" font-Poppins px-5 text-base leading-relaxed text-gray-500 lg:text-lg dark:text-slate-50">
          You can tell us your experience and reviews on twitter by taging
          <strong className=" font-semibold text-slate-700 dark:text-slate-500">
            <a href="https://twitter.com/YOUnique__06"> @YOUnique__06 </a>
          </strong>
          and you also can use our hashtag <strong className=" font-semibold text-slate-700 dark:text-slate-500">#NFT #FashionTech #YouniqueTshirts </strong>. Thank
          you! for giving us your honest opinion
        </p>
      </div>
    </div>
  );
};

export default Reviews;
