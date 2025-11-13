
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const AboutPage: React.FC = () => {
  const coreValues = [
    {
      icon: '♻️',
      title: 'Sustainability',
      description: 'At the heart of everything we do, ensuring a minimal environmental footprint.',
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Leveraging modern technology and methods for efficient and effective construction.',
    },
    {
      icon: '🏆',
      title: 'Quality',
      description: 'Delivering excellence and durability in every project, without compromise.',
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'Operating with transparency, honesty, and respect for our clients and planet.',
    },
  ];

  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-6 space-y-16">
        
        {/* Page Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-eco-deep-teal">Our Commitment to a Better World</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">EcoCast Construction was founded on the principle that we can build the future without compromising it.</p>
        </header>
        
        {/* Mission and Vision */}
        <section className="grid md:grid-cols-2 gap-12 text-center md:text-left">
          <div className="bg-eco-forest-green/10 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-eco-forest-green mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700">“Our mission is to redefine construction by integrating sustainability at every level, delivering high-quality, eco-conscious buildings that benefit both our clients and the environment.”</p>
          </div>
          <div className="bg-eco-light-green/20 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-eco-bright-green mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700">“A Kenya built with innovation, responsibility, and respect for nature, setting a new standard for the construction industry across Africa.”</p>
          </div>
        </section>

        {/* Core Values */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-eco-deep-teal mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value) => (
              <div key={value.title} className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-semibold text-eco-deep-teal mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Company Story / Timeline */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://picsum.photos/seed/milestone/600/500" 
              alt="EcoCast project milestone" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-4 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-eco-deep-teal">Our Journey</h2>
            <p className="text-lg text-gray-600">
              From our first small-scale eco-friendly project to becoming leaders in sustainable construction, our journey has been driven by passion and purpose. We are proud of our milestones and excited for the future we are building.
            </p>
            <p className="text-gray-600">
                Each project in our gallery represents a step towards a more sustainable Kenya, showcasing our dedication to green building principles and innovative design.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center pt-10">
            <h2 className="text-3xl font-bold text-eco-deep-teal mb-4">Join Us on Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Let's discuss how your next project can contribute to a sustainable future.
            </p>
            <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-eco-bright-green text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-eco-gold transition-colors duration-300 shadow-lg"
          >
            Talk to Us
          </a>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
