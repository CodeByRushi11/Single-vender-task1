import React from "react";
import phone from "../assets/phoneNEw.png";

const historyData = Array(7).fill({
  device: "Phone",
  date: "Apr,10,2024 at 7:18Am",
});

const LoginHistory = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Login History</h2>
      </div>

      <div className="space-y-4">
        {historyData.map((entry, index) => (
          <div key={index} className="flex items-center justify-start text-sm">
            <div className="flex items-center gap-3">
              <img src={phone} alt="Phone Icon" className="w-5 h-5" />
              <div>
                <p className="text-black">{entry.device}</p>
                <p className="text-gray-500 text-xs">{entry.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoginHistory;
