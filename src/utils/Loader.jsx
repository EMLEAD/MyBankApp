import React from "react";

const Loader = () => (
  <div className="flex items-center justify-center min-h-[100px] w-full">
    <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default Loader;