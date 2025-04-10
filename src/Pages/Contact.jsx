// src/components/VendorList.jsx
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import user from "../assets/user.png";
import insta from "../assets/insta.png";
import whatsaap from "../assets/whatsaap.png";
import fb from "../assets/fb.png";
import twitter from "../assets/twitter.png";


const vendors = Array(8).fill({
  name: "Mohan",
  city: "Nagpur",
  contact: "9998887775",
  email: "Mndvre@gmail.com",
  status: "Available",
});

export default function VendorList() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col">
      {/* Main Content */}

      <div className="flex-1 p-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">List of Vendors</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              + Add New
            </button>
          </div>

          {/* Search */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search Here"
              className="border rounded px-4 py-2 w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-left">
              <thead className="bg-gray-100">
                <tr>
                  {[
                    "Vendor",
                    "City",
                    "Contact",
                    "Email",
                    "Status",
                    "Action",
                  ].map((head) => (
                    <th key={head} className="px-4 py-2">
                      {head}
                    </th>

      <div className="flex flex-1">
        {/* Table Section */}
        <div className="flex-1 p-4">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">List of Vendors</h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                + Add New
              </button>
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search Here"
                className="border rounded px-4 py-2 w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto text-left">
                <thead className="bg-gray-100">
                  <tr>
                    {[
                      "Vendor",
                      "City",
                      "Contact",
                      "Email",
                      "Status",
                      "Action",
                    ].map((head) => (
                      <th key={head} className="px-4 py-2">
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {vendors.map((vendor, index) => (
                    <tr key={index} className="border-t">
                      <td className="flex items-center gap-2 px-4 py-2">
                        <img
                          src="https://via.placeholder.com/30"
                          alt="Vendor"
                          className="rounded-full w-8 h-8"
                        />
                        {vendor.name}
                      </td>
                      <td className="px-4 py-2">{vendor.city}</td>
                      <td className="px-4 py-2">{vendor.contact}</td>
                      <td className="px-4 py-2">{vendor.email}</td>
                      <td className="px-4 py-2">
                        <span
                          className={
                            index === 1 || index === 5
                              ? "text-red-500"
                              : "text-green-500"
                          }
                        >
                          {index === 1 || index === 5
                            ? "Not Available"
                            : "Available"}
                        </span>
                      </td>
                      <td className="px-4 py-2 flex gap-2">
                        <FaEdit className="text-green-500 cursor-pointer" />
                        <FaTrash className="text-red-500 cursor-pointer" />
                      </td>
                    </tr>

                  ))}
                </tr>
              </thead>
              <tbody>
                {vendors.map((vendor, index) => (
                  <tr key={index} className="border-t">
                    <td className="flex items-center gap-2 px-4 py-2">
                      <img
                        src={user}
                        alt="Vendor"
                        className="rounded-full w-8 h-8"
                      />
                      {vendor.name}
                    </td>
                    <td className="px-4 py-2">{vendor.city}</td>
                    <td className="px-4 py-2">{vendor.contact}</td>
                    <td className="px-4 py-2">{vendor.email}</td>
                    <td className="px-4 py-2">
                      <span
                        className={
                          index === 1 || index === 5
                            ? "text-red-500"
                            : "text-green-500"
                        }
                      >
                        {index === 1 || index === 5
                          ? "Not Available"
                          : "Available"}
                      </span>
                    </td>
                    <td className="px-4 py-2 flex gap-2">
                      <FaEdit className="text-green-500 cursor-pointer" />
                      <FaTrash className="text-red-500 cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white mt-6 p-4 rounded-lg shadow flex items-center justify-between">
          <div className="flex items-center gap-4">
           
            <div>
              <p className="font-bold">Contact Admin</p> 
              <div className="flex items-center gap-2 mt-1 text-sm">
              <img

              src={insta}
              alt="Admin"
              className="rounded-full w-12 h-12"
            />
                <span>   @Mndvre123   </span> |
                <img
              src={fb}
              alt="Admin"
              className="rounded-full w-12 h-12"
            />
                
                 <span>   Mndvre123   </span> |{" "}
                 <img
              src={twitter}
              alt="Admin"
              className="rounded-full w-12 h-12"
            />
                <span>   @Mndvre   </span> | 
                
                <img
              src={whatsaap}
              alt="Admin"
              className="rounded-full w-12 h-12"
            />
                
                <span>   8975648487   </span>

                <img
              src={user}
              alt="Admin"
              className="rounded-full w-12 h-12"
            />

                src="https://via.placeholder.com/50"
                alt="Admin"
                className="rounded-full w-12 h-12"
              />
              <div>
                <p className="font-bold">Contact Admin</p>
                <div className="flex items-center gap-2 mt-1 text-sm">
                  <span>@Mndvre123</span> | <span>Mndvre123</span> |{" "}
                  <span>@Mndvre</span> | <span>8975648487</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
