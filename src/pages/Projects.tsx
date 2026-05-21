import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  { 
    id: 1, 
    name: 'Indorama Eleme Fertilizer & Petrochemical', 
    client: 'Indorama', 
    location: 'Rivers State, Nigeria', 
    sector: 'Petrochemicals', 
    scope: 'Civil and structural erection, performed with Ucho James Engineering Limited.', 
    img: 'https://i.ibb.co/DFhdrMV/indorama-fertilizer.png',
    imgs: [
      'https://i.ibb.co/DFhdrMV/indorama-fertilizer.png',
      'https://i.ibb.co/xtHCmK7m/home-logo-1.png'
    ],
    year: '2023' 
  },
  { id: 2, name: 'Dangote Cement Plant Facility', client: 'Dangote Cement', location: 'Gboko, Benue State', sector: 'Cement', scope: 'Facility upgrades, structural reinforcement, and safety infrastructure installation.', img: 'https://images.unsplash.com/photo-1581092334241-7bc56598c160?auto=format&fit=crop&w=600&q=80', year: '2022' },
  { id: 3, name: 'BUA Cement Complex Expansion', client: 'BUA Cement', location: 'Okpella, Edo State', sector: 'Cement', scope: 'Piping, lagging of steam pipes, and civil foundational works.', img: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&w=600&q=80', year: '2023' },
  { id: 4, name: 'Premium Edible Oil Production Unit', client: 'Premium Edible Oil (FMN)', location: 'Nigeria', sector: 'FMCG', scope: 'Installation of PU panels, stainless steel pipe fabrication, and corrosion control.', img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80', year: '2021' },
  { id: 5, name: 'WACOT Rice Mill Electrical', client: 'WACOT Rice', location: 'Argungu, Kebbi State', sector: 'Agro-Allied', scope: 'Comprehensive electrical installation, cable tray routing, and LOTO safety training.', img: 'https://images.unsplash.com/photo-1549491763-90d5bc0e676d?auto=format&fit=crop&w=600&q=80', year: '2022' },
  { id: 6, name: 'Dano Facility Fire Hydrant System', client: 'Dano', location: 'Lagos Free Trade Zone', sector: 'FMCG', scope: 'Design and installation of full fire hydrant network and CO2 suppression systems.', img: 'https://i.ibb.co/jvgSqT2w/ibeju-lekki-dano.png', year: '2024' },
];

function ProjectImageSlider({ images, alt }: { images: string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-full overflow-hidden group/slider text-white">
      {/* Images container */}
      <div className="relative w-full h-full bg-neutral-900">
        {images.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={img}
              alt={`${alt} - Slide ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 opacity-90"
            />
          </div>
        ))}
      </div>

      {/* Nav Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/90 text-white p-1 rounded-full opacity-0 group-hover/slider:opacity-100 transition-opacity focus:outline-none"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/90 text-white p-1 rounded-full opacity-0 group-hover/slider:opacity-100 transition-opacity focus:outline-none"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-black/40 px-2 py-1 rounded-full">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setCurrentIndex(idx);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}


const equipment = [
  { name: 'Industrial Welding Machines', type: 'Fabrication', qty: 24, spec: 'Miller / Lincoln Heavy Duty' },
  { name: 'Pipe Threading & Beveling', type: 'Piping', qty: 15, spec: 'Ridgid 1224 & Auto Bevelers' },
  { name: 'FM200 Charging Rigs', type: 'Safety', qty: 5, spec: 'High-pressure refill stations' },
  { name: 'Scaffolding Systems', type: 'Civil', qty: '10,000+', spec: 'Galvanized tubular scaffolding' },
  { name: 'Gas Monitors & PPE Kits', type: 'Safety', qty: '500+', spec: 'MSA Altair 4X, Fall Arrest' },
  { name: 'Mobile Cranes', type: 'Logistics', qty: 3, spec: '20-Ton to 50-Ton Capacity' },
];

const categories = ['All', 'Petrochemicals', 'Cement', 'FMCG', 'Agro-Allied'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTab, setActiveTab] = useState<'projects' | 'equipment'>('projects');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.sector === activeCategory);

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Options */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b pb-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">Our Portfolio</h1>
            <p className="text-gray-600 max-w-2xl">Proven delivery across Nigeria's most demanding industrial environments. We own our equipment, ensuring independence and reliability.</p>
          </div>
          
            <div className="flex bg-white p-1 border border-[#eee] rounded-md shadow-sm self-start md:self-auto">
            <button 
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-2 font-bold text-[12px] uppercase tracking-wide transition-all border-none ${activeTab === 'projects' ? 'bg-[#0072BB] text-white shadow-sm rounded-sm' : 'text-[#666] hover:text-[#0072BB]'}`}
            >
              Featured Projects
            </button>
            <button 
              onClick={() => setActiveTab('equipment')}
              className={`px-6 py-2 font-bold text-[12px] uppercase tracking-wide transition-all border-none ${activeTab === 'equipment' ? 'bg-[#0072BB] text-white shadow-sm rounded-sm' : 'text-[#666] hover:text-[#0072BB]'}`}
            >
              Owned Equipment
            </button>
          </div>
        </div>

        {activeTab === 'projects' ? (
          <>
            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-[20px] py-[8px] text-[11px] font-bold uppercase tracking-wide transition-colors border ${
                    activeCategory === cat 
                      ? 'bg-white text-[#111111] border-[#E2E8F0]' 
                      : 'bg-white text-[#666] border-[#eee] hover:border-[#0072BB]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white border border-[#eee] overflow-hidden group hover:shadow-lg transition-all"
                  >
                    <div className="h-56 overflow-hidden relative border-b border-[#eee]">
                      <div className="absolute top-4 left-4 bg-[#1E293B] px-[12px] py-[6px] text-[10px] font-bold text-white uppercase tracking-wider z-10">
                        {project.year}
                      </div>
                      {project.imgs && project.imgs.length > 0 ? (
                        <ProjectImageSlider images={project.imgs} alt={project.name} />
                      ) : (
                        <img src={project.img} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
                      )}
                    </div>
                    <div className="p-[25px]">
                      <div className="flex items-center gap-2 mb-[10px]">
                        <span className="text-[10px] uppercase font-bold text-[#111111] tracking-wide">{project.sector}</span>
                      </div>
                      <h3 className="text-[18px] font-bold text-[#111111] mb-[15px] leading-[1.3]">{project.name}</h3>
                      <p className="text-[13px] font-bold text-[#111111] mb-[5px]">Client: <span className="text-[#666] font-normal">{project.client}</span></p>
                      <p className="text-[13px] font-bold text-[#111111] mb-[15px]">Location: <span className="text-[#666] font-normal">{project.location}</span></p>
                      <div className="bg-[#F4F4F4] p-[15px] text-[13px] text-[#666] leading-[1.6] border-l-[3px] border-[#0072BB]">
                        <span className="font-bold text-[#111111] block mb-1">Scope:</span>
                        {project.scope}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[#F4F4F4] border border-[#eee] p-[40px] md:p-[60px]"
          >
            <div className="max-w-3xl mb-[40px]">
              <h2 className="text-[28px] font-bold text-[#111111] mb-[15px]">Our Fleet & Equipment</h2>
              <p className="text-[14px] text-[#666] leading-[1.6]">
                Quadrupletech owns and maintains a vast inventory of specialized EPC plant, tools, and equipment. 
                This reduces our reliance on subcontractors, ensuring we mobilize faster and maintain strict quality control.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              {equipment.map((item, idx) => (
                <div key={idx} className="bg-white p-[25px] border border-[#eee] flex flex-col h-full hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-[20px]">
                    <span className="px-[12px] py-[6px] border border-[#ddd] text-[#111111] text-[10px] font-bold uppercase">{item.type}</span>
                    <span className="text-[28px] font-black text-[#ddd] leading-none">{item.qty}</span>
                  </div>
                  <h3 className="text-[16px] font-bold text-[#111111] mb-[15px]">{item.name}</h3>
                  <p className="text-[12px] text-[#888] mt-auto pt-[15px] border-t border-[#eee]">{item.spec}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
