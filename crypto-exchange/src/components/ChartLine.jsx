import React from 'react';

import { AreaChart, Area, ResponsiveContainer } from "recharts"

const ChartLine = ({ trend, cryptoId }) => {
  // Generate random data that mimics the shape of each crypto's graph
  const getData = (id) => {
    const patterns = {
      btc: [10, 12, 15, 13, 16, 14, 17, 15, 18, 16, 19, 17, 20, 18, 22, 20, 25],
      ltc: [20, 22, 18, 23, 19, 24, 20, 25, 21, 26, 22, 27, 23, 28, 24, 29, 25],
      eth: [15, 17, 14, 18, 15, 19, 16, 20, 17, 21, 18, 22, 19, 23, 20, 24, 26],
      zcs: [12, 14, 13, 16, 14, 17, 15, 18, 16, 20, 17, 19, 18, 21, 19, 22, 25],
      bet: [18, 20, 19, 22, 20, 23, 21, 24, 22, 25, 23, 26, 24, 27, 25, 28, 30],
      sol: [25, 27, 24, 28, 25, 29, 26, 30, 27, 31, 28, 32, 29, 33, 30, 34, 31],
    }

    const pattern = patterns[id] || patterns.btc

    return pattern.map((value, index) => ({
      value: value,
    }))
  }
  const getColor = (trend) => {
    return trend === "up" ? "#8884d8" : "#4bc0c0"
  }

  const data = getData(cryptoId)
  const color = getColor(trend)

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height={30}>
        <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id={`gradient-${cryptoId}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.3} />
              <stop offset="95%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            fillOpacity={1}
            fill={`url(#gradient-${cryptoId})`}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartLine
