
import Link from 'next/link';

export default function Services({ business }) {
  const services = [
    {
      title: 'Residential',
      description: 'Complete home electrical solutions from repairs to installations',
      link: `/${business?.url}/residential`
    },
    {
      title: 'Commercial',
      description: 'Powering businesses with reliable electrical services',
      link: `/${business?.url}/commercial`
    },
    {
      title: 'Industrial',
      description: 'Large-scale industrial electrical solutions',
      link: `/${business?.url}/industrial`
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="mb-6 text-gray-600">{service.description}</p>
              <Link href={service.link} className="text-yellow-500 font-bold hover:text-yellow-600">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
