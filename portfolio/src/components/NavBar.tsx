import Link from 'next/link';
export function NavBar() {
  return (
    <nav className="fixed w-full bg-surface/80 backdrop-blur p-8 z-50">
      <ul className="flex justify-center space-x-8">
        {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((section) => (
          <li key={section}>
            <Link
              href={`#${section.toLowerCase()}`}
              scroll={false}
              className="text-accent hover:text-primary transition text-2xl"
            >
              {section}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}