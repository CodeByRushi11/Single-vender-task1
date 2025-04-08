import React, { useState } from "react";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "Jack",
    lastName: "K",
    phone: "+12345678910",
    email: "example@email.com",
    city: "California",
    postalCode: "123456",
    country: "US",
    website: "dusank.com",
    about: "",
    currentPassword: "",
    newPassword: "",
    repeatPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Updated:", formData);
  };

  const handlePasswordChange = () => {
    if (formData.newPassword !== formData.repeatPassword) {
      alert("New passwords do not match!");
      return;
    }
    console.log("Password Change Requested:", {
      currentPassword: formData.currentPassword,
      newPassword: formData.newPassword,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 ">
      <div className="shadow-[0px_0px_5px_#fddbdb] p-5">
        <h2 className="text-2xl font-semibold mb-8">Edit Profile</h2>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4 "
          onSubmit={handleSubmit}
        >
          {[
            ["First Name", "firstName", "Jack"],
            ["Last Name", "lastName", "K"],
            ["Phone Number", "phone", "+12345678910"],
            ["Email Address", "email", "example@email.com"],
            ["City", "city", "California"],
            ["Postal Code", "postalCode", "123456"],
            ["Country", "country", "US"],
            ["Website", "website", "dusank.com"],
          ].map(([label, name, placeholder]) => (
            <div key={name}>
              <label className="text-xs text-gray-500 uppercase mb-1 block">
                {label}:
              </label>
              <input
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full border border-gray-300 rounded-md p-2 bg-gray-100"
              />
            </div>
          ))}

          <div className="col-span-1 md:col-span-2">
            <label className="text-xs text-gray-500 uppercase mb-1 block">
              About Me:
            </label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              rows="3"
              placeholder="Write something..."
              className="w-full border border-gray-300 rounded-md p-2 bg-gray-100"
            ></textarea>
          </div>

          <div className="flex justify-end col-span-1 md:col-span-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded-[10px] hover:bg-blue-700 transition"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
      <div className="col-span-1 md:col-span-2 mt-10 shadow-[0px_0px_5px_#fddbdb] p-5">
        <h3 className="text-lg font-semibold mb-4">Change Password</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-gray-500 uppercase mb-1 block">
              Current Password:
            </label>
            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              placeholder="Enter current password"
              className="w-full border border-gray-300 rounded-md p-2 bg-gray-100"
            />
          </div>

          <div>
            <label className="text-xs text-gray-500 uppercase mb-1 block">
              New Password:
            </label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="Enter new password"
              className="w-full border border-gray-300 rounded-md p-2 bg-gray-100"
            />
          </div>

          <div>
            <label className="text-xs text-gray-500 uppercase mb-1 block">
              Repeat New Password:
            </label>
            <input
              type="password"
              name="repeatPassword"
              value={formData.repeatPassword}
              onChange={handleChange}
              placeholder="Repeat new password"
              className="w-full border border-gray-300 rounded-md p-2 bg-gray-100"
            />
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="button"
            onClick={handlePasswordChange}
            className="bg-blue-600 text-white px-5 py-2 rounded-[10px] hover:bg-blue-700 transition"
          >
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
