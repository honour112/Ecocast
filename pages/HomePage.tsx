
import React from 'react';
import { Link } from 'react-router-dom';
import { WHATSAPP_LINK } from '../constants';

const HomePage: React.FC = () => {
  const servicesPreview = [
    { name: 'Green Building', path: '/services' },
    { name: 'Precast Solutions', path: '/services' },
    { name: 'Eco Design Consulting', path: '/services' },
  ];

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] md:h-[80vh] bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: "url('/WhatsApp Image 2025-11-13 at 04.49.09_baee5378.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center p-6 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Building a Greener Future with Sustainable Construction
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            EcoCast Construction specializes in eco-conscious building solutions across Kenya.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-eco-bright-green text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-eco-gold transition-colors duration-300 shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* About Preview */}
      <section className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-eco-deep-teal">Innovative and Sustainable Creations</h2>
            <p className="text-lg text-gray-600">
              We combine innovation and sustainability to create durable, environmentally conscious structures that stand the test of time. Our commitment is to build not just for today, but for generations to come.
            </p>
            <Link to="/about" className="text-eco-forest-green font-semibold hover:underline">
              Learn More About Us &rarr;
            </Link>
          </div>
          <div>
            <img 
              src="/WhatsApp Image 2025-11-13 at 04.00.53_06c78fc0.jpg" 
              alt="EcoCast team at a project site" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-eco-deep-teal mb-2">Our Core Services</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            From initial design to final construction, we offer a range of services tailored for a sustainable future.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {servicesPreview.map((service) => (
              <Link
                key={service.name}
                to={service.path}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300"
              >
                <h3 className="text-2xl font-semibold text-eco-forest-green mb-2">{service.name}</h3>
                <p className="text-gray-500">Discover our approach to responsible building.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="container mx-auto px-6 text-center">
        <div className="bg-eco-deep-teal text-white rounded-lg p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s build responsibly together.</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to start your next project with a team that values sustainability as much as you do?
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-eco-gold text-eco-deep-teal px-8 py-3 rounded-md text-lg font-semibold hover:bg-white transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
