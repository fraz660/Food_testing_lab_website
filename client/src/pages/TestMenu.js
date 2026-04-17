import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaClipboardList, 
  FaSearch, 
  FaUtensils, 
  FaTint, 
  FaLeaf, 
  FaCapsules,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight,
  FaCheckCircle,
  FaFlask
} from 'react-icons/fa';

const TestMenu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('food');
  const [expandedTest, setExpandedTest] = useState(null);

  const testCategories = [
    {
      id: 'food',
      title: 'Food Testing',
      icon: FaUtensils,
      bg: 'bg-green-600',
      description: 'Comprehensive analysis of food products for safety, quality, and regulatory compliance (FSSAI norms).',
      tests: [
        { name: 'Proximate Analysis', parameters: 'Moisture, Ash, Protein, Fat, Carbohydrates, Energy' },
        { name: 'Heavy Metals (ICP-MS)', parameters: 'Lead, Cadmium, Arsenic, Mercury, Iron, Zinc, Copper' },
        { name: 'Pesticide Residues (LC-MS/GC-MS)', parameters: 'Organochlorines, Organophosphates, Synthetic Pyrethroids' },
        { name: 'Mycotoxins', parameters: 'Aflatoxins (B1, B2, G1, G2), Ochratoxin A, Patulin' },
        { name: 'Microbiological Analysis', parameters: 'Total Plate Count, Coliforms, E. Coli, Salmonella, Yeast & Mold, S. aureus' },
        { name: 'Nutritional Labeling', parameters: 'Vitamins (A, B-Complex, C, D), Minerals, Fatty Acid Profiling, Sugar Profile' }
      ]
    },
    {
      id: 'water',
      title: 'Water Testing',
      icon: FaTint,
      bg: 'bg-blue-500',
      description: 'Detailed physicochemical and microbiological analysis of drinking, packaged, and industrial water.',
      tests: [
        { name: 'Drinking Water (IS 10500)', parameters: 'pH, TDS, Hardness, Alkalinity, Chlorides, Fluoride, Sulphate' },
        { name: 'Heavy Metal Contamination', parameters: 'Arsenic, Lead, Chromium, Iron, Manganese, Cadmium' },
        { name: 'Microbiological Quality', parameters: 'Total Coliform, E. Coli, Pseudomonas aeruginosa, Yeast & Mold' },
        { name: 'Industrial Water & Wastewater', parameters: 'BOD, COD, Total Suspended Solids (TSS), Oil & Grease' },
        { name: 'Packaged Drinking Water (IS 14543)', parameters: 'Complete protocol compliance as per BIS standards' }
      ]
    },
    {
      id: 'environmental',
      title: 'Environmental Testing',
      icon: FaLeaf,
      bg: 'bg-emerald-600',
      description: 'Analysis of soil, ambient air, and effluents for environmental monitoring and regulatory compliance.',
      tests: [
        { name: 'Soil & Agricultural Analysis', parameters: 'pH, Electrical Conductivity (EC), Organic Carbon, NPK, Micronutrients' },
        { name: 'Effluent / Wastewater Analysis', parameters: 'BOD, COD, Heavy Metals, Phenolic Compounds, Cyanides' },
        { name: 'Ambient Air Quality', parameters: 'PM10, PM2.5, SO2, NOx, CO, Heavy Metals in Air' },
        { name: 'Sludge & Solid Waste', parameters: 'Toxicity Characteristic Leaching Procedure (TCLP), Heavy Metals' },
        { name: 'Noise Level Monitoring', parameters: 'Ambient noise, Industrial workplace noise measurement' }
      ]
    },
    {
      id: 'pharma',
      title: 'Pharma / Herbal Testing',
      icon: FaCapsules,
      bg: 'bg-teal-600',
      description: 'Quality control, standardization, and stability studies of pharmaceutical and ayurvedic/herbal products.',
      tests: [
        { name: 'Active Pharmaceutical Ingredients (API)', parameters: 'Assay, Related Substances, Impurity Profiling' },
        { name: 'Herbal & Ayurvedic Standardization', parameters: 'Extractive values, Ash values, Marker analysis via HPLC/LC-MS' },
        { name: 'Residual Solvents', parameters: 'Class 1, Class 2, and Class 3 Solvents analysis via Headspace GC-MS' },
        { name: 'Heavy & Toxic Metals', parameters: 'Lead, Arsenic, Mercury, Cadmium (as per API/USP limits)' },
        { name: 'Microbial Contamination (MLT)', parameters: 'Total Viable Count, Specific Pathogen Screening (E. coli, Salmonella)' }
      ]
    }
  ];

  // Logic to filter tests based on search
  const filteredCategories = testCategories.map(category => {
    if (!searchTerm) return category;
    
    // Check if category title matches search
    const categoryMatches = category.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter tests that match the search
    const matchingTests = category.tests.filter(test => 
      test.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      test.parameters.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // Return category with filtered tests, or full category if title matches
    if (categoryMatches || matchingTests.length > 0) {
      return {
        ...category,
        tests: categoryMatches ? category.tests : matchingTests
      };
    }
    return null;
  }).filter(Boolean); // Remove nulls

  return (
    <div className="min-h-screen pt-20 lg:pt-24 bg-gray-50">
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
              <FaClipboardList className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Complete <span className="text-green-200">Test Menu</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
              Explore our extensive catalog of analytical testing services across multiple industries.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto pt-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for a test or parameter (e.g., 'Heavy Metals', 'pH')"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pl-14 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-green-400 shadow-lg text-lg"
                />
                <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tabs */}
          {!searchTerm && (
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {testCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === cat.id 
                      ? `${cat.bg} text-white shadow-md transform scale-105` 
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-green-300'
                  }`}
                >
                  <cat.icon className={activeTab === cat.id ? "text-white" : "text-green-600"} />
                  <span>{cat.title}</span>
                </button>
              ))}
            </div>
          )}

          {/* Test List */}
          <div className="space-y-12">
            {filteredCategories.length > 0 ? (
               filteredCategories.filter(c => searchTerm || c.id === activeTab).map((category) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className={`${category.bg} p-6 md:p-8 text-white flex flex-col md:flex-row md:items-center justify-between`}>
                      <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <div className="p-3 bg-white bg-opacity-20 rounded-xl">
                          <category.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold">{category.title}</h2>
                        </div>
                      </div>
                      <p className="text-white text-opacity-90 max-w-lg md:text-right">
                        {category.description}
                      </p>
                    </div>

                    <div className="p-6 md:p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {category.tests.map((test, idx) => (
                          <div 
                            key={idx} 
                            className="bg-gray-50 border border-gray-100 rounded-xl p-5 hover:border-green-300 transition-colors duration-300"
                          >
                            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start">
                              <FaCheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{test.name}</span>
                            </h3>
                            <div className="pl-7">
                              <p className="text-sm text-gray-500 font-medium mb-1">Parameters / Scope:</p>
                              <p className="text-gray-700 leading-relaxed text-sm">
                                {test.parameters}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
                <FaSearch className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No tests found</h3>
                <p className="text-gray-500">We couldn't find any tests matching "{searchTerm}". Try adjusting your search term.</p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="mt-6 text-green-600 font-semibold hover:text-green-700 underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <FaFlask className="h-12 w-12 text-green-600 mx-auto mb-4 opacity-20" />
          <h2 className="text-3xl font-bold text-gray-900">Need a Customized Test Profile?</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Our scientists can develop custom analytical methods tailored for your specific products and highly specialized requirements.
          </p>
          <div className="pt-4 flex justify-center gap-4">
             <Link
                to="/services"
                className="px-8 py-4 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
              >
                View Instruments
              </Link>
             <Link
                to="/contact"
                className="px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg"
              >
                Contact Laboratory
              </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TestMenu;
