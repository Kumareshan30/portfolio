import React from 'react';
import Image from 'next/image';

export function Contact() {
  const contacts = [
    {
      name: 'Email',
      link: 'mailto:kumarex30@gmail.com',
      logo: '/logos/email.png',
      info: 'kumarex30@gmail.com'
    },
    {
      name: 'LinkedIn',
      link: 'https://linkedin.com/in/kumareshan30',
      logo: '/logos/linkedin.svg',
      info: 'linkedin.com/in/kumareshan30'
    },
    {
      name: 'GitHub',
      link: 'https://github.com/Kumareshan30',
      logo: '/logos/github.svg',
      info: 'github.com/Kumareshan30'
    }
  ];

  return (
    <section id="contact" className="py-20 px-8 bg-surface">
      <h3 className="text-4xl font-semibold text-primary mb-8 text-center">Contact</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {contacts.map((c) => (
          <a
            key={c.name}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-background rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="relative h-16 w-16 mb-4">
              <Image src={c.logo} alt={`${c.name} logo`} layout="fill" objectFit="contain" />
            </div>
            <h4 className="text-xl font-medium text-accent mb-2">{c.name}</h4>
            <p className="hidden md:block text-accent text-sm text-center">{c.info}</p>
          </a>
        ))}
      </div>
    </section>
  );
}