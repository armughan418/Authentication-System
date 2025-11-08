import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-3xl shadow-2xl p-10 w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
          Hello from Home
        </h1>
        <button
          onClick={logout}
          className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow hover:scale-105 transition-transform duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
