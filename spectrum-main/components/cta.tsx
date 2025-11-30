import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const Cta = () => {
  return (
   <div className="flex flex-col items-center justify-center min-h-[40vh]  py-5">
    <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:leading-[67.20px] [text-shadow:_1px_1px_0px_rgb(0_0_0_/_0.10)]">
    Your Product 
    <br />
    Deserves a better ui
    </h1>
    <Link href="mailto:jainari1208@gmail.com">
    <Button className="rounded-full text-sm">
    Let’s work together →
    </Button>
    </Link>
   </div>
  );
};

export default Cta;
