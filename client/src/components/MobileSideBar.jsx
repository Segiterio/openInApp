import React from 'react'
import { menuItems } from './SideBar'
import {RxCross2} from "react-icons/rx"

const MobileSideBar = ({setShowSideBar}) => {
    return (
        <div className='transition-all w-10/12 duration-300 text-white fixed z-10 h-screen bg-gradient-to-r from-[#4285F4] to-[#3C83F9] lg:hidden flex-col justify-between flex px-10 py-5'>
            <div>
             <div className='text-3xl font-bold pb-5 flex items-center justify-between'>
                <div>Board.</div>
                <RxCross2 className="hover:cursor-pointer duration-300" onClick={()=>{
                  setShowSideBar(false);
                }} />
             </div>
           <div className="">{
                menuItems.map((item) => (<div key={item.id} className='flex items-center gap-2 mt-5 hover:cursor-pointer'>
                    <item.icon />
                    <div className={item.selected ? "font-bold" : "font-normal  hover:scale-105 " } >{item.value}</div>
                </div>))
            }
            </div>
            </div>
    
            <div className='text-sm'>
                <div className='hover:cursor-pointer'>Help</div>
                <div className='mt-2 hover:cursor-pointer'>Contact Us</div>
            </div>
        </div>
      )
}

export default MobileSideBar