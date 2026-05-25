import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Flame, 
  ShieldAlert, 
  Bell, 
  Wind, 
  Radio, 
  HardHat, 
  Lock, 
  Zap, 
  Users, 
  Leaf, 
  ChevronLeft, 
  CheckCircle2, 
  ShieldCheck, 
  AlertOctagon,
  ArrowRight
} from 'lucide-react';

export default function FireSafetySystems() {
  const sections = [
    {
      id: 'infrastructure',
      category: 'Fire Protection & Controls',
      icon: Flame,
      title: 'Fire Infrastructure Systems',
      subtitle: 'Premium Suppression, Piping & Active Control',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      iconColor: 'text-rose-600',
      iconBg: 'bg-rose-50',
      desc: 'High-capacity, safety-certified installations designed to prevent cataclysmic fire outbreaks, protecting critical assets, personnel, and securing enterprise continuity.',
      highlights: [
        'Fire Pump Room Erection: Heavy-duty diesel and electric mainline pumps, jockey pumps, controllers, and manifold networks built to international NFPA 20 standards.',
        'Total Flooding Gas Suppression: Sophisticated engineered systems utilizing eco-safe agents including FM200, Novec 1230, and high-pressure carbon dioxide (CO2).',
        'Specialty Suppression: Compact heat-responsive Fire Trace Tubes for server racks/cabinets and suspended Dry Chemical Powder (DCP) suppressants.',
        'Foam Systems: Installation of Foam Deluge networks, foam inductor skids, high-capacity Foam Compound Drums, and making branches.',
        'Traditional Sprinklers & Deluge: Robust wet/dry sprinkler infrastructure, deluge water spray systems, and custom zone control valves.'
      ],
      compliance: 'NFPA 13, NFPA 20, FM Approved, UL Listed'
    },
    {
      id: 'manual-fighting',
      category: 'Fire Protection & Controls',
      icon: ShieldCheck,
      title: 'Manual Fire Fighting Equipment',
      subtitle: 'First-Line Emergency Preparedness & Incident Response',
      badgeColor: 'bg-red-50 text-red-700 border-red-200',
      iconColor: 'text-red-600',
      iconBg: 'bg-red-50',
      desc: 'Premium supply, tactical layout design, professional installation, and lifetime certification of manual fighting gear to reduce business risk profiles to the absolute minimum.',
      highlights: [
        'Industrial Hydrant Networks: Cast iron above-ground/under-ground hydrants, valve chambers, dual-way landing valves, and heavy-duty canvas hose layups.',
        'Hose Reels & Cabinets: Durable lockable mild steel or stainless-steel fire hose reel cabinets, synthetic heavy-pressure rubber hoses, and adjustable spray-jet nozzles.',
        'Multi-Class Fire Extinguishers: Full range of DCP, CO2, Water, Foam, and specialized Class D metal-fire extinguishers sized and placed strategically per hazard profile.',
        'Passive Protection & Emergency Ready: Premium-grade Fire Bowls, Fire Blankets, robust Fire Retardant Walls, and high-security Flameproof Cabinets.'
      ],
      compliance: 'NFPA 10, NFPA 14, BS EN 671, NIS Certified'
    },
    {
      id: 'detection',
      category: 'Intelligent Sensing',
      icon: Bell,
      title: 'Fire Detection Systems',
      subtitle: 'Very Early Warning & Addressable Alerting Networks',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      iconColor: 'text-amber-600',
      iconBg: 'bg-amber-50',
      desc: 'Instant detection systems designed to detect smoke, heat, and optical flames at embryonic stages to prevent catastrophic spread.',
      highlights: [
        'Very Early Detection (VESDA): Active air-sampling aspirating smoke detectors that trace particles prior to visible smoke manifestation.',
        'Honeywell Gent Systems: Premium addressable fire defense panels with state-of-the-art voice alarm (VA) capabilities and smart control accessories.',
        'Asenware Systems: Complete suite of Asenware addressable and conventional heat/smoke panels, manual call points, and strobe horn networks.',
        'Linear Heat Detectors: Fire trace cable sensors for cable trays, conveyor systems, and complex refinery pipe racks.',
        'Optical Flame & Beam Detectors: Long-range line-of-sight infrared/ultraviolet beam smoke detectors for expansive warehouses and airport hangars.'
      ],
      compliance: 'EN 54, UL 864, NFPA 72'
    },
    {
      id: 'gas-detection',
      category: 'Intelligent Sensing',
      icon: Wind,
      title: 'Gas Hazard Detection & Automatic Shutoff',
      subtitle: 'Continual Ambient Air Monitoring for Gas Flares & Leaks',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-50',
      desc: 'Continuous environmental surveillance in heavy manufacturing and energy stations to intercept dangerous gas releases and initiate automatic shutdowns.',
      highlights: [
        'Fixed Gas Detectors: Highly accurate electrochemical and infrared sensors calibrated for Compressed Natural Gas (CNG), Liquefied Natural Gas (LNG), Hexane, and flammable gases.',
        'Interlocked Shutoff Valves: Pneumatically and electrically operated automatic shutoff valves (Solenoid & ESD) to halt hazard gas supplies on alarm trigger.',
        'Calibration & Audits: Rigorous maintenance schedules, bump tests, sensor calibration, and diagnostic validation to secure ongoing readiness.'
      ],
      compliance: 'ATEX/IECEx Certified, SIL 2/3 Capable, NFPA 54'
    },
    {
      id: 'gadgets',
      category: 'Industrial Supplies',
      icon: Radio,
      title: 'Safety Gadgets & Marine Apparatus',
      subtitle: 'Specialty Field Devices & Life-Saving Equipment',
      badgeColor: 'bg-slate-50 text-slate-700 border-slate-200',
      iconColor: 'text-slate-600',
      iconBg: 'bg-slate-50',
      desc: 'Field gear and communication equipment engineered to sustain robust connectivity and life safety across volatile land, industrial, and marine operations.',
      highlights: [
        'Explosion-Proof Communication: ATEX/IECEx zone-rated intrinsically safe Walkie-Talkies, phones, and lighting devices preventing spark ignition in hazardous areas.',
        'Mobile Gas Detectors: Rugged single/multi-gas portable monitors with local vibration alarms for staff entering confined spaces.',
        'Marine Life-Saving Apparatus: Commercial-grade Personal Flotation Devices (PFDs), marine lifebuoys, ring-buoy brackets, self-igniting lights, and safety throw lines.'
      ],
      compliance: 'BS EN 396, SOLAS Approved, ATEX Zone 0/1/2'
    },
    {
      id: 'ppe',
      category: 'Industrial Supplies',
      icon: HardHat,
      title: 'Full-Spectrum PPE Supply Logistics',
      subtitle: 'Sectors-Wide Personnel Protective Equipment',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
      iconColor: 'text-sky-600',
      iconBg: 'bg-sky-50',
      desc: 'Bulk procurement and delivery of rugged, standard-compliant personal protection garments and gear tailored for industrial, civil, and energy sectors.',
      highlights: [
        'Primary Protection: S3-certified heavy-duty steel toe boots, flame-retardant anti-static high-visibility coveralls, and high-impact industrial safety helmets.',
        'Specialty Wear: Chemical-resistant suits (Hazmat), flash-fire resistant clothing, arc flash face shields, and heavy insulation and thermal gloves.',
        'Respiratory & Sight Protection: Half/full-face silicone respirators, specialized chemical safety goggles, and auto-darkening welding shields.'
      ],
      compliance: 'EN 345, ANSI Z87.1, OSHA Standards'
    },
    {
      id: 'loto',
      category: 'Hazardous Energy Control',
      icon: Lock,
      title: 'LOTO Lockout/Tagout Integration',
      subtitle: 'Source Isolation & Practical Application Training',
      badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      iconColor: 'text-cyan-600',
      iconBg: 'bg-cyan-50',
      desc: 'Comprehensive safety isolation frameworks tailored to neutralize chemical, mechanical, hydraulic, and electrical energies during maintenance cycles.',
      highlights: [
        'Supply Coordination: Bulk delivery of heavy padlock systems, master lockout hasps, valve lockouts, circuit breaker lockouts, and robust weatherproof tagging cards.',
        'System Implementation: Architectural mapping of energy isolation procedures and custom structural lockout storage boards placed on the factory floor.',
        'Practical PILOT Training: Direct hands-on instructional workshops covering OSHA isolation rules, validation of zero energy state, and supervisor check-offs.'
      ],
      compliance: 'OSHA 1910.147, ANSI Z244.1'
    },
    {
      id: 'hazardous-energy',
      category: 'Hazardous Energy Control',
      icon: Zap,
      title: 'Equipment-Specific Energy Control',
      subtitle: '2nd Phase Hazardous Energy Auditing & Controls',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50',
      desc: 'Advanced equipment-by-equipment hazardous energy audits, writing of bespoke isolation checklists, and full field validation procedures.',
      highlights: [
        'Energy Audit & Procedures: High-precision engineering analysis of complex, coupled plant machinery (turbines, giant compressors, and processing lines).',
        'Custom SOP Development: Production of high-durability, weatherproof visual guidance procedures directly attached to machine controls.',
        'Practical Pilot Application: Instructor-led simulation training designed to guide electrical and structural operators through isolation sequences.'
      ],
      compliance: 'OSHA Compliant, ISO 14001 Alignments'
    },
    {
      id: 'bbs',
      category: 'Workforce Culture',
      icon: Users,
      title: 'Behavioral Based Safety (BBS) Training',
      subtitle: 'Building Incident-Free High-Compliance Safety Cultures',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-50',
      desc: 'Structured coaching programs designed to transform raw site mentalities, elevating safe behaviors, improving teamwork, and encouraging constructive peer-to-peer observations.',
      highlights: [
        'Cultural Diagnostics: Independent behavior assessments to trace safe/unsafe trends and establish customized behavioral KPI scorecards.',
        'Peer observation programs: Training key floor personnel to conduct transparent, blame-free safety observations and provide immediate coaching.',
        'Metric-driven outcomes: Continuous analytics capturing positive reinforcement habits, drastically decreasing near-miss incidents.'
      ],
      compliance: 'DuPont Bradley Curve Mode, HSE Best Practices'
    },
    {
      id: 'esg',
      category: 'Workforce Culture',
      icon: Leaf,
      title: 'Environmental Sustainability & Governance',
      subtitle: 'Industrial Waste Programs & Specialized Sanitation',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50',
      desc: 'Expert environmental governance programs and specialized containment services configured to guard biosystems and satisfy eco-compliance laws.',
      highlights: [
        'Industrial Waste Management: Strategic sorting, secure storage, hazard labeling, and lawful disposal of industrial effluents, metal shavings, and scrap compounds.',
        'High-Grade Sanitation & Cleaning: Specialized commercial/factory cleanings utilizing biodegragable solutions to prevent workspace pollution.',
        'Site-Wide Fumigation & Pest Control: Eco-approved pest eradication services for large markets, server rooms, public schools, hostels, and warehouses.'
      ],
      compliance: 'ISO 14001:2015, NESREA Regulations, LASEPA Compliant'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      {/* Hero Header Section */}
      <div className="relative h-[440px] mb-12 bg-slate-950 flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Fire Protection Systems and HSE Services banner" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-100 select-none pointer-events-none" 
          referrerPolicy="no-referrer"
        />
        {/* Soft elegant gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/75" />
        
        <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-[#F39C12] text-xs font-bold uppercase tracking-widest mb-4">
              <Flame size={14} className="animate-pulse text-rose-500" /> Complete Safety &amp; Fire Engineering Portfolio
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 uppercase leading-none">
              Fire Safety &amp; HSE Systems
            </h1>
            <div className="w-24 h-1 bg-[#F39C12] mx-auto rounded-full mb-6"></div>
            
            <p className="text-base md:text-lg text-slate-100 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow">
              Comprehensive fire infrastructure, active gas detection, PPE logistics, and technical hazard controls built to the highest regulatory standards. Prevent business interruption and secure human life.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Navigation Breadcrumb Row */}
        <div className="mb-8 flex items-center justify-between">
          <Link 
            to="/what-we-do" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-[#111111] text-xs font-semibold uppercase tracking-wider transition-colors rounded shadow-sm group"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to What We Do
          </Link>
          <span className="text-xs text-[#666] font-mono select-none">
            Compliance Code: NFPA / ATEX / OSHA EN
          </span>
        </div>

        {/* Regulatory Preface Box */}
        <div className="bg-white border-l-4 border-[#F39C12] p-6 mb-12 shadow-sm rounded-r-lg">
          <div className="flex items-start gap-4">
            <span className="p-2 bg-amber-50 rounded-lg text-amber-600 block shrink-0 mt-1">
              <AlertOctagon size={24} />
            </span>
            <div>
              <h3 className="text-[16px] font-bold text-[#111111] mb-2 uppercase tracking-wide">
                Rigorous Regulatory Compliance
              </h3>
              <p className="text-[13px] text-[#555555] leading-relaxed">
                Fire incidents cost companies millions in structural damages, severe regulatory penalties, and business license forfeitures. Quadrupletech's systems are engineered from the ground up to comply strictly with the Federal Fire Service (FFS) guidelines, State Environmental Protection Agencies (LASEPA/NESREA), and Department of Petroleum Resources (DPR) provisions, assuring absolute safety compliance across Nigeria and beyond.
              </p>
            </div>
          </div>
        </div>

        {/* Services / Specifications Grid */}
        <div className="space-y-8 mb-16">
          {sections.map((section, index) => (
            <motion.div 
              id={`fire-spec-${section.id}`}
              key={section.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white border border-[#eef2f6] shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-md"
            >
              {/* Pillar Indicator & Description Badge */}
              <div className="lg:col-span-4 p-8 bg-slate-50 border-r border-[#eef2f6] flex flex-col justify-between">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wider relative mb-6 ${section.badgeColor}`}>
                    {section.category}
                  </span>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`p-3 rounded-lg flex items-center justify-center shrink-0 ${section.iconBg} ${section.iconColor}`}>
                      <section.icon size={28} strokeWidth={1.5} />
                    </span>
                    <div>
                      <h2 className="text-xl font-extrabold text-[#111111] leading-tight">
                        {section.title}
                      </h2>
                      <span className="text-xs text-[#666] font-medium leading-[1.4] block mt-1">
                        {section.subtitle}
                      </span>
                    </div>
                  </div>

                  <p className="text-[13px] text-[#555555] leading-relaxed mb-6 font-medium mt-4">
                    {section.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Certified Standards</div>
                  <div className="text-xs font-bold text-slate-700 mt-1 font-mono">{section.compliance}</div>
                </div>
              </div>

              {/* Core Capabilities Checklist list */}
              <div className="lg:col-span-8 p-8 md:p-10 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-xs font-extrabold text-[#111111] uppercase tracking-widest pb-3 mb-6 border-b border-slate-100">
                    Technical Specifications &amp; Capabilities
                  </h3>
                  
                  <ul className="space-y-4">
                    {section.highlights.map((highlight, itemIdx) => {
                      const parts = highlight.split(':');
                      const title = parts[0];
                      const mainText = parts.slice(1).join(':');
                      
                      return (
                        <li key={itemIdx} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-[13px] text-slate-700 leading-relaxed">
                            {parts.length > 1 ? (
                              <>
                                <strong className="text-slate-900 font-bold">{title}:</strong>
                                {mainText}
                              </>
                            ) : (
                              highlight
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Sub Action trigger links to contact */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
                  <span className="text-xs text-[#0072BB] font-semibold flex items-center gap-1.5 font-sans">
                    <ShieldCheck size={16} className="text-emerald-500" /> Certified Installation Ready
                  </span>
                  <Link 
                    to={`/contact-us?interest=Fire-Safety-${section.id}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#111111] hover:text-[#0072BB] uppercase tracking-wider transition-colors"
                  >
                    Inquire for Specifications <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="bg-[#0f172a] p-10 md:p-16 text-center text-white relative overflow-hidden border-t-4 border-[#F39C12] rounded-lg">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white to-transparent"></div>
          <h2 className="relative z-10 text-[28px] md:text-[34px] font-bold mb-[15px] tracking-tight">Protect Your People. Secure Your Plant.</h2>
          <p className="relative z-10 text-[14px] text-slate-300 mb-[30px] max-w-2xl mx-auto">
            Contact our specialized safety engineering and HSE department today to inspect your facilities or layout modern Asenware-certified detection networks.
          </p>
          <div className="relative z-10 flex flex-wrap justify-center items-center gap-4">
            <Link to="/contact-us" className="inline-block px-7 py-3 bg-[#0072BB] hover:bg-slate-700 text-white font-bold text-[14px] uppercase tracking-wider transition-colors rounded">
              Get Safety Consultation
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
