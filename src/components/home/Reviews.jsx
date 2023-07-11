const Reviews = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0.24) 100%), url("https://img1.wsimg.com/isteam/stock/8844/:/rs=w:1920,m")`,
      }}
      className="bg-repeat-x bg-center text-white"
    >
      <div className="py-20 max-w-3xl mx-auto px-6 xl:px-0">
        <div className="text-center space-y-4 md:space-y-6">
          <h3 className="text-[32px] md:text-[46px] font-bold font-primary">
            Reviews
          </h3>
          <button className="py-3 w-full bg-[#4A4A4A] bg-opacity-60 text-center text-lg ">
            Reviews coming soon!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
