import { motion } from 'motion/react';
import { Download, Users, Lightbulb, Target } from 'lucide-react';



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
          src="https://i.ibb.co/PnfnmM4/pexels-harrun-muhammad-116282236-37198880.jpg" 
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
          
          <div className="relative w-full overflow-hidden bg-white border border-gray-100 rounded-2xl py-10 shadow-sm">
            {/* Fade effect overlays for professional edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            <div className="animate-marquee gap-20 items-center">
              {/* Batch 1 */}
              {[
                { name: "Indorama", url: "https://i.ibb.co/mrf1yd1v/indorama.png" },
                { name: "Dangote Cement", url: "https://i.ibb.co/9Hp6JLbt/dangote-cement.png" },
                { name: "BUA Group", url: "https://i.ibb.co/21H4sz65/images.jpg" },
                { name: "WACOT Rice", url: "https://i.ibb.co/TDTsqYy9/wacot.png" },
                { name: "DANO Milk", url: "https://i.ibb.co/8LpB01CF/dano-logo.png" }
              ].map((logo, idx) => (
                <div key={`logo-set1-${idx}`} className="flex items-center justify-center shrink-0 w-28 md:w-36 h-16 transition-all duration-300 hover:scale-105 p-1 select-none pointer-events-none grayscale hover:grayscale-0 opacity-80 hover:opacity-100">
                  <img 
                    src={logo.url} 
                    alt={logo.name} 
                    className="max-h-full max-w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
              
              {/* Batch 2 (Identical duplicate for seamless looping) */}
              {[
                { name: "Indorama", url: "https://i.ibb.co/mrf1yd1v/indorama.png" },
                { name: "Dangote Cement", url: "https://i.ibb.co/9Hp6JLbt/dangote-cement.png" },
                { name: "BUA Group", url: "https://i.ibb.co/21H4sz65/images.jpg" },
                { name: "WACOT Rice", url: "https://i.ibb.co/TDTsqYy9/wacot.png" },
                { name: "DANO Milk", url: "https://i.ibb.co/8LpB01CF/dano-logo.png" }
              ].map((logo, idx) => (
                <div key={`logo-set2-${idx}`} className="flex items-center justify-center shrink-0 w-28 md:w-36 h-16 transition-all duration-300 hover:scale-105 p-1 select-none pointer-events-none grayscale hover:grayscale-0 opacity-80 hover:opacity-100">
                  <img 
                    src={logo.url} 
                    alt={logo.name} 
                    className="max-h-full max-w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
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
            </div>
            <div className="hidden md:block">
              <img src="https://i.ibb.co/bjZ6L2fB/pexels-shvetsa-5324967.jpg" alt="Quality inspection" className="rounded-sm shadow-2xl opacity-90 border-[4px] border-[#E2E8F0]" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
