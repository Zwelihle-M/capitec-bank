import React from "react";
import { personal } from "../Data";
import styles, { layout } from "../pages/style";
import GlobalOne from "../assets/Globalone.svg";
import Image from "next/image";
import Button from "./Button";
import Iphone14 from "../assets/iphone14Mockup.png";

const Personal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <div>
          <Image src={GlobalOne} alt="Globalone logo" />
        </div>
        {personal.map((pers) => (
          <div key={pers.id}>
            <h1 className={`${styles.heading2} mt-5 bg-gradient-to-r from-red-600 via-purple-600 to-blue-500 bg-clip-text text-transparent text-6xl `}>
              {pers.title}
              <br className="sm:block hidden" />
            </h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              {pers.content}
            </p>
          </div>
        ))}
        <div className="mt-10">

        <Button  />
        </div>
      </div>
      {/* <div className={`${layout.sectionImg} flex-col relative`}>
        <Image
          src={Iphone14}
          alt="Iphone 14 Mockup"
          width="317"
          height="643"
          quality={100}
        className="iphone14"/>

      <div className="absolute z-[0] w-[40%] h-[35%] phone__gradient " />
      </div> */}
      <div id="about"
         className={`${layout.sectionImg} flex-col relative`}>
  <Image
    src={Iphone14}
    alt="Iphone 14 Mockup"
    width="317"
    height="643"
    quality={100}
    className="iphone14"
    style={{position: "relative", zIndex: "1"}}
  />
  <div className="absolute top-0 left-0 w-full h-full z-0 phone__gradient rounded-full animate-spin" />
</div>
    </section>
  );
};

export default Personal;

