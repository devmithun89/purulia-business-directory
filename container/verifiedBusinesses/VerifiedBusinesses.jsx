"use client";

import {styles} from "@/app/styles";
import VerifiedCard from "@/components/VerifiedCard";
import Link from "next/link";
import React, {useState} from "react";

export default function VerifiedBusinesses() {
  const [visibleCards, setVisibleCards] = useState(3);

  const items = [
    {
      id: 1,
      imageUrl: "/img.jpg",
      heading: "Business Name 1",
      subheading: "Short description or tagline 1",
    },
    {
      id: 2,
      imageUrl: "/img.jpg",
      heading: "Business Name 2",
      subheading: "Short description or tagline 2",
    },
    {
      id: 3,
      imageUrl: "/img.jpg",
      heading: "Business Name 3",
      subheading: "Short description or tagline 3",
    },
    {
      id: 4,
      imageUrl: "/img.jpg",
      heading: "Business Name 4",
      subheading: "Short description or tagline 4",
    },
    {
      id: 5,
      imageUrl: "/img.jpg",
      heading: "Business Name 5",
      subheading: "Short description or tagline 5",
    },
    {
      id: 6,
      imageUrl: "/img.jpg",
      heading: "Business Name 6",
      subheading: "Short description or tagline 6",
    },
  ];
  return (
    <section className={`${styles.xPadding} ${styles.yPadding}`}>
      <div className="justify-between flex-col flex gap-10 items-center w-full">
        <div className="flex justify-between gap-3   items-center w-full">
          <h2 className="md:text-3xl text-2xl flex flex-wrap font-bold pt-3 text-left">
            Verified Local Business
          </h2>

          <div className="text-right ">
            <Link href="/verified" passHref>
              <button className="bg-blue-500 text-white w-28 h-11 rounded-md hover:bg-blue-700 transition">
                View More
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full flex ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-9 w-full">
            {items.slice(0, visibleCards).map((item, index) => (
              <VerifiedCard
                key={index}
                imageUrl={item.imageUrl}
                altText="Description of the image"
                heading={item.heading}
                subheading={item.subheading}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
