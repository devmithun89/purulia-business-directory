import React from "react";
import Link from "next/link";
import ExploreCard from "@/components/ExploreCard";
import {styles} from "@/app/styles";

export default function ExploreBusiness() {
  const categories = [
    {name: "Beauty & Spas", path: "Beauty and Spa"},
    {name: "Restaurants", path: "Restaurant"},
    {name: "Showrooms", path: "Showroom"},
    {name: "Hotels", path: "Hotel"},
    {name: "Medicals", path: "Medical"},
    {name: "Cafes", path: "Cafe"},
    {name: "Machines", path: "Machine"},
  ];

  return (
    <div
      className={`${styles.xPadding} w-full bg-background
    `}>
      <div className="justify-between flex items-center w-full pb-6">
        <h2 className="text-3xl font-bold my-4 text-left">
          Explore Local Business By Category
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <Link key={index} href={`/category?category=${category.path}`}>
            <div>
              <ExploreCard
                imageUrl="/img.jpg"
                altText={`Image of ${category.name}`}
                heading={category.name}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
