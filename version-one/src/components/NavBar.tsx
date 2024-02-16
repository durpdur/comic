import Link from 'next/link';

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">{title}</h1>
      <nav className="flex gap-4">
        <Link href="/" className="text-white hover:underline">Home</Link>
        <Link href="/about" className="text-white hover:underline">About</Link>
        <Link href="/contact" className="text-white hover:underline">Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;
