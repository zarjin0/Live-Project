import React from "react";
import category4 from "../../assets/Computer.png";
import category3 from "../../assets/Kids.png";
import category1 from "../../assets/Man.png";
import category2 from "../../assets/Woman.png";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Men Fashion",
      image: category1,
    },
    {
      id: 2,
      name: "Women Fashion",
      image: category2,
    },
    {
      id: 3,
      name: "Kids Fashion",
      image: category3,
    },
    {
      id: 4,
      name: "Electronics",
      image: category4,
    },
  ];

  return (
    <div className="container px-4 py-16 mx-auto">
      <h2 className="mb-12 text-4xl font-bold text-center text-gray-800">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Explore
        </span>{" "}
        Categories
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative overflow-hidden transition-all duration-300 bg-white shadow-md group rounded-2xl hover:shadow-xl hover:-translate-y-1"
          >
            <div className="relative h-64 overflow-hidden bg-gray-50">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 to-transparent" />
              <img
                src={category.image}
                alt={category.name}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white">
              <h3 className="mb-3 text-2xl font-bold">{category.name}</h3>
              <button className="w-full px-6 py-3 text-sm font-medium text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:opacity-90 hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Explore Collection
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
