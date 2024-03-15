/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const ExploreCard = ({imageUrl, altText, heading}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image src={imageUrl} alt={altText} width={600} height={600} className="w-full" />
      <div className="px-6 py-4">
        <button className="font-bold text-xl mb-2">{heading}</button>
      </div>
    </div>
  );
};

export default ExploreCard;
