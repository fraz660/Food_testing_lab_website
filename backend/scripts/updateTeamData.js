require('dotenv').config({ path: '../../.env' });
const mongoose = require('mongoose');
const Team = require('../models/Team');

const MONGODB_URI = "mongodb+srv://gtftlcutm_db:GT%40Cutm_2025@gtftlcutmdatabase.ulnymj7.mongodb.net/food_testing_lab?retryWrites=true&w=majority&appName=gtftlcutmdatabase";

const boardMembers = [
  {
    name: 'Dr. Preetha Bhadra',
    position: 'Managing Director',
    department: 'Management',
    email: 'md@ftl.esse.co.in',
    education: 'Ph.D in Biophysics',
    experience: '15+ years in laboratory management and biophysics research',
    specialization: 'Laboratory Management, Quality Systems, Biophysics',
    bio: 'Dr. Preetha Bhadra is the Managing Director of GTFTL with over 15 years of experience in laboratory management and biophysics research. She leads the strategic direction of the laboratory and ensures adherence to the highest quality standards.',
    profileImage: 'Dr.Preetha Bhadra.jpg', // will store just filename to match other endpoints
    isActive: true,
    displayOrder: 1
  },
  {
    name: 'Prof. Supriya Pattanaik',
    position: 'Director',
    department: 'Management',
    email: 'md@ftl.esse.co.in',
    education: 'Professor, Centurion University',
    experience: '20+ years in academia and food technology',
    specialization: 'Food Technology, Academic Leadership',
    bio: 'Prof. Supriya Pattanaik serves as Director of GTFTL and brings extensive academic and industry expertise in food technology and quality assurance from Centurion University of Technology and Management.',
    profileImage: 'supriya-mam.jpg',
    isActive: true,
    displayOrder: 2
  },
  {
    name: 'Prof. D. N. Rao',
    position: 'Director',
    department: 'Management',
    email: 'md@ftl.esse.co.in',
    education: 'Professor & Distinguished Scientist',
    experience: '25+ years in food science and technology',
    specialization: 'Food Science, Research & Development',
    bio: 'Prof. D. N. Rao is a distinguished scientist and Director of GTFTL with over 25 years of experience in food science, technology, and research. He provides strategic guidance on research and development initiatives.',
    profileImage: 'rao-sir.jpg',
    isActive: true,
    displayOrder: 3
  }
];

const teamMembers = [
  {
    name: 'Dr. Bhadram K Chekraverthy',
    position: 'Technical Manager',
    department: 'Chemical',
    email: 'md@ftl.esse.co.in',
    education: 'Ph.D. in Pharmaceutical Analysis',
    experience: '8+ years in analysis',
    specialization: 'HPLC, LC-MS/MS, GC-MS, ICP-MS',
    bio: 'Dr. Bhadram Kalyan Chekraverthy serves as the Technical Manager – Chemical Department at GTFtL (Global Food Testing Laboratory), where he leads the development, validation, and implementation of advanced analytical methods for food, herbal, and nutraceutical testing... [truncated for brevity, using original content]',
    isActive: true,
    profileImage: 'Dr.Bhadram.jpg',
    displayOrder: 4
  },
  {
    name: 'Dr. Pratyush Kumar Das',
    position: 'Technical Manager',
    department: 'Biological',
    email: 'md@ftl.esse.co.in',
    education: 'Ph.D. Biotechnology',
    experience: '8+ years in microbiology',
    specialization: 'Microbial Genomics, Bioremediation',
    bio: "Dr. Pratyush Kumar Das is an Assistant Professor and Head of Biotechnology at the School of Agricultural and Bio-Engineering (SoABE), Centurion University, and Technical Head of Microbiology at the NABL-accredited Gram Tarang Food Testing Laboratory...",
    isActive: true,
    profileImage: 'Dr.Prathyush.jpg',
    displayOrder: 5
  },
  {
    name: 'Mr. Victor Pradhan',
    position: 'Senior Analyst',
    department: 'Chemical',
    email: 'md@ftl.esse.co.in',
    education: 'M.Tech in Biotechnology',
    experience: '3+ years in analysis',
    specialization: 'LC-MS/MS, GC-MS/MS, ICPMS, HPLC',
    bio: 'Victor Pradhan is a Senior Analyst (Chemical) at Gram Tarang Food Testing Laboratories Pvt. Ltd. (GTFTL), a MoFPI-funded advanced analytical facility...',
    isActive: true,
    profileImage: 'Mr.Victor.jpg',
    displayOrder: 6
  },
  {
    name: 'Ms. Debarati Nandi',
    position: 'Senior Analyst',
    department: 'Chemical',
    email: 'md@ftl.esse.co.in',
    education: 'M.Sc. Biotechnology',
    experience: '2+ years in Analysis',
    specialization: 'Research Analytics, Method Development',
    bio: 'Research analyst specializing in analytical method development and validation.',
    isActive: true,
    profileImage: 'Ms.Debarati.jpg',
    displayOrder: 7
  },
  {
    name: 'Mr.Badal K Biswal',
    position: 'Junior Analyst',
    department: 'Chemical',
    email: 'md@ftl.esse.co.in',
    education: 'B.Tech in Agriculture',
    experience: '2+ years',
    specialization: 'Microbiological Testing, Culture Techniques',
    bio: 'Skilled microbiologist specializing in food safety testing and microbiological quality assurance.',
    isActive: true,
    profileImage: 'Mr.Badal Biswal.jpg',
    displayOrder: 8
  },
  {
    name: 'Ms.Laxmi Angarasingi',
    position: 'Junior Analyst',
    department: 'Chemical',
    email: 'md@ftl.esse.co.in',
    education: 'M.Sc',
    experience: '1+ years',
    specialization: 'Microbiological Testing, Culture Techniques',
    bio: 'Skilled microbiologist specializing in food safety testing and microbiological quality assurance.',
    isActive: true,
    profileImage: 'Ms.Laxmi.JPG',
    displayOrder: 9
  },
  {
    name: 'Mr.Sradhanshu S Gauda',
    position: 'Junior Microbiologist ',
    department: 'Biological',
    email: 'md@ftl.esse.co.in',
    education: 'M.Sc',
    experience: '6 Months',
    specialization: 'Microbiological Testing, Culture Techniques',
    bio: 'Skilled microbiologist specializing in food safety testing and microbiological quality assurance.',
    isActive: true,
    profileImage: 'sradhanshu.jpeg',
    displayOrder: 10
  }
];

// Restore full bios
teamMembers[0].bio = 'Dr. Bhadram Kalyan Chekraverthy serves as the Technical Manager – Chemical Department at GTFtL (Global Food Testing Laboratory), where he leads the development, validation, and implementation of advanced analytical methods for food, herbal, and nutraceutical testing. With a Ph.D. in Pharmaceutical Analysis and expertise in HPLC, LC-MS/MS, GC-MS, and ICP-MS, he specializes in ensuring accurate, reliable, and regulatory-compliant chemical analysis. He plays a pivotal role in establishing quality systems aligned with NABL accreditation requirements, overseeing method standardization, instrument calibration, and data integrity. His core focus is to strengthen the laboratory’s capabilities in food safety assessment, contaminant analysis, and phytochemical evaluation through scientifically robust and industry-oriented approaches.';
teamMembers[1].bio = "Dr. Pratyush Kumar Das is an Assistant Professor and Head of Biotechnology at the School of Agricultural and Bio-Engineering (SoABE), Centurion University, and Technical Head of Microbiology at the NABL-accredited Gram Tarang Food Testing Laboratory. Holding a Ph.D. in Biotechnology from Siksha 'O' Anusandhan University and having completed post-doctoral research at DBT-ILS, his multidisciplinary expertise spans environmental biotechnology, nanotechnology, and microbiology. His research heavily focuses on microbial genomics, bioremediation, and plant stress physiology. A prolific scholar, Dr. Das has authored over 40 peer-reviewed papers and three books, and holds memberships in the Royal Society of Chemistry and the Asian Council of Science Editors. His commitment to translational research earned him the 2023 DBT-ILS Innovation Challenge for developing bio-beads to reduce heavy metal uptake in rice. His academic excellence is further recognized by the Publons Global Peer Review Award and Centurion University's 2025 Eminent Achiever Award, besides awards from other bodies like DBT, DST, CSIR, and Springer India.";
teamMembers[2].bio = 'Victor Pradhan is a Senior Analyst (Chemical) at Gram Tarang Food Testing Laboratories Pvt. Ltd. (GTFTL), a MoFPI-funded advanced analytical facility, holding an M.Tech in Biotechnology from Odisha University of Technology and Research (OUTR). He specializes in method development, validation, and operation of advanced analytical instruments, including LC-MS/MS, GC-MS/MS, ICPMS, and HPLC, with strong expertise in analytical method optimization, data interpretation, and compliance with regulatory and quality standards. He is actively engaged in instrumental analysis, quality control, and research-oriented applications, contributing to accurate and high-precision analytical outcomes.';

const allMembers = [...boardMembers, ...teamMembers];

mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log('Connected to DB');
    
    // Clear existing team members
    await Team.deleteMany({});
    console.log('Cleared existing team data');

    // Insert new data
    for (const member of allMembers) {
      await Team.create(member);
      console.log(`Inserted: ${member.name}`);
    }

    console.log('Successfully updated all team members');
    process.exit(0);
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
