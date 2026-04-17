import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { toast } from 'react-toastify';
import axios from 'axios';
import { 
  FaFlask, 
  FaMicroscope, 
  FaCertificate, 
  FaFish,
  FaSearch,
  FaSeedling,
  FaDna,
  FaVial,
  FaCheckCircle,
  FaArrowRight,
  FaPlus,
  FaMinus,
  FaTimes,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaPills,
  FaBug,
  FaPaperPlane,
  FaQuoteLeft
} from 'react-icons/fa';

const Services = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [expandedService, setExpandedService] = useState(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    urgency: 'Medium',
    sampleDetails: '',
    requirements: '',
    additionalNotes: ''
  });

  const services = [
    {
      id: 'chemical-analysis',
      icon: FaFlask,
      title: '3.1 Chemical Analysis',
      subtitle: 'Heavy Metals, Pesticides, Toxins & Residues',
      description: 'Comprehensive chemical testing using state-of-the-art analytical equipment for quantitative and qualitative analysis.',
      color: 'bg-green-500',
      gradient: 'from-green-500 to-green-600',
      tests: [
        'ICP-MS (Heavy Metal Analysis)',
        'LC-MS/MS (Pesticides, Toxins, Drugs)',
        'GC-MS/MS (Volatile Compounds, Residues)',
        'HPLC (Quantitative Analysis)',
        'FTIR (Material Identification)'
      ],
      applications: [
        'Food manufacturers',
        'Pharmaceutical companies',
        'Export-import companies',
        'Research institutions'
      ],
      turnaround: '3-7 working days',
      accreditation: 'NABL Accredited'
    },
    {
      id: 'microbiological-testing',
      icon: FaMicroscope,
      title: '3.2 Microbiological Testing',
      subtitle: 'Pathogen Detection & Microbial Safety',
      description: 'Complete microbiological analysis for food safety, hygiene, and pathogen detection ensuring compliance with health standards.',
      color: 'bg-green-600',
      gradient: 'from-green-600 to-green-700',
      tests: [
        'Pathogen Detection',
        'Total Plate Count (TPC)',
        'Yeast & Mold Analysis',
        'Sterility Testing'
      ],
      applications: [
        'Food and dairy industries',
        'Water treatment plants',
        'Hospitals and clinics',
        'Environmental agencies'
      ],
      turnaround: '3-5 working days',
      accreditation: 'NABL Accredited'
    },
    {
      id: 'specialized-testing',
      icon: FaCertificate,
      title: '3.3 Specialized Testing',
      subtitle: 'Nutraceuticals, Environmental & Herbal',
      description: 'Advanced specialized analytical services catering to food safety standards, environmental compliance, and plant analysis.',
      color: 'bg-green-500',
      gradient: 'from-green-500 to-green-600',
      tests: [
        'Food Safety Testing',
        'Nutraceutical Analysis',
        'Environmental Testing',
        'Herbal & Plant Analysis'
      ],
      applications: [
        'Nutraceutical companies',
        'Supplement manufacturers',
        'Environmental agencies',
        'Regulatory bodies'
      ],
      turnaround: '5-10 working days',
      accreditation: 'ISO Certified'
    }
  ];

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const openQuoteModal = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setFormData(prev => ({ ...prev, serviceType: serviceTitle }));
    setShowQuoteModal(true);
  };

  const closeQuoteModal = () => {
    setShowQuoteModal(false);
    setSelectedService('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      serviceType: '',
      urgency: 'Medium',
      sampleDetails: '',
      requirements: '',
      additionalNotes: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Submitting service request:', formData);
      const response = await axios.post('/api/service-request', formData);
      console.log('Service request response:', response.data);
      toast.success('Service request submitted successfully! We will contact you soon.');
      closeQuoteModal();
    } catch (error) {
      console.error('Error submitting service request:', error);
      const errorMessage = error.response?.data?.message || 'Failed to submit service request. Please try again.';
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Hero Section */}
      <section ref={heroRef} className="py-12 md:py-20 bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 md:space-y-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Our <span className="text-green-200">Services</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed px-2">
              Comprehensive analytical testing services with state-of-the-art equipment and expert professionals
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6 md:mb-8">
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="h-6 w-6 text-green-400" />
                <span className="text-sm font-medium">NABL Accredited</span>
              </div>
              {/* <div className="flex items-center space-x-2">
                <FaCheckCircle className="h-6 w-6 text-green-400" />
                <span className="text-sm font-medium">ISO Certified</span>
              </div> */}
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="h-6 w-6 text-green-400" />
                <span className="text-sm font-medium">Expert Team</span>
              </div>
            </div>
            
            {/* AI Advisor CTA */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">

              <button
                onClick={() => setShowQuoteModal(true)}
                className="w-full sm:w-auto bg-white bg-opacity-20 text-white border-2 border-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FaPaperPlane className="w-4 h-4 md:w-5 md:h-5" />
                <span>Request Quote</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Comprehensive <span className="text-gradient">Testing Solutions</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Professional analytical services across multiple domains with quick turnaround times and accurate results
            </p>
          </motion.div>

          <div className="space-y-4 md:space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Service Header */}
                <div 
                  className={`bg-gradient-to-r ${service.gradient} p-4 md:p-6 cursor-pointer`}
                  onClick={() => toggleService(service.id)}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="p-2 md:p-3 bg-white bg-opacity-20 rounded-full">
                        <service.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-2xl font-bold text-white">{service.title}</h3>
                        <p className="text-sm md:text-base text-white text-opacity-90">{service.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end space-x-4">
                      <div className="text-right text-white text-xs md:text-sm">
                        <div className="font-medium">Turnaround</div>
                        <div className="text-white text-opacity-90">{service.turnaround}</div>
                      </div>
                      <div className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors duration-200">
                        {expandedService === service.id ? (
                          <FaMinus className="h-4 w-4 md:h-5 md:w-5 text-white" />
                        ) : (
                          <FaPlus className="h-4 w-4 md:h-5 md:w-5 text-white" />
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-white text-opacity-90 mt-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 md:p-6 border-t border-gray-100"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Tests Performed */}
                        <div>
                          <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4 flex items-center">
                            <FaVial className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-2" />
                            Tests Performed
                          </h4>
                          <ul className="space-y-2">
                            {service.tests.map((test, testIndex) => (
                              <li key={testIndex} className="flex items-start space-x-2">
                                <FaCheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-gray-600 text-xs md:text-sm">{test}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Applications */}
                        <div>
                          <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4 flex items-center">
                            <FaCertificate className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-2" />
                            Applications
                          </h4>
                          <ul className="space-y-2">
                            {service.applications.map((application, appIndex) => (
                              <li key={appIndex} className="flex items-start space-x-2">
                                <FaArrowRight className="h-3 w-3 md:h-4 md:w-4 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-gray-600 text-xs md:text-sm">{application}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Service Details */}
                        <div>
                          <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4 flex items-center">
                            <FaSearch className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-2" />
                            Service Details
                          </h4>
                          <div className="space-y-3">
                            <div className="p-2 md:p-3 bg-gray-50 rounded-lg">
                              <div className="text-xs md:text-sm font-medium text-gray-900">Accreditation</div>
                              <div className="text-sm text-gray-600">{service.accreditation}</div>
                            </div>
                            <div className="p-3 bg-gray-50 rounded-lg">
                              <div className="text-sm font-medium text-gray-900">Turnaround Time</div>
                              <div className="text-sm text-gray-600">{service.turnaround}</div>
                            </div>
                            <div className="p-3 bg-gray-50 rounded-lg">
                              <div className="text-sm font-medium text-gray-900">Sample Requirements</div>
                              <div className="text-sm text-gray-600">Contact for specific requirements</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-8 text-center">
                        <button
                          onClick={() => openQuoteModal(service.title)}
                          className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                        >
                          <FaQuoteLeft className="h-4 w-4 mr-2" />
                          <span>Request Quote for {service.title}</span>
                          <FaArrowRight className="h-4 w-4 ml-2" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-gradient">GTFTL?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaCertificate,
                title: 'NABL Accredited',
                description: 'Nationally recognized testing standards and procedures',
                color: 'text-green-600'
              },
              {
                icon: FaFlask,
                title: 'Advanced Equipment',
                description: 'State-of-the-art instruments for precise analysis',
                color: 'text-green-600'
              },
              {
                icon: FaMicroscope,
                title: 'Expert Team',
                description: 'Highly qualified professionals with extensive experience',
                color: 'text-green-600'
              },
              {
                icon: FaCheckCircle,
                title: 'Quick Turnaround',
                description: 'Fast and reliable results without compromising quality',
                color: 'text-green-600'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 ${feature.color}`}>
                  <feature.icon className="h-16 w-16" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">
              Need Testing Services?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Contact us today for professional analytical testing services and get accurate results with quick turnaround times
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <span>Get Quote</span>
                <FaArrowRight className="h-4 w-4 ml-2" />
              </a>
              <a
                href="tel:+919438732495"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Request Modal */}
      <AnimatePresence>
        {showQuoteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={closeQuoteModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Request Quote</h2>
                    <p className="text-green-600 font-medium">{selectedService}</p>
                  </div>
                  <button
                    onClick={closeQuoteModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    <FaTimes className="h-6 w-6" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaUser className="inline h-4 w-4 mr-2" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaEnvelope className="inline h-4 w-4 mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaPhone className="inline h-4 w-4 mr-2" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaBuilding className="inline h-4 w-4 mr-2" />
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter company name (optional)"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Priority Level
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="Low">Low Priority</option>
                      <option value="Medium">Medium Priority</option>
                      <option value="High">High Priority</option>
                      <option value="Urgent">Urgent</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sample Details *
                    </label>
                    <textarea
                      name="sampleDetails"
                      value={formData.sampleDetails}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Describe your samples: type, quantity, origin, etc..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Testing Requirements *
                    </label>
                    <textarea
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Specify testing requirements, parameters to be tested, standards to follow..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Any additional information or special requirements..."
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={closeQuoteModal}
                      className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <FaPaperPlane className="h-4 w-4 mr-2" />
                          Submit Request
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Services;
