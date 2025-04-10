import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import cart from "../assets/cartNew (2).png";
import Search from "../assets/Search.png";

const initialProducts = [
  {
    id: 1,
    name: "Iphone 13",
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

const Product = () => {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddClick = () => {
    setCurrentProduct({
      name: "",
      category: "",
      price: "",
      sales: "",
      stock: "In Stock",
      img: "🆕",
    });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleEditClick = (product) => {
    setCurrentProduct(product);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (product) => {
    setCurrentProduct(product);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    setProducts(products.filter((p) => p.id !== currentProduct.id));
    setIsDeleteModalOpen(false);
    setCurrentProduct(null);
  };

  const handleModalSubmit = () => {
    if (isEditing) {
      setProducts((prev) =>
        prev.map((p) => (p.id === currentProduct.id ? currentProduct : p))
      );
    } else {
      const newProduct = { ...currentProduct, id: Date.now() };
      setProducts((prev) => [...prev, newProduct]);
    }
    setIsModalOpen(false);
    setCurrentProduct(null);
  };

  return (
    <div className="p-4 sm:p-6 font-jost relative">
      <div className="flex items-center gap-2 mb-6">
        <img src={cart} alt="Frames Icon" className="w-6 h-6" />
        <h1 className="font-bold text-[20px] sm:text-[25px]">Product</h1>
      </div>

      <div className="max-w-full bg-white rounded-md shadow-lg p-4 mt-2">
        <div className="flex justify-between items-center mb-6 relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Here"
              className="border rounded-md px-4 py-2 w-80 outline-none pr-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <img
              src={Search}
              alt="Search"
              className="w-5 h-5 absolute top-2.5 right-3"
            />
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleAddClick}
          >
            + Add New
          </button>
        </div>

        <div className="overflow-auto h-[600px] rounded-md">
          <table className="w-full border-collapse">
            <thead className="bg-gray-200 text-gray-600 text-sm">
              <tr>
                <th className="py-4 px-4 text-left">Product</th>
                <th className="py-3 px-4 text-left">Category</th>
                <th className="py-3 px-4 text-left">Price</th>
                <th className="py-3 px-4 text-left">Sales</th>
                <th className="py-3 px-4 text-left">Stock</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-100 transition">
                  <td className="py-3 px-4 flex items-center gap-2">
                    <span className="text-xl">{product.img}</span>
                    {product.name}
                  </td>
                  <td className="py-3 px-4">{product.category}</td>
                  <td className="py-3 px-4"> $ {product.price}</td>
                  <td className="py-3 px-4">{product.sales}</td>
                  <td className="py-3 px-4">{product.stock}</td>
                  <td className="py-3 px-4 flex justify-center gap-4">
                    <button
                      className="text-green-500 hover:text-green-700"
                      onClick={() => handleEditClick(product)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDeleteClick(product)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {(isModalOpen || isDeleteModalOpen) && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm z-40"></div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/10">
          <div className="bg-white rounded-xl shadow-lg w-[400px] p-6 sm:p-8">
            <h2 className="text-[18px] sm:text-[20px] font-semibold mb-5">
              {isEditing ? "Edit Product" : "Add New Product"}
            </h2>

            <div className="space-y-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Name"
                  value={currentProduct.name}
                  onChange={(e) =>
                    setCurrentProduct({
                      ...currentProduct,
                      name: e.target.value,
                    })
                  }
                  className="w-1/2 border border-gray-300 focus:border-blue-500 px-4 py-2 rounded-md outline-none"
                />
                <select
                  value={currentProduct.category}
                  onChange={(e) =>
                    setCurrentProduct({
                      ...currentProduct,
                      category: e.target.value,
                    })
                  }
                  className="w-1/2 border border-gray-300 focus:border-blue-500 px-3 py-2 rounded-md outline-none"
                >
                  <option value="">Category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Makeup">Makeup</option>
                  <option value="Home">Home</option>
                  <option value="Textile/Fashion">Textile/Fashion</option>
                  <option value="Fitness">Fitness</option>
                  <option value="Toys">Toys</option>
                </select>
              </div>

              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Price"
                  value={currentProduct.price}
                  onChange={(e) =>
                    setCurrentProduct({
                      ...currentProduct,
                      price: e.target.value,
                    })
                  }
                  className="w-1/2 border border-gray-300 focus:border-blue-500 px-4 py-2 rounded-md outline-none"
                />

                <input
                  type="text"
                  placeholder="Sales"
                  value={currentProduct.sales}
                  onChange={(e) =>
                    setCurrentProduct({
                      ...currentProduct,
                      sales: e.target.value,
                    })
                  }
                  className="w-1/2 border border-gray-300 focus:border-blue-500 px-4 py-2 rounded-md outline-none"
                />
              </div>
              <div className="flex gap-3">
                <select
                  value={currentProduct.stock}
                  onChange={(e) =>
                    setCurrentProduct({
                      ...currentProduct,
                      stock: e.target.value,
                    })
                  }
                  className="w-1/2 border border-gray-300 focus:border-blue-500 px-3 py-2 rounded-md outline-none"
                >
                  <option>In Stock</option>
                  <option>Out of Stock</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end mt-6 gap-3">
              <button
                className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
                onClick={handleModalSubmit}
              >
                {isEditing ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/10">
          <div className="bg-white p-6 rounded-lg shadow-xl w-[350px]">
            <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
            <p className="mb-4">
              Are you sure you want to delete{" "}
              <strong>{currentProduct?.name}</strong>?
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
