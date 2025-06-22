import DASHBOARD from "../../assets/dashboard.jpg";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="flex flex-col-reverse md:flex-row justify-center gap-5 w-full min-h-[80vh] py-25"
    >
      <div className="flex flex-col w-full md:w-1/2 justify-center items-center md:items-start mt-16 md:mt-0">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center md:text-start">
          Witness The Power Of Real Time Dashboard
        </h2>
        <div className="w-full md:max-w-sm max-w-xs flex justify-center items-center">
          <div className="flex w-full flex-row justify-between mb-12">
            <div className="flex flex-col gap-2">
              <p className="font-medium text-center md:text-start">Before</p>
              <p className="text-sm text-gray-700 font-medium">
                1500 clicks per day
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium text-center md:text-start">After</p>
              <p className="text-sm text-cyan-600 font-medium">
                2650 clicks per day
              </p>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="text-white text-[17px] font-medium bg-linear-to-r from-sky-500 to-cyan-400 px-5 py-3.5 rounded cursor-pointer"
        >
          Get results for your business
        </button>
      </div>
      <div className="flex w-full md:w-1/2 items-center justify-center">
        <img src={DASHBOARD} alt="dashboard image" className="rounded-xl" />
      </div>
    </section>
  );
};

export default Pricing;
