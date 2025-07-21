// src/components/Loader.jsx
import React from "react";

export default function Loader() {
  return (
    <div className="h-screen flex justify-center items-center bg-black text-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-cyan-400"></div>
    </div>
  );
}
