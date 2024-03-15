"use client";
import Image from "next/image";
import React, {useState} from "react";
import {FiSearch} from "react-icons/fi";
import {FaGlobe} from "react-icons/fa";
import BusinessForm from "./BusinessFrom";
import Link from "next/link";
import {styles} from "@/app/styles";

function Header() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };

  return (
    <header className=" w-full bg-background shadow-md  z-[999] sticky top-0 ">
      <div className={`${styles.xPadding} `}>
        <div className="flex items-center  justify-between py-4">
          {/* Logo and title */}
          <div className="flex items-center  shrink-0">
            {/* Long logo for larger screens */}
            <Link href="/" passHref>
              <div className="cursor-pointer hidden sm:block">
                <Image src="/long-logo-PBD.png" alt="logo" width={200} height={50} />
              </div>
            </Link>
            {/* Small logo for smaller screens */}
            <Link href="/" passHref>
              <div className="cursor-pointer sm:hidden">
                <Image src="/logo.png" alt="logo" width={50} height={50} />
              </div>
            </Link>
          </div>

          {/* Right side buttons and icons */}
          <div className="flex  items-center gap-2 md:gap-4">
            <button
              onClick={toggleFormVisibility}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 md:px-4 rounded transition duration-300 ease-in-out sm:text-sm ">
              For Business
            </button>
            <FaGlobe className="text-gray-600 hidden md:block text-2xl" />
            <div className="relative w-10 h-10">
              <Image
                src="/user-logo.png"
                alt="User Logo"
                width={500}
                height={500}
                className="cursor-pointer rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {isFormVisible && <BusinessForm onClose={closeForm} />}
    </header>
  );
}

export default Header;
