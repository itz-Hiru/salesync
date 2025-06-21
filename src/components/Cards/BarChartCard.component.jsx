import { FaRegChartBar } from "react-icons/fa";

const BarChartCard = () => {
  return (
    <div className="w-48 h-48 flex flex-col bg-white shadow-md rounded-lg justify-center items-center">
      <div className="px-5 py-5 shadow-xl shadow-black/20 rounded-md">
        <FaRegChartBar className="text-4xl text-cyan-400" />
      </div>
      <div className="text-center mt-3">
        <p className="text-2xl font-bold text-cyan-400 text-shadow-md text-shadow-cyan-100">
          300 M
        </p>
        <p className="text-[12px] text-gray-700 text-shadow-sm font-medium">
          Clients Organic <br />
          Traffic Per Month
        </p>
      </div>
    </div>
  );
};

export default BarChartCard;
