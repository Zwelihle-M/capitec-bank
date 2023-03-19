import Image from "next/image";
import React from "react";
import BusinessWomen from "../assets/Businesswomen.jpg";
import Mercantile from "../assets/Mercantile.svg";
import styles, { layout } from "../pages/style";
import { business } from "../Data";
import Button from "./Button";
const Business = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <div className="flex ">
          <div>
            <Image
              src={BusinessWomen}
              alt="Fashion designer"
              width={500}
              quality={100}
            />
          </div>
          <div className="ml-80 ">
            {business.map((bus) => (
              <div key={bus.id}>
                <div>
                  <Image src={Mercantile} alt="Merc logo" />
                </div>
                <h1 className={`${styles.heading2} mt-5 bg-gradient-to-r from-red-600 via-purple-600 to-blue-500 bg-clip-text text-transparent text-6xl `}>
                  {bus.title}
                  <br className="sm:block hidden" />
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                  {bus.content}
                </p>
              </div>
            ))}
            <div className="mt-10">
              <Button />
            </div>
            {/* compete stretch res */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
