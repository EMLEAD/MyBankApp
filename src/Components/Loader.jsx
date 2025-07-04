import React from "react";

const Loader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-60">
    <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default Loader;