import SectionTitle from "../common/SectionTitle";

const RecentIssues = () => {
  return (
    <div className="py-12 max-w-4xl mx-auto px-6 xl:px-0">
      <div className="text-center space-y-6 md:space-y-8">
        <SectionTitle title="Recent Issues" />
        <p className="text-[18px] md:text-[20px] opacity-70">
          Download a PDF of a recent issue, or subscribe below to receive our
          latest articles in your inbox.
        </p>
        <button className="w-full md:w-[350px] py-5 text-center text-lg bg-primary-3 border ">
          Files coming soon.
        </button>
      </div>
    </div>
  );
};

export default RecentIssues;
