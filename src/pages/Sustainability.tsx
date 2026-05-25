import { useState, useEffect } from 'react';
import { ShieldAlert, Award, FileText, LayoutDashboard, Globe, ChevronLeft, ChevronRight, Flame } from 'lucide-react';

const certs = [
  { name: 'ISO 9001:2000', label: 'Quality Management', active: true, desc: 'Ensuring global quality standards across all procurement and fabrication processes.' },
  { name: 'ISO 14001:2004', label: 'Environmental Management', active: true, desc: 'Minimizing our environmental footprint and adhering to strict waste management.' },
  { name: 'ISO 45001:2018', label: 'Occupational Health & Safety', active: true, desc: 'ISO 45001:2018 is the global standard for Occupational Health & Safety Management systems. It establishes a proactive framework for preventing work-related injuries, managing operational hazards, reducing site incidents, and continuously improving workforce safety.' },
  { name: 'CAC / RC 7398394', label: 'Corporate Registration', active: true, desc: 'Fully incorporated in Nigeria. TIN: 31668384-0001.' },
  { name: 'DPR Certification', label: 'Petroleum Resources', active: false, desc: 'Targeting compliance for direct upstream operations.' },
  { name: 'NCDMB', label: 'Nigerian Content', active: false, desc: 'Committed to local capacity building and technology transfer.' },
];

export default function Sustainability() {
  const asenwareImages = [
    "https://i.ibb.co/gbcQrw14/asenware-2.png",
    "https://i.ibb.co/xKJdN0Q1/asenware.jpg",
    "https://i.ibb.co/FCg1XBb/fire-system-lebruni.png"
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % asenwareImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [asenwareImages.length]);

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header Section */}
      <div className="relative h-[480px] mb-20 bg-slate-950 flex items-center justify-center overflow-hidden">
        <img 
          src="https://i.ibb.co/4ZP6CMn8/pexels-govin-mu-2897273-17166070.jpg" 
          alt="Sustainability & HSE Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-45 scale-105 select-none pointer-events-none" 
          referrerPolicy="no-referrer"
        />
        {/* Soft elegant gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-slate-950/75" />
        
        <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl">
          <ShieldAlert className="w-16 h-16 text-[#F39C12] mx-auto mb-6 drop-shadow-md" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 uppercase drop-shadow-sm">
            Sustainability &amp; HSE
          </h1>
          <div className="w-28 h-1 bg-[#F39C12] mx-auto rounded-full mb-6 shadow-sm"></div>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-100 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow">
            Zero Damage. Every Project. We build the future responsibly, prioritizing the safety of our people and the protection of the environment.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* IOC Explainer */}
        <div className="bg-[#1E293B] text-white p-[40px] md:p-[60px] mb-20 flex flex-col lg:flex-row gap-[40px] items-center border-t-4 border-[#F39C12]">
          <div className="lg:w-1/2">
            <h2 className="text-[28px] font-bold mb-[20px] text-white">Why Our Standards Matter</h2>
            <p className="text-[14px] text-gray-300 mb-[15px] leading-[1.6]">
              Multinational Oil & Gas operators (IOCs) and national operators (NOCs) in Nigeria require impeccable HSE records before awarding contracts. 
            </p>
            <p className="text-[14px] text-gray-300 mb-[30px] leading-[1.6]">
              Quadrupletech's deep alignment with ISO frameworks—including ISO 45001:2018 (Occupational Health & Safety), ISO 14001:2004 (Environmental Management), and ISO 9001:2000 (Quality Management)—ensures that our safety protocols integrate seamlessly into the overarching safety architecture of clients like Indorama and Dangote, preventing costly shutdowns and ensuring regulatory compliance.
            </p>
            <button className="flex items-center gap-2 px-[24px] py-[10px] bg-[#0072BB] hover:bg-[#1E293B] hover:text-[#FFFFFF] text-white font-bold transition-colors text-[12px] uppercase tracking-wide border-none">
              <FileText size={16} /> Download HSE Policy PDF
            </button>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-[15px] w-full">
            <div className="bg-white/10 p-[25px] text-center border border-[#0072BB]/30">
              <div className="text-[36px] font-black text-[#F39C12] mb-1">100%</div>
              <div className="text-[11px] text-gray-300 uppercase tracking-wide font-bold">PPE Compliance</div>
            </div>
            <div className="bg-white/10 p-[25px] text-center border border-[#0072BB]/30">
              <div className="text-[36px] font-black text-[#F39C12] mb-1">BBS</div>
              <div className="text-[11px] text-gray-300 uppercase tracking-wide font-bold">Behavior-Based Safety</div>
            </div>
            <div className="bg-white/10 p-[25px] text-center border border-[#0072BB]/30">
              <div className="text-[36px] font-black text-[#F39C12] mb-1">LOTO</div>
              <div className="text-[11px] text-gray-300 uppercase tracking-wide font-bold">Lockout/Tagout Protocols</div>
            </div>
            <div className="bg-white/10 p-[25px] text-center border border-[#0072BB]/30">
              <div className="text-[36px] font-black text-[#F39C12] mb-1">Daily</div>
              <div className="text-[11px] text-gray-300 uppercase tracking-wide font-bold">Toolbox Talks</div>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-[#111111] mb-8 text-center">Certifications & Alignments</h2>
          
          {/* Main CAC Certification Feature Showcase */}
          <div id="cac-certification-showcase" className="mb-12 bg-neutral-50 border border-neutral-100 rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative bg-white p-4 rounded-lg shadow-sm border border-neutral-200/60 max-w-[340px] w-full">
                  <div className="absolute -top-3 -right-3 bg-[#F39C12] text-[#111111] text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm z-10">
                    Main Certification
                  </div>
                  <img 
                    id="cac-certificate-img"
                    src="https://i.ibb.co/BHdng8Xg/cac-certification.png" 
                    alt="Corporate Affairs Commission (CAC) Certification" 
                    className="w-full h-auto object-contain rounded hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div id="cac-certification-details" className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="text-[#0072BB]" size={20} />
                  <span className="text-xs font-semibold text-[#0072BB] uppercase tracking-wider">Official CAC Registration</span>
                </div>
                <h3 className="text-2xl font-bold text-[#111111] mb-4">Federal Republic of Nigeria Incorporation</h3>
                <div className="w-12 h-1 bg-[#F39C12] mb-6"></div>
                <p className="text-[13px] text-gray-700 leading-relaxed font-sans mb-4">
                  Prior to its incorporation by Federal Republic of Nigeria Corporate Affairs Commission (CAC), QUADRUPLE-TECH started as a small pipe and structural fitting firm since the year 2016, servicing the Oil & Gas sector in partnership with other companies where the CEO had a stake.
                </p>
                <p className="text-[13px] text-gray-700 leading-relaxed font-sans">
                  Better equipped, QUADRUPLE-TECH continues to date to venture and reap its reward by participating in small to medium to large scale projects. Our success has been built on customer satisfaction and loyalty.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {certs.map((cert) => (
              <div key={cert.name} className={`p-[25px] border ${cert.active ? 'border-[#0072BB] bg-white border-t-[4px]' : 'border-[#ddd] bg-[#F4F4F4] border-dashed border-t-[4px] border-t-gray-300'} transition-all hover:shadow-md`}>
                <div className="flex justify-between items-start mb-[20px]">
                  <Award className={cert.active ? 'text-[#111111]' : 'text-[#888]'} size={32} />
                  {cert.active ? (
                    <span className="px-[10px] py-[4px] bg-[#F39C12] text-[#111111] text-[9px] font-bold uppercase tracking-widest">ACTIVE</span>
                  ) : (
                    <span className="px-[10px] py-[4px] bg-[#ddd] text-[#666] text-[9px] font-bold uppercase tracking-widest">IN PROGRESS</span>
                  )}
                </div>
                <h3 className="text-[18px] font-bold text-[#111111] mb-[5px]">{cert.name}</h3>
                <p className="text-[12px] font-bold text-[#111111] mb-[15px] uppercase tracking-wide">{cert.label}</p>
                <p className="text-[13px] text-[#666] leading-[1.6]">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div> {/* Close Certifications Grid Container */}

      {/* Full-width Asenware Fire Systems Section */}
      <section className="relative w-full h-[520px] bg-slate-950 flex items-center overflow-hidden my-24 group">
        {/* Animated Slide Elements */}
        {asenwareImages.map((img, idx) => (
          <div 
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === activeSlide ? 'opacity-40 scale-100' : 'opacity-0 scale-105'
            } transform transition-transform duration-[5000ms]`}
          >
            <img 
              src={img} 
              alt={`Asenware Fire System Portfolio ${idx + 1}`} 
              className="w-full h-full object-cover select-none pointer-events-none"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}

        {/* Outer overlay for contrast and sleek styling */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/20" />

        {/* Slider Controls */}
        <button 
          onClick={() => setActiveSlide((prev) => (prev - 1 + asenwareImages.length) % asenwareImages.length)}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-[#F39C12] text-white hover:text-black p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => setActiveSlide((prev) => (prev + 1) % asenwareImages.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-[#F39C12] text-white hover:text-black p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Content Overlay */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 w-full">
          <div className="max-w-2xl bg-slate-900/85 md:bg-slate-900/60 p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="p-2 bg-[#F39C12]/10 rounded-lg text-[#F39C12] flex items-center justify-center animate-pulse">
                <Flame size={20} className="fill-[#F39C12]/20" />
              </span>
              <span className="text-[#F39C12] text-xs font-extrabold uppercase tracking-widest">
                Technical Mastery &amp; Integration
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Asenware Fire Safety Systems
            </h2>
            
            <div className="w-16 h-1 bg-[#F39C12] mb-6 rounded-full" />
            
            <div className="space-y-4">
              <p className="text-sm md:text-base text-gray-100 leading-relaxed font-sans font-medium">
                Our certified expertise in internationally acclaimed Asenware addressable networks enables proactive, real-time fire detection and immediate fail-safe alarms.
              </p>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed font-sans">
                These advanced platforms are selected to deliver full safety compliance and precise hazard management across high-risk manufacturing and industrial sectors.
              </p>
            </div>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-2 mt-8">
              {asenwareImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeSlide ? 'w-8 bg-[#F39C12]' : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* New container to resume page layout elements */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Community Relations */}
        <div className="bg-[#F4F4F4] border-t-[4px] border-[#E2E8F0] p-[40px] md:p-[60px] mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <Globe className="w-12 h-12 text-[#111111] mx-auto mb-[20px]" />
            <h2 className="text-[28px] font-bold text-[#111111] mb-[20px]">Host Community Relations</h2>
            <p className="text-[14px] text-[#666] mb-[30px] leading-[1.6]">
              We operate across diverse regions in Nigeria. Our approach to community relations focuses on mutual respect, pre-work consultations, and local economic empowerment. We maintain open communication channels and actively employ local youth in trades and unskilled domains to build trust and ensure uninterrupted project execution.
            </p>
            <div className="inline-flex flex-wrap justify-center items-center gap-[20px] text-[11px] font-bold text-[#111111] uppercase tracking-wider">
              <span className="flex items-center gap-2"><span className="w-2 h-2 bg-[#F39C12]" /> Open Liaison</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 bg-[#0072BB]" /> Youth Employment</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 bg-[#0072BB]" /> Dispute Resolution</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
