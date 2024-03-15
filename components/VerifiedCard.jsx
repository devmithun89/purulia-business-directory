import Image from "next/image";
import React from "react";
import {MdVerified} from "react-icons/md"; // Importing the verified icon

// Defining props type for the Card component
const VerifiedCard = ({imageUrl, altText, heading, subheading}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image src={imageUrl} alt={altText} width={400} height={250} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 flex items-center justify-start gap-2">
          {heading} <MdVerified className="text-blue-500" />{" "}
          {/* Adding the verified icon next to the heading */}
        </div>
        <p className="text-gray-700 text-base">{subheading}</p>
      </div>
    </div>
  );
};

export default VerifiedCard;
