import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaFileContract, 
  FaCheckCircle, 
  FaExclamationTriangle,
  FaEnvelope,
  FaArrowRight,
  FaBalanceScale
} from 'react-icons/fa';

const TermsOfService = () => {
  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
              <FaFileContract className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Terms of <span className="text-green-200">Service</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
              Gram Tarang Food Testing Laboratory Pvt. Ltd. (GTFTL)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            
            {/* Section 1 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-sm">1</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Introduction</h2>
              </div>
              
              <div className="pl-11 space-y-3">
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  These Terms of Service govern the use of services provided by GTFTL. By submitting samples or availing services, the client agrees to these terms.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-sm">2</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Scope of Services</h2>
              </div>
              
              <div className="pl-11 space-y-3">
                <p className="text-gray-600 leading-relaxed">GTFTL provides:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Chemical analysis (ICP-MS, LC-MS/MS, GC-MS/MS, HPLC, FTIR)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Microbiological testing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Research, training, and project support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-sm">3</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Sample Submission</h2>
              </div>
              
              <div className="pl-11 space-y-3">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Clients must provide accurate and complete information about samples.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Samples should be properly labeled and safely packaged.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>GTFTL is not responsible for sample degradation due to improper handling before receipt.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-sm">4</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Testing & Reporting</h2>
              </div>
              
              <div className="pl-11 space-y-3">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Testing is conducted as per validated methods (AOAC, ISO, NABL guidelines)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Results are provided in the form of official reports</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Reports are valid only for the tested sample</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-sm">5</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Turnaround Time (TAT)</h2>
              </div>
              
              <div className="pl-11 space-y-3">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Estimated timelines will be communicated</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Delays may occur due to instrument maintenance, sample complexity, or unforeseen conditions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-sm">6</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Payment Terms</h2>
              </div>
              <div className="pl-11 space-y-3">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Services are chargeable as per agreed quotation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Reports may be released only after full payment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Fees are non-refundable once analysis has commenced</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-sm">7</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Confidentiality</h2>
              </div>
              <div className="pl-11 space-y-3">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>All client data and results are kept strictly confidential</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Disclosure only in case of legal or regulatory requirements</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 8 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-sm">8</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Limitation of Liability</h2>
              </div>
              
              <div className="pl-11 space-y-3">
                <div className="bg-yellow-50 border border-green-200 rounded-lg p-4 flex items-start space-x-3">
                  <FaExclamationTriangle className="text-green-600 mt-0.5 flex-shrink-0 h-5 w-5" />
                  <div className="text-gray-700 text-sm leading-relaxed">
                    <strong>Important:</strong> Please read this section carefully as it limits our liability.
                  </div>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>GTFTL is not liable for misinterpretation of results by clients or use of results for regulatory or commercial decisions without validation.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Liability, if any, is limited to the cost of analysis performed.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 9 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-sm">9</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Sample Retention & Disposal</h2>
              </div>
              <div className="pl-11 space-y-3">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Samples are stored for a limited time as per SOP</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>After that, they are disposed safely unless otherwise requested</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 10 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-sm">10</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Cancellation Policy</h2>
              </div>
              <div className="pl-11 space-y-3">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Requests for cancellation must be made before analysis begins</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Partial charges may apply if preparation has started</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 11 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-sm">11</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Training & Projects</h2>
              </div>
              <div className="pl-11 space-y-3">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Training is provided for educational purposes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Certification is based on participation and performance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 12 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaBalanceScale className="text-green-600 h-4 w-4" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Governing Law</h2>
              </div>
              
              <div className="pl-11 space-y-3">
                <p className="text-gray-600 leading-relaxed">
                  These terms are governed by the laws of India and the jurisdiction of Odisha courts.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <FaEnvelope className="h-6 w-6 text-green-600" />
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Questions About These Terms?</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Gram Tarang Food Testing Laboratory Pvt. Ltd.</strong></p>
                <p>Plot No.1, IDCO Industrial Estate, Main Road</p>
                <p>Paralakhemundi, Gajapati, Odisha – 751200</p>
                <p>Email: <a href="mailto:info@ftl.org.in" className="text-green-600 hover:text-green-700 underline">info@ftl.org.in</a></p>
                <p>Phone: <a href="tel:+919438732495" className="text-green-600 hover:text-green-700 underline">+91 94387 32495</a></p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">Ready to Get Started?</h3>
            <p className="text-green-100 max-w-2xl mx-auto">
              Contact us today for professional testing services or to learn about our programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <span>Contact Us</span>
                <FaArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/privacy-policy"
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
              >
                Privacy Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
