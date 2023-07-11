import Link from "next/link";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%), url("https://img1.wsimg.com/isteam/stock/4065/:/rs=w:1920,m")`,
      }}
      className="flex justify-center items-center h-[450px] md:h-[550px] lg:h-[640px] px-6 bg-cover bg-repeat-x bg-center"
    >
      <div className="text-center max-w-3xl space-y-3 text-white pt-12">
        <h2 className="text-[40px] sm:text-[48px] md:text-6xl lg:text-[76px] leading-none  font-bold font-primary">
          Stay connected, stay informed
        </h2>
        <p className="text-[22px] sm:text-xl uppercase ">
          Get the region's top stories!
        </p>
        <div className="pt-6">
          <Link
            className="text-[#000] font-medium  hover:bg-primary-2 bg-primary py-4 w-full md:w-[180px] inline-block rounded text-lg transition uppercase"
            href=""
          >
            Subscribe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
