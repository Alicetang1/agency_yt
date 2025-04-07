import React from "react";
import Image from "next/image";

const SupportTeam = () => {
  return (
    <div className="pt-[7rem] pb-[3rem]">
      <div className="w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 grp-[2rem]">
        <div>
          <h1 className="text-[27px] md:text-[35px] lg;text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]">
            {" "}
            Do you need help? Our Support Team ready to help you
          </h1>
          <p className="text-gray-900 opacity-90 text-[17px] mt-[1rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad itaque
            deleniti, eligendi, nesciunt sapiente distinctio veniam repudiandae
            perspiciatis doloribus alias temporibus nisi molestias quod est
            tenetur atque hic, inventore iure.
          </p>

          <div className="flex items-center space-x-6 mt-[2rem]">
            <Image src="/icon1.png" alt="icon" width={60} height={60} />
            <div>
              <h1 className="text-[18px] text-gray-900 font-[500] mb-[0.5rem]">
                Email client support
              </h1>
              <p className="md:w-[70%] w-[90%] text-[15px] text-black opacity-85">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, dicta.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-6 mt-[2rem]">
            <Image src="/icon2.png" alt="icon" width={60} height={60} />
            <div>
              <h1 className="text-[18px] text-gray-900 font-[500] mb-[0.5rem]">
                Live ticket support
              </h1>
              <p className="md:w-[70%] w-[90%] text-[15px] text-black opacity-85">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, dicta.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <Image
            src="/supportteam.jpg"
            alt="support"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default SupportTeam;
