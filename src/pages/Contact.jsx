import React from "react";
import { FaLinkedin, FaGithub, FaGoogle } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="contact-page container mx-auto p-4">
      <h2 className="text-4xl font-bold mb-4">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">My Address</h3>
          <p>123 scaler</p>
          <p>falana sector 212</p>
          <p>banglore</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Social Profiles</h3>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size="30" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub size="30" />
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <FaGoogle size="30" />
            </a>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Email</h3>
          <p>ommishra162005@gmail.com</p>
          
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Contact</h3>
          <p>+917898488563</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

