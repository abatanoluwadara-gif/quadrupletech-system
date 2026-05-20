import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Wrench, ShieldAlert, Truck, GraduationCap, Building2, HardHat, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { useEffect, useState } from 'react';

const services = [
  { icon: Wrench, title: 'Engineering', desc: 'Design, fabrication, and installation for oil & gas pipe and structural systems.', color: 'border-[#0072BB]' },
  { icon: ShieldAlert, title: 'Safety Services', desc: 'Fire infrastructure systems, PPE supply, and full-scale safety installations.', color: 'border-[#DA291C]' },
  { icon: Truck, title: 'Logistics', desc: 'Supply of industrial materials, equipment leasing, and general contractor services.', color: 'border-[#F39C12]' },
  { icon: GraduationCap, title: 'HSE Training', desc: 'Behaviour-Based Safety, fire drills, and emergency preparedness training.', color: 'border-[#313B44]' },
  { icon: Building2, title: 'Civil Works', desc: 'Structural erection, renovation, and general civil construction.', color: 'border-slate-400' },
  { icon: HardHat, title: 'Project Management', desc: 'Proactive coordination, reporting, and comprehensive post-project documentation.', color: 'border-emerald-600' },
];

const metrics = [
  { value: 150, label: 'Projects Completed', suffix: '+' },
  { value: 6, label: 'Sectors Served', suffix: '' },
  { value: 8, label: 'Years Active', suffix: '+' },
  { value: 0, label: 'LTI (Lost Time Injury)', suffix: '' },
];

export default function Home() {
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const intervals = metrics.map((m, i) => {
      let current = 0;
      const step = Math.max(1, Math.floor(m.value / 30));
      return setInterval(() => {
        if (current < m.value) {
          current = Math.min(current + step, m.value);
          setCounters((prev) => {
            const next = [...prev];
            next[i] = current;
            return next;
          });
        }
      }, 50);
    });
    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Reel */}
      <section className="relative h-screen min-h-[600px] flex items-center bg-[linear-gradient(rgba(49,59,68,0.85)_0%,rgba(49,59,68,0.85)_100%),repeating-linear-gradient(45deg,#313B44_0px,#313B44_10px,#232B32_10px,#232B32_20px)] overflow-hidden pt-20">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[600px]"
          >
            <h1 className="text-[42px] md:text-[56px] font-bold text-white tracking-tight leading-[1.1] mb-[15px]">
              Leading EPC Solutions for Nigeria’s Industrial Future
            </h1>
            <p className="text-[16px] text-white/90 mb-[25px] leading-[1.5] max-w-xl font-medium">
              Specializing in Engineering, Procurement, and Construction across Oil & Gas, Petrochemicals, and FMCG sectors. Delivering quality through state-of-the-art technology.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/contact-us" className="px-[28px] py-[12px] bg-[#F39C12] hover:bg-white text-[#313B44] rounded-[2px] font-bold text-[14px] uppercase transition-all flex items-center gap-2 border-none w-fit">
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="hidden md:block absolute right-[60px] bottom-[40px] opacity-10 text-[120px] font-black text-white pointer-events-none select-none tracking-tighter leading-none">
          EPC
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {services.map((service, idx) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn("bg-white p-[25px] border border-[#eee] border-t-[4px] relative flex flex-col hover:shadow-lg transition-all", service.color)}
              >
                <span className={cn("text-[10px] uppercase font-bold mb-[8px] block tracking-wide", service.color.replace('border-', 'text-'))}>
                  {service.title}
                </span>
                <h3 className="text-[18px] font-bold text-[#313B44] mb-[10px]">{service.title}</h3>
                <p className="text-[13px] leading-[1.6] text-[#666] m-0">{service.desc}</p>
                <div className="mt-6">
                  <Link to="/what-we-do" className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase text-[#313B44] hover:text-[#F39C12] transition-colors tracking-wide">
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-[#F4F4F4] border-b border-[#ddd]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-around items-center py-6 md:py-0 md:h-[80px] gap-6 md:gap-0">
            {metrics.map((metric, idx) => (
              <div key={metric.label} className="text-center">
                <span className="text-[28px] font-black text-[#313B44] block leading-none mb-1">
                  {counters[idx]}{metric.suffix}
                </span>
                <span className="text-[11px] uppercase text-[#666] tracking-[1px] font-medium block">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-[#313B44] mb-4">Featured Projects</h2>
              <div className="w-16 h-1 bg-[#0072BB] mb-6"></div>
              <p className="text-gray-600">Delivering structural and civil excellence to top-tier clients across Nigeria.</p>
            </div>
            <Link to="/projects" className="px-6 py-3 border border-[#313B44] text-[#313B44] hover:bg-[#313B44] hover:text-white transition-colors font-medium">
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Indorama Eleme Fertilizer", subtitle: "Civil & Structural Erection", img: "https://images.unsplash.com/photo-1579208035694-8ab34759089e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { title: "WACOT Rice, Argungu", subtitle: "Electrical Installation", img: "https://images.unsplash.com/photo-1549491763-90d5bc0e676d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { title: "Dangote Cement, Gboko", subtitle: "Facility Upgrades", img: "https://images.unsplash.com/photo-1581092334241-7bc56598c160?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
            ].map((p, i) => (
              <motion.div 
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative overflow-hidden h-[400px] bg-gray-900"
              >
                <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-[#F39C12] text-sm font-bold mb-2 uppercase tracking-wider">{p.subtitle}</span>
                  <h3 className="text-2xl font-bold text-white mb-4">{p.title}</h3>
                  <Link to="/projects" className="inline-flex items-center gap-2 text-white font-medium group-hover:text-[#0072BB] transition-colors">
                    Explore Project <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HSE Banner */}
      <section className="py-20 bg-[#DA291C] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldAlert className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Zero Damage. Every Project.</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10 font-medium">
            Strict adherence to ISO 14001:2004 and OHSAS 18001:2007. 
            We protect the environment and safeguard every employee on site.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="px-6 py-3 bg-white/10 rounded border border-white/20 flex items-center justify-center gap-2">
              <CheckCircle2 size={18} className="text-[#F39C12]" /> ISO 9001:2000 Framework
            </div>
            <div className="px-6 py-3 bg-white/10 rounded border border-white/20 flex items-center justify-center gap-2">
              <CheckCircle2 size={18} className="text-[#F39C12]" /> OHSAS 18001 Compliant
            </div>
          </div>
        </div>
      </section>

      {/* CTA Get In Touch */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#313B44] rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 border-[40px] border-white/5 rounded-full"></div>
            
            <div className="max-w-2xl relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Partner with Quadrupletech</h2>
              <p className="text-gray-300 text-lg">
                Need a reliable EPC contractor for your next major industrial project? 
                Let's discuss how we can execute it safely, on time, and on budget.
              </p>
            </div>
            
            <div className="flex-shrink-0 relative z-10 w-full md:w-auto">
              <Link to="/contact-us" className="w-full md:w-auto text-center block px-8 py-4 bg-[#F39C12] hover:bg-white text-[#313B44] font-bold text-lg transition-all rounded shadow-lg hover:shadow-xl">
                Get In Touch Today
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
