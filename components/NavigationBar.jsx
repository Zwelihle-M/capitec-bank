import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import CapitecBankLogo from "../assets/CapitecBankLogo.svg";
import { useTheme } from "next-themes";
import { navigationLinks } from "../Data";

const NavigationBar = () => {
  // dark//light theme
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  // hydration
  const [mounted, setMounted] = useState(false);

  const renderThemeChanger = () => {
    // hydration
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div onClick={() => setTheme("light")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        </div>
      );
    } else {
      return (
        <div onClick={() => setTheme("dark")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      );
    }
  };

  const [navigation, setNavigation] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div>
        <Image
          src={CapitecBankLogo}
          alt="capitec bank Logo"
          width={124}
          height={32}
        />
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navigationLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`text-md ${
              index === navigationLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <Link href={`#${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
        {/* dark /light Mode Button */}
        <div className="ml-10 cursor-pointer duration-200 ease-out hover:scale-105">
          {renderThemeChanger()}
        </div>
      </ul>

      {!navigation && (
        <button
          className="sm:hidden flex flex-1 justify-end items-center"
          onClick={() => setNavigation(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>
      )}

      <div
        className={
          navigation
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/5 backdrop-blur p-6 "
            : ""
        }
      >
        <div
          className={
            navigation
              ? "fixed left-0 top-0 w-4/5 h-full bg-white p-10 ease-in duration-500"
              : "fixed top-0 left-[-100%] p-10 h-full ease-in duration-200"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between ">
              <Image
                src={CapitecBankLogo}
                alt="capitec bank Logo"
                width={124}
                height={32}
              />

              <button
                onClick={() => setNavigation(false)}
                className="p-3 cursor-pointer text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-24 flex flex-col h-fit gap-20 text-gray-900 ">
            <ul>
              {navigationLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`text-md ${
                    index === navigationLinks.length - 1 ? "mr-0" : "mr-10"
                  }`}
                >
                  <Link href={`#${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
            <button className="text-gray-900 cursor-pointer">
              {renderThemeChanger()}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
