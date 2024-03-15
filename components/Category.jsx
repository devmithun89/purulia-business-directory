import Link from 'next/link';
import React from 'react';

const CategoryComponent = () => {
  return (
    <div className="categories-container">
      <Link href="/categories/restaurants">
        <a>Restaurants</a>
      </Link>
      <Link href="/categories/hotels">
        <a>Hotels</a>
      </Link>
      <Link href="/categories/medicals">
        <a>Medicals</a>
      </Link>
      <Link href="/categories/showrooms">
        <a>Showrooms</a>
      </Link>
      {/* Add more links as needed */}
    </div>
  );
};

export default CategoryComponent;
