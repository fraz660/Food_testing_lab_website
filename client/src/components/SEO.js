import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageMeta = {
  '/': {
    title: 'Gram Tarang Food Testing Lab | NABL Accredited Laboratory',
    description: 'GTFTL is a NABL-accredited analytical testing laboratory for food, pharmaceutical, marine products, and forensic sample analysis in Odisha, India.'
  },
  '/about': {
    title: 'About Us | GTFTL - Gram Tarang Food Testing Lab',
    description: 'Learn about GTFTL, a Social Entrepreneurial Outreach of Centurion University. NABL-accredited since 2022, serving food safety and quality assurance.'
  },
  '/services': {
    title: 'Testing Services | GTFTL - Food, Pharmaceutical & Marine Testing',
    description: 'Comprehensive testing services including food safety, pharmaceutical analysis, marine products, forensic testing, and microbiological analysis.'
  },
  '/equipment': {
    title: 'Laboratory Equipment | GTFTL - LC-MS/MS, GC-MS/MS, ICP-MS & More',
    description: 'State-of-the-art laboratory instruments including LC-MS/MS, GC-MS/MS, ICP-MS, HPLC, FTIR, and UV-Vis for precise analytical testing.'
  },
  '/team': {
    title: 'Our Team | GTFTL - Expert Scientists & Analysts',
    description: 'Meet the GTFTL team of expert scientists, analysts, and researchers. Board of Directors and Technical Staff profiles.'
  },
  '/internship': {
    title: 'Internship Programs | GTFTL - Hands-on Lab Training',
    description: 'Join GTFTL internship programs (15 days to 6 months) for hands-on training in analytical chemistry, microbiology, and food testing.'
  },
  '/contact': {
    title: 'Contact Us | GTFTL - Get in Touch',
    description: 'Contact Gram Tarang Food Testing Lab for testing services, quotes, and inquiries. Located at IDCO Industrial Estate, Paralakhemundi, Odisha.'
  },
  '/research': {
    title: 'Research & Development | GTFTL - Innovation in Analytical Science',
    description: 'GTFTL R&D focuses on food safety, pharmaceutical analysis, marine biotechnology, and environmental monitoring through academic collaboration.'
  },
  '/blog': {
    title: 'Blog & News | GTFTL - Latest Updates',
    description: 'Stay updated with the latest news, research articles, and achievements from Gram Tarang Food Testing Laboratory.'
  },
  '/privacy-policy': {
    title: 'Privacy Policy | GTFTL',
    description: 'Read the GTFTL Privacy Policy. Learn how we collect, use, and protect your personal information.'
  },
  '/terms-of-service': {
    title: 'Terms of Service | GTFTL',
    description: 'Read the GTFTL Terms of Service governing use of our website and analytical testing services.'
  },
  '/sitemap': {
    title: 'Sitemap | GTFTL - All Pages',
    description: 'Navigate through all pages of the GTFTL website including services, team, equipment, and research.'
  }
};

const SEO = () => {
  const location = useLocation();
  const path = location.pathname;
  const meta = pageMeta[path] || pageMeta['/'];

  useEffect(() => {
    // Update page title
    document.title = meta.title;

    // Update meta description
    let descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute('content', meta.description);
    }

    // Update OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.description);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', `https://ftl.org.in${path}`);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `https://ftl.org.in${path}`);

  }, [path, meta]);

  return null; // This component only manages <head> tags
};

export default SEO;
