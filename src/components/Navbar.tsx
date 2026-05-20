import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Who We Are', path: '/who-we-are' },
  { name: 'What We Do', path: '/what-we-do' },
  { name: 'Projects', path: '/projects' },
  { name: 'Sustainability', path: '/sustainability' },
  { name: 'Careers', path: '/careers' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300 bg-[#313B44] border-b-[4px] border-[#F39C12]',
        scrolled ? 'shadow-md py-3' : 'py-5'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 z-50 group">
            <img 
              src="/logo.jpg" 
              alt="Quadrupletech Logo" 
              className="h-10 md:h-12 w-auto object-contain bg-white rounded-full p-1"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                e.currentTarget.nextElementSibling?.classList.add('flex');
              }}
            />
            <div className="hidden items-center gap-2">
              <div className="w-8 h-8 bg-[#F39C12] rounded flex items-center justify-center text-[#313B44] font-bold text-sm font-display">Q</div>
              <div className="font-black text-[22px] tracking-tight text-white uppercase font-display group-hover:text-[#F39C12] transition-colors">
                QUADRUPLE<span className="text-[#F39C12] group-hover:text-white transition-colors">TECH</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-[13px] font-medium transition-colors hover:text-[#F39C12] uppercase tracking-[1px]',
                  location.pathname === link.path ? 'text-[#F39C12]' : 'text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact-us"
              className="px-6 py-2.5 rounded-sm bg-[#F39C12] text-[#313B44] text-[13px] font-bold hover:bg-white transition-colors uppercase tracking-[0.5px]"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'flex items-center justify-between text-[15px] font-medium py-3 border-b border-gray-100 uppercase tracking-wide',
                    location.pathname === link.path ? 'text-[#F39C12]' : 'text-[#313B44]'
                  )}
                >
                  {link.name}
                  <ChevronRight size={18} className="text-gray-400" />
                </Link>
              ))}
              <Link
                to="/contact-us"
                className="mt-4 w-full text-center px-6 py-3 rounded-sm bg-[#F39C12] text-[#313B44] font-bold hover:bg-[#313B44] hover:text-white transition-colors uppercase"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
