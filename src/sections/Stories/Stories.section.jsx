import { MdEmojiEvents, MdReceiptLong } from "react-icons/md";
import { RATES } from "../../utils/data";
import { FaBoxOpen, FaShoppingCart, FaSmile } from "react-icons/fa";
import { FaClock, FaFileInvoiceDollar } from "react-icons/fa6";

const Stories = () => {
  return (
    <section
      id="stories"
      className="w-full min-h-[100vh] flex flex-col items-center justify-center pt-28"
    >
      <h2 className="text-gray-900 text-3xl font-bold text-center max-w-lg mb-24">
        <span className="text-cyan-500">Salesync DMS</span> Success Stories,
        Take A Look To Grow You Business
      </h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-15 mb-20">
        {RATES.map((rate, index) => (
          <div
            key={index}
            className="bg-white rounded-lg flex flex-col p-5"
            style={{ borderLeft: `12px solid ${rate.color}` }}
          >
            <h3 className="text-cyan-400 text-4xl font-bold mb-10">
              {rate.rate}%
            </h3>
            <p className="text-[16px] text-gray-950 font-medium mb-10">
              {rate.description}
            </p>
            <div className="w-10 h-10 flex relative bg-cyan-400/10 rounded-full">
              <rate.icon className="text-4xl text-cyan-400 absolute -right-1 -bottom-1" />
            </div>
          </div>
        ))}
      </div>
      <div className="w-full min-h-[50vh] bg-cyan-100/80 flex items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-15">
          <div className="flex flex-row gap-6">
            <div className="w-10 h-10 rounded-full bg-violet-300/50 flex relative">
              <MdEmojiEvents className="absolute -bottom-2 -right-2 text-violet-500 text-4xl" />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-3xl font-medium text-gray-900">
                <span>2,650</span> +
              </p>
              <p className="text-[14px] font-semibold text-gray-600">
                Live Subscriptions
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="w-10 h-10 rounded-full bg-green-300/50 flex relative">
              <FaSmile className="absolute -bottom-2 -right-2 text-green-600 text-4xl" />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-3xl font-medium text-gray-900">
                <span>45</span>
              </p>
              <p className="text-[14px] font-semibold text-gray-600">
                Active Clients
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="w-10 h-10 rounded-full bg-orange-300/50 flex relative">
              <FaShoppingCart className="absolute -bottom-2 -right-2 text-orange-700 text-4xl" />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-3xl font-medium text-gray-900">
                <span>567K</span>+
              </p>
              <p className="text-[14px] font-semibold text-gray-600">
                Retail Covered
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="w-10 h-10 rounded-full bg-cyan-300/50 flex relative">
              <FaBoxOpen className="absolute -bottom-2 -right-2 text-cyan-600 text-4xl" />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-3xl font-medium text-gray-900">
                <span>8K</span>+
              </p>
              <p className="text-[14px] font-semibold text-gray-600">
                Product Items Listed
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="w-10 h-10 rounded-full bg-violet-300/50 flex relative">
              <FaClock className="absolute -bottom-2 -right-2 text-violet-500 text-4xl" />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-3xl font-medium text-gray-900">
                <span>14,650K</span>+
              </p>
              <p className="text-[14px] font-semibold text-gray-600">
                POS Check-Ins
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="w-10 h-10 rounded-full bg-green-300/50 flex relative">
              <FaFileInvoiceDollar className="absolute -bottom-2 -right-2 text-green-600 text-4xl" />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-3xl font-medium text-gray-900">
                <span>865K</span>+
              </p>
              <p className="text-[14px] font-semibold text-gray-600">
                Million Invoices
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="w-10 h-10 rounded-full bg-orange-300/50 flex relative">
              <MdReceiptLong className="absolute -bottom-2 -right-2 text-orange-700 text-4xl" />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-3xl font-medium text-gray-900">
                <span>2,750</span>+
              </p>
              <p className="text-[14px] font-semibold text-gray-600">
                Crore Worth of Invoices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
