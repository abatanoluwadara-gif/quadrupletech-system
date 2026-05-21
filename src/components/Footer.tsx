import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, ArrowRight } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white pt-[60px] pb-[40px] border-t-4 border-[#0072BB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-[60px]">
          
          {/* Brand & Address */}
          <div>
            <Link to="/" className="inline-block mb-6 text-white hover:text-white">
              <Logo />
            </Link>
            <p className="text-gray-300 text-sm mb-6 max-w-sm">
              Execute EPC contracts using latest state-of-the-art technology, deliver on schedule, competitively priced quality products.
            </p>
            <div className="flex items-start gap-4 mb-4 text-gray-300 text-sm">
              <MapPin className="shrink-0 mt-1 text-white" size={18} />
              <p>5 Ayegbami Street, Idotun,<br />Lagos Free Zone, Ibeju-Lekki,<br />Lagos, Nigeria</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-[#F39C12] inline-block rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/who-we-are" className="hover:text-[#F39C12] transition-colors flex items-center gap-2"><ArrowRight size={14} /> About Us</Link></li>
              <li><Link to="/what-we-do" className="hover:text-[#F39C12] transition-colors flex items-center gap-2"><ArrowRight size={14} /> Our Services</Link></li>
              <li><Link to="/projects" className="hover:text-[#F39C12] transition-colors flex items-center gap-2"><ArrowRight size={14} /> Projects Portfolio</Link></li>
              <li><Link to="/sustainability" className="hover:text-[#F39C12] transition-colors flex items-center gap-2"><ArrowRight size={14} /> HSE & Sustainability</Link></li>
              <li><Link to="/careers" className="hover:text-[#F39C12] transition-colors flex items-center gap-2"><ArrowRight size={14} /> Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-[#F39C12] inline-block rounded-full"></span>
              Services
            </h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/what-we-do" className="hover:text-[#F39C12] transition-colors flex items-center gap-2"><ArrowRight size={14} /> Engineering</Link></li>
              <li><Link to="/what-we-do" className="hover:text-[#F39C12] transition-colors flex items-center gap-2"><ArrowRight size={14} /> Safety Services</Link></li>
              <li><Link to="/what-we-do" className="hover:text-[#F39C12] transition-colors flex items-center gap-2"><ArrowRight size={14} /> Logistics & Procurement</Link></li>
              <li><Link to="/what-we-do" className="hover:text-[#F39C12] transition-colors flex items-center gap-2"><ArrowRight size={14} /> HSE Training</Link></li>
              <li><Link to="/what-we-do" className="hover:text-[#F39C12] transition-colors flex items-center gap-2"><ArrowRight size={14} /> Civil Works</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-[#F39C12] inline-block rounded-full"></span>
              Get In Touch
            </h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white"><Phone size={14} /></div>
                <div>
                  <a href="tel:+2349073463078" className="block hover:text-[#F39C12] transition-colors">0907 346 3078</a>
                  <a href="tel:+2348026125351" className="block hover:text-[#F39C12] transition-colors">0802 612 5351</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white"><Mail size={14} /></div>
                <a href="mailto:Quadrupletech036@gmail.com" className="hover:text-[#F39C12] transition-colors break-all">
                  Quadrupletech036@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-8 flex gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F39C12] hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F39C12] hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F39C12] hover:text-white transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-end justify-between gap-6 text-[12px] text-gray-500">
          <div className="space-y-1">
            <div><strong>Headquarters:</strong> 5 Ayegbami Street, Idotun, Lagos Free Zone, Ibeju-Lekki</div>
            <div><strong>Contact:</strong> 09073463078 | Quadrupletech036@gmail.com</div>
            <div>© {new Date().getFullYear()} Quadrupletech Engineering and Services Limited. All rights reserved.</div>
            <div className="text-gray-400">Built with Google Studio · Antigravity 3.0 · Firebase · Hosted on Nigerian CDN edge node</div>
          </div>
          
          <div className="flex flex-col items-end gap-4">
            <div className="flex gap-4">
              <Link to="/sustainability" className="hover:text-[#F39C12] transition-colors uppercase tracking-wide">Quality Policy</Link>
              <Link to="/sustainability" className="hover:text-[#F39C12] transition-colors uppercase tracking-wide">HSE Policy</Link>
            </div>
            <div className="bg-[#0072BB] text-white px-[15px] py-[8px] text-[11px] font-bold rounded-[4px] flex items-center gap-[8px] tracking-wide uppercase">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              HSE CERTIFIED: ISO 14001:2004
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
