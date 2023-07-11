import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../common/SectionTitle";

const BrakingNews = () => {
  const news = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="py-12 max-w-[1200px] mx-auto px-6 xl:px-4">
      <SectionTitle title="Breaking News" />
      <div className="space-y-6 md:space-y-8 pt-8">
        {news?.map((_data, idx) => (
          <div key={idx}>
            <div className="grid md:flex items-center gap-6 md:gap-12 border-b pb-6 ">
              <div className="md:max-w-[300px] lg:max-w-[550px]">
                <Link
                  href=""
                  className="mx-auto relative overflow-hidden rounded-md block "
                >
                  <Image
                    src="https://tds-images.thedailystar.net/sites/default/files/styles/medium_202/public/feature/images/eu-1.jpg"
                    width={700}
                    height={300}
                    alt=""
                    className="rounded-md transition duration-500 hover:scale-105 hover:translate-1"
                  />
                </Link>
              </div>
              <div className="space-y-4 w-full">
                <Link
                  href=""
                  className="text-[24px] block hover:text-info font-medium transition"
                >
                  New Relight news issue now available
                </Link>
                <Link
                  href=""
                  className="text-[18px] block hover:text-info transition opacity-80"
                >
                  Get the latest news and insights from the world of newspapers
                  and magazines with our newest issue. Featuring in-depth
                  articles and interviews with industry leaders, this issue is a
                  must-read for anyone interested in the media industry. Get an
                  exclusive look at the inner workings of Relight news with our
                  behind-the-scenes series.
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrakingNews;
