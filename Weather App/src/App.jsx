import React, { useState, useEffect } from "react";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    if (!city) {
      setError("Please enter a city name");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      // First get coordinates for the city
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          city
        )}&count=1&language=en&format=json`
      );
      if (!geoResponse.ok) {
        throw new Error("Failed to find city");
      }
      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found");
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // Then get weather data for those coordinates
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
      );
      if (!weatherResponse.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const weatherData = await weatherResponse.json();
      setWeatherData({
        ...weatherData,
        city: name,
        country: country,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = () => {
    getData();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-800 flex items-center justify-center p-6">
      <div className="bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-lg transition-all duration-300 hover:bg-white/25">
        <h1 className="text-4xl font-bold text-white text-center mb-8 drop-shadow-lg">
          Weather Forecast
        </h1>

        <div className="flex gap-3 mb-8">
          <input
            type="text"
            placeholder="Enter city name..."
            className="flex-1 px-6 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {loading && (
          <div className="text-white text-center text-lg animate-pulse">
            Fetching weather data...
          </div>
        )}

        {error && (
          <div className="bg-red-500/30 text-white p-4 rounded-xl text-center">
            {error}
          </div>
        )}

        {weatherData && !loading && !error && (
          <div className="text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold mb-3">
                {weatherData.city}, {weatherData.country}
              </h2>
              <div className="text-7xl font-bold mb-4 drop-shadow-lg">
                {Math.round(weatherData.current.temperature_2m)}°C
              </div>
              <p className="text-xl text-white/90">
                Current Weather Conditions
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/30 p-6 rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-white/40">
                <div className="flex flex-col items-center">
                  <svg
                    className="w-8 h-8 mb-2 opacity-80"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 16.5q1.875 0 3.188-1.313Q16.5 13.875 16.5 12q0-1.875-1.313-3.188Q13.875 7.5 12 7.5q-1.875 0-3.188 1.313Q7.5 10.125 7.5 12q0 1.875 1.313 3.188Q10.125 16.5 12 16.5ZM12 12Zm0 12q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 16.075 2 14q0-2.075.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.137Q9.925 4 12 4q2.075 0 3.9.788q1.825.787 3.175 2.137q1.35 1.35 2.138 3.175Q22 11.925 22 14q0 2.075-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.138Q14.075 24 12 24Z" />
                  </svg>
                  <p className="text-sm mb-1 opacity-90">Humidity</p>
                  <p className="text-2xl font-bold">
                    {weatherData.hourly.relative_humidity_2m[0]}%
                  </p>
                </div>
              </div>
              <div className="bg-white/30 p-6 rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-white/40">
                <div className="flex flex-col items-center">
                  <svg
                    className="w-8 h-8 mb-2 opacity-80"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 10a1 1 0 100 2h16a1 1 0 100-2H4zm0-4a1 1 0 100 2h16a1 1 0 100-2H4zm0 8a1 1 0 100 2h16a1 1 0 100-2H4zm0 4a1 1 0 100 2h16a1 1 0 100-2H4z" />
                  </svg>
                  <p className="text-sm mb-1 opacity-90">Wind Speed</p>
                  <p className="text-2xl font-bold">
                    {weatherData.current.wind_speed_10m} km/h
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
