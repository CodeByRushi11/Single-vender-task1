import React from "react";

import profileNew from "../assets/profileNew.png";


const Setting = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <div className="flex flex-col space-y-2">
          <h2 className="text-xl font-semibold mb-4">Setting</h2>
          <button className="text-left p-2 rounded-lg bg-blue-100 text-blue-700">
            Account
          </button>
          <button className="text-left p-2 hover:bg-gray-200 rounded-lg">
            Password
          </button>
          <button className="text-left p-2 hover:bg-gray-200 rounded-lg">
            Privacy and Security
          </button>
          <button className="text-left p-2 hover:bg-gray-200 rounded-lg">
            Notifications
          </button>
          <button className="text-left p-2 hover:bg-gray-200 rounded-lg text-red-500">
            Delete Account
          </button>
        </div>
        
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Public Info */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-lg font-semibold mb-4">Public Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="User name"
              className="border p-2 rounded-lg"
            />
            <textarea
              placeholder="Tell About Yourself"
              className="border p-2 rounded-lg h-24"
            ></textarea>
            <div className="flex items-center space-x-4">
              <img

                src={profileNew}

                alt="Profile"
                className="rounded-full w-20 h-20"
              />
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                Upload
              </button>
            </div>
          </div>
          <div className="mt-4">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg">
              Save
            </button>
          </div>
        </section>

        {/* Private Info */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-lg font-semibold mb-4">Private Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Middle Name"
              className="border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="border p-2 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="City"
              className="border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="State"
              className="border p-2 rounded-lg"
            />
          </div>
        </section>

        {/* Password Update */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-lg font-semibold mb-4">Password</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="password"
              placeholder="Current Password"
              className="border p-2 rounded-lg"
            />
            <input
              type="password"
              placeholder="New Password"
              className="border p-2 rounded-lg"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="border p-2 rounded-lg"
            />
          </div>
        </section>

        {/* Email Notifications */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-lg font-semibold mb-4">Email Notifications</h3>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b pb-2"
              >
                <div className="flex items-center space-x-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
                    alt="Gmail"
                    className="w-6 h-6"
                  />
                  <span className="text-gray-600">Notification {i + 1}</span>
                </div>
                <input type="checkbox" className="form-checkbox" />
              </div>
            ))}
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg">
            Update Info
          </button>
          <button className="bg-red-500 text-white py-2 px-6 rounded-lg">
            Delete Account
          </button>
        </div>
      </main>
    </div>
  );
};

export default Setting;
