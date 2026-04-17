import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import api from '../api/config';
import { API_BASE_URL } from '../api/config';
import { 
  FaFlask, 
  FaMicroscope, 
  FaCogs, 
  FaChartLine,
  FaAtom,
  FaEye,
  FaTimes,
  FaPlay,
  FaInfoCircle
} from 'react-icons/fa';

const Equipment = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [equipmentRef, equipmentInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = [
    { id: 'all', name: 'All Equipment', icon: FaCogs },
    { id: 'Chromatography', name: 'Chromatography', icon: FaChartLine },
    { id: 'Spectroscopy', name: 'Spectroscopy', icon: FaAtom },
    { id: 'Microbiology', name: 'Microbiology', icon: FaMicroscope },
    { id: 'Cell Culture', name: 'Cell Culture', icon: FaMicroscope },
    { id: 'Mass Spectrometry', name: 'Mass Spectrometry', icon: FaAtom },
    { id: 'General Laboratory', name: 'General Lab', icon: FaFlask }
  ];

  // Fallback equipment data when API is unavailable
  const fallbackEquipment = [
    {
      id: 'f1', name: 'LC-MS/MS', fullName: 'Liquid Chromatography Mass Spectrometry',
      category: 'Mass Spectrometry', image: '/images/IMG_20250821_132458896.jpg',
      description: 'Advanced LC-MS/MS system for precise identification and quantification of compounds in complex matrices. Used extensively in food safety, pharmaceutical, and forensic testing.',
      applications: ['Pesticide residue analysis', 'Mycotoxin detection', 'Drug purity testing', 'Forensic toxicology'],
      specifications: { 'Type': 'Triple Quadrupole', 'Application': 'Quantitative Analysis', 'Status': 'Operational' },
      icon: FaChartLine, color: 'bg-green-500'
    },
    {
      id: 'f2', name: 'GC-MS/MS', fullName: 'Gas Chromatography Mass Spectrometry',
      category: 'Mass Spectrometry', image: '/images/IMG_20250821_132516623.jpg',
      description: 'High-sensitivity GC-MS/MS for volatile and semi-volatile compound analysis. Essential for pesticide testing and environmental contaminant detection.',
      applications: ['Volatile organic compounds', 'Pesticide screening', 'Fatty acid profiling', 'Environmental analysis'],
      specifications: { 'Type': 'Triple Quadrupole', 'Application': 'VOC Analysis', 'Status': 'Operational' },
      icon: FaChartLine, color: 'bg-green-500'
    },
    {
      id: 'f3', name: 'ICP-MS', fullName: 'Inductively Coupled Plasma Mass Spectrometry',
      category: 'Mass Spectrometry', image: '/images/IMG_20250821_132537634.jpg',
      description: 'Ultra-trace level elemental analysis system for detecting heavy metals and trace elements in food, water, and pharmaceutical samples.',
      applications: ['Heavy metal testing (Pb, Cd, As, Hg)', 'Mineral content analysis', 'Water quality testing', 'Trace element quantification'],
      specifications: { 'Type': 'Quadrupole ICP-MS', 'Application': 'Elemental Analysis', 'Status': 'Operational' },
      icon: FaAtom, color: 'bg-green-500'
    },
    {
      id: 'f4', name: 'HPLC', fullName: 'High Performance Liquid Chromatography',
      category: 'Chromatography', image: '/images/IMG_20250821_132559084.jpg',
      description: 'Versatile HPLC system for separation and quantification of non-volatile compounds. Widely used in food additive, vitamin, and pharmaceutical analysis.',
      applications: ['Vitamin analysis', 'Food additive quantification', 'Aflatoxin detection', 'Antibiotic residue testing'],
      specifications: { 'Type': 'Binary/Quaternary Pump', 'Application': 'Liquid Chromatography', 'Status': 'Operational' },
      icon: FaChartLine, color: 'bg-green-500'
    },
    {
      id: 'f5', name: 'FTIR', fullName: 'Fourier Transform Infrared Spectroscopy',
      category: 'Spectroscopy', image: '/images/IMG_20250821_132615414.jpg',
      description: 'FTIR spectrometer for molecular identification and structural analysis. Used for food adulteration detection and material characterization.',
      applications: ['Food adulteration detection', 'Material identification', 'Polymer analysis', 'Quality verification'],
      specifications: { 'Type': 'FTIR Spectrometer', 'Application': 'Molecular Analysis', 'Status': 'Operational' },
      icon: FaAtom, color: 'bg-green-600'
    },
    {
      id: 'f6', name: 'UV-Vis Spectrophotometer', fullName: 'UV-Visible Spectrophotometer',
      category: 'Spectroscopy', image: '/images/IMG_20250821_132650232.jpg',
      description: 'Double-beam UV-Vis spectrophotometer for absorption measurements. Essential for colorimetric assays and concentration determination.',
      applications: ['Colorimetric analysis', 'Concentration measurement', 'Enzyme assays', 'Purity assessment'],
      specifications: { 'Type': 'Double Beam', 'Application': 'Absorption Spectroscopy', 'Status': 'Operational' },
      icon: FaAtom, color: 'bg-green-600'
    },
    {
      id: 'f7', name: 'Bomb Calorimeter', fullName: 'Bomb Calorimeter System',
      category: 'General Laboratory', image: '/images/IMG_20250821_132700981.jpg',
      description: 'Precision bomb calorimeter for determining caloric value of food products. Critical for nutritional labeling compliance.',
      applications: ['Caloric value determination', 'Nutritional labeling', 'Energy content analysis', 'Food product development'],
      specifications: { 'Type': 'Oxygen Bomb', 'Application': 'Calorimetry', 'Status': 'Operational' },
      icon: FaFlask, color: 'bg-gray-500'
    },
    {
      id: 'f8', name: 'Protein Analyzer', fullName: 'Kjeldahl Protein Analysis System',
      category: 'General Laboratory', image: '/images/IMG_20250821_132720113.jpg',
      description: 'Automated Kjeldahl system for nitrogen and protein content determination in food samples. Essential for proximate analysis.',
      applications: ['Protein content analysis', 'Nitrogen determination', 'Proximate analysis', 'Feed analysis'],
      specifications: { 'Type': 'Kjeldahl System', 'Application': 'Protein Analysis', 'Status': 'Operational' },
      icon: FaFlask, color: 'bg-gray-500'
    },
    {
      id: 'f9', name: 'Fat Analyzer', fullName: 'Soxhlet Fat Extraction System',
      category: 'General Laboratory', image: '/images/IMG_20250821_132737052.jpg',
      description: 'Automated Soxhlet extraction system for accurate fat content determination in food products.',
      applications: ['Fat content analysis', 'Lipid extraction', 'Oil content measurement', 'Nutritional analysis'],
      specifications: { 'Type': 'Soxhlet Extractor', 'Application': 'Fat Analysis', 'Status': 'Operational' },
      icon: FaFlask, color: 'bg-gray-500'
    },
    {
      id: 'f10', name: 'Fiber Analyzer', fullName: 'Crude Fiber Analysis System',
      category: 'General Laboratory', image: '/images/IMG_20250821_132800027.jpg',
      description: 'Automated fiber analysis system for determination of crude fiber, NDF, and ADF in food and feed samples.',
      applications: ['Crude fiber analysis', 'Dietary fiber testing', 'Feed quality assessment', 'Nutritional profiling'],
      specifications: { 'Type': 'Fiber Analyzer', 'Application': 'Fiber Analysis', 'Status': 'Operational' },
      icon: FaFlask, color: 'bg-gray-500'
    }
  ];

  // Fetch equipment from API
  useEffect(() => {
    fetchEquipment();
  }, []);

  const fetchEquipment = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await api.get('/api/equipment');
      console.log('Equipment API response:', response.data);
      
      if (response.data.success && response.data.data.length > 0) {
        const equipmentData = response.data.data.map(item => ({
          id: item._id,
          name: item.name,
          fullName: item.model ? `${item.name} - ${item.model}` : item.name,
          category: item.category,
          image: item.equipmentImages && item.equipmentImages.length > 0 
            ? `${API_BASE_URL}${item.equipmentImages[0]}` 
            : getDefaultEquipmentImage(item.name),
          description: item.description || 'No description available',
          applications: item.applications ? item.applications.split('\n').filter(app => app.trim()) : [],
          specifications: {
            'Model': item.model || 'N/A',
            'Manufacturer': item.manufacturer || 'N/A',
            'Serial Number': item.serialNumber || 'N/A',
            'Status': item.operatingStatus || 'Unknown'
          },
          icon: getCategoryIcon(item.category),
          color: getCategoryColor(item.category),
          featured: item.featured,
          operatingStatus: item.operatingStatus
        }));
        
        setEquipment(equipmentData);
      } else {
        // API returned empty data, use fallback
        console.log('API returned empty data, using fallback equipment');
        setEquipment(fallbackEquipment);
      }
    } catch (error) {
      console.error('Error fetching equipment:', error);
      
      // Fallback to comprehensive static data on error
      console.log('Using fallback equipment data');
      setEquipment(fallbackEquipment);
      setError(null); // Don't show error, just use fallback silently
    } finally {
      setLoading(false);
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Chromatography':
      case 'Mass Spectrometry':
        return FaChartLine;
      case 'Spectroscopy':
        return FaAtom;
      case 'Microbiology':
      case 'Cell Culture':
        return FaMicroscope;
      default:
        return FaFlask;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Chromatography':
        return 'bg-green-500';
      case 'Spectroscopy':
        return 'bg-green-600';
      case 'Mass Spectrometry':
        return 'bg-green-500';
      case 'Microbiology':
        return 'bg-emerald-500';
      case 'Cell Culture':
        return 'bg-violet-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getDefaultEquipmentImage = (equipmentName) => {
    const name = equipmentName.toLowerCase();
    if (name.includes('lc-ms') || name.includes('lcms')) {
      return '/images/IMG_20250821_132458896.jpg';
    } else if (name.includes('gc-ms') || name.includes('gcms')) {
      return '/images/IMG_20250821_132516623.jpg';
    } else if (name.includes('icp-ms') || name.includes('icpms')) {
      return '/images/IMG_20250821_132537634.jpg';
    } else if (name.includes('hplc')) {
      return '/images/IMG_20250821_132559084.jpg';
    } else if (name.includes('ftir')) {
      return '/images/IMG_20250821_132615414.jpg';
    } else if (name.includes('uv') || name.includes('spectrophotometer')) {
      return '/images/IMG_20250821_132650232.jpg';
    } else if (name.includes('calorimeter')) {
      return '/images/IMG_20250821_132700981.jpg';
    } else if (name.includes('protein')) {
      return '/images/IMG_20250821_132720113.jpg';
    } else if (name.includes('fat')) {
      return '/images/IMG_20250821_132737052.jpg';
    } else if (name.includes('fiber')) {
      return '/images/IMG_20250821_132800027.jpg';
    } else if (name.includes('microbiology')) {
      return '/images/IMG_20250821_132831498.jpg';
    } else if (name.includes('cell culture')) {
      return '/images/IMG_20250821_132848228.jpg';
    } else if (name.includes('silico') || name.includes('computational')) {
      return '/images/IMG_20250821_133004301.jpg';
    } else {
      return '/images/default-equipment.jpg';
    }
  };

  const filteredEquipment = selectedCategory === 'all' 
    ? equipment 
    : equipment.filter(eq => eq.category === selectedCategory);

  const openModal = (equipment) => {
    setSelectedEquipment(equipment);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedEquipment(null);
    document.body.style.overflow = 'unset';
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
              Laboratory <span className="text-green-200">Equipment</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed px-2">
              State-of-the-art analytical instruments for precision testing and research
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2">
                <FaCogs className="h-6 w-6 text-green-400" />
                <span className="text-sm font-medium">
                  {loading ? 'Loading...' : `${equipment.length} Instruments`}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FaAtom className="h-6 w-6 text-green-400" />
                <span className="text-sm font-medium">Advanced Technology</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-4 md:py-8 bg-white sticky top-16 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-1 md:space-x-2 px-3 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-green-600'
                }`}
              >
                <category.icon className="h-3 w-3 md:h-4 md:w-4" />
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section ref={equipmentRef} className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={equipmentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Our <span className="text-gradient">Equipment</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Cutting-edge analytical instruments ensuring accurate and reliable results
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
              <span className="ml-4 text-lg text-gray-600">Loading equipment...</span>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <div className="text-green-600 text-lg mb-4">{error}</div>
              <button
                onClick={fetchEquipment}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Retry
              </button>
            </div>
          ) : filteredEquipment.length === 0 ? (
            <div className="text-center py-20">
              <FaFlask className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Equipment Found</h3>
              <p className="text-gray-500">No equipment matches your current filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              <AnimatePresence mode="wait">
                {filteredEquipment.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  onClick={() => openModal(item)}
                >
                  {/* Equipment Image */}
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className={`absolute top-3 md:top-4 right-3 md:right-4 p-2 ${item.color} rounded-full`}>
                      <item.icon className="h-4 w-4 md:h-5 md:w-5 text-white" />
                    </div>
                    <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
                      <h3 className="text-base md:text-lg font-bold leading-tight">{item.name}</h3>
                      <p className="text-xs md:text-sm text-gray-200 leading-tight">{item.fullName}</p>
                    </div>
                  </div>

                  {/* Equipment Info */}
                  <div className="p-4 md:p-6">
                    <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                    
                    <div className="space-y-2 md:space-y-3">
                      <h4 className="text-sm md:text-base font-semibold text-gray-900">Key Applications:</h4>
                      <ul className="space-y-1">
                        {item.applications.slice(0, 3).map((app, appIndex) => (
                          <li key={appIndex} className="text-xs md:text-sm text-gray-600 flex items-center">
                            <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-sm text-green-600 font-medium">View Details</span>
                      <FaEye className="h-4 w-4 text-green-600" />
                    </div>
                  </div>
                </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* Equipment Modal */}
      <AnimatePresence>
        {selectedEquipment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <img 
                  src={selectedEquipment.image} 
                  alt={selectedEquipment.name}
                  className="w-full h-48 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <button
                  onClick={closeModal}
                  className="absolute top-3 md:top-4 right-3 md:right-4 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all duration-200"
                >
                  <FaTimes className="h-4 w-4 md:h-5 md:w-5" />
                </button>
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
                  <h2 className="text-xl md:text-3xl font-bold mb-1 md:mb-2 leading-tight">{selectedEquipment.name}</h2>
                  <p className="text-sm md:text-xl text-gray-200 leading-tight">{selectedEquipment.fullName}</p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-4 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  {/* Description & Applications */}
                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center">
                        <FaInfoCircle className="h-5 w-5 md:h-6 md:w-6 text-green-600 mr-2" />
                        Description
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">{selectedEquipment.description}</p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <selectedEquipment.icon className="h-6 w-6 text-green-600 mr-2" />
                        Applications
                      </h3>
                      <ul className="space-y-2">
                        {selectedEquipment.applications.map((app, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Specifications */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <FaCogs className="h-6 w-6 text-green-600 mr-2" />
                      Specifications
                    </h3>
                    <div className="space-y-4">
                      {Object.entries(selectedEquipment.specifications).map(([key, value], index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-lg">
                          <div className="font-semibold text-gray-900">{key}</div>
                          <div className="text-gray-600">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Need Testing Services with {selectedEquipment.name}?
                  </h3>
                  <a
                    href="/contact"
                    className={`inline-flex items-center px-8 py-3 bg-gradient-to-r ${selectedEquipment.color.replace('bg-', 'from-')} to-${selectedEquipment.color.split('-')[1]}-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    <span>Request Quote</span>
                    <FaPlay className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Features Section */}
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
              Equipment <span className="text-gradient">Features</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaAtom,
                title: 'High Precision',
                description: 'Advanced instruments ensuring accurate and reliable results',
                color: 'text-green-600'
              },
              {
                icon: FaCogs,
                title: 'Automated Systems',
                description: 'Fully automated processes for consistent performance',
                color: 'text-green-600'
              },
              {
                icon: FaChartLine,
                title: 'Real-time Monitoring',
                description: 'Continuous monitoring and data logging capabilities',
                color: 'text-green-600'
              },
              {
                icon: FaEye,
                title: 'Quality Control',
                description: 'Rigorous quality control measures and validation protocols',
                color: 'text-green-600'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
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
    </div>
  );
};

export default Equipment;
