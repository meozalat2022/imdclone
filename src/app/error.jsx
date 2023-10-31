"use client";
import React, { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="mt-6 text-center">
      <h1 className="hover:text-amber-600">Something went wrong</h1>
      <button onClick={() => reset()}>try again</button>
    </div>
  );
};

export default Error;
