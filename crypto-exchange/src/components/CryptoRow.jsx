import React from 'react';
import ChartLine from "./ChartLine"

const CryptoRow = ({ crypto }) => {
  const { symbol, name, amount, usdValue, eurValue, audValue, trend, icon, id, change } = crypto

  const formatValue = (value) => {
    return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  // Get background color based on cryptocurrency
  const getBgColor = (id) => {
    const colors = {
      btc: "bg-yellow-50",
      ltc: "bg-blue-50",
      eth: "bg-red-50",
      zcs: "bg-green-50",
      bet: "bg-indigo-50",
      sol: "bg-yellow-50",
    }
    return colors[id] || "bg-gray-50"
  }

  // Get text color for percentage change
  const getChangeColor = (trend) => {
    return trend === "up" ? "text-indigo-500" : "text-cyan-500"
  }

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-5 border-b border-gray-100 gap-3 sm:gap-0">
      <div className="flex items-center w-full sm:w-1/4 mb-2 sm:mb-0">
        <div className={`w-12 h-12 rounded-2xl ${getBgColor(id)} flex items-center justify-center mr-4`}>
          <img src={icon || "/placeholder.svg"} alt={name} className="w-6 h-6" />
        </div>
        <div>
          <div className="flex items-center">
            <span className="font-medium text-gray-800">
              {amount} {symbol}
            </span>
          </div>
          <div className="text-sm text-gray-500">{name}</div>
        </div>
      </div>

      <div className="w-full sm:w-1/4 flex items-start mb-2 sm:mb-0">
        <span className="text-gray-400 mx-2">=</span>
        <div className="ml-2">
          <div className="font-medium text-gray-800">{formatValue(usdValue)}</div>
          <div className="text-xs bg-[#CCCFDE] text-white px-5 py-1 rounded-full font-bold">USD</div>
        </div>
      </div>

      <div className="w-full sm:w-1/4 flex items-start mb-2 sm:mb-0">
        <span className="text-gray-400 mx-2">=</span>
        <div className="ml-2">
          <div className="font-medium text-gray-800">{formatValue(eurValue)}</div>
          <div className="text-xs bg-[#CCCFDE] text-white px-5 py-1 rounded-full font-bold">
            {id === "btc" || id === "ltc" || id === "eth" || id === "zcs" ? "GBR" : "USD"}
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/6 flex items-start mb-2 sm:mb-0">
        <span className="text-gray-400 mx-0">=</span>
        <div className="ml-3">
          <div className="font-medium text-gray-800">{formatValue(audValue)}</div>
          <div className="text-xs bg-[#CCCFDE] text-white px-5 py-1 rounded-full font-bold">EUR</div>
        </div>
      </div>

      <div className="w-full sm:w-1/6 relative h-12">
        <div className="flex items-center mb-1">
          <span className={`text-sm font-medium ${getChangeColor(trend)}`}>
            {trend === "up" ? "↑" : "↓"} {change}%
          </span>
        </div>
        <div className="h-6 w-full">
          <ChartLine trend={trend} cryptoId={id} />
        </div>
      </div>
    </div>
  )
}

export default CryptoRow

