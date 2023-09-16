import React from "react";
import {
  LuPieChart,
  LuTags,
  LuCalendarClock,
  LuUser,
  LuSettings,
} from "react-icons/lu";

export const menuItems = [
  { id: 1, icon: LuPieChart, value: "Dashboard", selected: true },
  { id: 2, icon: LuTags, value: "Transactions", selected: false },
  { id: 3, icon: LuCalendarClock, value: "Schedules", selected: false },
  { id: 4, icon: LuUser, value: "Users", selected: false },
  { id: 5, icon: LuSettings, value: "Settings", selected: false },
];
const Sidebar = () => {
  return (
    <div className="p-4 w-full rounded-lgPlus text-white bg-gradient-to-r from-[#4285F4] to-[#3C83F9] border flex-col justify-between flex h-full ">
      <div>
        <div className="text-3xl font-bold pb-5 pl-2">Board.</div>
        <div className="">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-2 lg:text-lg mt-5 hover:cursor-pointer"
            >
              <item.icon width={18} height={18} />
              <div
                className={
                  item.selected ? "font-bold" : "font-normal duration-150 hover:text-gray-200 "
                }
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-sm">
        <div className="hover:cursor-pointer">Help</div>
        <div className="mt-2 hover:cursor-pointer">Contact Us</div>
      </div>
    </div>
  );
};

export default Sidebar;
