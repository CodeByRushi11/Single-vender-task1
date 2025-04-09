import React from "react";
import profile from "../assets/profileNew.png";
import MyProfile from "../Component/MyProfile";
import LoginHistory from "../Component/LoginHistory";
import EditProfile from "../Component/EditProfile";
import CompanyInfo from "../Component/CompanyInfo";
import StoreSettings from "../Component/StoreSettings";

const Profile = () => {
  return (
    <div className="p-4 sm:p-6 font-jost">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <img src={profile} alt="Frames Icon" className="w-6 h-6" />
        <h1 className="font-bold text-[20px] sm:text-[25px]">Profile</h1>
      </div>

      {/* First Row: MyProfile + LoginHistory | EditProfile */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column */}
        <div className="w-full lg:w-[30%] space-y-6">
          <MyProfile />
          <LoginHistory />
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[70%]">
          <EditProfile />
        </div>
      </div>

      {/* Second Row: CompanyInfo + StoreSettings */}
      <div className="flex flex-col lg:flex-row gap-6 mt-8">
        <div className="w-full lg:w-[70%]">
          <CompanyInfo />
        </div>
        <div className="w-full lg:w-[30%]">
          <StoreSettings />
        </div>
      </div>
    </div>
  );
};

export default Profile;
