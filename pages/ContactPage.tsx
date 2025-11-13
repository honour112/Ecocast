
import React, { useState } from 'react';
import { SOCIAL_LINKS, WHATSAPP_LINK } from '../constants';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'Hello EcoCast, I would like to inquire about your services.',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    const whatsappMessage = `
Name: ${name}
Email: ${email}
Phone: ${phone}
---
Message:
${message}
    `;
    const encodedMessage = encodeURIComponent(whatsappMessage.trim());
    window.open(`${WHATSAPP_LINK}?text=${encodedMessage}`, '_blank');
  };
  
  return (
    <div className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-eco-deep-teal">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            We're here to answer your questions and help you start your next sustainable project.
          </p>
        </header>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-eco-deep-teal mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-eco-forest-green focus:border-eco-forest-green" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-eco-forest-green focus:border-eco-forest-green" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-eco-forest-green focus:border-eco-forest-green" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-eco-forest-green focus:border-eco-forest-green"></textarea>
              </div>
              <button type="submit" className="w-full bg-eco-forest-green text-white py-3 px-4 rounded-md font-semibold hover:bg-eco-bright-green transition-colors duration-300">
                Send via WhatsApp
              </button>
            </form>
          </div>
          
          {/* Direct Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg space-y-4">
              <h3 className="text-xl font-bold text-eco-deep-teal">Direct Contact Information</h3>
              <p className="text-gray-700">Email: <a href="mailto:Construct@ecocast.co.ke" className="text-eco-forest-green hover:underline">Construct@ecocast.co.ke</a></p>
              <p className="text-gray-700">Phone (WhatsApp): <a href="tel:0727016585" className="text-eco-forest-green hover:underline">0727 016 585</a></p>
              <p className="text-gray-700">Phone (Contact only): <a href="tel:0722280818" className="text-eco-forest-green hover:underline">0722 280 818</a></p>
              <div className="flex space-x-4 pt-4">
                {SOCIAL_LINKS.map(social => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-eco-deep-teal hover:text-eco-gold">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.17112831802!2d36.72253303867633!3d-1.303197607455855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1676495116773!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Company Location"
                ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
