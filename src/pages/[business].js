
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { formatBusinessName } from '../utils/formatName';

export default function BusinessPage() {
  const router = useRouter();
  const [business, setBusiness] = useState(null);
  
  useEffect(() => {
    if (!router.query.business) return;
    
    // Fetch business data from CSV
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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{business.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold">Contact</h2>
          <p>Phone: {business.phone}</p>
          <p>Address: {business.full_address}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Business Hours</h2>
          <p>{business.working_hours}</p>
        </div>
        {business.rating && (
          <div>
            <h2 className="text-xl font-semibold">Rating</h2>
            <p>{business.rating} ⭐ ({business.reviews} reviews)</p>
          </div>
        )}
      </div>
    </div>
  );
}
