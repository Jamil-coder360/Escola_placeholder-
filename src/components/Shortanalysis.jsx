import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  ResponsiveContainer,
} from "recharts";
import Short from "./Short";

const data = [
  { x: 10, a: 62, b: 48 },
  { x: 20, a: 78, b: 55 },
  { x: 30, a: 45, b: 30 },
  { x: 40, a: 88, b: 65 },
  { x: 50, a: 60, b: 50 },
  { x: 60, a: 55, b: 70 },
  { x: 70, a: 42, b: 58 },
  { x: 80, a: 72, b: 80 },
];

const periods = ["Day", "Week", "Month"];

// const CustomDot = ({ cx, cy, fill }) => (
//   <circle cx={cx} cy={cy} r={5} fill={fill} stroke="white" strokeWidth={2} />
// );

export default function DashboardCard() {
  const [period, setPeriod] = useState("Week");
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-transparent font-sans">
      
      <div className="w-[300px] bg-[#f0f4ff] p-5 rounded-3xl shadow-xl pb-5">
        
        {/* Chart Section */}
        <div className="bg-white rounded-2xl p-4 relative">

          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <span className="font-semibold text-[16px] text-[#1a1d2e]">
              Adipiscing
            </span>

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-3 py-1 border rounded-full text-black text-sm border-[#e0e6f7]"
              >
                {period}
                <svg
                  className={`transition-transform ${open ? "rotate-270" : ""}`}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="#888"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {open && (
                <div className="absolute z-100 right-0 mt-2 bg-white border rounded-xl shadow-md overflow-hidden text-sm">
                  {periods.map((p) => (
                    <div
                      key={p}
                      onClick={() => {
                        setPeriod(p);
                        setOpen(false);
                      }}
                      className={`px-4 py-2 cursor-pointer ${
                        p === period
                          ? "text-[#4e90e8] bg-blue-50 font-semibold"
                          : "text-gray-600"
                      }`}
                    >
                      {p}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Chart */}
          <div className="w-full h-[120px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis
                  dataKey="x"
                  tick={{ fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                />

                <Line
                  type="monotone"
                  dataKey="a"
                  stroke="#f5a623"
                  strokeWidth={2.5}
                //   dot={< fill="#f5a623" />}
                />

                <Line
                  type="monotone"
                  dataKey="b"
                  stroke="#7c6af7"
                  strokeWidth={2.5}
                //   dot={< fill="#7c6af7" />}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
  
        {/* Stats */}
  
<div className="relative grid grid-cols-2 pr-4 
after:content-[''] 
after:absolute 
after:left-1/2 
after:top-3 
after:h-full 
after:w-[3px] 
after:bg-gray-200">

  <Short />
  <Short />

</div>

      </div>
    </div>
  );
}