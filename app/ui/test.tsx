"use client";

import { memo, useEffect, useState } from "react";

function Test() {
  useEffect(() => {
    return () => {
      console.log("Destroy Test");
    };
  }, []);

  console.log("Test");
  return (
    <div className="relative flex flex-1 flex-shrink-0">{"aaaaaaaaaaaaaa"}</div>
  );
}

export default Test;
