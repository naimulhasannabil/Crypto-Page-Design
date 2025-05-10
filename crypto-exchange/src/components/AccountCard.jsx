import React from 'react';

const AccountCard = ({ account }) => {
  const { name, balance, currency, icon } = account

  const formatBalance = (value) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)
  }

  return (
    <div className="flex mb-6">
      {/* Bank logo */}
      <div className="bg-white rounded-xl p-2 mr-3 w-12 h-12 flex items-center justify-center">
        <img src={icon || "/placeholder.svg"} alt={name} className="w-8 h-8 object-contain" />
      </div>

      {/* Account details */}
      <div>
        <div className="text-xl text-white">{formatBalance(balance)}</div>
        <div className="flex items-center">
          <div className="text-sm text-white/80 mr-2">{name}</div>
          <div className="bg-[#E5E5FE] px-3 py-0.5 rounded-full text-xs text-[#7a7ba2]">{currency}</div>
        </div>
      </div>
    </div>
  )
}

export default AccountCard