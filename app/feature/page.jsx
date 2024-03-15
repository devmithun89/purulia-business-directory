"use client";
import React, {useState} from "react";
import Card from "@/components/Card";
import {styles} from "../styles";
// import {useSearchParams} from "next/navigation";

export default function FeaturedPage() {
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
  // const mainData = useSearchParams();

  // console.log(mainData.get("imageUrl"));
  return (
    <section className={`${styles.xPadding} ${styles.yPadding}`}>
      <div className="justify-between flex items-center w-full pb-6">
        <h1 className="text-3xl font-bold my-4 text-center">Featured Local Business</h1>
      </div>
      <div className="container mx-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item, index) => (
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
    </section>
  );
}
