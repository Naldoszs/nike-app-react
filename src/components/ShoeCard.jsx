const ShoeCard = ({ imgURL, bigShoeImg, changeBigShoeImg }) => {
  // click handles ftn
  const handleClick = () => {
    if (bigShoeImg === imgURL.bigShoe) {
      return;
    } else {
      changeBigShoeImg(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 ${bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"} rounded-xl cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justiy-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={120}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
