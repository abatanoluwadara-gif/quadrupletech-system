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
      <div className="relative h-[400px] mb-20 bg-[#313B44] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="About Us" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Who We Are</h1>
          <div className="w-16 h-1 bg-[#F39C12] mx-auto"></div>
          <p className="mt-4 text-xl text-[#F39C12] font-medium max-w-2xl mx-auto">
            Executing EPC contracts using the latest state-of-the-art technology.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#313B44] mb-6">Our Narrative</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2016, <strong>Quadrupletech Engineering and Services Limited</strong> is a CAC-incorporated EPC (Engineering, Procurement, and Construction) firm headquartered at 5 Ayegbami Street, Idotun, Lagos Free Zone, Ibeju-Lekki, Lagos.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our mission is simple: to execute complex EPC contracts using state-of-the-art technology, delivering on schedule, and providing competitively priced quality products. Over the years, we have built a reputation for zero-harm operations and uncompromising structural integrity across Nigeria's industrial landscape.
            </p>
            <div className="bg-gray-50 p-6 border-l-4 border-[#0072BB]">
              <div className="flex gap-4">
                <Target className="text-[#0072BB] shrink-0" size={24} />
                <p className="text-[#313B44] font-medium italic">
                  "To be the premier engineering partner of choice for multinational energy, construction, and manufacturing operators."
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#F39C12] translate-x-4 translate-y-4 rounded-lg"></div>
            <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team at site" className="relative z-10 rounded-lg shadow-xl w-full h-[400px] object-cover" />
          </div>
        </div>

        {/* Management Team */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#313B44] mb-4">Our Management</h2>
            <div className="w-16 h-1 bg-[#F39C12] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {management.map((m) => (
              <motion.div key={m.name} whileHover={{ y: -5 }} className="bg-white border text-center p-8 shadow-sm">
                <img src={m.img} alt={m.name} className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-gray-50" />
                <h3 className="text-xl font-bold text-[#313B44] mb-2">{m.name}</h3>
                <p className="text-[#0072BB] font-medium text-sm mb-4">{m.title}</p>
                <p className="text-gray-500 text-sm">{m.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mb-24 bg-[#F4F4F4] p-8 md:p-12 border-t-4 border-[#0072BB]">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#313B44] mb-4">Industries We Serve</h2>
            <p className="text-[#666]">Bringing domain expertise to highly regulated, complex verticals.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {industries.map((ind) => (
              <div key={ind.title} className="bg-white p-[25px] border border-[#eee] hover:border-[#0072BB] transition-colors hover:shadow-md">
                <Lightbulb className="text-[#0072BB] mb-[15px]" size={28} />
                <h4 className="text-[18px] font-bold text-[#313B44] mb-[10px]">{ind.title}</h4>
                <p className="text-[13px] leading-[1.6] text-[#666] m-0">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Clients & Partners */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-[#313B44] mb-12 text-center">Trusted By</h2>
          
          <div className="bg-white border rounded-xl overflow-hidden p-8 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale">
            {/* Logos text placeholders if images aren't available */}
            <span className="text-2xl font-black font-serif">INDORAMA</span>
            <span className="text-2xl font-black text-gray-800">DANGOTE</span>
            <span className="text-2xl font-black italic">BUA CEMENT</span>
            <span className="text-2xl font-black text-blue-900">WACOT</span>
            <span className="text-2xl font-black text-red-700">DANO</span>
          </div>

          <div className="mt-16 text-center max-w-3xl mx-auto">
             <h3 className="text-xl font-bold text-[#313B44] mb-4 flex items-center justify-center gap-2">
              <Users className="text-[#F39C12]" /> Strategic Partners
             </h3>
             <p className="text-gray-600 text-sm">
               We frequently execute large-scale consortium bids and joint ventures with partners like <strong>Ucho James Engineering Limited</strong> to pool resources, mitigate risks, and guarantee successful delivery on massive infrastructure projects.
             </p>
          </div>
        </div>

        {/* Quality Policy */}
        <div className="bg-[#313B44] text-white p-8 md:p-16 relative overflow-hidden border-t-4 border-[#DA291C]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[32px] font-bold mb-[24px]">Our Quality Policy</h2>
              <p className="text-[14px] text-white/90 mb-[24px] leading-[1.6]">
                Aligned with ISO 9001:2000 standards, our quality commitments ensure customer requirements are not just met, but exceeded. Quality is a mandatory compliance requirement for every employee and sub-contractor on site.
              </p>
              <ul className="space-y-[12px] mb-[32px]">
                {['Measurable objectives set per project', 'Customer requirements as the benchmark', 'Mandatory safety compliance', 'Continuous skill development'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[13px] text-white/90 tracking-wide font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F39C12]" /> {item}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 bg-[#F39C12] hover:bg-white text-[#313B44] font-bold px-[28px] py-[12px] rounded-sm transition-colors text-[14px] uppercase border-none">
                <Download size={18} /> Download Quality PDF
              </button>
            </div>
            <div className="hidden md:block">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Quality inspection" className="rounded-sm shadow-2xl opacity-90 border-[4px] border-[#232B32]" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
