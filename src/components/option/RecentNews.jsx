import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../common/SectionTitle";

const RecentNews = () => {
  const news = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="py-12 max-w-[1400px] mx-auto px-6 xl:px-4">
      <SectionTitle title="Get Your Daily Dose of News" />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-12 pt-8">
        {news?.map((_data, idx) => (
          <div key={idx}>
            <div className="border-b pb-2 space-y-3">
              <Link
                href=""
                className="mx-auto relative overflow-hidden rounded-md block"
              >
                <Image
                  src="https://tds-images.thedailystar.net/sites/default/files/styles/medium_202/public/feature/images/eu-1.jpg"
                  width={600}
                  height={300}
                  alt=""
                  className="rounded-md transition duration-500 hover:scale-105 hover:translate-1"
                />
              </Link>
              <div className="space-y-2">
                <Link
                  href=""
                  className="text-[20px] block hover:text-info transition"
                >
                  Get the latest news and updates from your local community.
                  From events and politics to weather.
                </Link>
                <p>2h ago</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentNews;
