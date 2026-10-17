import Link from 'next/link';
import { Button } from '../ui/button';
import Hero from '../sections/Hero';

const NavLinks = [
  {
    id: 1,
    title: 'Home',
    href: '/',
  },
  {
    id: 2,
    title: 'About Me',
    href: '/about',
  },
  {
    id: 3,
    title: 'Projects',
    href: '/projects',
  },
  {
    id: 4,
    title: 'Skills',
    href: '/skills',
  },
  {
    id: 5,
    title: 'Contact Me',
    href: '/contact',
  },
];

const Navbar = () => {
  return (
    <header className="max-w-4xl mx-auto w-full my-5 border p-2 rounded-full">
      <nav className="flex items-center justify-between">
        <Link href={'/'}>Asilbek</Link>
        <ul className="flex items-center gap-7">
          {NavLinks.map((item) => {
            const { id, title, href } = item;
            return (
              <li key={id}>
                <Link href={href}>{title}</Link>
              </li>
            );
          })}
        </ul>
        <Button>Download CV</Button>
      </nav>
      <Hero />
    </header>
  );
};

export default Navbar;
