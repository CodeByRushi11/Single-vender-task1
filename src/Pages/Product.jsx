import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Search from "../assets/Search.png";
const products = [
  {
    id: 1,
    name: "Iphone 13 ",
    category: "Electronics",
    price: "$799",
    sales: 120,
    stock: "In Stock",
    img: "📱",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    category: "Electronics",
    price: "$120",
    sales: 58,
    stock: "Out of Stock",
    img: "🎧",
  },
  {
    id: 3,
    name: "UltraBook X1",
    category: "Electronics",
    price: "$1,200",
    sales: 69,
    stock: "In Stock",
    img: "💻",
  },
  {
    id: 4,
    name: "Gaming Console Pro",
    category: "Electronics",
    price: "$499",
    sales: 1200,
    stock: "In Stock",
    img: "🎮",
  },
  {
    id: 5,
    name: "Matte Lipstick",
    category: "Makeup",
    price: "$15",
    sales: 254,
    stock: "In Stock",
    img: "💄",
  },
  {
    id: 6,
    name: "Brush set",
    category: "Makeup",
    price: "$30",
    sales: 98,
    stock: "Out of Stock",
    img: "🖌️",
  },
  {
    id: 7,
    name: "Vaccum Cleaner",
    category: "Home",
    price: "$250",
    sales: 336,
    stock: "In Stock",
    img: "🧹",
  },
  {
    id: 8,
    name: "Non-Stick Cookware set",
    category: "Home",
    price: "$99",
    sales: 48,
    stock: "Out of Stock",
    img: "🍳",
  },
  {
    id: 9,
    name: "Floral Summer Dress",
    category: "Textile/Fashion",
    price: "$49",
    sales: 987,
    stock: "In Stock",
    img: "👗",
  },
  {
    id: 10,
    name: "Leather Formal Shoes",
    category: "Textile/Fashion",
    price: "$85",
    sales: 66,
    stock: "Out of Stock",
    img: "👞",
  },
];

export default function Product() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="font-bold text-[25px] ">Product</h1>

      <div className="w-[1184px] h-[720px] bg-white rounded-md shadow-lg p-4  mt-2">
        {/* Search and Add Button */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <input
              type="text"
              placeholder="Search Here"
              className="border rounded-md px-4 py-2 w-80 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <img
              src={Search}
              alt="Search"
              className="w-6 h-6 absolute right-3 top-2.5 cursor-pointer"
            />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            + Add New
          </button>
        </div>

        {/* Table */}
        <div className="overflow-auto h-[600px]  rounded-md">
          <table className="w-full border-collapse">
            <thead className="bg-gray-200 text-gray-600  text-sm leading-normal">
              <tr>
                <th className="py-4 px-4 text-left">Product</th>
                <th className="py-3 px-4 text-left">Category</th>
                <th className="py-3 px-4 text-left">Price</th>
                <th className="py-3 px-4 text-left">Sales</th>
                <th className="py-3 px-4 text-left">Stock Status</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {filteredProducts.map((product) => (
                <tr key={product.id} className=" hover:bg-gray-100 transition">
                  <td className="py-3 px-4 flex items-center gap-2">
                    <span className="text-xl">{product.img}</span>
                    {product.name}
                  </td>
                  <td className="py-3 px-4">{product.category}</td>
                  <td className="py-3 px-4">{product.price}</td>
                  <td className="py-3 px-4">{product.sales}</td>
                  <td>{product.stock}</td>
                  <td className="py-3 px-4 flex justify-center gap-4">
                    <button className="text-green-500 hover:text-green-700">
                      <FaEdit />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
