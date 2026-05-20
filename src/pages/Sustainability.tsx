import { ShieldAlert, Award, FileText, LayoutDashboard, Globe } from 'lucide-react';

const certs = [
  { name: 'ISO 9001:2000', label: 'Quality Management', active: true, desc: 'Ensuring global quality standards across all procurement and fabrication processes.' },
  { name: 'ISO 14001:2004', label: 'Environmental Management', active: true, desc: 'Minimizing our environmental footprint and adhering to strict waste management.' },
  { name: 'OHSAS 18001:2007', label: 'Occupational Health', active: true, desc: 'Safeguarding our workforce with zero-harm policies and proactive risk assessment.' },
  { name: 'CAC / RC 7398394', label: 'Corporate Registration', active: true, desc: 'Fully incorporated in Nigeria. TIN: 31668384-0001.' },
  { name: 'DPR Certification', label: 'Petroleum Resources', active: false, desc: 'Targeting compliance for direct upstream operations.' },
  { name: 'NCDMB', label: 'Nigerian Content', active: false, desc: 'Committed to local capacity building and technology transfer.' },
];

export default function Sustainability() {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-20">
          <ShieldAlert className="w-16 h-16 text-[#DA291C] mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-[#313B44] mb-4">Sustainability & HSE</h1>
          <div className="w-16 h-1 bg-[#DA291C] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Zero Damage. Every Project. We build the future responsibly, prioritizing the safety of our people and the protection of the environment.
          </p>
        </div>

        {/* IOC Explainer */}
        <div className="bg-[#313B44] text-white p-[40px] md:p-[60px] mb-20 flex flex-col lg:flex-row gap-[40px] items-center border-t-4 border-[#F39C12]">
          <div className="lg:w-1/2">
            <h2 className="text-[28px] font-bold mb-[20px] text-[#F39C12]">Why Our Standards Matter</h2>
            <p className="text-[14px] text-white/90 mb-[15px] leading-[1.6]">
              Multinational Oil & Gas operators (IOCs) and national operators (NOCs) in Nigeria require impeccable HSE records before awarding contracts. 
            </p>
            <p className="text-[14px] text-white/90 mb-[30px] leading-[1.6]">
              Quadrupletech's deep alignment with ISO and OHSAS frameworks ensures that our safety protocols integrate seamlessly into the overarching safety architecture of clients like Indorama and Dangote, preventing costly shutdowns and ensuring regulatory compliance.
            </p>
            <button className="flex items-center gap-2 px-[24px] py-[10px] bg-[#F39C12] hover:bg-white text-[#313B44] font-bold transition-colors text-[12px] uppercase tracking-wide border-none">
              <FileText size={16} /> Download HSE Policy PDF
            </button>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-[15px] w-full">
            <div className="bg-[#232B32] p-[25px] text-center border border-[#313B44]">
              <div className="text-[36px] font-black text-[#F39C12] mb-1">100%</div>
              <div className="text-[11px] text-white/70 uppercase tracking-wide font-bold">PPE Compliance</div>
            </div>
            <div className="bg-[#232B32] p-[25px] text-center border border-[#313B44]">
              <div className="text-[36px] font-black text-[#F39C12] mb-1">BBS</div>
              <div className="text-[11px] text-white/70 uppercase tracking-wide font-bold">Behavior-Based Safety</div>
            </div>
            <div className="bg-[#232B32] p-[25px] text-center border border-[#313B44]">
              <div className="text-[36px] font-black text-[#F39C12] mb-1">LOTO</div>
              <div className="text-[11px] text-white/70 uppercase tracking-wide font-bold">Lockout/Tagout Protocols</div>
            </div>
            <div className="bg-[#232B32] p-[25px] text-center border border-[#313B44]">
              <div className="text-[36px] font-black text-[#F39C12] mb-1">Daily</div>
              <div className="text-[11px] text-white/70 uppercase tracking-wide font-bold">Toolbox Talks</div>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-[#313B44] mb-8 text-center">Certifications & Alignments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {certs.map((cert) => (
              <div key={cert.name} className={`p-[25px] border ${cert.active ? 'border-[#0072BB] bg-white border-t-[4px]' : 'border-[#ddd] bg-[#F4F4F4] border-dashed border-t-[4px] border-t-gray-300'} transition-all hover:shadow-md`}>
                <div className="flex justify-between items-start mb-[20px]">
                  <Award className={cert.active ? 'text-[#0072BB]' : 'text-[#888]'} size={32} />
                  {cert.active ? (
                    <span className="px-[10px] py-[4px] bg-[#0072BB] text-white text-[9px] font-bold uppercase tracking-widest">ACTIVE</span>
                  ) : (
                    <span className="px-[10px] py-[4px] bg-[#ddd] text-[#666] text-[9px] font-bold uppercase tracking-widest">IN PROGRESS</span>
                  )}
                </div>
                <h3 className="text-[18px] font-bold text-[#313B44] mb-[5px]">{cert.name}</h3>
                <p className="text-[12px] font-bold text-[#313B44] mb-[15px] uppercase tracking-wide">{cert.label}</p>
                <p className="text-[13px] text-[#666] leading-[1.6]">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Relations */}
        <div className="bg-[#F4F4F4] border-t-[4px] border-[#313B44] p-[40px] md:p-[60px] mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <Globe className="w-12 h-12 text-[#313B44] mx-auto mb-[20px]" />
            <h2 className="text-[28px] font-bold text-[#313B44] mb-[20px]">Host Community Relations</h2>
            <p className="text-[14px] text-[#666] mb-[30px] leading-[1.6]">
              We operate across diverse regions in Nigeria. Our approach to community relations focuses on mutual respect, pre-work consultations, and local economic empowerment. We maintain open communication channels and actively employ local youth in trades and unskilled domains to build trust and ensure uninterrupted project execution.
            </p>
            <div className="inline-flex flex-wrap justify-center items-center gap-[20px] text-[11px] font-bold text-[#313B44] uppercase tracking-wider">
              <span className="flex items-center gap-2"><span className="w-2 h-2 bg-[#0072BB]" /> Open Liaison</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 bg-[#F39C12]" /> Youth Employment</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 bg-[#DA291C]" /> Dispute Resolution</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
