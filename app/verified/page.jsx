"use client";
import VerifiedCard from "@/components/VerifiedCard";
import React, {useState} from "react";
import {styles} from "../styles";

export default function VerifiedPage() {
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
      <div className="justify-between flex items-center w-full pb-6">
        <h1 className="text-3xl font-bold my-4 text-center ">Verified Local Business</h1>
      </div>

      <div className="container mx-auto ">
        <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
          {items.map((item, index) => (
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
    </section>
  );
}
