import React from 'react';

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center py-6 space-y-8 h-full w-[4rem]">
      {/* Logo Dot */}
      <div className="w-8 h-4 mt-4 rounded-full bg-indigo-100 flex items-center justify-center cursor-pointer">
            <img src="/images/Extra/sidebar ss2.png" alt="header png" className='w-[5rem] h-[]'/>
      </div>
      
      {/* Main Icons */}
      <div className="space-y-6 flex-1">
        <div className="mt-16 mb-8 w-10 h-10 rounded-lg flex items-center justify-center shadow-sm cursor-pointer">
          <img src="/images/Extra/sidebar ss3.gif" alt="gif" className='w-[5rem] h-[3rem]'/>
        </div>
        
        <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
          <img src="/images/Extra/sidebar ss4.gif" alt="mastercard gif" className='w-[4rem] h-[2rem]'/>
        </div>
        
        <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
          <img src="/images/Extra/sidebar ss5.gif" alt="mastercard gif" className='w-[2rem] h-[2rem]'/>
        </div>
        
        <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
          <img src="/images/Extra/sidebar ss6.gif" alt="mastercard gif" className='w-[4rem] h-[2rem]'/>
        </div>

        <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
          <img src="/images/Extra/sidebar ss7.gif" alt="mastercard gif" className='w-[2rem] h-[2rem]'/>
        </div>
      </div>
      
      {/* Profile Avatar */}
      <div className="mt-auto">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-sm cursor-pointer">
          {/* <span className="text-white font-medium text-sm">N</span> */}
          <img src="/images/Extra/sidebarss1.png" alt="sidebar" className='rounded-xl'/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;