import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function NavBar() {
  const [open, setOpen] = useState(false);
  const sections = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <nav className="fixed w-full bg-surface/80 backdrop-blur p-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-primary font-bold text-xl hover:text-white md:hidden">
          KS
        </Link>
        {/* Hamburger button */}
        <button
          className="md:hidden text-accent"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/* Menu items */}
        <ul
          className={`${
            open ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row md:space-x-8 bg-surface md:bg-transparent absolute md:static top-full left-0 w-full md:w-full md:justify-center p-4 md:p-0`}
        >
          {sections.map((section) => (
            <li key={section} className="mt-2 md:mt-0">
              <Link
                href={`#${section.toLowerCase()}`}
                scroll={false}
                className="text-accent hover:text-primary transition text-lg md:text-2xl"
                onClick={() => setOpen(false)}
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}