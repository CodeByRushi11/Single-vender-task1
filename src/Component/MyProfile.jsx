import React from "react";
import user from "../assets/user.png";

const MyProfile = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">My profile</h2>
      <div className="flex items-center gap-4 mb-6">
        <img
          src={user}
          alt="User"
          className="w-16 h-16 sm:w-14 sm:h-14 rounded-full object-cover"
        />
        <div className="-translate-y-[7px]">
          <h3 className="text-[14px] font-semibold">Jack Doe</h3>
          <span className="text-[12px] text-gray-500 uppercase tracking-widest">
            Admin
          </span>
        </div>
      </div>

      <div className="space-y-4 text-sm">
        <div className="flex justify-between shadow-[0px_1px_#fddbdb] pb-2">
          <span className="text-gray-400">FULL NAME:</span>
          <span className="text-black font-medium">Jackdoe</span>
        </div>
        <div className="flex justify-between shadow-[0px_1px_#fddbdb] pb-2">
          <span className="text-gray-400">MOBILE:</span>
          <span className="text-black font-medium">+12345678910</span>
        </div>
        <div className="flex justify-between shadow-[0px_1px_#fddbdb] pb-2">
          <span className="text-gray-400">E-MAIL:</span>
          <span className="text-black font-medium">Dusank@email.com</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">LOCATION:</span>
          <span className="text-black font-medium">
            California, United States
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
