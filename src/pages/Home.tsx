import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Wrench, ShieldAlert, Truck, GraduationCap, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { useEffect, useState } from 'react';

const services = [
  { icon: Wrench, title: 'Engineering', desc: 'Design, fabrication, and installation for oil & gas pipe and structural systems.', color: 'border-[#0072BB]' },
  { icon: ShieldAlert, title: 'Safety Services', desc: 'Fire infrastructure systems, PPE supply, and full-scale safety installations.', color: 'border-[#0072BB]' },
  { icon: Truck, title: 'Logistics', desc: 'Supply of industrial materials, equipment leasing, and general contractor services.', color: 'border-[#0072BB]' },
  { icon: GraduationCap, title: 'HSE Training', desc: 'Behaviour-Based Safety, fire drills, and emergency preparedness training.', color: 'border-[#F39C12]' },
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
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden pt-20">
        {/* Dynamic Industrial Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url("https://images.pexels.com/photos/36794532/pexels-photo-36794532.jpeg")` 
          }}
        />
        {/* Expertly blended gradient wash overlay to protect text legibility and match light base tone */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent md:from-white md:via-white/85 md:to-white/25" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[600px]"
          >
            <h1 className="text-[42px] md:text-[56px] font-bold text-[#111111] tracking-tight leading-[1.1] mb-[15px]">
              Leading EPC Solutions for Nigeria’s Industrial Future
            </h1>
            <p className="text-[16px] text-[#334155] mb-[25px] leading-[1.5] max-w-xl font-medium">
              Specializing in Engineering, Procurement, Fire Infrastructure & Safety Services, and Construction across Oil & Gas, Petrochemicals, FMCG Sectors, Aviation Sector (Airport), Energy Stations, Petroleum and Gas Stations, Sport/Recreation and Entertainment Centres, Event & Multipurpose Halls, Warehouses, Large Market (Private & Public), Restaurants, Hotels, School and Hostels, Private & Public Sectors. Delivering quality through state-of-the-art technology. In Nigeria, Africa and Beyond
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/contact-us" className="px-[28px] py-[12px] bg-[#0072BB] hover:bg-[#1E293B] hover:text-[#FFFFFF] text-white rounded-[2px] font-bold text-[14px] uppercase transition-all flex items-center gap-2 border-none w-fit">
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="hidden md:block absolute right-[60px] bottom-[40px] opacity-[0.06] text-[120px] font-black text-[#111111] pointer-events-none select-none tracking-tighter leading-none z-10">
          EPC
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
            {services.map((service, idx) => {
              const ServiceIcon = service.icon;
              return (
                <motion.div 
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-7 border border-gray-100 rounded-2xl relative flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group shadow-sm"
                >
                  {/* Top accent highlight bar */}
                  <div className={cn("absolute top-0 left-0 right-0 h-[5px]", service.color === 'border-[#F39C12]' ? 'bg-[#F39C12]' : 'bg-[#0072BB]')} />
                  
                  {/* Icon & Label */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={cn("text-[11px] uppercase font-extrabold tracking-wider", service.color === 'border-[#F39C12]' ? 'text-[#F39C12]' : 'text-[#0072BB]')}>
                      {service.title}
                    </span>
                    <div className={cn("p-2.5 rounded-xl transition-colors duration-350", 
                      service.color === 'border-[#F39C12]' ? 'bg-[#F39C12]/10 text-[#F39C12] group-hover:bg-[#F39C12]/20' : 'bg-[#0072BB]/10 text-[#0072BB] group-hover:bg-[#0072BB]/20'
                    )}>
                      <ServiceIcon size={20} strokeWidth={2.2} />
                    </div>
                  </div>
                  
                  <h3 className="text-[19px] font-bold text-[#111111] mb-[12px] group-hover:text-[#0072BB] transition-colors duration-300">{service.title}</h3>
                  <p className="text-[13.5px] leading-[1.6] text-[#555] m-0 flex-grow">{service.desc}</p>
                  
                  <div className="mt-6 pt-4 border-t border-gray-50">
                    <Link to="/what-we-do" className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase text-[#111111] hover:text-[#0072BB] transition-all tracking-wider group-hover:gap-2.5">
                      Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-[#F4F4F4] border-b border-[#ddd]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-around items-center py-6 md:py-0 md:h-[80px] gap-6 md:gap-0">
            {metrics.map((metric, idx) => (
              <div key={metric.label} className="text-center">
                <span className="text-[28px] font-black text-[#111111] block leading-none mb-1">
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">Featured Projects</h2>
              <div className="w-16 h-1 bg-[#F39C12] mb-6"></div>
              <p className="text-gray-600">Delivering structural and civil excellence to top-tier clients across Nigeria.</p>
            </div>
            <Link to="/projects" className="px-6 py-3 border border-[#F39C12] text-[#111111] hover:bg-white hover:text-[#111111] transition-colors font-medium">
              View All Projects
            </Link>
          </div>

          <div className="w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden h-[450px] bg-slate-950 rounded-lg shadow-md"
            >
              <img 
                src="https://i.ibb.co/96T3t7x/pexels-mrgajowy3-teodor-2158318376-36181870.jpg" 
                alt="Featured Projects Portfolio" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-[1.02] group-hover:opacity-50 transition-all duration-700 select-none pointer-events-none" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent">
                <span className="text-[#F39C12] text-sm md:text-base font-bold mb-2 uppercase tracking-wider">
                  Featured Project Deliveries
                </span>
                <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-4 tracking-tight max-w-3xl leading-tight">
                  High-Impact Industrial Infrastructure & Turnkey EPCC Solutions
                </h3>
                <p className="text-slate-200 max-w-2xl mb-6 text-sm md:text-base leading-relaxed hidden sm:block">
                  Proven delivery of multi-disciplinary civil, structural engineering, mechanical pipe fabrication, and robust safety control networks for leading FMCG, oil & gas, and agro-allied manufacturers across Nigeria.
                </p>
                <div>
                  <Link 
                    to="/projects" 
                    className="inline-flex items-center gap-2 bg-[#F39C12] hover:bg-[#d68a10] text-[#111111] font-bold px-6 py-3 rounded-sm transition-all shadow-md text-sm uppercase tracking-wider"
                  >
                    Explore Full Portfolio <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HSE Banner */}
      <section className="py-20 bg-neutral-950 text-white relative overflow-hidden border-t border-b border-white/5">
        {/* Shiny Glossy Reflection & Radar Backlight */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(243,156,18,0.08),transparent_70%)] pointer-events-none"></div>
        {/* Metallic Linear Highlights */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldAlert className="w-16 h-16 mx-auto mb-6 text-[#F39C12] filter drop-shadow-[0_0_15px_rgba(243,156,18,0.3)] animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase bg-gradient-to-r from-white via-neutral-100 to-amber-500 bg-clip-text text-transparent">
            Zero Damage. Every Project.
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            Strict adherence to ISO 14001:2004 and ISO 45001:2018 standard guidelines. 
            We protect the environment and safeguard every employee on site with proactive risk assessments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="px-8 py-4 bg-neutral-900/80 rounded-xl border border-white/10 backdrop-blur-md flex items-center justify-center gap-3 shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:border-[#F39C12]/40 hover:bg-neutral-900 transition-all duration-300">
              <CheckCircle2 size={18} className="text-[#F39C12] shrink-0" /> <span className="text-sm font-semibold tracking-wide text-slate-200">ISO 9001:2000 Framework</span>
            </div>
            <div className="px-8 py-4 bg-neutral-900/80 rounded-xl border border-white/10 backdrop-blur-md flex items-center justify-center gap-3 shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:border-[#F39C12]/40 hover:bg-neutral-900 transition-all duration-300">
              <CheckCircle2 size={18} className="text-[#F39C12] shrink-0" /> <span className="text-sm font-semibold tracking-wide text-slate-200">ISO 45001:2018 Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Get In Touch */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 border-[40px] border-[#F39C12]/5 rounded-full"></div>
            
            <div className="max-w-2xl relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">Partner with Quadrupletech</h2>
              <p className="text-gray-700 text-lg">
                Need a reliable EPC contractor for your next major industrial project? 
                Let's discuss how we can execute it safely, on time, and on budget.
              </p>
            </div>
            
            <div className="flex-shrink-0 relative z-10 w-full md:w-auto">
              <Link to="/contact-us" className="w-full md:w-auto text-center block px-8 py-4 bg-[#0072BB] hover:bg-[#1E293B] hover:text-[#FFFFFF] text-white font-bold text-lg transition-all rounded shadow-lg hover:shadow-xl">
                Get In Touch Today
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
