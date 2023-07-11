const RecentIssues = () => {
  return (
    <div className="py-12 max-w-4xl mx-auto px-6 xl:px-0">
      <div className="text-center space-y-6 md:space-y-8">
        <div className="text-primary font-bold text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-primary">Recent Issues</h2>
          <span className="block w-12 border-b-2 mx-auto"></span>
        </div>
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
