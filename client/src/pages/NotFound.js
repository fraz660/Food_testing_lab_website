import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaFlask, FaEnvelope, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* 404 Number */}
          <div className="relative">
            <h1 className="text-[120px] sm:text-[160px] font-bold text-gray-100 leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <FaExclamationTriangle className="h-16 w-16 text-green-500 animate-pulse" />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Page Not Found
            </h2>
            <p className="text-gray-600 text-lg max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved. 
              Let us help you find what you need.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              to="/"
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <FaHome className="h-4 w-4" />
              <span>Go Home</span>
            </Link>
            <Link
              to="/services"
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <FaFlask className="h-4 w-4" />
              <span>Our Services</span>
            </Link>
            <Link
              to="/contact"
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <FaEnvelope className="h-4 w-4" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Popular pages:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Equipment', path: '/equipment' },
                { name: 'Internships', path: '/internship' },
                { name: 'Team', path: '/team' },
                { name: 'Blog', path: '/blog' }
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="px-4 py-2 bg-gray-50 text-gray-600 rounded-full text-sm hover:bg-blue-50 hover:text-green-600 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
