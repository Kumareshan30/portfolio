// components/Certifications.tsx
import React from 'react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  link?: string;
  logo?: string; // optional issuer logo URL
}

const certifications: Certification[] = [
  {
    title: 'Google Advanced Data Analytics',
    issuer: 'Google',
    date: 'March 2025',
    link: '/Coursera_Data_Science_Foundations.pdf',
    logo: '/logos/Google_Analytics.png',
  },
  {
    title: 'Data Science Professional Certificate',
    issuer: 'IBM',
    date: 'Dec 2024',
    link: '/Coursera_IBM_EDA_for_ML.pdf',
    logo: '/logos/IBM-Data-Science-Professional-Certification.webp',
  },
  {
    title: 'Microsoft Certified: Azure Data Scientist Associate',
    issuer: 'Microsoft',
    date: 'Aug 2022',
    link: '/Coursera_Google_Get_Started_with_python.pdf',
    logo: '/logos/azure.png',
  },
  {
    title: 'IoT and ML Certificate',
    issuer: 'Bolt IoT',
    date: 'Jul 2021',
    link: '/Certificate_Bolt_IoT.pdf',
    logo: '/logos/Bolt.webp',
  },
  
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-8 max-w-7xl mx-auto">
      <h3 className="text-4xl font-semibold text-primary mb-8">Certifications</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert) => (
          <a
            key={cert.title}
            href={cert.link ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-start p-6 bg-background rounded-lg shadow hover:shadow-lg transition"
          >
            {cert.logo && (
              <img
                src={cert.logo}
                alt={`${cert.issuer} logo`}
                className="h-12 w-auto mb-4"
              />
            )}
            <h4 className="text-xl font-medium text-primary mb-1">{cert.title}</h4>
            <p className="text-accent mb-2">{cert.issuer}</p>
            <p className="text-sm text-white">Issued {cert.date}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
