import React from 'react';

const ChartLine = ({ trend, height = 30, cryptoId }) => {
  // Map crypto IDs to their respective graph images
  const getGraphImage = (id) => {
    const graphMap = {
      btc: "/images/crypto/graphBTC.png",
      ltc: "/images/crypto/graphLTC.png",
      eth: "/images/crypto/graphETH.png",
      zcs: "/images/crypto/graphZCS.png",
      bet: "/images/crypto/graphBET.png",
      sol: "/images/crypto/graphSOL.png",
    }

    return graphMap[id] || "/images/crypto/graphBTC.png" // Default to BTC graph if ID not found
  }

  return (
    <div className="w-full h-full">
      <img
        src={getGraphImage(cryptoId) || "/placeholder.svg"}
        alt={`${cryptoId} graph`}
        className="w-[5rem] sm:w-[6rem] h-[2.5rem] sm:h-[3rem] -mt-4 sm:-mt-8 mb-1 sm:mb-2 object-contain"
      />
    </div>
  )
}

export default ChartLine

