
import Link from 'next/link';

export default function Hero({ business }) {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-[url('/electrician-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">{business?.name || 'Professional Electrical Services'}</h1>
          <p className="text-xl mb-8">Licensed & Insured Electricians in Birmingham, AL</p>
          <div className="flex gap-4">
            <a href={`tel:${business?.phone}`} className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full font-bold">
              Call Now
            </a>
            <Link href="#services" className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-full font-bold">
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
