import { Wrench, ShieldAlert, Truck, GraduationCap, Building2, HardHat, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
  {
    id: 'engineering',
    icon: Wrench,
    title: 'Engineering',
    for: 'Oil & Gas | Manufacturing | Downstream',
    color: 'text-[#0072BB]',
    bg: 'bg-[#0072BB]/10',
    capabilities: [
      'Design, fabrication and installation',
      'Oil & gas pipe and structural fabrication',
      'HDPE pipe supply and installation',
      'Lagging of steam pipes',
      'Installation of PU and rock wool panels',
      'Corrosion control & turnaround maintenance'
    ]
  },
  {
    id: 'safety',
    icon: ShieldAlert,
    title: 'Safety Services',
    for: 'Industrial Hubs | Refineries | Corporate',
    color: 'text-[#DA291C]',
    bg: 'bg-[#DA291C]/10',
    capabilities: [
      'Fire infrastructure systems (alarm, FM200, CO2, foam)',
      'LOTO installation and pilot training',
      'Supply of all safety gadgets and PPE',
      'Fumigation, sanitation, and waste management',
      'Fire extinguisher servicing'
    ]
  },
  {
    id: 'logistics',
    icon: Truck,
    title: 'Logistics & Procurement',
    for: 'Procurement Managers | Supply Chains',
    color: 'text-[#F39C12]',
    bg: 'bg-[#F39C12]/10',
    capabilities: [
      'Supply of heavy industrial materials',
      'Specialized equipment supply and leasing',
      'General contractor services',
      'Skilled labour and manpower supply'
    ]
  },
  {
    id: 'hse',
    icon: GraduationCap,
    title: 'HSE Training',
    for: 'Site Crews | Plant Operators',
    color: 'text-[#313B44]',
    bg: 'bg-[#313B44]/10',
    capabilities: [
      'Behaviour-Based Safety (BBS) programs',
      'Fire prevention and protection seminars',
      'Site-wide fire drills',
      'Medical evacuation drills',
      'Emergency preparedness and response'
    ]
  },
  {
    id: 'civil',
    icon: Building2,
    title: 'Civil Works',
    for: 'Real Estate | FMCG Plants | Infra',
    color: 'text-slate-600',
    bg: 'bg-slate-100',
    capabilities: [
      'Heavy structural erection',
      'Plant renovation and facility upgrades',
      'Foundational works and concrete pouring',
      'General civil construction and finishing'
    ]
  },
  {
    id: 'pm',
    icon: HardHat,
    title: 'Project Management',
    for: 'Foreign Investors | Stakeholders',
    color: 'text-emerald-600',
    bg: 'bg-emerald-100',
    capabilities: [
      'Daily progress reports with photographic evidence',
      'Weekly project coordination meetings',
      'Proactive client communication model',
      'Post-project documentation and AS-BUILT drawings',
      'Scheduled warranty visits'
    ]
  }
];

export default function WhatWeDo() {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#313B44] mb-4">What We Do</h1>
          <div className="w-16 h-1 bg-[#0072BB] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Providing comprehensive EPC services for procurement managers, project engineers, and operators at major industrial facilities.
          </p>
        </div>

        <div className="space-y-[30px] mb-20">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.id}
              className={`bg-white border border-[#eee] flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} hover:shadow-md transition-shadow`}
            >
              <div className="md:w-1/3 bg-[#F4F4F4] p-[40px] flex flex-col justify-center relative overflow-hidden border-t-[4px] md:border-t-0 md:border-l-[4px] border-[#0072BB]">
                <pillar.icon className={`${pillar.color} w-16 h-16 mb-[20px] relative z-10`} strokeWidth={1} />
                <h2 className="text-[24px] font-bold text-[#313B44] mb-[10px] relative z-10">{pillar.title}</h2>
                <div className="inline-block px-[12px] py-[6px] bg-white text-[10px] font-bold text-[#0072BB] uppercase tracking-wide mt-2 relative z-10 border border-[#eee] self-start">
                  {pillar.for}
                </div>
              </div>
              
              <div className="md:w-2/3 p-[40px] flex flex-col justify-between">
                <div className="mb-[30px]">
                  <h3 className="text-[14px] font-bold text-[#313B44] mb-[20px] pb-[10px] border-b border-[#eee] uppercase tracking-wide">Core Capabilities</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-[15px]">
                    {pillar.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`mt-[6px] w-[4px] h-[4px] bg-[#F39C12] shrink-0`} />
                        <span className="text-[13px] text-[#666] leading-[1.6]">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <Link 
                    to="/contact-us"
                    className="inline-flex items-center gap-2 px-[20px] py-[10px] bg-[#313B44] hover:bg-[#F39C12] hover:text-[#313B44] text-white font-bold transition-colors text-[12px] uppercase tracking-wide group border-none"
                  >
                    Request a Quote <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="bg-[#313B44] p-[60px] text-center text-white relative overflow-hidden border-t-4 border-[#F39C12]">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white to-transparent"></div>
          <h2 className="relative z-10 text-[32px] font-bold mb-[15px]">Ready to start your next project?</h2>
          <p className="relative z-10 text-[14px] text-white/90 mb-[30px] max-w-2xl mx-auto">Our engineering teams are ready to deploy to sites across Nigeria.</p>
          <Link to="/contact-us" className="relative z-10 inline-block px-[28px] py-[12px] bg-[#F39C12] hover:bg-white text-[#313B44] font-bold text-[14px] uppercase border-none transition-colors">
            Contact Procurement
          </Link>
        </div>

      </div>
    </div>
  );
}
