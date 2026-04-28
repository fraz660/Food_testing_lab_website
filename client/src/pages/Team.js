import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaFlask, FaMicroscope } from 'react-icons/fa';
import api, { API_BASE_URL } from '../api/config';

const getImageUrl = (member) => {
  const imgStr = member.profileImage || member.img;
  if (!imgStr) return null;
  if (imgStr.startsWith('http')) return imgStr;
  if (imgStr.startsWith('uploads/')) return `${API_BASE_URL}/${imgStr}`;
  if (imgStr.startsWith('/')) return imgStr;
  return `/${imgStr}`;
};

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [boardMembers, setBoardMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fallback hardcoded board data
  const fallbackBoardMembers = [
    {
      _id: 'b1',
      name: 'Dr. Preetha Bhadra',
      position: 'Managing Director',
      department: 'Management',
      email: 'md@ftl.esse.co.in',
      education: 'Ph.D in Biophysics',
      experience: '15+ years in laboratory management and biophysics research',
      specialization: 'Laboratory Management, Quality Systems, Biophysics',
      bio: 'Dr. Preetha Bhadra is the Managing Director of GTFTL with over 15 years of experience in laboratory management and biophysics research. She leads the strategic direction of the laboratory and ensures adherence to the highest quality standards.',
      img: '/Dr.Preetha_Bhadra.jpg',
      isActive: true
    },
    {
      _id: 'b2',
      name: 'Prof. Supriya Pattanaik',
      position: 'Director',
      department: 'Management',
      email: 'md@ftl.esse.co.in',
      education: 'Professor, Centurion University',
      experience: '20+ years in academia and food technology',
      specialization: 'Food Technology, Academic Leadership',
      bio: 'Prof. Supriya Pattanaik serves as Director of GTFTL and brings extensive academic and industry expertise in food technology and quality assurance from Centurion University of Technology and Management.',
      img: '/supriya-mam.jpg',
      isActive: true
    },
    {
      _id: 'b3',
      name: 'Prof. D. N. Rao',
      position: 'Director',
      department: 'Management',
      email: 'md@ftl.esse.co.in',
      education: 'Professor & Distinguished Scientist',
      experience: '25+ years in food science and technology',
      specialization: 'Food Science, Research & Development',
      bio: 'Prof. D. N. Rao is a distinguished scientist and Director of GTFTL with over 25 years of experience in food science, technology, and research. He provides strategic guidance on research and development initiatives.',
      img: '/rao-sir.jpg',
      isActive: true
    }
  ];

  // Fallback hardcoded team data
  const fallbackTeamMembers = [
    {
      _id: '4',
      name: 'Dr. Bhadram K Chekraverthy',
      position: 'Technical Manager',
      department: 'Chemical',
      email: 'md@ftl.esse.co.in',
      education: 'Ph.D. in Pharmaceutical Analysis',
      experience: '8+ years in analysis',
      specialization: 'HPLC, LC-MS/MS, GC-MS, ICP-MS',
      bio: 'Dr. Bhadram Kalyan Chekraverthy serves as the Technical Manager – Chemical Department at GTFtL (Global Food Testing Laboratory), where he leads the development, validation, and implementation of advanced analytical methods for food, herbal, and nutraceutical testing. With a Ph.D. in Pharmaceutical Analysis and expertise in HPLC, LC-MS/MS, GC-MS, and ICP-MS, he specializes in ensuring accurate, reliable, and regulatory-compliant chemical analysis. He plays a pivotal role in establishing quality systems aligned with NABL accreditation requirements, overseeing method standardization, instrument calibration, and data integrity. His core focus is to strengthen the laboratory’s capabilities in food safety assessment, contaminant analysis, and phytochemical evaluation through scientifically robust and industry-oriented approaches.',
      isActive: true,
      img: '/Dr.Bhadram.jpg'
    },
    {
      _id: '5',
      name: 'Dr. Pratyush Kumar Das',
      position: 'Technical Manager',
      department: 'Biological',
      email: 'md@ftl.esse.co.in',
      education: 'Ph.D. Biotechnology',
      experience: '8+ years in microbiology',
      specialization: 'Microbial Genomics, Bioremediation',
      bio: "Dr. Pratyush Kumar Das is an Assistant Professor and Head of Biotechnology at the School of Agricultural and Bio-Engineering (SoABE), Centurion University, and Technical Head of Microbiology at the NABL-accredited Gram Tarang Food Testing Laboratory. Holding a Ph.D. in Biotechnology from Siksha 'O' Anusandhan University and having completed post-doctoral research at DBT-ILS, his multidisciplinary expertise spans environmental biotechnology, nanotechnology, and microbiology. His research heavily focuses on microbial genomics, bioremediation, and plant stress physiology. A prolific scholar, Dr. Das has authored over 40 peer-reviewed papers and three books, and holds memberships in the Royal Society of Chemistry and the Asian Council of Science Editors. His commitment to translational research earned him the 2023 DBT-ILS Innovation Challenge for developing bio-beads to reduce heavy metal uptake in rice. His academic excellence is further recognized by the Publons Global Peer Review Award and Centurion University's 2025 Eminent Achiever Award, besides awards from other bodies like DBT, DST, CSIR, and Springer India.",
      isActive: true,
      img: '/Dr.Prathyush.jpg'
    },
    {
      _id: '6',
      name: 'Mr. Victor Pradhan',
      position: 'Senior Analyst',
      department: 'Chemical',
      email: 'md@ftl.esse.co.in',
      education: 'M.Tech in Biotechnology',
      experience: '3+ years in analysis',
      specialization: 'LC-MS/MS, GC-MS/MS, ICPMS, HPLC',
      bio: 'Victor Pradhan is a Senior Analyst (Chemical) at Gram Tarang Food Testing Laboratories Pvt. Ltd. (GTFTL), a MoFPI-funded advanced analytical facility, holding an M.Tech in Biotechnology from Odisha University of Technology and Research (OUTR). He specializes in method development, validation, and operation of advanced analytical instruments, including LC-MS/MS, GC-MS/MS, ICPMS, and HPLC, with strong expertise in analytical method optimization, data interpretation, and compliance with regulatory and quality standards. He is actively engaged in instrumental analysis, quality control, and research-oriented applications, contributing to accurate and high-precision analytical outcomes.',
      isActive: true,
      img: '/Mr.Victor.jpg'
    },
    {
      _id: '7',
      name: 'Ms. Debarati Nandi',
      position: 'Senior Analyst',
      department: 'Chemical',
      email: 'md@ftl.esse.co.in',
      education: 'M.Sc. Biotechnology',
      experience: '2+ years in Analysis',
      specialization: 'Research Analytics, Method Development',
      bio: 'Research analyst specializing in analytical method development and validation.',
      isActive: true,
      img: '/Ms.Debarati.jpg'
    },
    {
      _id: '8',
      name: 'Mr.Badal K Biswal',
      position: 'Junior Analyst',
      department: 'Chemical',
      email: 'md@ftl.esse.co.in',
      education: 'B.Tech in Agriculture',
      experience: '2+ years',
      specialization: 'Microbiological Testing, Culture Techniques',
      bio: 'Skilled microbiologist specializing in food safety testing and microbiological quality assurance.',
      isActive: true,
      img: '/Mr.Badal_Biswal.jpg'
    },
    {
      _id: '9',
      name: 'Ms.Laxmi Angarasingi',
      position: 'Junior Analyst',
      department: 'Chemical',
      email: 'md@ftl.esse.co.in',
      education: 'M.Sc',
      experience: '1+ years',
      specialization: 'Microbiological Testing, Culture Techniques',
      bio: 'Skilled microbiologist specializing in food safety testing and microbiological quality assurance.',
      isActive: true,
      img: '/Ms.Laxmi.JPG'
    },
    {
      _id: '10',
      name: 'Mr.Sradhanshu S Gauda',
      position: 'Junior Microbiologist ',
      department: 'Biological',
      email: 'md@ftl.esse.co.in',
      education: 'M.Sc',
      experience: '6 Months',
      specialization: 'Microbiological Testing, Culture Techniques',
      bio: 'Skilled microbiologist specializing in food safety testing and microbiological quality assurance.',
      isActive: true,
      img: '/sradhanshu.jpeg'
    }
  ];

  // Fetch team data from API
  useEffect(() => {
    const fetchTeamData = async (retryCount = 0) => {
      try {
        setLoading(true);
        console.log(`Fetching team data from API... (Attempt ${retryCount + 1})`);

        // Use the correct public team endpoint
        const response = await api.get('/api/team');

        if (response.data.success && response.data.data) {
          const allMembers = response.data.data;
          console.log('✅ API Success - Total members:', allMembers.length);



          const technical = allMembers.filter(member =>
            member.department !== 'Management' && member.isActive
          ).sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));

          const board = allMembers.filter(member =>
            member.department === 'Management' && member.isActive
          ).sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));

          console.log('Technical members:', technical.length);
          console.log('Board members:', board.length);

          // Use real data if available, otherwise fallback
          setTeamMembers(technical.length > 0 ? technical : fallbackTeamMembers);
          setBoardMembers(board.length > 0 ? board : fallbackBoardMembers);
          setError(null); // Clear any previous errors

        } else {
          throw new Error(`API returned: ${JSON.stringify(response.data)}`);
        }
      } catch (err) {
        console.error('❌ Team API Error:', err.message);

        // Retry logic - retry up to 2 times
        if (retryCount < 2) {
          console.log(`Retrying in 2 seconds... (${retryCount + 1}/2)`);
          setTimeout(() => fetchTeamData(retryCount + 1), 2000);
          return;
        }

        // After all retries failed, use fallback data
        console.log('All retries failed, using fallback data...');

        setTeamMembers(fallbackTeamMembers);
        setBoardMembers(fallbackBoardMembers);
        setError(null); // Don't show error to users, just use fallback silently

      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen pt-20 lg:pt-24 flex items-center justify-center">
        <div className="text-center">
          <FaFlask className="h-12 w-12 animate-pulse text-green-600 mx-auto mb-4" />
          <p className="text-lg text-gray-600">Loading team information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold">
              Our <span className="text-green-200">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Meet our dedicated team of {teamMembers.length + boardMembers.length} experts committed to delivering excellence in analytical testing
            </p>
            <div className="flex justify-center items-center space-x-8">
              <div className="flex items-center space-x-2">
                <FaFlask className="h-6 w-6 text-green-400" />
                <span className="text-sm font-medium">Highly Qualified</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMicroscope className="h-6 w-6 text-green-400" />
                <span className="text-sm font-medium">Expert Analysts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Board of <span className="text-green-600">Directors</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary leaders guiding GTFTL towards excellence in analytical science
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div key={member._id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-32 bg-gradient-to-r from-green-700 to-green-600">
                  <div className="flex items-center justify-center h-full">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                      {getImageUrl(member) ? (
                        <img
                          src={getImageUrl(member)}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <span
                        className="text-xl font-bold text-gray-700 flex items-center justify-center w-full h-full bg-green-600"
                        style={{ display: getImageUrl(member) ? 'none' : 'flex' }}
                      >
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-semibold text-sm mb-3">{member.position}</p>
                  <p className="text-gray-500 text-xs mb-3">{member.education}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-500">{member.specialization}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Technical <span className="text-green-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Skilled professionals ensuring accurate analysis and quality results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={member._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className={`h-24 bg-gradient-to-r ${member.department === 'Chemical' ? 'from-green-400 to-green-500' : 'from-green-400 to-green-500'}`}>
                  <div className="flex items-center justify-center h-full">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden">
                      {getImageUrl(member) ? (
                        <img
                          src={getImageUrl(member)}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <span
                        className="text-lg font-bold text-gray-700 flex items-center justify-center w-full h-full"
                        style={{ display: getImageUrl(member) ? 'none' : 'flex' }}
                      >
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-semibold text-sm mb-2">{member.position}</p>
                  <div className="text-xs text-gray-500 mb-3">
                    <span className={`px-2 py-1 rounded-full ${member.department === 'Chemical' ? 'bg-green-100 text-green-800' : 'bg-green-100 text-green-800'}`}>
                      {member.department}
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-semibold text-gray-900">Education:</span>
                      <div className="text-gray-600">{member.education}</div>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Experience:</span>
                      <div className="text-gray-600">{member.experience}</div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're always looking for talented professionals to join our growing team.
              Explore our internship programs and career opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/internship"
                className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
              >
                Internship Programs
              </a>
              <a
                href="/contact"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Contact HR
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
