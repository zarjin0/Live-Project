import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../../redux/productSlice";

const CartProducts = () => {
  const cart = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="mb-10 text-4xl font-bold text-gray-900">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 bg-white shadow-sm rounded-2xl">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="Empty Cart"
              className="w-32 h-32 mb-6 opacity-50"
            />
            <p className="mb-6 text-xl text-gray-600">Your cart is empty</p>
            <Link
              to="/"
              className="px-8 py-4 text-lg font-medium text-white transition-all duration-200 bg-blue-600 rounded-xl hover:bg-blue-700 hover:shadow-lg"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col p-6 mb-4 transition-all duration-200 bg-white shadow-sm rounded-xl hover:shadow-md sm:flex-row"
                >
                  <Link to={`/product/${item.id}`} className="sm:w-48 sm:h-48">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-contain w-full h-full p-4 transition-transform duration-200 hover:scale-105"
                    />
                  </Link>
                  <div className="flex flex-col justify-between flex-1 mt-4 sm:mt-0 sm:ml-6">
                    <div>
                      <Link to={`/product/${item.id}`}>
                        <h2 className="text-xl font-semibold text-gray-900 transition-colors hover:text-blue-600">
                          {item.title}
                        </h2>
                      </Link>
                      <span className="inline-block px-3 py-1 mt-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-2xl font-bold text-gray-900">
                        ${item.price.toFixed(2)}
                      </span>
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="px-6 py-2.5 text-sm font-medium text-red-600 transition-all duration-200 bg-red-50 rounded-lg hover:bg-red-100 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4">
              <div className="sticky p-8 bg-white shadow-sm rounded-xl top-24">
                <h2 className="text-2xl font-bold text-gray-900">
                  Order Summary
                </h2>
                <div className="mt-8 space-y-4">
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between pt-6 mt-6 text-xl font-bold border-t border-gray-200">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <button className="w-full px-8 py-4 mt-8 text-lg font-medium text-white transition-all duration-200 bg-blue-600 rounded-xl hover:bg-blue-700 hover:shadow-lg focus:ring-4 focus:ring-blue-200">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartProducts;
