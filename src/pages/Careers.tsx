import { useState } from 'react';
import { db, storage } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { Briefcase, MapPin, UploadCloud, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

const roles = [
  { id: '1', title: 'Senior Piping Engineer', loc: 'Lagos Free Zone / Field', type: 'Full-Time', desc: 'Lead pipe routing, fabrication design, and structural support engineering for FMCG clients.' },
  { id: '2', title: 'HSE Safety Officer', loc: 'Project Site', type: 'Contract', desc: 'Enforce BBS, conduct daily toolbox talks, and monitor LOTO compliance during plant shutdown.' },
  { id: '3', title: 'Certified Scaffolder', loc: 'Gboko, Benue State', type: 'Contract', desc: 'Erect and dismantle complex tubular scaffolding systems. Must hold valid certification.' },
];

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState(roles[0].title);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', coverNote: '' });
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert('Please upload your CV.');
    
    try {
      setStatus('uploading');
      // Upload CV to Storage
      const fileRef = ref(storage, `cvs/${Date.now()}_${file.name}`);
      const uploadTask = await uploadBytesResumable(fileRef, file);
      const cvUrl = await getDownloadURL(uploadTask.ref);

      setStatus('submitting');
      // Save Application to Firestore
      await addDoc(collection(db, 'applications'), {
        ...formData,
        role: selectedRole,
        cvUrl,
        createdAt: serverTimestamp()
      });

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', coverNote: '' });
      setFile(null);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#313B44] mb-4">Join Our Team</h1>
          <div className="w-16 h-1 bg-[#F39C12] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Build your career with an EPC firm that prioritizes safety, quality, and continuous development across Nigeria's industrial hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
          
          {/* Vacancies */}
          <div>
            <h2 className="text-[24px] font-bold text-[#313B44] mb-[30px]">Open Roles</h2>
            <div className="space-y-[15px]">
              {roles.map(role => (
                <div key={role.id} onClick={() => setSelectedRole(role.title)} className={cn("p-[25px] bg-white border cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden", selectedRole === role.title ? "border-[#0072BB]" : "border-[#eee]")}>
                  {selectedRole === role.title && <div className="absolute top-0 left-0 w-1 h-full bg-[#0072BB]" />}
                  <div className="flex justify-between items-start mb-[10px]">
                    <h3 className="text-[18px] font-bold text-[#313B44]">{role.title}</h3>
                    <span className="bg-[#F4F4F4] text-[#666] text-[9px] font-bold px-[8px] py-[4px] uppercase tracking-widest">{role.type}</span>
                  </div>
                  <div className="flex items-center gap-[8px] text-[12px] text-[#888] mb-[15px] font-bold uppercase tracking-wide">
                    <MapPin size={14} className="text-[#DA291C]" /> {role.loc}
                  </div>
                  <p className="text-[#666] text-[13px] leading-[1.6]">{role.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-[40px] bg-[#313B44] text-white p-[40px] border-l-[4px] border-[#F39C12]">
              <h3 className="text-[18px] font-bold mb-[15px]">Life at Quadrupletech</h3>
              <p className="text-[13px] text-white/80 leading-[1.6] mb-[20px]">
                Our culture is built on four pillars: Quality, Safety, Diversity, and Continuous Development. 
                We operate in highly demanding environments, which means we invest heavily in training and certification for our team members. 
                When you join us, you join an engineering family committed to zero-harm and operational excellence.
              </p>
              <div className="flex -space-x-[10px]">
                {[1,2,3,4].map(i => (
                  <img key={i} className="w-[40px] h-[40px] rounded-full border-2 border-[#313B44]" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Employee" />
                ))}
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-white p-[40px] border border-[#eee] border-t-[4px] border-t-[#DA291C] h-fit sticky top-[100px] shadow-lg">
            <h2 className="text-[24px] font-bold text-[#313B44] mb-[10px]">Apply Now</h2>
            <p className="text-[12px] text-[#666] mb-[30px] uppercase tracking-wide font-bold">Selected role: <span className="text-[#0072BB]">{selectedRole}</span></p>

            {status === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Application Received</h3>
                <p className="text-gray-600">Thank you. Our HR team will review your CV and contact you shortly if your profile matches our requirements.</p>
                <button onClick={() => setStatus('idle')} className="mt-6 text-[#0072BB] font-semibold">Submit another application</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                  <div>
                    <label className="block text-[11px] font-bold text-[#666] uppercase tracking-wide mb-[8px]" htmlFor="name">Full Name *</label>
                    <input required id="name" type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-[15px] py-[12px] bg-[#F4F4F4] border border-[#eee] text-[#313B44] text-[14px] focus:bg-white focus:border-[#0072BB] transition-colors outline-none" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-[#666] uppercase tracking-wide mb-[8px]" htmlFor="phone">Phone Number *</label>
                    <input required id="phone" type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-[15px] py-[12px] bg-[#F4F4F4] border border-[#eee] text-[#313B44] text-[14px] focus:bg-white focus:border-[#0072BB] transition-colors outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#666] uppercase tracking-wide mb-[8px]" htmlFor="email">Email Address *</label>
                  <input required id="email" type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-[15px] py-[12px] bg-[#F4F4F4] border border-[#eee] text-[#313B44] text-[14px] focus:bg-white focus:border-[#0072BB] transition-colors outline-none" />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#666] uppercase tracking-wide mb-[8px]">Upload CV (PDF/DOCX) *</label>
                  <label className="flex flex-col items-center justify-center w-full h-[120px] bg-[#F4F4F4] border border-[#ddd] border-dashed cursor-pointer hover:border-[#0072BB] transition-colors relative">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <UploadCloud className="w-8 h-8 text-[#aaa] mb-[10px]" />
                      <p className="text-[12px] text-[#666] font-bold">{file ? file.name : "Click to select or drag & drop"}</p>
                    </div>
                    <input required type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={e => setFile(e.target.files?.[0] || null)} />
                  </label>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#666] uppercase tracking-wide mb-[8px]" htmlFor="cover">Cover Note / Overview</label>
                  <textarea id="cover" rows={4} value={formData.coverNote} onChange={e => setFormData({...formData, coverNote: e.target.value})} className="w-full px-[15px] py-[12px] bg-[#F4F4F4] border border-[#eee] text-[#313B44] text-[14px] focus:bg-white focus:border-[#0072BB] transition-colors outline-none" placeholder="Briefly describe your experience..."></textarea>
                </div>

                <button 
                  disabled={status !== 'idle'} 
                  type="submit" 
                  className="w-full py-[15px] bg-[#313B44] hover:bg-[#F39C12] hover:text-[#313B44] text-white font-bold transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 text-[13px] uppercase tracking-wide border-none"
                >
                  {status === 'idle' ? 'Submit Application' : status === 'uploading' ? 'Uploading CV...' : 'Submitting...'}
                </button>
                {status === 'error' && <p className="text-sm text-red-500 text-center">An error occurred. Please try again.</p>}
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
