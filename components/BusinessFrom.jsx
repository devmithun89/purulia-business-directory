import React, {useEffect, useRef, useState} from "react";
import {motion, useMotionValue, useTransform, animate} from "framer-motion";

const BusinessForm = ({onClose}) => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactNumber: "",
    address: "",
  });

  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://api.sheetmonkey.io/form/hF3hc1HYc8dTJDKjehHB5z",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        // Handle successful form submission
        onClose(); // Close the form after successful submission
      } else {
        // Handle error response from the API
        console.error("Failed to submit form:", response.statusText);
        // Optionally, you can display an error message to the user
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Optionally, you can display an error message to the user
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.3}}
      className="fixed top-0 left-0 right-0 bottom-0 w-full h-full  z-50  bg-black/50  overflow-hidden flex justify-center   items-center">
      <motion.div
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{duration: 0.3}}
        className="bg-background w-[400px] px-6 py-6  h-auto mt-24   relative rounded-md shadow-lg">
        {/* <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur bg-opacity-30 bg-white"> */}
        <div
          ref={formRef}
          className="business-form bg-white p-8 rounded-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Business Contact Form
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Business Name Field */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="companyName">
                Business Name
              </label>
              <input
                id="companyName"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your company name"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>
            {/* Contact Number Field */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="contactNumber">
                Contact Number
              </label>
              <input
                id="contactNumber"
                type="tel"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your contact number"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </div>
            {/* Address Field */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="address">
                Address
              </label>
              <input
                id="address"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            {/* Form submission buttons */}
            <div className="flex flex-col md:flex-row md:justify-end">
              {/* <button
              type="button"
              className="mr-0 md:mr-4 mb-2 md:mb-0 px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100"
              onClick={onClose}
            >
              Cancel
            </button> */}
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* </div> */}
      </motion.div>
    </motion.div>
  );
};

export default BusinessForm;
