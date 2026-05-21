import { motion } from 'motion/react';
import { Download, Users, Lightbulb, Target } from 'lucide-react';

const management = [
  { name: 'Engr. John Doe', title: 'Managing Director & CEO', bio: 'Over 20 years of EPC experience across sub-Saharan Africa.', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { name: 'Sarah Ahmed', title: 'Chief Operations Officer', bio: 'Specialist in procurement strategies and large-scale logistics.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { name: 'Michael Ojo', title: 'Head of Engineering', bio: 'Leads structural erection and civil engineering portfolios.', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
];

const industries = [
  { title: 'Oil & Gas', desc: 'Rig maintenance, structural fabrication, and pipe installation for upstream and downstream sectors.' },
  { title: 'Petrochemicals', desc: 'Working with giants like Indorama Eleme to build robust processing facilities.' },
  { title: 'FMCG / Food', desc: 'Constructing safe and scalable facilities for brands like Dano and Premium Edible Oils.' },
  { title: 'Cement / Construction', desc: 'Facility upgrades, civil works, and piping for Dangote and BUA Cement.' },
  { title: 'Agro-Allied', desc: 'Engineering reliable infrastructure for WACOT Rice and Lebruni Agro Allied.' },
  { title: 'Power / Utilities', desc: 'Critical electrical installations and structural supports for power generation hubs.' },
];

export default function WhoWeAre() {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero */}
      <div className="relative h-[400px] mb-20 bg-slate-950 flex items-center justify-center overflow-hidden">
        <img 
          src="https://i.ibb.co/ynWwK5c6/pexels-govin-mu-2897273-17166070.jpg" 
          alt="About Us" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105" 
          referrerPolicy="no-referrer"
        />
        {/* Deep gradient overlay layer for optimum text contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/45 to-slate-950/70" />
        
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 uppercase drop-shadow-sm">
              Who We Are
            </h1>
            <div className="w-24 h-1 bg-[#F39C12] mx-auto rounded-full shadow-sm"></div>
            <p className="mt-6 text-lg md:text-xl text-slate-100 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow">
              Executing EPC contracts using the latest state-of-the-art technology.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#111111] mb-6">Our Narrative</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2016, <strong>Quadrupletech Engineering and Services Limited</strong> is a CAC-incorporated EPC (Engineering, Procurement, and Construction) firm headquartered at 5 Ayegbami Street, Idotun, Lagos Free Zone, Ibeju-Lekki, Lagos.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our mission is simple: to execute complex EPC contracts using state-of-the-art technology, delivering on schedule, and providing competitively priced quality products. Over the years, we have built a reputation for zero-harm operations and uncompromising structural integrity across Nigeria's industrial landscape.
            </p>
            <div className="bg-gray-50 p-6 border-l-4 border-[#0072BB]">
              <div className="flex gap-4">
                <Target className="text-[#111111] shrink-0" size={24} />
                <p className="text-[#111111] font-medium italic">
                  "To be the premier engineering partner of choice for multinational energy, construction, and manufacturing operators."
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#0072BB] translate-x-4 translate-y-4 rounded-lg"></div>
            <img src="https://i.ibb.co/xtHCmK7m/home-logo-1.png" alt="Team at site" className="relative z-10 rounded-lg shadow-xl w-full h-[400px] object-cover" />
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="mb-24 bg-gray-50 border border-gray-100 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-4">
                <Target className="text-[#0072BB]" size={28} />
                <h2 className="text-3xl font-bold text-[#111111]">Our Mission</h2>
              </div>
              <div className="w-16 h-1 bg-[#F39C12] mb-6"></div>
              <p className="text-sm font-semibold text-[#0072BB] uppercase tracking-wider mb-2">The Mission Statement</p>
              <blockquote className="text-gray-600 text-[13px] leading-relaxed italic border-l-4 border-[#0072BB] pl-4 py-1">
                "Our mission, by using our well-trained human, financial and intellectual resources in a teamwork environment, is to execute EPC contracts using the latest state of the art technology, to deliver on schedule competitively priced quality products, and to strive for continual improvements in quality, technology, safety and Customer’s satisfaction. Also, to perform all projects to the complete satisfaction of our customers in term of timing and cost. At the same time, we perform our work to the expectation of our international clients with respect to health and safety and security requirements."
              </blockquote>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-1 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#0072BB] font-black text-xs font-mono bg-blue-50 w-6 h-6 rounded-full flex items-center justify-center shrink-0">01</span>
                    <h3 className="text-base font-bold text-[#111111] font-sans">Synergy &amp; Technology Integration</h3>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    By strategically leveraging our well-trained human, financial, and intellectual capital, we foster a collaborative, teamwork-driven environment. This synergy enables us to execute complex Engineering, Procurement, and Construction (EPC) contracts using the latest state-of-the-art technology, guaranteeing high-precision engineering solutions across all industrial operations.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#0072BB] font-black text-xs font-mono bg-blue-50 w-6 h-6 rounded-full flex items-center justify-center shrink-0">02</span>
                    <h3 className="text-base font-bold text-[#111111] font-sans">Timeline &amp; Cost-Value Precision</h3>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    We are dedicated to delivering all projects entirely on-schedule and as competitively priced, high-quality products. Through a relentless pursuit of operational excellence, we drive continual improvements in engineering precision, project execution, and client satisfaction while staying fully compliant with all timelines and budget constraints.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#0072BB] font-black text-xs font-mono bg-blue-50 w-6 h-6 rounded-full flex items-center justify-center shrink-0">03</span>
                    <h3 className="text-base font-bold text-[#111111] font-sans">Global QHSE Standards</h3>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    To satisfy the high expectations of our local and international clients, we uphold the most rigorous standards for health, safety, security, and environmental protection. Completing works to our clients' ultimate satisfaction is the absolute cornerstone of our professional ethics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Management Team */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#111111] mb-4">Our Management</h2>
            <div className="w-16 h-1 bg-[#F39C12] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {management.map((m) => (
              <motion.div key={m.name} whileHover={{ y: -5 }} className="bg-white border text-center p-8 shadow-sm">
                <img src={m.img} alt={m.name} className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-gray-50" />
                <h3 className="text-xl font-bold text-[#111111] mb-2">{m.name}</h3>
                <p className="text-[#111111] font-medium text-sm mb-4">{m.title}</p>
                <p className="text-gray-500 text-sm">{m.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mb-24 bg-[#F4F4F4] p-8 md:p-12 border-t-4 border-[#0072BB]">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#111111] mb-4">Industries We Serve</h2>
            <p className="text-[#666]">Bringing domain expertise to highly regulated, complex verticals.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {industries.map((ind) => (
              <div key={ind.title} className="bg-white p-[25px] border border-[#eee] hover:border-[#0072BB] transition-colors hover:shadow-md">
                <Lightbulb className="text-[#111111] mb-[15px]" size={28} />
                <h4 className="text-[18px] font-bold text-[#111111] mb-[10px]">{ind.title}</h4>
                <p className="text-[13px] leading-[1.6] text-[#666] m-0">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Clients & Partners */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-[#111111] mb-12 text-center">Trusted By</h2>
          
          <div className="bg-white border rounded-xl overflow-hidden p-8 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale">
            {/* Logos text placeholders if images aren't available */}
            <span className="text-2xl font-black font-serif">INDORAMA</span>
            <span className="text-2xl font-black text-gray-800">DANGOTE</span>
            <span className="text-2xl font-black italic">BUA CEMENT</span>
            <span className="text-2xl font-black text-blue-900">WACOT</span>
            <span className="text-2xl font-black text-red-700">DANO</span>
          </div>

          <div className="mt-16 text-center max-w-3xl mx-auto">
             <h3 className="text-xl font-bold text-[#111111] mb-4 flex items-center justify-center gap-2">
              <Users className="text-[#111111]" /> Strategic Partners
             </h3>
             <p className="text-gray-600 text-sm">
               We frequently execute large-scale consortium bids and joint ventures with partners like <strong>Ucho James Engineering Limited</strong> to pool resources, mitigate risks, and guarantee successful delivery on massive infrastructure projects.
             </p>
          </div>
        </div>

        {/* Quality Policy */}
        <div className="bg-white text-[#111111] p-8 md:p-16 relative overflow-hidden border-t-4 border-[#0072BB]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[32px] font-bold mb-[24px]">Our Quality Policy</h2>
              <p className="text-[14px] text-[#334155] mb-[24px] leading-[1.6]">
                Aligned with ISO 9001:2000 standards, our quality commitments ensure customer requirements are not just met, but exceeded. Quality is a mandatory compliance requirement for every employee and sub-contractor on site.
              </p>
              <ul className="space-y-[12px] mb-[32px]">
                {['Measurable objectives set per project', 'Customer requirements as the benchmark', 'Mandatory safety compliance', 'Continuous skill development'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[13px] text-[#334155] tracking-wide font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0072BB]" /> {item}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 bg-[#0072BB] hover:bg-[#1E293B] hover:text-[#FFFFFF] text-white font-bold px-[28px] py-[12px] rounded-sm transition-colors text-[14px] uppercase border-none">
                <Download size={18} /> Download Quality PDF
              </button>
            </div>
            <div className="hidden md:block">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Quality inspection" className="rounded-sm shadow-2xl opacity-90 border-[4px] border-[#E2E8F0]" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
