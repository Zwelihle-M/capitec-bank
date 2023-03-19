import React from "react";
import styles, { layout } from "../pages/style";
import Button from "./Button";
import Cards from "../assets/Cards.png";
import Image from "next/image";


const CardFees = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <div className="flex ">
          <div>
            <Image
              src={Cards}
              alt="Fashion designer"
              width={500}
              quality={100}
            />
          </div>
          <div className="ml-80 ">
            <div>
              <div></div>
              <h1 className={`text-gradient text-6xl`}>Card Options</h1>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Capitec Bank offers debit and credit cards to its customers,
                including the Global One debit card, Funeral Plan debit card,
                Credit card, Global One credit facility, and Credit facility
                linked to a funeral policy. These cards allow customers to
                withdraw cash, make payments, and purchase goods online or
                in-store with flexible repayment options and no annual fees.
              </p>
            </div>

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

export default CardFees;
