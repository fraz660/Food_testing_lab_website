import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaShieldAlt, 
  FaLock, 
  FaUserShield, 
  FaEnvelope,
  FaArrowRight 
} from 'react-icons/fa';

const PrivacyPolicy = () => {
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
              <FaShieldAlt className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Privacy <span className="text-green-200">Policy</span>
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
              <div className="pl-11">
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Gram Tarang Food Testing Laboratory Pvt. Ltd. (GTFTL) is committed to maintaining the confidentiality, integrity, and security of all client data, test results, and associated information. This Privacy Policy outlines how we collect, use, protect, and manage information.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-sm">2</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              <div className="pl-11 space-y-3">
                <p className="text-gray-600 leading-relaxed">We may collect the following information:</p>
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Client details (name, organization, contact information)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Sample-related information (sample type, source, purpose of testing)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Analytical data and test results</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Payment and billing information</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Training and project-related data (if applicable)</span>
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
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Use of Information</h2>
              </div>
              <div className="pl-11 space-y-3">
                <p className="text-gray-600 leading-relaxed">The collected information is used for:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Conducting laboratory testing and analysis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Generating and delivering test reports</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Communication with clients regarding services</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Quality assurance, method validation, and internal audits</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Compliance with regulatory and accreditation requirements</span>
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
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Confidentiality of Test Results</h2>
              </div>
              <div className="pl-11 space-y-3">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>All test results and reports are treated as strictly confidential.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Results are shared only with the authorized client unless disclosure is required by law or regulatory authorities.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>No data is disclosed to third parties without prior consent.</span>
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
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Data Protection & Security</h2>
              </div>
              <div className="pl-11 space-y-3">
                <p className="text-gray-600 leading-relaxed">GTFTL ensures:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <FaLock className="text-green-500 mt-1 flex-shrink-0 h-4 w-4" />
                    <span>Secure storage of data (digital and physical records)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FaLock className="text-green-500 mt-1 flex-shrink-0 h-4 w-4" />
                    <span>Restricted access to authorized personnel only</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FaLock className="text-green-500 mt-1 flex-shrink-0 h-4 w-4" />
                    <span>Protection against unauthorized access, loss, or misuse</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FaLock className="text-green-500 mt-1 flex-shrink-0 h-4 w-4" />
                    <span>Regular backups and system monitoring</span>
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
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Use of Samples</h2>
              </div>
              <div className="pl-11 space-y-3">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Samples received are used only for the intended testing purpose.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Residual samples may be stored for a limited period for reanalysis or discarded as per SOP.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Samples will not be used for research or training without prior client approval.</span>
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
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Data Retention</h2>
              </div>
              <div className="pl-11 space-y-3">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Test data and reports are retained for a defined period as per ISO/NABL guidelines.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>After the retention period, records are securely archived or disposed of.</span>
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
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Third-Party Disclosure</h2>
              </div>
              <div className="pl-11 space-y-3">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>GTFTL does not sell, trade, or share client information with third parties.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Information may be disclosed only if required by law, accreditation bodies, or regulatory authorities.</span>
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
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Client Rights</h2>
              </div>
              <div className="pl-11 space-y-3">
                <p className="text-gray-600 leading-relaxed">Clients have the right to:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <FaUserShield className="text-green-600 mt-1 flex-shrink-0 h-4 w-4" />
                    <span>Access their test reports and related data</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FaUserShield className="text-green-600 mt-1 flex-shrink-0 h-4 w-4" />
                    <span>Request corrections in case of errors</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FaUserShield className="text-green-600 mt-1 flex-shrink-0 h-4 w-4" />
                    <span>Seek clarification regarding test methods and results</span>
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
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Compliance</h2>
              </div>
              <div className="pl-11 space-y-3">
                <p className="text-gray-600 leading-relaxed">GTFTL adheres to:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>ISO/IEC 17025 standards</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>NABL accreditation requirements</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Applicable national and international data protection regulations</span>
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
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Updates to Policy</h2>
              </div>
              <div className="pl-11">
                <p className="text-gray-600 leading-relaxed">
                  This policy may be updated periodically. Clients will be informed of significant changes where applicable.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <FaEnvelope className="h-6 w-6 text-green-600" />
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Contact Us About Privacy</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions or concerns about this Privacy Policy or our data practices, 
                please contact us:
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
            <h3 className="text-2xl md:text-3xl font-bold">Need More Information?</h3>
            <p className="text-green-100 max-w-2xl mx-auto">
              If you have questions about our privacy practices or services, our team is here to help.
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
                to="/terms-of-service"
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
              >
                Terms of Service
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
