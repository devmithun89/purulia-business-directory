// Card.js
import Image from "next/image";
import React from "react";

const Card = ({imageUrl, altText, heading, address1, phone}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image src={imageUrl} alt={altText} width={400} height={250} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{heading}</div>
        <p className="text-gray-700 text-base">Address :- {address1}</p>
        <p className="text-gray-700 text-base">{phone}</p>
      </div>
    </div>
  );
};

export default Card;
