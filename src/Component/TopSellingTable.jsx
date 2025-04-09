import React, { useState } from "react";
import bag from "../assets/bag.png";
// import gioia from "../assets/gioia.png";
// import blazer from "../assets/blazer.png";
// import earring from "../assets/earring.png";

const products = [
  {
    image: bag,
    name: "Leather tote bag",
    id: "134890",
    price: "$1025.00",
    sold: "1006pcs",
    status: "In Stock",
    statusColor: "text-green-600",
    earning: "$13.226",
  },
  {
    // image: gioia,
    name: "Gioia bag",
    id: "134890",
    price: "$400.00",
    sold: "3006pcs",
    status: "In Stock",
    statusColor: "text-green-600",
    earning: "$11.226",
  },
  {
    // image: blazer,
    name: "Single blazer",
    id: "134890",
    price: "$3025.00",
    sold: "506pcs",
    status: "Low Stock",
    statusColor: "text-orange-500",
    earning: "$12.226",
  },
  {
    // image: earring,
    name: "Drop Earring",
    id: "134890",
    price: "$835.00",
    sold: "906pcs",
    status: "In Stock",
    statusColor: "text-green-600",
    earning: "$2.826",
  },
];

const TopSellingTable = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Table Container */}
        <div className="bg-white p-4 rounded-[10px] shadow-md w-full lg:w-2/3 overflow-x-auto border border-[#9B9B9B]">
          <h2 className="text-xl font-semibold mb-4">TOP SELLING</h2>
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="border border-[#9B9B9B] rounded-[10px] text-left text-sm font-semibold text-gray-600">
                <th className="py-3 px-4">Product Name</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4">Sold</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Total Earning</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, idx) => (
                <tr
                  key={idx}
                  className="border border-[#9B9B9B] rounded-[10px] hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <td className="flex items-center gap-3 py-3 px-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 rounded-md"
                    />
                    <div>
                      <div className="font-medium">{product.name}</div>
                      <div className="text-xs text-gray-500">
                        Product ID: {product.id}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">{product.price}</td>
                  <td className="py-3 px-4">{product.sold}</td>
                  <td
                    className={`py-3 px-4 font-medium ${product.statusColor}`}
                  >
                    {product.status}
                  </td>
                  <td className="py-3 px-4">{product.earning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Image Preview Container */}
        <div className="bg-white p-4 rounded-[10px] shadow-md w-full lg:w-1/3 flex items-center justify-center min-h-[240px] border border-[#9B9B9B]">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="w-100 h-100 object-cover rounded-[10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TopSellingTable;
