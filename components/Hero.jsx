import React from "react";
import styles from "../pages/style";
import GlassCards from "../assets/GlassCards.png";

import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* discount div */}
        <div className="flex flex-row items-center py-[6px] px-4 rounded-lg mb-2"></div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 text-7xl text-[#009DE0]">
            Simplify Banking, <br className="sm:block hidden" />
            {""}
            Live
            <span className="mr-2"></span>
            <span className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
              Better
            </span>
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Capitec Bank is a leading South African retail bank that offers a
          range of innovative and affordable banking solutions to help customers
          manage their money more effectively. With over 15 million customers,
          Capitec Bank has a reputation for simplicity, transparency, and
          exceptional customer service.
        </p>
        <div className="mt-10">
          <Button />
        </div>
      </div>
      {/* right side */}

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <Image
          src={GlassCards}
          alt="GlassCards"
          className="relative z-[5]"
          width="auto"
          height="auto"
          quality={100}
          priority
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 red__gradient " />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  );
};

export default Hero;
