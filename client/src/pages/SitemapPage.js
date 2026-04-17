import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaInfoCircle,
  FaFlask,
  FaCogs,
  FaUsers,
  FaGraduationCap,
  FaEnvelope,
  FaBlog,
  FaShieldAlt,
  FaFileContract,
  FaLightbulb,
  FaSitemap,
  FaArrowRight,
  FaFlask as FaChemical,
  FaMicroscope,
  FaVial,
  FaBook,
  FaDownload,
  FaBuilding,
  FaClipboardList
} from 'react-icons/fa';

const SitemapPage = () => {
  const sections = [
    {
      title: '1. Home',
      icon: FaHome,
      color: 'bg-green-600',
      links: [
        { name: 'Home', path: '/', desc: 'Homepage' }
      ]
    },
    {
      title: '2. About',
      icon: FaInfoCircle,
      color: 'bg-green-600',
      links: [
        { name: 'About GTFTL', path: '/about', desc: 'Our organization' },
        { name: 'Vision & Mission', path: '/about', desc: 'Our goals and purpose' },
        { name: 'Infrastructure', path: '/about', desc: 'Facility overview' },
        { name: 'Team', path: '/team', desc: 'Board of Directors & Technical Team' },
        { name: 'Accreditations (NABL, MoFPI)', path: '/about', desc: 'Certifications and approvals' }
      ]
    },
    {
      title: '3. Services',
      icon: FaFlask,
      color: 'bg-green-700',
      links: [
        { name: '3.1 Chemical Analysis', path: '/services', desc: 'ICP-MS, LC-MS/MS, GC-MS/MS, HPLC, FTIR' },
        { name: '3.2 Microbiological Testing', path: '/services', desc: 'Pathogen Detection, TPC, Yeast & Mold, Sterility' },
        { name: '3.3 Specialized Testing', path: '/services', desc: 'Food Safety, Nutraceutical, Environmental, Herbal Analysis' }
      ]
    },
    {
      title: '4. Training / Internship',
      icon: FaGraduationCap,
      color: 'bg-green-600',
      links: [
        { name: 'Internship Programs', path: '/internship', desc: 'Academic and professional internships' },
        { name: 'Instrument Training', path: '/internship', desc: 'GC-MS/MS, LC-MS/MS, ICP-MS, HPLC' },
        { name: 'Industrial Training', path: '/internship', desc: 'Practical industry exposure' },
        { name: 'Certification Programs', path: '/internship', desc: 'Certified courses' }
      ]
    },
    {
      title: '5. Research & Development',
      icon: FaLightbulb,
      color: 'bg-green-700',
      links: [
        { name: 'Animal Cell Culture', path: '/research', desc: 'R&D facility' },
        { name: 'Cytotoxicity Studies (MTT Assay)', path: '/research', desc: 'R&D facility' },
        { name: 'Extraction & Phytochemical Research', path: '/research', desc: 'R&D facility' },
        { name: 'Computational Modeling & Simulation', path: '/research', desc: 'R&D facility' }
      ]
    },
    {
      title: '6. Facilities',
      icon: FaBuilding,
      color: 'bg-green-600',
      links: [
        { name: 'Instrumentation', path: '/equipment', desc: 'High-end analytical instruments' },
        { name: 'Laboratory Setup', path: '/equipment', desc: 'Advanced testing infrastructure' },
        { name: 'Quality Assurance (GLP, SOPs)', path: '/equipment', desc: 'Strict adherence to protocols' }
      ]
    },
    {
      title: '7. Test Menu',
      icon: FaClipboardList,
      color: 'bg-green-700',
      links: [
        { name: 'Food Testing', path: '/services', desc: 'Safety and quality of food items' },
        { name: 'Water Testing', path: '/services', desc: 'Potability and contamination analysis' },
        { name: 'Environmental Testing', path: '/services', desc: 'Environmental sample analysis' },
        { name: 'Pharma / Herbal Testing', path: '/services', desc: 'Pharmaceutical and herbal testing' }
      ]
    },
    {
      title: '8. Reports / Downloads',
      icon: FaDownload,
      color: 'bg-green-600',
      links: [
        { name: 'Sample Reports', path: '/', desc: 'Example test reports' },
        { name: 'Brochures', path: '/', desc: 'Information materials' },
        { name: 'Forms (Sample Submission)', path: '/contact', desc: 'Submission forms' }
      ]
    },
    {
      title: '9. Contact',
      icon: FaEnvelope,
      color: 'bg-green-700',
      links: [
        { name: 'Location & Map', path: '/contact', desc: 'Find our laboratory' },
        { name: 'Phone & Email', path: '/contact', desc: 'Contact details' },
        { name: 'Inquiry Form', path: '/contact', desc: 'Submit an inquiry online' }
      ]
    },
    {
      title: '10. Policies',
      icon: FaShieldAlt,
      color: 'bg-green-600',
      links: [
        { name: 'Privacy Policy', path: '/privacy-policy', desc: 'How we collect, use, and protect your data' },
        { name: 'Terms of Service', path: '/terms-of-service', desc: 'Terms governing use of our services and website' }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Hero */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
              <FaSitemap className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Site<span className="text-green-200">map</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
              Complete navigation structure of the GTFTL website
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {sections.map((section, sIndex) => (
              <motion.div
                key={sIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (sIndex % 4) * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
              >
                <div className={`${section.color} p-4 flex items-center space-x-3 text-white`}>
                  <section.icon className="h-5 w-5" />
                  <h2 className="text-lg font-bold">{section.title}</h2>
                </div>
                <div className="p-4 md:p-6">
                  <div className="space-y-3">
                    {section.links.map((link, lIndex) => (
                      <Link
                        key={lIndex}
                        to={link.path}
                        className="flex items-center justify-between p-3 bg-white rounded-xl hover:shadow-md hover:bg-green-50 border border-transparent hover:border-green-100 transition-all duration-200 group"
                      >
                        <div>
                           <h3 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                            {link.name}
                          </h3>
                          <p className="text-xs text-gray-500 mt-0.5">{link.desc}</p>
                        </div>
                        <FaArrowRight className="h-3 w-3 text-gray-300 group-hover:text-green-600 transition-colors flex-shrink-0 ml-4" />
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Can't find what you're looking for?</h3>
          <p className="text-gray-600 mb-6">Contact us and we'll help you find the information you need.</p>
          <Link
            to="/contact"
            className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 shadow-lg"
          >
            <FaEnvelope className="h-4 w-4" />
            <span>Contact Us</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SitemapPage;
