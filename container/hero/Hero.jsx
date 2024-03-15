import {styles} from "@/app/styles";
import category from "@/constaints/data/category";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className={`bg-background ${styles.xPadding} ${styles.yPadding}`}>
      <div className="w-full h-full relative flex flex-col gap-4 md:gap-6 lg:gap-8 justify-center items-center ">
        <Image
          src="/bg.png"
          width={1200}
          height={1200}
          className="w-full object-fill  absolute"
        />
        <div>
          <h1 className="font-federo text-red-600 text-center font-medium text-5xl md:text-6xl">
            Find the best
            <br /> Local Business
          </h1>
        </div>
        <div className="w-full justify-center gap-3 items-center flex  flex-col">
          <h2
            className="font-sans font-normal
           text-lg">
            In Your City
          </h2>
          <div
            className="w-full justify-center  gap-2 px-4 items-center flex
           ">
            <input
              type="text"
              placeholder="Search for restaurants, hotels, and more"
              className="bg-background p-3  border-2 focus:outline-none focus:border-2  md:w-3/5 text-secondary font-poppins border-lightwhite    z-30 w-full rounded-full shadow-lg outline-none  focus:border-red-600"
            />
            <button className="bg-red-600 rounded-full p-3 shadow-md cursor-pointer hover:scale-105 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 22 22"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full justify-center gap-2  items-center flex  flex-col">
          <h2
            className="font-sans font-normal
           text-lg">
            Or Browse the category
          </h2>
          <div
            className=" flex
         w-full items-center justify-center xl:gap-16 lg:gap-10 lg:px-0 sm:px-20 md:gap-8 sm:gap-10 gap-6 flex-shrink flex-wrap mt-3">
            {category.map((item, index) => (
              <div
                key={index}
                className="border-[1px]
                    w-[60px] p-4 bg-white rounded-full z-10
                    hover:border-red-600 shadow-lg
                    hover:scale-110
                    cursor-pointer transition-all">
                <Image src={item.icon} alt={item.name} width={30} height={30} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
