import { Line, LineChart, ResponsiveContainer } from "recharts";
import { CHART_DATA } from "../../utils/data";

const LineChartCard = () => {
  return (
    <div className="w-48 h-48 bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
      <ResponsiveContainer width="80%" height={90}>
        <LineChart data={CHART_DATA}>
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="4"
                result="blur"
              />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <Line
            type="linear"
            dataKey="value"
            stroke="#00E0FF"
            strokeWidth={3}
            dot={false}
            filter="url(#glow)"
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="text-center mt-4">
        <p className="text-cyan-400 text-xl font-bold text-shadow-md text-shadow-cyan-100">
          +780%
        </p>
        <p className="text-[12px] text-gray-600 text-shadow-sm text-shadow-gray-400/80">
          Avarage Return <br /> On Investment
        </p>
      </div>
    </div>
  );
};

export default LineChartCard;
