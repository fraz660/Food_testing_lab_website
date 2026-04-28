const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Equipment = require('../models/Equipment');

// Load env vars
dotenv.config({ path: '../.env' });

const MONGO_URI = 'mongodb+srv://gtftlcutm_db:GT%40Cutm_2025@gtftlcutmdatabase.ulnymj7.mongodb.net/food_testing_lab?retryWrites=true&w=majority&appName=gtftlcutmdatabase';

const equipmentData = [
  {
    name: 'LC-MS/MS',
    model: 'Liquid Chromatography Mass Spectrometry',
    category: 'Mass Spectrometry',
    description: 'Advanced LC-MS/MS system for precise identification and quantification of compounds in complex matrices. Used extensively in food safety, pharmaceutical, and forensic testing.',
    applications: 'Pesticide residue analysis\nMycotoxin detection\nDrug purity testing\nForensic toxicology',
    equipmentImages: ['/images/IMG_20250821_132458896.jpg'],
    operatingStatus: 'Operational',
    displayOrder: 1,
    technicalSpecs: 'Type: Triple Quadrupole\nApplication: Quantitative Analysis\nStatus: Operational'
  },
  {
    name: 'GC-MS/MS',
    model: 'Gas Chromatography Mass Spectrometry',
    category: 'Mass Spectrometry',
    description: 'High-sensitivity GC-MS/MS for volatile and semi-volatile compound analysis. Essential for pesticide testing and environmental contaminant detection.',
    applications: 'Volatile organic compounds\nPesticide screening\nFatty acid profiling\nEnvironmental analysis',
    equipmentImages: ['/images/IMG_20250821_132516623.jpg'],
    operatingStatus: 'Operational',
    displayOrder: 2,
    technicalSpecs: 'Type: Triple Quadrupole\nApplication: VOC Analysis\nStatus: Operational'
  },
  {
    name: 'ICP-MS',
    model: 'Inductively Coupled Plasma Mass Spectrometry',
    category: 'Mass Spectrometry',
    description: 'Ultra-trace level elemental analysis system for detecting heavy metals and trace elements in food, water, and pharmaceutical samples.',
    applications: 'Heavy metal testing (Pb, Cd, As, Mercury)\nMineral content analysis\nWater quality testing\nTrace element quantification',
    equipmentImages: ['/images/IMG_20250821_132537634.jpg'],
    operatingStatus: 'Operational',
    displayOrder: 3,
    technicalSpecs: 'Type: Quadrupole ICP-MS\nApplication: Elemental Analysis\nStatus: Operational'
  },
  {
    name: 'HPLC',
    model: 'High Performance Liquid Chromatography',
    category: 'Chromatography',
    description: 'Versatile HPLC system for separation and quantification of non-volatile compounds. Widely used in food additive, vitamin, and pharmaceutical analysis.',
    applications: 'Vitamin analysis\nFood additive quantification\nAflatoxin detection\nAntibiotic residue testing',
    equipmentImages: ['/images/IMG_20250821_132559084.jpg'],
    operatingStatus: 'Operational',
    displayOrder: 4,
    technicalSpecs: 'Type: Binary/Quaternary Pump\nApplication: Liquid Chromatography\nStatus: Operational'
  },
  {
    name: 'FTIR',
    model: 'Fourier Transform Infrared Spectroscopy',
    category: 'Spectroscopy',
    description: 'FTIR spectrometer for molecular identification and structural analysis. Used for food adulteration detection and material characterization.',
    applications: 'Food adulteration detection\nMaterial identification\nPolymer analysis\nQuality verification',
    equipmentImages: ['/images/IMG_20250821_132615414.jpg'],
    operatingStatus: 'Operational',
    displayOrder: 5,
    technicalSpecs: 'Type: FTIR Spectrometer\nApplication: Molecular Analysis\nStatus: Operational'
  },
  {
    name: 'UV-Vis Spectrophotometer',
    model: 'UV-Visible Spectrophotometer',
    category: 'Spectroscopy',
    description: 'Double-beam UV-Vis spectrophotometer for absorption measurements. Essential for colorimetric assays and concentration determination.',
    applications: 'Colorimetric analysis\nConcentration measurement\nEnzyme assays\nPurity assessment',
    equipmentImages: ['/images/IMG_20250821_132650232.jpg'],
    operatingStatus: 'Operational',
    displayOrder: 6,
    technicalSpecs: 'Type: Double Beam\nApplication: Absorption Spectroscopy\nStatus: Operational'
  },
  {
    name: 'Bomb Calorimeter',
    model: 'Bomb Calorimeter System',
    category: 'General Laboratory',
    description: 'Precision bomb calorimeter for determining caloric value of food products. Critical for nutritional labeling compliance.',
    applications: 'Caloric value determination\nNutritional labeling\nEnergy content analysis\nFood product development',
    equipmentImages: ['/images/IMG_20250821_132700981.jpg'],
    operatingStatus: 'Operational',
    displayOrder: 7,
    technicalSpecs: 'Type: Oxygen Bomb\nApplication: Calorimetry\nStatus: Operational'
  },
  {
    name: 'Protein Analyzer',
    model: 'Kjeldahl Protein Analysis System',
    category: 'General Laboratory',
    description: 'Automated Kjeldahl system for nitrogen and protein content determination in food samples. Essential for proximate analysis.',
    applications: 'Protein content analysis\nNitrogen determination\nProximate analysis\nFeed analysis',
    equipmentImages: ['/images/IMG_20250821_132720113.jpg'],
    operatingStatus: 'Operational',
    displayOrder: 8,
    technicalSpecs: 'Type: Kjeldahl System\nApplication: Protein Analysis\nStatus: Operational'
  },
  {
    name: 'Fat Analyzer',
    model: 'Soxhlet Fat Extraction System',
    category: 'General Laboratory',
    description: 'Automated Soxhlet extraction system for accurate fat content determination in food products.',
    applications: 'Fat content analysis\nLipid extraction\nOil content measurement\nNutritional analysis',
    equipmentImages: ['/images/IMG_20250821_132737052.jpg'],
    operatingStatus: 'Operational',
    displayOrder: 9,
    technicalSpecs: 'Type: Soxhlet Extractor\nApplication: Fat Analysis\nStatus: Operational'
  },
  {
    name: 'Fiber Analyzer',
    model: 'Crude Fiber Analysis System',
    category: 'General Laboratory',
    description: 'Automated fiber analysis system for determination of crude fiber, NDF, and ADF in food and feed samples.',
    applications: 'Crude fiber analysis\nDietary fiber testing\nFeed quality assessment\nNutritional profiling',
    equipmentImages: ['/images/IMG_20250821_132800027.jpg'],
    operatingStatus: 'Operational',
    displayOrder: 10,
    technicalSpecs: 'Type: Fiber Analyzer\nApplication: Fiber Analysis\nStatus: Operational'
  }
];

const seedEquipment = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB Connected');

    // Completely clear existing equipment
    await Equipment.deleteMany();
    console.log('Cleared existing equipment data.');

    // Insert new equipment
    await Equipment.insertMany(equipmentData);
    console.log('Equipment Data Seeded Successfully');

    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedEquipment();
