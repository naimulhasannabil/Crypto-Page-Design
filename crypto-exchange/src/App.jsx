import React from 'react';
import Sidebar from "./components/Sidebar"
import ExchangeForm from "./components/ExchangeForm"
import RatesTable from "./components/RatesTable"
import AccountsPanel from "./components/AccountsPanel"

function App() {
  return (
    <div className="min-h-screen bg-light-blue p-4 sm:p-6 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
        <div className="flex flex-row lg:flex-row">
          <div className="min-w-[4rem] bg-white border-r border-gray-100">
            <Sidebar />
          </div>

          <div className="flex-grow p-4 sm:p-6 md:p-8 overflow-x-auto">
            <div className="flex items-center">
              <h1 className="text-xl font-medium">
                <span className="font-bold">Fiat-crypt</span>
                <span className="text-gray-500">.exchange</span>
              </h1>
            </div>

            <ExchangeForm />
            <RatesTable />
          </div>
        </div>

        <div className="w-full lg:w-96">
          <AccountsPanel />
        </div>
      </div>
    </div>
  )
}

export default App

