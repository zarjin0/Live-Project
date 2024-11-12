import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CustomerReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fashion Blogger",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      review:
        "The quality of their products is outstanding. I'm particularly impressed with their attention to detail and customer service.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Style Consultant",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      review:
        "Their collection is always up-to-date with the latest trends. The shopping experience is seamless and enjoyable.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Regular Customer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      review:
        "I've been shopping here for years and have never been disappointed. The prices are reasonable and the quality is excellent.",
      rating: 4,
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Fashion Photographer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      review:
        "As someone who works in fashion, I can say their products are truly photogenic and well-crafted. Amazing attention to detail.",
      rating: 5,
    },
    {
      id: 5,
      name: "Sofia Rodriguez",
      role: "Lifestyle Blogger",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      review:
        "The variety of styles available is incredible. I always find exactly what I'm looking for, and more!",
      rating: 4,
    },
    {
      id: 6,
      name: "David Kim",
      role: "Fashion Designer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      review:
        "The quality of fabrics and construction is exceptional. This is fast fashion done right.",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= reviews.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? reviews.length - 3 : prevIndex - 3
    );
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

  return (
    <div className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-16 text-4xl font-bold text-center text-gray-900">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Customer
          </span>{" "}
          Reviews
        </h2>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-[-20px] lg:left-[-60px] top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl z-10 transition-all duration-300"
            aria-label="Previous reviews"
          >
            <IoIosArrowBack className="w-6 h-6 text-gray-800" />
          </button>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleReviews.map((review) => (
              <div
                key={review.id}
                className="relative p-8 transition-all duration-500 bg-white border border-gray-100 rounded-2xl hover:shadow-2xl group"
              >
                <div className="absolute inset-x-0 top-0 h-24 transition-colors rounded-t-2xl bg-gradient-to-r from-blue-50 to-purple-50 group-hover:from-blue-100 group-hover:to-purple-100" />

                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="object-cover w-20 h-20 transition-transform duration-500 border-4 border-white rounded-full shadow-lg group-hover:scale-110"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {review.name}
                      </h3>
                      <p className="text-sm font-medium text-blue-600">
                        {review.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex mb-4 space-x-1">
                    {[...Array(review.rating)].map((_, index) => (
                      <span
                        key={index}
                        className="text-yellow-400 transition-all duration-300"
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <p className="text-lg leading-relaxed text-gray-600">
                    "{review.review}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-[-20px] lg:right-[-60px] top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl z-10 transition-all duration-300"
            aria-label="Next reviews"
          >
            <IoIosArrowForward className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
