import React from 'react'

import {
LineChart,
Line,
XAxis,
ResponsiveContainer,
} from "recharts";

const data = [
{ x: 10, a: 62, b: 48 },
{ x: 20, a: 78, b: 55 },
{ x: 30, a: 45, b: 30 },
// { x: 40, a: 88, b: 65 },
// { x: 50, a: 60, b: 50 },
// { x: 60, a: 55, b: 70 },
// { x: 70, a: 42, b: 58 },
// { x: 80, a: 72, b: 80 },
];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
const Short = () => {
  return (

        <div className="w-[100px] h-[120px]  pl-4">
            <div>
                <h4 className=' text-[18px] font-bold text-black'>
                1205
                </h4>
                <p className=' text-[18px] font-bold text-black'>Students</p>
            </div>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <XAxis dataKey="x" hide />
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
  )
}

export default Short;