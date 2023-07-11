import Image from "next/image";
import SectionTitle from "../common/SectionTitle";

const Sections = () => {
  const fakeData = [
    {
      title: "Latest News",
      description:
        "In our Latest News section, we bring you the newest and most exciting news related to your interests. With compelling photos and quotes directly from the source, we keep you up to date on the latest and greatest. ",
      image:
        "https://img1.wsimg.com/isteam/stock/2658/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300",
    },
    {
      title: "Local Interest",
      description:
        " We not only focus on the big news, but also on the news that matters to our community. In our Local Interest section, you can read about matters that are closer to home. And let us know of a local issue you think we should cover.",
      image:
        "https://img1.wsimg.com/isteam/stock/2898/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300",
    },
    {
      title: "How-to & More",
      description:
        "We have many more ways to keep you connected to the information you need. From informative how-to articles to interviews with top members of the field, we continue to bring you the stories you need and love.",
      image:
        "https://img1.wsimg.com/isteam/stock/6877/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300",
    },
  ];
  return (
    <div className="py-12 max-w-[1400px] mx-auto px-6 xl:px-0">
      <SectionTitle title="Sections" />
      <div className="pt-8 space-y-6">
        {fakeData?.map((data, idx) => (
          <div key={idx} className="grid md:grid-cols-2 items-center gap-6">
            <div className={`mx-auto ${idx % 2 === 1 && "md:order-last"}`}>
              <Image src={data?.image} width="600" height="300" alt="" />
            </div>
            <div className="text-center space-y-4">
              <h4 className="text-[24px] md:text-[28px]">{data?.title}</h4>
              <p className="text-[18px] opacity-80">{data?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sections;
