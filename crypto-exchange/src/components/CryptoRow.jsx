import React from 'react';
import ChartLine from './ChartLine';

const CryptoRow = ({ crypto }) => {
   const { symbol, name, amount, usdValue, eurValue, audValue, change, trend, icon, id } = crypto;
  
  const formatValue = (value) => {
    return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
  
  return (
    <div className="flex items-center py-4 border-b border-gray-100">
      <div className="flex items-center w-1/4">
        <div className="w-10 h-10 rounded-2xl bg-gray-100 flex items-center justify-center mr-3">
          <img src={icon || "/placeholder.svg"} alt={name} className="w-10 h-10 rounded-xl" />
        </div>
        <div>
          <div className="flex items-center">
            <span className="font-medium">{amount} {symbol}</span>
          </div>
          <div className="text-sm text-gray-500">{name}</div>
        </div>
      </div>
      
      <div className="w-1/4 flex items-center">
        <span className="text-gray-400">=</span>
        <div className="ml-3">
          <div className="font-medium text-gray-800">{formatValue(usdValue)}</div>
          <div className="text-xs bg-[#D0D1DE] text-white px-2 py-0.5 rounded-full font-bold">USD</div>
        </div>
      </div>

      <div className="w-1/4 flex items-center">
        <span className="text-gray-400">=</span>
        <div className="ml-3">
          <div className="font-medium text-gray-800">{formatValue(eurValue)}</div>
          <div className="text-xs bg-[#D0D1DE] text-white px-2 py-0.5 rounded-full font-bold">
            {id === "btc" || id === "ltc" || id === "eth" || id === "zcs" ? "GBR" : "USD"}
          </div>
        </div>
      </div>

      <div className="w-1/6 flex items-center">
        <span className="text-gray-400">=</span>
        <div className="ml-3">
          <div className="font-medium text-gray-800">{formatValue(audValue)}</div>
          <div className="text-xs bg-[#D0D1DE] text-white px-2 py-0.5 rounded-full font-bold">EUR</div>
        </div>
      </div>
      
      <div className="w-1/6">
        <div className="flex items-center">
          <span className={`text-sm ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
            {trend === 'up' ? '↑' : '↓'} {change}%
          </span>
        </div>
        <div className="h-6">
          <ChartLine trend={trend} height={20} />
        </div>
      </div>
    </div>
  );
};

export default CryptoRow;