
import React from 'react';
import { SERVICES_DATA, WHATSAPP_LINK } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group">
      <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-eco-forest-green mb-2">{service.title}</h3>
        <p className="text-gray-500 mb-4 font-semibold">{service.description}</p>
        <p className="text-gray-700 mb-6 flex-grow">{service.details}</p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto block text-center bg-eco-forest-green text-white px-6 py-2 rounded-md hover:bg-eco-bright-green group-hover:bg-eco-gold transition-colors duration-300"
        >
          Get Quote
        </a>
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  return (
    <div className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-eco-deep-teal">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            We provide comprehensive, sustainable construction solutions designed for the future.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* CTA */}
        <section className="mt-20 text-center bg-eco-deep-teal text-white rounded-lg p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking for sustainable construction solutions?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is ready to bring your vision to life with expertise and a commitment to the environment.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-eco-gold text-eco-deep-teal px-8 py-3 rounded-md text-lg font-semibold hover:bg-white transition-colors duration-300"
          >
            Start a Conversation
          </a>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
