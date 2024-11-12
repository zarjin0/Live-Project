import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, fetchProducts } from "../../../redux/productSlice";

const OurBestSellers = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="w-16 h-16 border-t-4 border-blue-600 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="container relative px-6 py-24 mx-auto">
        <h2 className="mb-16 text-5xl font-bold text-center">
          Our
          <span className="block mt-2 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
            Best Sellers
          </span>
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative overflow-hidden transition-all duration-500 bg-white border shadow-xl group rounded-3xl backdrop-blur-sm border-gray-100/50 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-72">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl" />
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain w-full h-full p-6 transition-transform duration-500 group-hover:scale-110"
                  />
                </Link>
              </div>
              <div className="p-8">
                <div className="inline-block px-4 py-2 mb-4 text-sm font-medium text-transparent rounded-full bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text bg-blue-50/50">
                  {product.category}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800 transition-colors duration-300 line-clamp-2 group-hover:text-blue-600">
                  {product.title}
                </h3>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(product);
                    }}
                    className="px-6 py-3 text-sm font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/25 focus:ring-2 focus:ring-blue-500"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBestSellers;
