"use client";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button
        onClick={() => console.log("Click")}
        className="border p-3 rounded-md my-4 hover:border-blue-700 hover:bg-gray-100"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
