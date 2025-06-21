import { IoCheckmarkSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import HERO from "../../assets/hero-image.jpg";
import LineChartCard from "../../components/Cards/LineChartCard.component";
import BarChartCard from "../../components/Cards/BarChartCard.component";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:flex-row gap-10 items-center justify-center w-full min-h-[80vh]"
    >
      <div className="flex flex-col w-full md:w-1/2 items-start justify-center">
        <div className="w-full items-center hidden md:flex gap-2">
          <div className="w-[30px] h-[2px] bg-gray-600" />
          <p className="text-sm font-medium text-gray-600">
            Retail Sales & Distribution With Salesync DMS
          </p>
        </div>
        <h1 className="text-[26px] md:text-[40px] text-center md:text-start font-bold text-cyan-500 mt-0 md:mt-8 leading-tight">
          Finally, A{" "}
          <span className="bg-cyan-200/50 text-cyan-700">Software Company</span>{" "}
          That Excels As Your Sales Development Partner
        </h1>
        <p className="text-sm text-slate-700 mt-4 font-medium hidden md:block">
          (Like 0 To 1000 New Sales Per Month Kind Of Results)
        </p>
        <div className="mt-10 flex flex-col gap-2 text-gray-700">
          <div className="flex flex-row gap-2 items-center text-base font-medium">
            <IoCheckmarkSharp className="text-cyan-400 text-[18px]" />
            Boost Sales
          </div>
          <div className="flex flex-row gap-2 items-center text-base font-medium">
            <IoCheckmarkSharp className="text-cyan-400 text-[18px]" />
            Advanced Analytics
          </div>
          <div className="flex flex-row gap-2 items-center text-base font-medium">
            <IoCheckmarkSharp className="text-cyan-400 text-[18px]" />
            Data Driven Decisions
          </div>
        </div>
        <button
          type="button"
          className="bg-cyan-400 text-white px-6 py-2.5 flex flex-row gap-2 items-center font-medium text-[16px] rounded mt-8 group transition-all duration-300"
        >
          Request Demo
          <FaArrowRight className="text-[15px] group-hover:translate-x-1" />
        </button>
      </div>
      <div className="flex relative w-full md:w-1/2">
        <img
          src={HERO}
          alt="salesync hero image"
          className="w-full h-auto rounded"
        />
        <div className="absolute -bottom-10 -left-16 hidden sm:block">
          <LineChartCard />
        </div>
        <div className="absolute bottom-24 -right-10 hidden sm:block">
          <BarChartCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
