import React from 'react'
import DetailsCard from '../../components/DetailsCard';
import Service from '../../components/Service';
import Product from '../../components/Product';
import Review from '../../components/Review';
import { MdVerified } from 'react-icons/md';
import { FaApple, FaAndroid, FaLaptop, FaCamera, FaHeadphones, FaTruck, FaUtensils, FaMoneyBillAlt, FaShoppingBag, FaWrench } from 'react-icons/fa';

export default function DetailsPage() {
    return (
        <main className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="mt-8">
            <DetailsCard
              backgroundImage="img.png"
              businessName="Cafe 21"
              description="Small Description of the business."
            />
          </div>
          
          <div className="mt-8">
            <h2 className='text-3xl font-bold'>Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
              <Service icon={FaTruck} serviceName="Delivery" description="Fast and reliable delivery service." />
              <Service icon={FaUtensils} serviceName="Food Service" description="Delicious food delivery service." />
              <Service icon={FaMoneyBillAlt} serviceName="Payment" description="Secure payment options available." />
              <Service icon={FaShoppingBag} serviceName="Shopping" description="Shop for your favorite items." />
              <Service icon={FaWrench} serviceName="Maintenance" description="Expert maintenance services." />
              <Service icon={FaWrench} serviceName="Maintenance" description="Expert maintenance services." />
              <Service icon={FaWrench} serviceName="Maintenance" description="Expert maintenance services." />
              <Service icon={FaWrench} serviceName="Maintenance" description="Expert maintenance services." />
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className='text-3xl font-bold'>Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
              <Product icon={FaApple} productName="Apple" description="$10" />
              <Product icon={FaAndroid} productName="Android" description="$10" />
              <Product icon={FaLaptop} productName="Laptop" description="$10" />
              <Product icon={FaCamera} productName="Camera" description="$10" />
              <Product icon={FaHeadphones} productName="Headphones" description="$10" />
              <Product icon={FaHeadphones} productName="Headphones" description="$10" />
              <Product icon={FaHeadphones} productName="Headphones" description="$10" />
              <Product icon={FaHeadphones} productName="Headphones" description="$10" />
              
            </div>
          </div>
          
          <div className="mt-8 flex items-center">
            
            <div>
              <div className='flex pb-4'>
              <MdVerified className="text-blue-500 mr-2" size={28}/>
              <h2 className='text-3xl font-bold'>Verified</h2>
              </div>
              <p>This business has been claimed by the owner or a representative.</p>
            </div>
          </div>
    
          <div className="mt-8">
            <h2 className='text-3xl font-bold'>Reviews</h2>
            <div className="mt-4 space-y-6">
              <Review reviewerName="Jane Doe" reviewText="Absolutely loved the service! Will be back again." rating={5} date="January 1, 2024" like={4}/>
              <Review reviewerName="John Smith" reviewText="Great experience, though the wait time was a bit longer than expected." rating={4} date="January 2, 2024" like={4} />
            </div>
          </div>
        </main>
  )
}
