const Subscribe = () => {
  return (
    <div className="bg-primary-3">
      <div className="py-12 max-w-3xl mx-auto px-6 xl:px-0">
        <div className="text-center space-y-4 md:space-y-6">
          <h3 className="text-[32px] md:text-[42px] font-bold font-primary">
            Subscribe
          </h3>
          <p className="text-[18px] md:text-[20px] opacity-70">
            Sign up to get each issue delivered straight to your inbox.
          </p>
        </div>
        <div className="grid md:flex gap-6 md:gap-4 pt-6">
          <input
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg block w-full px-6 py-4"
            placeholder="Email Address"
          />
          <button
            className="text-black font-medium bg-opacity-70 hover:bg-primary-2 bg-primary py-3 w-full md:w-[150px] inline-block rounded text-lg uppercase"
            type="submit"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
