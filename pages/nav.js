import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import ToggleSwitch from "./components/toggle-switch";

const useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let checkHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", checkHandler);

    return () => {
      document.removeEventListener("mousedown", checkHandler);
    };
  });

  return domNode;
};

export default function Nav() {
  let domNode = useClickOutside(() => {
    setShowMenu(false);
  });

  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const showHamburgerMenuHandler = function () {
    setShowMenu(true);
    console.log("click");
    if (showMenu === true) {
      setShowMenu(false);
    }
  };

  return (
    <>
      <nav
        ref={domNode}
        className=" px-2 bg-gray-900 sm:px-4 py-3  dark:bg-gray-900 sticky top-0 z-50 h-auto"
      >
        {/* <span>
      <p>Innlogget som:{currentUser.email}</p>
    </span> */}
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href={"/"} passHref>
            <span
              className="cursor-pointer uppercase  tracking-wider text-2xl bg-gray-900 text-gray-50 font-extralight hover:text-pink-600 hover:border-b-2 border-pink-600  ease-out duration-1000 hover:translate-x-4 hover:pl-8 p-1
            "
            >
              Tor Henning Egenes
            </span>
          </Link>

          <button
            onClick={showHamburgerMenuHandler}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={
              showMenu
                ? "w-full md:block md:w-auto"
                : "hidden w-full md:block md:w-auto"
            }
            id="navbar-default"
          >
            <ul className="flex flex-col mt-4 rounded-lg justify-around items-start md:h-24  md:flex-row md:items-center md:justify-center md:space-x-8 md:mt-0 md:text-sm md:font-light md:border-0  md:dark:bg-gray-90">
              <li className="mb-3">
                <Link href={"/"} passHref aria-current="page" className=" ">
                  <span className=" text-gray-50 active:bg-red-500 font-sans font-extralight  text-lg hover:bg-pink-700 hover:text-sky-50 md:border-0 px-6 py-2 md:no-underline transition duration-300 ease-in-out visited:text-red-600 cursor-pointer  tracking-wide">
                    Om
                  </span>
                </Link>
              </li>
              <li className="mb-3">
                <Link href={"/Reg"}>
                  <span className="text-gray-50 text-lg font-extralight   hover:bg-pink-700 hover:text-sky-50 md:border-0 md:border-white rounded-pill p-2 md:no-underline transition duration-300 ease-in-out visited:text-red-600 cursor-pointer  tracking-wide">
                    Prosjekter{" "}
                  </span>
                </Link>
              </li>
              <li className="mb-3">
                <Link href={"/Reg"}>
                  <span className="text-gray-50 text-lg font-extralight  hover:bg-pink-700 hover:text-sky-50 md:border-0 md:border-white rounded-pill p-2 md:no-underline transition duration-300 ease-in-out visited:text-red-600 cursor-pointer  tracking-wide">
                    Blogg
                  </span>
                </Link>
              </li>
              <li className="mb-3">
                <Link href={"/Old-lists"} passHref>
                  <span className=" text-gray-50 text-lg font-extralight   hover:bg-pink-700 hover:text-sky-50  md:border-0 md:border-white rounded-pill p-2 md:no-underline transition duration-300 ease-in-out visited:text-red-600 cursor-pointer  tracking-wide">
                    Kontakt
                  </span>
                </Link>
              </li>
              <li className=" flex flex-row align-middle">
                <span className="w-9 h-9 hover:bg-pink-600 text-gray-50">
                  Nor
                </span>
                <ToggleSwitch enabled={enabled} setEnabled={setEnabled} />
                <span className="ml-2 w-9 h-9 hover:bg-pink-600  text-gray-50">
                  Eng
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
