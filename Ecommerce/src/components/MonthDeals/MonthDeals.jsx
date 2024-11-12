import React, { useEffect, useState } from "react";

const MonthDeals = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const endOfMonth = new Date(
        new Date().getFullYear(),
        new Date().getMonth() + 1,
        0
      ).getTime();
      const distance = endOfMonth - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="container relative flex flex-col items-center justify-between gap-16 px-4 py-20 mx-auto md:flex-row">
        <div className="flex flex-col items-center max-w-2xl space-y-8 md:items-start">
          <h1 className="text-5xl font-bold text-gray-900 md:text-6xl lg:text-7xl">
            Deals of the
            <span className="block mt-2 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Month
            </span>
          </h1>
          <p className="text-xl leading-relaxed text-center text-gray-600 md:text-left">
            Get up to 50% off on selected items this month. Don't miss out on
            these amazing deals on fashion, accessories, and more. Limited time
            offer!
          </p>

          <div className="grid grid-cols-4 gap-6 p-8 border border-gray-100 shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <span className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  {item.value}
                </span>
                <span className="text-sm font-medium text-gray-500">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <button className="px-8 py-4 text-lg font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/25 focus:ring-2 focus:ring-blue-500">
            View All Products
          </button>
        </div>

        <div className="relative w-full md:w-1/2">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl" />
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            alt="Fashion model wearing evening dress"
            className="relative w-full h-[600px] object-cover rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default MonthDeals;
