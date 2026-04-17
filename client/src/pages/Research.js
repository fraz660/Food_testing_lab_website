import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaFlask, 
  FaMicroscope, 
  FaAtom, 
  FaDna,
  FaHandshake,
  FaBookOpen,
  FaArrowRight,
  FaChartLine,
  FaCogs,
  FaGlobeAsia,
  FaUniversity,
  FaLightbulb
} from 'react-icons/fa';

const Research = () => {
  const researchAreas = [
    {
      icon: FaMicroscope,
      title: 'Animal Cell Culture',
      description: 'Advanced in-vitro research focusing on the establishment, maintenance, and study of mammalian cell lines for diverse biological applications.',
      projects: [
        'Maintenance of cancer cell lines',
        'Primary cell culture applications',
        'Cell proliferation studies',
        'In-vitro biological assessments'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FaFlask,
      title: 'Cytotoxicity Studies (MTT Assay)',
      description: 'Evaluating the toxic effects of chemical, pharmaceutical, and natural extract compounds on cells using standardized MTT viability assays.',
      projects: [
        'Screening of herbal extracts for toxicity',
        'Anti-cancer drug efficacy testing',
        'Biocompatibility of new formulations',
        'Cell viability and proliferation assays'
      ],
      color: 'from-green-700 to-green-600'
    },
    {
      icon: FaDna,
      title: 'Extraction & Phytochemical Research',
      description: 'Extracting, isolating, and characterizing bioactive compounds from traditional plants, herbs, and marine resources.',
      projects: [
        'Solvent extraction of bioactive compounds',
        'Phytochemical profiling using LC-MS/MS',
        'Standardization of herbal extracts',
        'Evaluation of antioxidant properties'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FaChartLine,
      title: 'Computational Modeling & Simulation',
      description: 'In-silico approach combining bioinformatics, molecular docking, and simulation to predict molecular interactions and optimize designs.',
      projects: [
        'Molecular docking for drug discovery',
        'Protein structure prediction and analysis',
        'QSAR modeling for toxicity prediction',
        'Virtual screening of phytochemicals'
      ],
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const infrastructure = [
    { name: 'LC-MS/MS', desc: 'Liquid Chromatography Mass Spectrometry', icon: FaChartLine },
    { name: 'GC-MS/MS', desc: 'Gas Chromatography Mass Spectrometry', icon: FaChartLine },
    { name: 'ICP-MS', desc: 'Inductively Coupled Plasma Mass Spectrometry', icon: FaAtom },
    { name: 'HPLC', desc: 'High Performance Liquid Chromatography', icon: FaChartLine },
    { name: 'FTIR', desc: 'Fourier Transform Infrared Spectroscopy', icon: FaAtom },
    { name: 'Cell Culture Lab', desc: 'Mammalian Cell Culture Facility', icon: FaMicroscope }
  ];

  const collaborationTypes = [
    {
      icon: FaUniversity,
      title: 'Academic Partnerships',
      description: 'Joint research projects with universities and academic institutions. We provide access to advanced instrumentation and expert guidance for M.Sc. and Ph.D. research projects.',
      cta: 'Partner with us'
    },
    {
      icon: FaHandshake,
      title: 'Industry R&D',
      description: 'Collaborative research and development for the food, pharmaceutical, and manufacturing industries. Custom analytical method development and validation services.',
      cta: 'Discuss your project'
    },
    {
      icon: FaBookOpen,
      title: 'Student Research',
      description: 'Dissertation and thesis support for students pursuing research in analytical sciences. Access to equipment, mentorship, and publication guidance.',
      cta: 'Apply for research'
    }
  ];

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
              <FaLightbulb className="h-8 w-8 text-green-300" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Research & <span className="text-green-200">Development</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Advancing analytical science through innovative research, academic collaboration, 
              and cutting-edge technology. Our R&D division bridges the gap between academic 
              research and industry applications.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 pt-4">
              <div className="flex items-center space-x-2">
                <FaFlask className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium">Active Research</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaUniversity className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium">Academic Collaboration</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaBookOpen className="h-5 w-5 text-green-300" />
                <span className="text-sm font-medium">Publication Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Research <span className="text-gradient">Mission</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                As a unit of Centurion University of Technology and Management, GTFTL is uniquely 
                positioned to combine academic rigor with practical applications. Our R&D division 
                focuses on developing innovative solutions for food safety, environmental monitoring, 
                and pharmaceutical quality assurance.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe in translating research into real-world impact — whether it's developing 
                faster testing methods for food safety, discovering bioactive compounds from marine 
                resources, or creating affordable analytical solutions for rural and semi-urban areas.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">15+</div>
                  <div className="text-sm text-gray-600">Research Projects</div>
                </div>
                <div className="bg-green-600 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">20+</div>
                  <div className="text-sm text-gray-600">Instruments</div>
                </div>
                <div className="bg-green-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">8+</div>
                  <div className="text-sm text-gray-600">Researchers</div>
                </div>
                <div className="bg-orange-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">5+</div>
                  <div className="text-sm text-gray-600">Publications</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <FaUniversity className="h-5 w-5 text-green-600 mr-2" />
                Centurion University Partnership
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                GTFTL operates as a Social Entrepreneurial Outreach of Centurion University, 
                enabling seamless integration of academic research with commercial testing services. 
                Students and faculty benefit from access to industry-grade instruments and real-world 
                analytical challenges.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <FaArrowRight className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Joint supervision of M.Sc. & Ph.D. research</span>
                </li>
                <li className="flex items-start space-x-2">
                  <FaArrowRight className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Shared instrumentation and laboratory facilities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <FaArrowRight className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Industry-academia collaborative projects</span>
                </li>
                <li className="flex items-start space-x-2">
                  <FaArrowRight className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Publication and patent support</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Research Focus <span className="text-gradient">Areas</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our research spans multiple domains of analytical science with a focus on regional impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${area.color} p-6 text-white`}>
                  <div className="flex items-center space-x-3">
                    <area.icon className="h-8 w-8" />
                    <h3 className="text-xl font-bold">{area.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">{area.description}</p>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Current Projects:</h4>
                  <ul className="space-y-2">
                    {area.projects.map((project, pIndex) => (
                      <li key={pIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Infrastructure */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Research <span className="text-gradient">Infrastructure</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              State-of-the-art instruments powering our research programs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {infrastructure.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-4 text-center hover:bg-blue-50 hover:shadow-md transition-all duration-300"
              >
                <item.icon className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/equipment"
              className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center space-x-2"
            >
              <span>View All Equipment</span>
              <FaArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Collaboration Opportunities */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Collaboration <span className="text-gradient">Opportunities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Partner with us to drive innovation in analytical science
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collaborationTypes.map((collab, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <collab.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{collab.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{collab.description}</p>
                <Link
                  to="/contact"
                  className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center space-x-2"
                >
                  <span>{collab.cta}</span>
                  <FaArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Partner With Us</h2>
            <p className="text-lg text-green-100 max-w-2xl mx-auto">
              Whether you're an academic researcher, industry professional, or student, 
              GTFTL offers opportunities for meaningful collaboration in analytical science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <span>Get In Touch</span>
                <FaArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/internship"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore Internships
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Research;
