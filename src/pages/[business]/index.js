
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { formatBusinessName } from '../../utils/formatName';
import Hero from '../../components/Hero';
import Services from '../../components/Services';

export default function BusinessPage() {
  const router = useRouter();
  const [business, setBusiness] = useState(null);
  
  useEffect(() => {
    if (!router.query.business) return;
    
    fetch('/api/businesses')
      .then(res => res.json())
      .then(businesses => {
        const found = businesses.find(b => 
          formatBusinessName(b.name) === router.query.business
        );
        setBusiness(found || null);
      });
  }, [router.query.business]);

  if (!business) return <div>Loading...</div>;

  return (
    <div>
      <Hero business={business} />
      <Services business={business} />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 pr-8">
              <h2 className="text-4xl font-bold mb-6">About Us</h2>
              <p className="text-gray-600 mb-6">{business.description || 'We are your trusted electrical service provider in Birmingham, AL. With years of experience and a dedicated team of licensed electricians, we deliver quality workmanship and reliable solutions for all your electrical needs.'}</p>
              <div className="flex items-center">
                <span className="text-yellow-500 font-bold text-xl">{business.rating}★</span>
                <span className="ml-2 text-gray-600">({business.reviews} reviews)</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <img src="/electrician-about.jpg" alt="Our Team" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
