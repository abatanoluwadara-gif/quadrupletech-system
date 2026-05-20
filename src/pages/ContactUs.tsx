import { useState } from 'react';
import { db, storage } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { MapPin, Phone, Mail, UploadCloud, CheckCircle2 } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '', company: '', country: '', phone: '', email: '',
    projectType: 'Engineering', budget: '', timeline: '', message: ''
  });
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setStatus('uploading');
      let attachmentUrl = '';
      
      if (file) {
        const fileRef = ref(storage, `enquiries/${Date.now()}_${file.name}`);
        const uploadTask = await uploadBytesResumable(fileRef, file);
        attachmentUrl = await getDownloadURL(uploadTask.ref);
      }

      setStatus('submitting');
      await addDoc(collection(db, 'enquiries'), {
        ...formData,
        attachmentUrl,
        createdAt: serverTimestamp()
      });

      setStatus('success');
      setFormData({ name: '', company: '', country: '', phone: '', email: '', projectType: 'Engineering', budget: '', timeline: '', message: '' });
      setFile(null);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="pt-24 pb-0 bg-white">
      {/* Header */}
      <div className="text-center mb-16 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#313B44] mb-4">Contact Us</h1>
        <div className="w-16 h-1 bg-[#0072BB] mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Need a reliable EPC contractor for your next major industrial project? Connect with our dedicated procurement and engineering team.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Form */}
          <div className="lg:col-span-2 bg-white p-[40px] md:p-[60px] border border-[#eee] border-t-[4px] border-t-[#0072BB] shadow-sm">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="w-20 h-20 text-[#0072BB] mb-6" />
                <h3 className="text-3xl font-bold text-[#313B44] mb-4">Enquiry Submitted</h3>
                <p className="text-[#666] max-w-md mx-auto mb-8 text-[14px]">Thank you. Your project enquiry has been sent directly to our management team. A company brochure has been provided to the email you submitted.</p>
                <button onClick={() => setStatus('idle')} className="px-[24px] py-[12px] bg-[#313B44] text-white font-bold rounded-sm hover:bg-[#F39C12] hover:text-[#313B44] transition-colors text-[13px] uppercase tracking-wide border-none">Start New Enquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-[30px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                  <div><label className="block text-[11px] font-bold text-[#666] uppercase tracking-wide mb-[8px]">Full Name *</label><input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-[15px] py-[12px] bg-[#F4F4F4] border border-[#eee] text-[#313B44] text-[14px] focus:bg-white focus:border-[#0072BB] outline-none transition-colors" /></div>
                  <div><label className="block text-[11px] font-bold text-[#666] uppercase tracking-wide mb-[8px]">Organisation / Company *</label><input required type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full px-[15px] py-[12px] bg-[#F4F4F4] border border-[#eee] text-[#313B44] text-[14px] focus:bg-white focus:border-[#0072BB] outline-none transition-colors" /></div>
                  <div><label className="block text-[11px] font-bold text-[#666] uppercase tracking-wide mb-[8px]">Country *</label><input required type="text" value={formData.country} onChange={e => setFormData({...formData, country: e.target.value})} className="w-full px-[15px] py-[12px] bg-[#F4F4F4] border border-[#eee] text-[#313B44] text-[14px] focus:bg-white focus:border-[#0072BB] outline-none transition-colors" /></div>
                  <div><label className="block text-[11px] font-bold text-[#666] uppercase tracking-wide mb-[8px]">Phone Number *</label><input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-[15px] py-[12px] bg-[#F4F4F4] border border-[#eee] text-[#313B44] text-[14px] focus:bg-white focus:border-[#0072BB] outline-none transition-colors" /></div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#666] uppercase tracking-wide mb-[8px]">Email Address *</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-[15px] py-[12px] bg-[#F4F4F4] border border-[#eee] text-[#313B44] text-[14px] focus:bg-white focus:border-[#0072BB] outline-none transition-colors" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
                  <div>
                    <label className="block text-[11px] font-bold text-[#666] uppercase tracking-wide mb-[8px]">Project Type *</label>
                    <select value={formData.projectType} onChange={e => setFormData({...formData, projectType: e.target.value})} className="w-full px-[15px] py-[12px] bg-[#F4F4F4] border border-[#eee] text-[#313B44] text-[14px] focus:bg-white focus:border-[#0072BB] outline-none transition-colors appearance-none">
                      <option>Engineering</option><option>Safety Services</option><option>Logistics</option><option>HSE Training</option><option>Civil Works</option><option>General Enquiry</option>
                    </select>
                  </div>
                  <div><label className="block text-[11px] font-bold text-[#666] uppercase tracking-wide mb-[8px]">Budget Range (Optional)</label><input type="text" value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})} placeholder="e.g. $50k - $200k" className="w-full px-[15px] py-[12px] bg-[#F4F4F4] border border-[#eee] text-[#313B44] text-[14px] focus:bg-white focus:border-[#0072BB] outline-none transition-colors" /></div>
                  <div><label className="block text-[11px] font-bold text-[#666] uppercase tracking-wide mb-[8px]">Timeline (Optional)</label><input type="text" value={formData.timeline} onChange={e => setFormData({...formData, timeline: e.target.value})} placeholder="e.g. Q3 2024" className="w-full px-[15px] py-[12px] bg-[#F4F4F4] border border-[#eee] text-[#313B44] text-[14px] focus:bg-white focus:border-[#0072BB] outline-none transition-colors" /></div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#666] uppercase tracking-wide mb-[8px]">Scope Description / Message *</label>
                  <textarea required rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-[15px] py-[12px] bg-[#F4F4F4] border border-[#eee] text-[#313B44] text-[14px] focus:bg-white focus:border-[#0072BB] outline-none transition-colors" placeholder="Please provide details about the project..."></textarea>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#666] uppercase tracking-wide mb-[8px]">File Attachment (Optional, max 10MB)</label>
                  <label className="flex items-center gap-4 w-full px-[15px] py-[12px] bg-[#F4F4F4] border border-[#eee] border-dashed cursor-pointer hover:border-[#0072BB] transition-colors">
                    <UploadCloud className="text-[#888] shrink-0" />
                    <span className="text-[14px] text-[#666] truncate">{file ? file.name : 'Upload drawings or RFQ docs...'}</span>
                    <input type="file" className="hidden" accept=".pdf,.doc,.docx,.zip,.jpg,.png" onChange={e => setFile(e.target.files?.[0] || null)} />
                  </label>
                </div>

                <div className="pt-4 border-t border-[#eee]">
                  <button disabled={status !== 'idle'} type="submit" className="px-[30px] py-[15px] bg-[#313B44] text-white hover:bg-[#F39C12] hover:text-[#313B44] font-bold transition-colors w-full md:w-auto text-[13px] uppercase tracking-wide border-none">
                    {status === 'idle' ? 'Submit Enquiry' : 'Processing...'}
                  </button>
                  {status === 'error' && <p className="text-[12px] text-red-500 mt-2 font-bold">Error submitting form. Try again.</p>}
                </div>

              </form>
            )}
          </div>

          {/* Side Info */}
          <div className="lg:col-span-1">
            <div className="bg-[#313B44] text-white p-[40px] shadow-sm mb-[20px] border-t-4 border-[#F39C12]">
              <h3 className="text-[20px] font-bold mb-[30px] uppercase tracking-wide">Direct Channels</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-[#F39C12]"><MapPin size={20} /></div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-400 mb-1">Corporate HQ</h4>
                    <p className="text-[#F4F4F4] leading-relaxed">5 Ayegbami Street, Idotun,<br/>Lagos Free Zone, Ibeju-Lekki,<br/>Lagos, Nigeria.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-[#0072BB]"><Phone size={20} /></div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-400 mb-1">Contact Numbers</h4>
                    <a href="tel:+2349073463078" className="block text-[#F4F4F4] hover:text-[#0072BB] mb-1">0907 346 3078</a>
                    <a href="tel:+2348026125351" className="block text-[#F4F4F4] hover:text-[#0072BB] mb-1">0802 612 5351</a>
                    <a href="tel:+2348164373669" className="block text-[#F4F4F4] hover:text-[#0072BB]">0816 437 3669</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-[#DA291C]"><Mail size={20} /></div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-400 mb-1">Email Connect</h4>
                    <a href="mailto:Quadrupletech036@gmail.com" className="block text-[#F4F4F4] hover:text-[#DA291C] break-all">Quadrupletech036@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <a href="https://wa.me/2349073463078?text=Hello%20Quadrupletech" target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-3 py-[18px] bg-[#25D366] text-white font-bold hover:bg-[#313B44] transition-colors border-none uppercase tracking-wide text-[13px]">
               Message on WhatsApp
            </a>
          </div>

        </div>
      </div>

      {/* Map */}
      <div className="w-full h-[400px] bg-slate-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d15858.115822606558!2d3.8967922137943543!3d6.438596644837599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4eaab5ba2ef%3A0xe7585ebf7d7acba4!2sIbeju%20Lekki%2C%20Lagos!5e0!3m2!1sen!2sng!4v1716301382405!5m2!1sen!2sng" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
