import React from "react";
import CompanyImg from "@/public/customer.png";
import Image from "next/image";

const Company = () => {
  return (
    <div className="pt-[6rem] pb-[3rem]">
      <h1 className="mb-[1.5rem] font-bold text-[22px] text-center md:text-[30px] text-[#02073e]">
        {" "}
        Company who also worked with us
      </h1>
      <p className="w-[90%] sm-w-[85%] md:w-[75%] lg:w-[55%] mx-auto text-[17px] text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        delectus aut voluptatum harum dolores unde enim neque distinctio id in?
        Alias distinctio itaque corrupti! Fugiat, eligendi mollitia. Quam, fugit
        dolor?
      </p>
      <p className="text-center mt-[1.7rem] font-[500] cursor-pointer text-blue-600">
        Explore Details
      </p>
      <div className="mt-[2rem] text-center w-[80%] mx-auto">
        <Image src="/customer.png" alt="company" width={1100} height={300} />
      </div>
    </div>
  );
};

export default Company;
