"use client";
import React, {useEffect, useState} from "react";
import Card from "../../components/Card"; // Adjust the import path as necessary
import ClipLoader from "react-spinners/ClipLoader";
import {styles} from "../styles";

const CategoryPage = () => {
  const [category, setCategory] = useState("");
  const [businesses, setBusinesses] = useState(); // Ensure businesses is initialized as an array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const queryParams = new URLSearchParams(window.location.search);
      const categoryParam = queryParams.get("category");

      if (categoryParam) {
        setCategory(categoryParam);

        const fetchData = async () => {
          try {
            const response = await fetch(
              `https://script.google.com/macros/s/AKfycbyWQHgM5o_iI5PrOrE3AGJDA_NCUr4o-9k5Owil2vTbF0jqXv2z2iSrhlTQTei5nkS1TQ/exec?category=${categoryParam}`,
            );
            const {data} = await response.json(); // Destructuring to get data directly from the response

            if (Array.isArray(data)) {
              setBusinesses(data);
            } else {
              console.error("Data received from API is not an array:", data);
              setBusinesses([]); // Still a good idea to reset to empty array in case of unexpected structure
            }
          } catch (error) {
            console.error("Error fetching data:", error);
            setBusinesses([]);
          } finally {
            setLoading(false);
          }
        };

        fetchData();
      }
    }
  }, []);

  return (
    <section className={`${styles.xPadding} ${styles.yPadding} w-full bg-background`}>
      <div className="w-full flex flex-col">
        <h1 className="text-3xl font-bold my-4 text-center pb-8">
          {category ? `${category}s In Purulia` : "Loading..."}
        </h1>
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <ClipLoader color={"#00BFFF"} loading={loading} size={50} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {businesses.map((business, index) => (
              <Card
                key={index}
                imageUrl="/img.jpg" // Update the path as necessary
                altText="Description of the image"
                heading={business.name}
                address1={business.address_1}
                phone={business.phone}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryPage;
