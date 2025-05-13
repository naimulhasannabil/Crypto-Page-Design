import React from 'react';
import AccountCard from './AccountCard';
import { accountsData } from '../data';
import { Plus } from "lucide-react"

const AccountsPanel = () => {
  return (
    <div className="bg-[#7983F4] rounded-3xl p-8 text-white h-full">
      {/* Top section with balance and card info */}
      <div className="bg-white/10 rounded-2xl p-6 mb-8 relative bg-[#9099ff]">
        <div>
          <div className="text-3xl">
                284,196<span className="text-base align-down">.00</span>
            </div>

          <div className="bg-[#D6DCFB] px-3 py-1 rounded-full text-xs inline-block mt-2 text-[#5e677e]">USD</div>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <div className="bg-white rounded-lg py-2 px-3 flex items-center cursor-pointer">
            <img src="/images/Mastercard-Logo.png" alt="Mastercard" className="w-7 h-5 mr-2" />
            <span className="text-black text-sm font-medium">*2541</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1 text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <button className="bg-white rounded-lg p-2 flex items-center justify-center">
            <Plus className="h-5 w-5 text-black" />
          </button>
        </div>

        {/* Illustration */}
        <div className="absolute right-0 bottom-0">
          <img src="/images/illustration.png" alt="Illustration" className="h-[10rem] w-[] object-contain" />
        </div>
      </div>

      {/* Accounts list */}
      <div className="px-2">
        {accountsData.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}

        {/* Load more button - left aligned */}
        <button className="text-white font-medium mt-4 flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          <span className="text-sm tracking-wider">LOAD MORE</span>
        </button>
      </div>
    </div>
  )
}

export default AccountsPanel