"use client"

import { useState } from "react"
import CryptoRow from "./CryptoRow"
import { cryptoData } from "../data"

const RatesTable = () => {
  const [sortBy, setSortBy] = useState("date")
  const [viewMode, setViewMode] = useState("new")

  return (
    <div className="mt-4 sm:mt-6 lg:mt-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-4">
        <h2 className="text-xl font-medium text-gray-700">Rates</h2>
        <div className="flex flex-wrap items-center space-x-2 sm:space-x-4 mt-2 sm:mt-0">
          <div className="flex items-center rounded-md overflow-hidden">
            <button
              className={`flex items-center gap-2 px-3 py-2 text-sm w-full ${sortBy === "date" ? "bg-white" : "bg-white"}`}
              onClick={() => setSortBy("date")}
            >
              <img src="/images/Extra/middle1.gif" alt="Sort icon" className="w-5 h-5 object-contain" />
              <span className="flex items-center">
                <span>By date</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="flex items-center rounded-md overflow-hidden">
            <button
              className={`flex items-center gap-2 px-3 py-2 text-sm w-full ${viewMode === "new" ? "bg-white" : "bg-white"}`}
              onClick={() => setViewMode("new")}
            >
              <img src="/images/Extra/middle2.gif" alt="Sort icon" className="w-7 h-5 object-contain" />
              <span className="flex items-center">
                <span>New</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg">
        {cryptoData.map((crypto) => (
          <CryptoRow key={crypto.id} crypto={crypto} />
        ))}
      </div>
    </div>
  )
}

export default RatesTable
