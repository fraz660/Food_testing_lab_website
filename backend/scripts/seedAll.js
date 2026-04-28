/**
 * Master Seed Script — Seeds ALL data into the new MongoDB Atlas database
 * Run: node backend/scripts/seedAll.js
 * 
 * Order: Admin → Blogs → Team → Services → Pages → Internships → Static Pages
 */

const mongoose = require('mongoose');
require('dotenv').config();

// Models
const Admin = require('../models/Admin');
const Blog = require('../models/Blog');
const Team = require('../models/Team');
const Service = require('../models/Service');
const Page = require('../models/Page');
const Internship = require('../models/Internship');

// ==================== CONNECT TO DB ====================
const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI;
  if (!mongoURI) {
    console.error('❌ MONGODB_URI is missing in .env file!');
    process.exit(1);
  }

  console.log('🔄 Connecting to MongoDB Atlas...');
  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`✅ Connected to: ${mongoose.connection.host}`);
  console.log(`📊 Database: ${mongoose.connection.name}`);
  console.log('');
};

// ==================== 1. CREATE ADMIN ====================
const seedAdmin = async () => {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('👤 STEP 1: Creating Admin User...');
  
  const existing = await Admin.findOne({ username: 'gtftlcutm' });
  if (existing) {
    console.log('   ⚠️ Admin "gtftlcutm" already exists. Skipping.');
    return existing;
  }

  const admin = new Admin({
    username: 'gtftlcutm',
    email: 'md@ftl.esse.co.in',
    password: 'GT@Cutm_2025',
    role: 'super_admin'
  });

  await admin.save();
  console.log('   ✅ Admin created: gtftlcutm / GT@Cutm_2025');
  return admin;
};

// ==================== 2. SEED BLOGS ====================
const seedBlogs = async (adminId) => {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📝 STEP 2: Creating Blog Articles...');

  const existingCount = await Blog.countDocuments();
  if (existingCount > 0) {
    console.log(`   ⚠️ ${existingCount} blogs already exist. Skipping.`);
    return;
  }

  const blogs = [
    {
      title: "Advanced Food Safety Testing: Ensuring Quality at Every Step",
      slug: "advanced-food-safety-testing-ensuring-quality-at-every-step",
      excerpt: "Discover how comprehensive food testing protects consumers and maintains industry standards through rigorous analytical procedures.",
      content: `# Advanced Food Safety Testing\n\nFood safety testing is the cornerstone of public health protection. At Gram Tarang Food Testing Laboratory, we ensure that food products meet the highest safety standards.\n\n## Why Food Testing Matters\n\nFood contamination can occur at any stage of the supply chain. Our NABL-accredited laboratory detects pesticide residues, heavy metals, mycotoxins, pathogenic microorganisms, and chemical contaminants.\n\n## Our Testing Capabilities\n\nWe perform proximate analysis, microbiological testing, and chemical analysis using advanced instrumentation like LC-MS/MS and GC-MS/MS.`,
      category: "Food Testing",
      tags: ["food safety", "quality control", "NABL accredited", "testing"],
      status: "published",
      author: adminId
    },
    {
      title: "Breakthrough Research in Analytical Chemistry and Food Science",
      slug: "breakthrough-research-in-analytical-chemistry-and-food-science",
      excerpt: "Explore cutting-edge research methodologies and innovations that are transforming food analysis and safety protocols.",
      content: `# Breakthrough Research in Analytical Chemistry\n\nThe field of analytical chemistry is constantly evolving, with new techniques revolutionizing how we analyze food products.\n\n## Current Research Projects\n\nWe focus on multi-residue pesticide analysis, rapid allergen screening, novel biomarkers for food authenticity, and green chemistry approaches.`,
      category: "Research",
      tags: ["analytical chemistry", "food science", "innovation", "research"],
      status: "published",
      author: adminId
    },
    {
      title: "Technology Revolution in Modern Food Testing Laboratories",
      slug: "technology-revolution-in-modern-food-testing-laboratories",
      excerpt: "How advanced instrumentation and automation are transforming food analysis capabilities and improving testing efficiency.",
      content: `# Technology Revolution in Food Testing\n\nAdvanced technology has dramatically improved our ability to detect and quantify food components and contaminants.\n\n## Cutting-Edge Instrumentation\n\nLC-MS/MS for pesticide residue analysis, GC-MS/MS for volatile compounds, ICP-MS for trace metals, and high-resolution MS for unknown compound identification.`,
      category: "Technology",
      tags: ["laboratory technology", "automation", "instrumentation", "innovation"],
      status: "published",
      author: adminId
    },
    {
      title: "Professional Training Programs in Food Testing and Quality Assurance",
      slug: "professional-training-programs-in-food-testing-and-quality-assurance",
      excerpt: "Comprehensive training programs designed to build expertise in food analysis, quality control, and laboratory management.",
      content: `# Professional Training Programs\n\nAt GTFTL, we believe that skilled professionals are the foundation of quality analytical services.\n\n## Training Program Overview\n\nOur structured internship programs offer hands-on experience in analytical chemistry, microbiology, quality assurance, and more.`,
      category: "Training",
      tags: ["professional training", "internship", "skill development", "education"],
      status: "published",
      author: adminId
    },
    {
      title: "NABL Accreditation Achievement: Milestone in Quality Excellence",
      slug: "nabl-accreditation-achievement-milestone-in-quality-excellence",
      excerpt: "Celebrating our NABL accreditation and what it means for our laboratory's commitment to international quality standards.",
      content: `# NABL Accreditation Achievement\n\nWe are proud to announce that GTFTL has achieved NABL accreditation, marking a significant milestone in our commitment to delivering the highest quality analytical services.\n\n## What is NABL Accreditation?\n\nNABL accreditation is formal recognition that our laboratory meets international standards (ISO/IEC 17025:2017).`,
      category: "News",
      tags: ["NABL accreditation", "quality standards", "achievement", "certification"],
      status: "published",
      author: adminId
    },
    {
      title: "Laboratory Services Overview: Comprehensive Testing Solutions",
      slug: "laboratory-services-overview-comprehensive-testing-solutions",
      excerpt: "A complete guide to our laboratory services, capabilities, and how we support various industries with analytical testing needs.",
      content: `# Laboratory Services Overview\n\nGTFTL provides comprehensive analytical testing services to support food safety and regulatory compliance across diverse industries.\n\n## Service Categories\n\nWe cover fresh produce, processed foods, beverages, pharmaceutical testing, and marine products.`,
      category: "General",
      tags: ["laboratory services", "testing solutions", "quality assurance", "analytical chemistry"],
      status: "published",
      author: adminId
    }
  ];

  await Blog.insertMany(blogs);
  console.log(`   ✅ Created ${blogs.length} blog articles`);
};

// ==================== 3. SEED TEAM ====================
const seedTeam = async () => {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('👥 STEP 3: Creating Team Members...');

  const existingCount = await Team.countDocuments();
  if (existingCount > 0) {
    console.log(`   ⚠️ ${existingCount} team members already exist. Skipping.`);
    return;
  }

  const teamMembers = [
    {
      name: 'Dr. Preetha Bhadra',
      position: 'Managing Director',
      email: 'md@ftl.esse.co.in',
      department: 'Management',
      bio: 'Dr. Preetha Bhadra is the Managing Director of GTFTL, Parlakhemundi, Odisha. She leads strategy, operations, and quality systems across food, pharmaceutical, and forensic testing, with focus on NABL (ISO/IEC 17025) accreditation.',
      education: 'Ph.D. in Analytical Chemistry',
      experience: 'Laboratory Management, Quality Systems, NABL Accreditation',
      specialization: 'Laboratory Management, Quality Systems, NABL Accreditation',
      profileImage: '/images/team/md.jpg',
      isActive: true,
      displayOrder: 1
    },
    {
      name: 'Prof. Supriya Pattanaik',
      position: 'Director',
      email: 'md@ftl.esse.co.in',
      department: 'Management',
      bio: 'Prof. Supriya Pattanayak is the Director of GTFTL, leading strategy, quality systems, and partnerships. A social-development scholar-practitioner with 25+ years of leadership.',
      education: 'PhD (RMIT University), MPhil (NIMHANS), MA (TISS)',
      experience: 'Strategic Leadership, Social Development, Academic Management',
      specialization: 'Strategic Leadership, Social Development, Academic Management',
      profileImage: '/images/team/director1.jpg',
      isActive: true,
      displayOrder: 2
    },
    {
      name: 'Prof. D. N. Rao',
      position: 'Director',
      email: 'md@ftl.esse.co.in',
      department: 'Management',
      bio: 'Prof. D. N. Rao is the Director of GTFTL, steering strategy, accreditation, and industry partnerships. Co-Founder & Vice President of Centurion University.',
      education: 'Civil Engineering (Osmania University), PGDM (IIM Calcutta)',
      experience: 'Strategic Planning, Enterprise Development, Technology Systems',
      specialization: 'Strategic Planning, Enterprise Development, Technology Systems',
      profileImage: '/images/team/director2.jpg',
      isActive: true,
      displayOrder: 3
    },
    {
      name: 'Dr. Bhadram Kalyan Chekraverthy',
      position: 'Technical Manager (Chemical)',
      email: 'md@ftl.esse.co.in',
      phone: '+91 9876543210',
      department: 'Chemical',
      bio: 'Dr. Bhadram holds a PhD in Pharmaceutical Analysis from JSS College of Pharmacy, Ooty, specializes in advanced analytical instrumentation.',
      education: 'Ph.D. in Pharmaceutical Analysis from JSS College of Pharmacy, Ooty',
      experience: 'Chemical Analysis, Method Development, Pharmaceutical Analysis',
      specialization: 'Chemical Analysis, Method Development, Pharmaceutical Analysis',
      profileImage: '/images/team/technical_manager_chem.jpg',
      isActive: true,
      displayOrder: 4
    },
    {
      name: 'Dr. Pratyush Kumar Das',
      position: 'Technical Manager (Biological)',
      email: 'md@ftl.esse.co.in',
      phone: '+91 9876543211',
      department: 'Biological',
      bio: 'Dr. Pratyush Kumar Das is Technical Manager (Biological) at GTFTL. A biotechnologist specializing in microbial testing to IS & FSSAI standards.',
      education: 'Ph.D. (SOA 2022), M.Sc./B.Sc. (Utkal University)',
      experience: 'Microbiology, Biotechnology, Environmental Sciences',
      specialization: 'Microbiology, Biotechnology, Environmental Sciences',
      profileImage: '/images/team/technical_manager_bio.jpg',
      isActive: true,
      displayOrder: 5
    },
    {
      name: 'Mr. Victor Pradhan',
      position: 'Senior Analyst (Chemical)',
      email: 'md@ftl.esse.co.in',
      phone: '+91 9876543212',
      department: 'Chemical',
      bio: 'M.Tech in Biotechnology from OUTR with expertise in ICP-MS, LC-MS/MS, HPLC, and GC-MS/MS.',
      education: 'M.Tech in Biotechnology from OUTR',
      experience: 'Instrumental Analysis, Method Development, Advanced Analytics',
      specialization: 'Instrumental Analysis, Method Development, Advanced Analytics',
      profileImage: '/images/team/senior_analyst_chem.jpg',
      isActive: true,
      displayOrder: 6
    },
    {
      name: 'Ms. Debarati Nandi',
      position: 'Senior Analyst (Chemical)',
      email: 'md@ftl.esse.co.in',
      phone: '+91 9876543213',
      department: 'Chemical',
      bio: 'Mrs. Debarati Nandi specializes in analytical instrumentation and quality control of food products.',
      education: 'M.Sc. in Food Technology',
      experience: 'Analytical Instrumentation, Food Quality Control',
      specialization: 'Analytical Instrumentation, Food Quality Control',
      profileImage: '/images/team/senior_analyst_chem2.jpg',
      isActive: true,
      displayOrder: 7
    },
    {
      name: 'Ms. Swapna Rani Nag',
      position: 'Senior Analyst (Biological)',
      email: 'md@ftl.esse.co.in',
      phone: '+91 9876543214',
      department: 'Biological',
      bio: 'Ms. Swapna Rani Nag specializes in microbiological testing and food quality control.',
      education: 'M.Sc. in Biotechnology',
      experience: 'Microbiological Testing, Food Safety',
      specialization: 'Microbiological Testing, Food Safety',
      profileImage: '/images/team/senior_analyst_bio.jpg',
      isActive: true,
      displayOrder: 8
    },
    {
      name: 'Mr. Badal Kumar Biswal',
      position: 'Junior Analyst (Chemical)',
      email: 'md@ftl.esse.co.in',
      phone: '+91 9876543215',
      department: 'Chemical',
      bio: 'B.Tech in Agriculture from CUTM with hands-on experience in analytical testing.',
      education: 'B.Tech in Agriculture from CUTM',
      experience: 'Analytical Testing, Instrument Handling',
      specialization: 'Analytical Testing, Instrument Handling',
      profileImage: '/images/badal_kumar_biswal.jpg',
      isActive: true,
      displayOrder: 9
    },
    {
      name: 'Mr. Sanket Bhowmik',
      position: 'Junior Analyst (Biological)',
      email: 'md@ftl.esse.co.in',
      phone: '+91 9876543216',
      department: 'Biological',
      bio: 'Mr. Sanket Bhowmik, Junior Analyst (Biological) with background in biological sciences and microbiological techniques.',
      education: 'B.Sc. in Biological Sciences',
      experience: 'Microbiological Techniques, Food Safety',
      specialization: 'Microbiological Techniques, Food Safety',
      profileImage: '/images/team/junior_analyst_bio.jpg',
      isActive: true,
      displayOrder: 10
    }
  ];

  await Team.insertMany(teamMembers);
  console.log(`   ✅ Created ${teamMembers.length} team members`);
};

// ==================== 4. SEED SERVICES ====================
const seedServices = async (adminId) => {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('⚗️  STEP 4: Creating Lab Services...');

  const existingCount = await Service.countDocuments();
  if (existingCount > 0) {
    console.log(`   ⚠️ ${existingCount} services already exist. Skipping.`);
    return;
  }

  const services = [
    {
      name: 'Heavy Metal Analysis',
      description: '<p>Comprehensive heavy metal testing using ICP-MS technology for accurate detection of toxic metals in food products.</p>',
      category: 'Chemical Analysis',
      price: '₹2,500 per sample',
      duration: '3-5 business days',
      features: ['ICP-MS Technology', 'NABL Accredited', 'Regulatory Compliance', 'Detailed Reports'],
      requirements: ['Minimum 100g sample', 'Proper labeling', 'Chain of custody'],
      methodology: 'Inductively Coupled Plasma Mass Spectrometry (ICP-MS)',
      instruments: ['ICP-MS', 'Microwave Digestion System'],
      standards: ['IS 11464', 'AOAC Methods', 'FSSAI Guidelines'],
      sampleTypes: ['Food Products', 'Beverages', 'Supplements', 'Raw Materials'],
      parameters: ['Lead', 'Mercury', 'Cadmium', 'Arsenic', 'Chromium'],
      status: 'active', featured: true, popular: true,
      tags: ['heavy metals', 'ICP-MS', 'food safety'],
      certification: { nabl: true, iso: true },
      turnaroundTime: '3-5 business days',
      homeCollection: true, emergencyService: true,
      createdBy: adminId, lastUpdatedBy: adminId
    },
    {
      name: 'Pesticide Residue Analysis',
      description: '<p>Multi-residue pesticide analysis using LC-MS/MS and GC-MS/MS for comprehensive screening of over 500 pesticides.</p>',
      category: 'Chemical Analysis',
      price: '₹4,500 per sample',
      duration: '5-7 business days',
      features: ['LC-MS/MS & GC-MS/MS', '500+ Pesticides', 'MRL Compliance', 'Export Certification'],
      requirements: ['Minimum 500g sample', 'Fresh samples preferred', 'Proper storage'],
      methodology: 'LC-MS/MS, GC-MS/MS',
      instruments: ['LC-MS/MS', 'GC-MS/MS', 'QuEChERS Extraction'],
      standards: ['FSSAI Guidelines', 'EU MRL', 'Codex Alimentarius'],
      sampleTypes: ['Fruits', 'Vegetables', 'Cereals', 'Pulses', 'Spices'],
      parameters: ['Multi-residue Pesticides', 'MRL Compliance'],
      status: 'active', featured: true, popular: true,
      tags: ['pesticides', 'LC-MS/MS', 'export'],
      certification: { nabl: true, iso: true },
      turnaroundTime: '5-7 business days',
      homeCollection: true,
      createdBy: adminId, lastUpdatedBy: adminId
    },
    {
      name: 'Microbiological Testing',
      description: '<p>Comprehensive microbiological analysis for food safety and shelf-life determination.</p>',
      category: 'Microbiological Testing',
      price: '₹1,800 per parameter',
      duration: '3-7 business days',
      features: ['Pathogen Detection', 'Shelf-life Studies', 'HACCP Support', 'Rapid Methods'],
      requirements: ['Sterile sampling', 'Cold chain maintenance', 'Quick delivery'],
      methodology: 'Culture-based methods, Rapid detection systems, PCR techniques',
      instruments: ['Incubators', 'Autoclave', 'PCR System', 'VITEK System'],
      standards: ['IS 5887', 'AOAC Methods', 'FDA BAM'],
      sampleTypes: ['Ready-to-eat Foods', 'Raw Materials', 'Water', 'Environmental Swabs'],
      parameters: ['Pathogens', 'Indicator Organisms', 'Spoilage Bacteria'],
      status: 'active', featured: true,
      tags: ['microbiology', 'pathogens', 'food safety'],
      certification: { nabl: true, iso: true },
      turnaroundTime: '3-7 business days',
      homeCollection: true, emergencyService: true,
      createdBy: adminId, lastUpdatedBy: adminId
    },
    {
      name: 'Nutritional Analysis',
      description: '<p>Complete nutritional profiling for food labeling and regulatory compliance.</p>',
      category: 'Nutritional Analysis',
      price: '₹3,200 per sample',
      duration: '5-7 business days',
      features: ['Complete Nutrition Profile', 'Label Compliance', 'Health Claims Support', 'Calorie Calculation'],
      requirements: ['Representative sample', 'Minimum 200g', 'Nutritional information'],
      methodology: 'AOAC Official Methods, Spectrophotometry, HPLC',
      instruments: ['HPLC', 'UV-Vis Spectrophotometer', 'Kjeldahl Apparatus'],
      standards: ['AOAC Methods', 'FSSAI Guidelines', 'IS Standards'],
      sampleTypes: ['Packaged Foods', 'Supplements', 'Baby Foods', 'Functional Foods'],
      parameters: ['Protein', 'Fat', 'Carbohydrates', 'Vitamins', 'Minerals'],
      status: 'active', featured: true,
      tags: ['nutrition', 'labeling', 'vitamins'],
      certification: { nabl: true, iso: true },
      turnaroundTime: '5-7 business days',
      createdBy: adminId, lastUpdatedBy: adminId
    },
    {
      name: 'Water Quality Analysis',
      description: '<p>Comprehensive water testing for drinking water and industrial water according to IS 10500 and WHO guidelines.</p>',
      category: 'Quality Control',
      price: '₹2,800 per sample',
      duration: '3-5 business days',
      features: ['WHO Compliance', 'IS 10500 Standards', 'Potability Assessment', 'Regulatory Approval'],
      requirements: ['Sterile bottles', 'Proper sampling', 'Cold storage'],
      methodology: 'Standard Methods for Water Analysis, IS 3025',
      instruments: ['ICP-MS', 'Ion Chromatography', 'pH Meter', 'Turbidimeter'],
      standards: ['IS 10500', 'WHO Guidelines', 'CPCB Standards'],
      sampleTypes: ['Drinking Water', 'Groundwater', 'Surface Water', 'Treated Water'],
      parameters: ['Physical', 'Chemical', 'Biological'],
      status: 'active', featured: true,
      tags: ['water quality', 'WHO', 'IS 10500'],
      certification: { nabl: true, iso: true },
      turnaroundTime: '3-5 business days',
      homeCollection: true,
      createdBy: adminId, lastUpdatedBy: adminId
    },
    {
      name: 'Aflatoxin Testing',
      description: '<p>Precise determination of aflatoxins (B1, B2, G1, G2) using HPLC with fluorescence detection.</p>',
      category: 'Contaminant Detection',
      price: '₹2,200 per sample',
      duration: '4-6 business days',
      features: ['HPLC-FLD Method', 'EU Standards', 'Export Compliance', 'Low Detection Limits'],
      requirements: ['Minimum 250g sample', 'Representative sampling', 'Dry storage'],
      methodology: 'HPLC-FLD',
      instruments: ['HPLC-FLD', 'Immunoaffinity Columns'],
      standards: ['AOAC 991.31', 'EN 14123', 'FSSAI Guidelines'],
      sampleTypes: ['Cereals', 'Nuts', 'Spices', 'Dried Fruits', 'Animal Feed'],
      parameters: ['Aflatoxin B1', 'Aflatoxin B2', 'Aflatoxin G1', 'Aflatoxin G2'],
      status: 'active', featured: true, popular: true,
      tags: ['aflatoxins', 'mycotoxins', 'export'],
      certification: { nabl: true, iso: true },
      turnaroundTime: '4-6 business days',
      emergencyService: true,
      createdBy: adminId, lastUpdatedBy: adminId
    },
    {
      name: 'Food Allergen Testing',
      description: '<p>Detection and quantification of major food allergens using ELISA and PCR techniques.</p>',
      category: 'Contaminant Detection',
      price: '₹1,500 per allergen',
      duration: '2-4 business days',
      features: ['ELISA & PCR Methods', 'Quantitative Results', 'Label Verification', 'Cross-contamination Detection'],
      requirements: ['Minimum 50g sample', 'Ingredient information', 'Processing details'],
      methodology: 'ELISA, PCR',
      instruments: ['ELISA Reader', 'PCR System', 'Extraction Equipment'],
      standards: ['AOAC Methods', 'FDA Guidelines', 'EU Regulations'],
      sampleTypes: ['Processed Foods', 'Baked Goods', 'Snacks', 'Ready Meals'],
      parameters: ['Major Allergens', 'Cross-contamination'],
      status: 'active', featured: true,
      tags: ['allergens', 'ELISA', 'PCR'],
      certification: { nabl: true, iso: true },
      turnaroundTime: '2-4 business days',
      createdBy: adminId, lastUpdatedBy: adminId
    },
    {
      name: 'Pharmaceutical Testing',
      description: '<p>Comprehensive pharmaceutical analysis for raw materials, finished products, and stability studies.</p>',
      category: 'Pharmaceutical Testing',
      price: '₹3,500 per parameter',
      duration: '5-10 business days',
      features: ['Pharmacopeial Compliance', 'Stability Studies', 'Method Development', 'Regulatory Support'],
      requirements: ['COA information', 'Specifications', 'Stability conditions'],
      methodology: 'HPLC, GC, UV-Vis Spectrophotometry',
      instruments: ['HPLC', 'GC', 'UV-Vis', 'Dissolution Apparatus'],
      standards: ['IP', 'USP', 'EP', 'BP', 'ICH Guidelines'],
      sampleTypes: ['APIs', 'Tablets', 'Capsules', 'Injectables', 'Topicals'],
      parameters: ['Identity', 'Purity', 'Assay', 'Dissolution', 'Microbiology'],
      status: 'active', featured: false,
      tags: ['pharmaceuticals', 'APIs', 'USP'],
      certification: { nabl: true, iso: true },
      turnaroundTime: '5-10 business days',
      createdBy: adminId, lastUpdatedBy: adminId
    }
  ];

  await Service.insertMany(services);
  console.log(`   ✅ Created ${services.length} lab services`);
};

// ==================== 5. SEED PAGES ====================
const seedPages = async (adminId) => {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📄 STEP 5: Creating CMS Pages...');

  const existingCount = await Page.countDocuments();
  if (existingCount > 0) {
    console.log(`   ⚠️ ${existingCount} pages already exist. Skipping.`);
    return;
  }

  const pages = [
    {
      title: 'Privacy Policy',
      slug: 'privacy-policy',
      pageType: 'privacy-policy',
      content: '<h1>Privacy Policy</h1><p>At Gram Tarang Food Testing Laboratory, we are committed to protecting your privacy. We collect information when you request testing services, submit samples, or contact us. We use this information to provide services, communicate, and comply with legal obligations. We do not sell your personal information.</p><p>Contact: md@ftl.esse.co.in</p>',
      metaDescription: 'Privacy Policy for Gram Tarang Food Testing Laboratory.',
      status: 'published',
      author: adminId
    },
    {
      title: 'Terms of Service',
      slug: 'terms-of-service',
      pageType: 'terms-of-service',
      content: '<h1>Terms of Service</h1><p>By accessing and using our website and services, you agree to these terms. GTFTL provides food safety testing, microbiological testing, chemical analysis, and nutritional analysis services. Clients are responsible for proper sample collection and timely payment.</p>',
      metaDescription: 'Terms of Service for Gram Tarang Food Testing Laboratory.',
      status: 'published',
      author: adminId
    },
    {
      title: 'About Us',
      slug: 'about-us',
      pageType: 'about-us',
      content: '<h1>About Gram Tarang Food Testing Laboratory</h1><p>Established in 2020, GTFTL provides accurate, reliable, and timely analytical testing services. Our NABL-accredited facility combines state-of-the-art technology with expert knowledge.</p>',
      metaDescription: 'About Gram Tarang Food Testing Laboratory.',
      status: 'published',
      author: adminId
    },
    {
      title: 'Contact Us',
      slug: 'contact-us',
      pageType: 'contact-us',
      content: '<h1>Contact Information</h1><p>Gram Tarang Food Testing Laboratory, Parlakhemundi, Odisha. Email: md@ftl.esse.co.in. Business Hours: Mon-Fri 9AM-6PM, Sat 9AM-2PM.</p>',
      metaDescription: 'Contact Gram Tarang Food Testing Laboratory.',
      status: 'published',
      author: adminId
    },
    {
      title: 'Sitemap',
      slug: 'sitemap',
      pageType: 'sitemap',
      content: '<h1>Sitemap</h1><p>Home | About | Services | Equipment | Team | Blog | Internship | Contact | Privacy Policy | Terms of Service</p>',
      metaDescription: 'Sitemap of Gram Tarang Food Testing Laboratory website.',
      status: 'published',
      author: adminId
    }
  ];

  await Page.insertMany(pages);
  console.log(`   ✅ Created ${pages.length} CMS pages`);
};

// ==================== 6. SEED INTERNSHIPS ====================
const seedInternships = async (adminId) => {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🎓 STEP 6: Creating Internship Programs...');

  const existingCount = await Internship.countDocuments();
  if (existingCount > 0) {
    console.log(`   ⚠️ ${existingCount} internships already exist. Skipping.`);
    return;
  }

  const internships = [
    {
      title: 'Food Safety Research Intern',
      description: '<p>Hands-on experience in food safety testing and analysis with cutting-edge laboratory techniques.</p>',
      requirements: '<p>B.Sc/M.Sc in Food Technology, Microbiology, or related field. Min 60% aggregate.</p>',
      duration: '3 months',
      stipend: '₹8,000 per month',
      location: 'Parlakhemundi',
      category: 'Research',
      positions: 2,
      deadline: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      status: 'active',
      skills: ['Laboratory Techniques', 'Data Analysis', 'Report Writing', 'Food Safety'],
      benefits: ['Certificate of Completion', 'Hands-on Training', 'Mentorship'],
      featured: true,
      department: 'Research & Development',
      contactEmail: 'md@ftl.esse.co.in',
      createdBy: adminId
    },
    {
      title: 'Chemical Analysis Laboratory Intern',
      description: '<p>Practical experience in chemical analysis and instrumentation. Learn HPLC, GC-MS, and sample preparation techniques.</p>',
      requirements: '<p>B.Sc/M.Sc in Chemistry, Analytical Chemistry, or Food Science.</p>',
      duration: '6 months',
      stipend: '₹10,000 per month',
      location: 'Parlakhemundi',
      category: 'Technical',
      positions: 1,
      deadline: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      status: 'active',
      skills: ['HPLC', 'GC-MS', 'Sample Preparation', 'Data Analysis'],
      benefits: ['Industry Exposure', 'Equipment Training', 'Certification'],
      featured: true,
      department: 'Chemical Analysis',
      contactEmail: 'md@ftl.esse.co.in',
      createdBy: adminId
    },
    {
      title: 'Quality Assurance Intern',
      description: '<p>Support the QA team in maintaining laboratory standards and ensuring regulatory compliance.</p>',
      requirements: '<p>B.Tech/M.Tech or B.Sc in Science. Understanding of quality management systems preferred.</p>',
      duration: '4 months',
      stipend: '₹9,000 per month',
      location: 'Parlakhemundi',
      category: 'Administrative',
      positions: 1,
      deadline: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      status: 'active',
      skills: ['Quality Management', 'Documentation', 'Compliance'],
      benefits: ['QMS Training', 'Audit Experience', 'Certificate'],
      department: 'Quality Assurance',
      contactEmail: 'md@ftl.esse.co.in',
      createdBy: adminId
    },
    {
      title: 'Environmental Testing Intern',
      description: '<p>Learn water quality analysis, environmental monitoring, and sustainability practices.</p>',
      requirements: '<p>B.Sc/M.Sc in Environmental Science, Chemistry, or Biology.</p>',
      duration: '3 months',
      stipend: '₹7,500 per month',
      location: 'Parlakhemundi',
      category: 'Field Work',
      positions: 2,
      deadline: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      status: 'active',
      skills: ['Environmental Testing', 'Water Analysis', 'Data Collection'],
      benefits: ['Field Experience', 'Research Exposure', 'Certificate'],
      department: 'Environmental Division',
      contactEmail: 'md@ftl.esse.co.in',
      createdBy: adminId
    },
    {
      title: 'Laboratory Operations Intern',
      description: '<p>Comprehensive exposure to laboratory operations, equipment maintenance, and workflow optimization.</p>',
      requirements: '<p>B.Tech in Engineering or B.Sc in Science. Basic equipment handling experience preferred.</p>',
      duration: '6 months',
      stipend: '₹9,500 per month',
      location: 'Parlakhemundi',
      category: 'Laboratory',
      positions: 1,
      deadline: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      status: 'active',
      skills: ['Equipment Maintenance', 'Laboratory Operations', 'Safety Protocols'],
      benefits: ['Technical Training', 'Operations Experience', 'Professional Growth'],
      department: 'Laboratory Operations',
      contactEmail: 'md@ftl.esse.co.in',
      createdBy: adminId
    }
  ];

  await Internship.insertMany(internships);
  console.log(`   ✅ Created ${internships.length} internship programs`);
};

// ==================== MAIN ====================
const seedAll = async () => {
  console.log('');
  console.log('🚀 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('   GTFTL Database Seeder — Populating All Data');
  console.log('   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('');

  try {
    await connectDB();

    // Step 1: Admin (required first)
    const admin = await seedAdmin();
    const adminId = admin._id;

    // Step 2-6: Seed all data
    await seedBlogs(adminId);
    await seedTeam();
    await seedServices(adminId);
    await seedPages(adminId);
    await seedInternships(adminId);

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('');
    console.log('🎉 ALL DATA SEEDED SUCCESSFULLY!');
    console.log('');
    console.log('📊 Database Summary:');
    console.log(`   👤 Admins:       ${await Admin.countDocuments()}`);
    console.log(`   📝 Blogs:        ${await Blog.countDocuments()}`);
    console.log(`   👥 Team Members: ${await Team.countDocuments()}`);
    console.log(`   ⚗️  Services:     ${await Service.countDocuments()}`);
    console.log(`   📄 Pages:        ${await Page.countDocuments()}`);
    console.log(`   🎓 Internships:  ${await Internship.countDocuments()}`);
    console.log('');
    console.log('🔐 Admin Login Credentials:');
    console.log('   Username: gtftlcutm');
    console.log('   Password: GT@Cutm_2025');
    console.log('   URL: http://localhost:3000/admin/login');
    console.log('');

  } catch (error) {
    console.error('❌ Seeding failed:', error.message);
    console.error(error);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Database connection closed.');
    process.exit(0);
  }
};

seedAll();
