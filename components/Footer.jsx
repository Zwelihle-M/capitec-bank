import React from "react";
import { footerLinks } from "../Data";
import CapitecBankLogo from "../assets/CapitecBankLogo.svg";
import styles from "../pages/style";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <Image
            src={CapitecBankLogo}
            alt="capitec logo"
            width={266}
            height={72}
            className="object-contain"
          />

          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            You deserve to bank simpler
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className="flex flex-col ss:my-0 min-w-[150xp]"
            >
              <h1 className="text-2xl">{footerLink.title}</h1>

              <ul>
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`cursot-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
