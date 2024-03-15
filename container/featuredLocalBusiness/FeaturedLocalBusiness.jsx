"use client";
import {styles} from "@/app/styles";
import Card from "@/components/Card";
import Link from "next/link";
import React, {useState} from "react";

export default function FeaturedLocalBusiness() {
  const items = [
    {
      id: 1,
      imageUrl: "/img.jpg",
      heading: "Business Name 1",
      address1: "Short description or tagline 1",
      phone: 999999999,
    },
    {
      id: 1,
      imageUrl: "/img.jpg",
      heading: "Business Name 1",
      address1: "Short description or tagline 1",
      phone: 999999999,
    },
    {
      id: 1,
      imageUrl: "/img.jpg",
      heading: "Business Name 1",
      address1: "Short description or tagline 1",
      phone: 999999999,
    },
  ];

  const [visibleCards, setVisibleCards] = useState(3);

  return (
    <>
      <section className={`${styles.xPadding} `}>
        <div className="justify-between  flex-col gap-10  flex items-center w-full ">
          <div className="w-full items-center gap-3 flex justify-between">
            <h2 className="md:text-3xl text-2xl flex flex-wrap font-bold pt-2 text-left">
              Featured Local Business
            </h2>

            <div className="text-right ">
              <Link
                href={{
                  pathname: "/feature",
                  query: items,
                }}>
                <button className="bg-blue-500 text-white w-28 h-11 rounded-md hover:bg-blue-700 transition">
                  View More
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full flex ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-9 w-full">
              {items.slice(0, visibleCards).map((item, index) => (
                <Card
                  key={index}
                  imageUrl={item.imageUrl}
                  altText="Description of the image"
                  heading={item.heading}
                  address1={item.address1}
                  phone={item.phone}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
