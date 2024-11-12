import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../../redux/productSlice";

const ProductInfo = () => {
  const products = useSelector((state) => state.product.products);
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  const dispatch = useDispatch();

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="w-16 h-16 border-t-4 border-blue-600 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="container relative px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl rounded-3xl" />
            <div className="relative p-4 overflow-hidden transition-all duration-500 border shadow-xl rounded-3xl bg-white/80 backdrop-blur-sm border-gray-100/50 hover:shadow-2xl">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain w-full h-[600px] transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium tracking-wider text-transparent uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  {product.category}
                </p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
                  {product.title}
                </h1>
              </div>

              <p className="text-lg leading-relaxed text-gray-600">
                {product.description}
              </p>

              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-2xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="ml-3 text-gray-600">
                    {product.rating?.rate} / 5
                  </span>
                </div>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">
                  {product.rating?.count} reviews
                </span>
              </div>
            </div>

            <div className="p-8 border shadow-xl rounded-3xl bg-white/80 backdrop-blur-sm border-gray-100/50">
              <div className="flex items-center justify-between mb-6">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                    ${product.price}
                  </p>
                </div>
                <span className="px-4 py-2 text-sm font-medium text-green-700 rounded-full bg-green-100/80">
                  In Stock
                </span>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full px-8 py-4 text-lg font-medium text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/25 focus:ring-2 focus:ring-blue-500"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
