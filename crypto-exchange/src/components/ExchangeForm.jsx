import React, { useState } from 'react';

const ExchangeForm = () => {
  const [sendAmount, setSendAmount] = useState('12,110.00');
  const [getAmount, setGetAmount] = useState('15,135.00');
  
  return (
    <div className="mt-8">
      <div className="flex justify-between">
        {/* Send Column */}
        <div className="w-5/12">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Send</h2>
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
              <img src="/images/Extra/exchangefromss2.png" alt="Bitcoin" className="w-8 h-8" />
            </div>
            <input
              type="text"
              value={sendAmount}
              onChange={(e) => setSendAmount(e.target.value)}
              className="w-full bg-[#F6F7FB] border-2 border-[#f0f2f8] rounded-xl py-4 px-12 text-2xl text-gray-800"
            />
          </div>
          <div className="flex space-x-6 text-sm text-gray-500 mt-2 ml-2">
            <div>Min: <span className='font-bold'>0.005</span></div>
            <div>Max: <span className='font-bold'>0.1455</span></div>
          </div>
        </div>

        {/* Middle Exchange Icon */}
        <div className="flex items-center justify-center w-2/12">
          <div className="w-[6rem] h-[6rem] bg-gradient-to-b from-[#E7E8FA] to-[#BBBDE6] rounded-3xl shadow-2xl flex items-center justify-center -mt-0 -mb-4 border-2 border-[#E3E5F5] cursor-pointer">
            <img src="/images/Extra/sidebar ss3.gif" alt="exchange" className="w-[4rem] h-[4rem] rounded-2xl shadow-2xl" />
          </div>
        </div>

        {/* Get Column */}
        <div className="w-5/12">
          <h2 className="text-xl font-medium text-gray-700 mb-4 text-right">Get</h2>
          <div className="relative">
            <input
              type="text"
              value={getAmount}
              onChange={(e) => setGetAmount(e.target.value)}
              className="w-full bg-[#F6F7FB] border-2 border-[#f0f2f8] rounded-xl py-4 px-12 text-2xl text-gray-800 text-right"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
              <img src="/images/Extra/exchangefromss1.png" alt="USD" className="w-8 h-8" />
            </div>
          </div>
          <div className="text-sm text-gray-500 mt-2 text-right">
            Currency reserves: <span className="font-semibold">1,257 USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeForm;