import React, { useState } from 'react';
import { db, storage, auth } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { MapPin, Phone, Mail, UploadCloud, CheckCircle2 } from 'lucide-react';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid || null,
      email: auth.currentUser?.email || null,
      emailVerified: auth.currentUser?.emailVerified || null,
      isAnonymous: auth.currentUser?.isAnonymous || null,
      tenantId: auth.currentUser?.tenantId || null,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error details: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

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
      
      const payload = {
        name: formData.name,
        company: formData.company,
        country: formData.country,
        phone: formData.phone,
        email: formData.email,
        projectType: formData.projectType,
        message: formData.message,
        createdAt: serverTimestamp()
      } as any;

      if (formData.budget) payload.budget = formData.budget;
      if (formData.timeline) payload.timeline = formData.timeline;
      if (attachmentUrl) payload.attachmentUrl = attachmentUrl;

      try {
        await addDoc(collection(db, 'enquiries'), payload);
      } catch (err) {
        handleFirestoreError(err, OperationType.WRITE, 'enquiries');
      }

      // Safe dispatch of brochure email response via backend server-side proxy
      try {
        await fetch('/api/send-brochure', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: formData.company,
            country: formData.country,
            phone: formData.phone,
            projectType: formData.projectType,
            budget: formData.budget,
            timeline: formData.timeline,
            message: formData.message,
          }),
        });
      } catch (mailErr) {
        console.error('Failed to trigger background brochure email helper:', mailErr);
      }

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
        <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">Contact Us</h1>
        <div className="w-16 h-1 bg-[#F39C12] mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Need a reliable EPC contractor for your next major industrial project? Connect with our dedicated procurement and engineering team.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Form */}
          <div className="lg:col-span-2 bg-white p-[40px] md:p-[60px] border border-[#eee] border-t-[4px] border-t-[#F39C12] shadow-sm">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="w-20 h-20 text-[#111111] mb-6" />
                <h3 className="text-3xl font-bold text-[#111111] mb-4">Enquiry Submitted</h3>
                <p className="text-[#666] max-w-md mx-auto mb-8 text-[14px]">Thank you. Your project enquiry has been sent directly to our management team. A company brochure has been provided to the email you submitted.</p>
                <button onClick={() => setStatus('idle')} className="px-[24px] py-[12px] bg-white text-[#111111] font-bold rounded-sm hover:bg-[#0072BB] hover:text-white transition-colors text-[13px] uppercase tracking-wide border-none">Start New Enquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-[30px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                  <div><label className="block text-[11px] font-bold text-[#666] uppercase tracking-wide mb-[8px]">Full Name *</label><input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-[15px] py-[12px] bg-[#F4F4F4] border border-[#eee] text-[#111111] text-[14px] focus:bg-white focus:border-[#0072BB] outline-none transition-colors" /></div>
                  <div><label className="block text-[11px] font-bold text-[#666] uppercase tracking-wide mb-[8px]">Organisation / Company *</label><input required type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full px-[15px] py-[12px] bg-[#F4F4F4] border border-[#eee] text-[#111111] text-[14px] focus:bg-white focus:border-[#0072BB] outline-none transition-colors" /></div>
                  <div><label className="block text-[11px] font-bold text-[#666] uppercase tracking-wide mb-[8px]">Country *</label><input required type="text" value={formData.country} onChange={e => setFormData({...formData, country: e.target.value})} className="w-full px-[15px] py-[12px] bg-[#F4F4F4] border border-[#eee] text-[#111111] text-[14px] focus:bg-white focus:border-[#0072BB] outline-none transition-colors" /></div>
                  <div><label className="block text-[11px] font-bold text-[#666] uppercase tracking-wide mb-[8px]">Phone Number *</label><input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-[15px] py-[12px] bg-[#F4F4F4] border border-[#eee] text-[#111111] text-[14px] focus:bg-white focus:border-[#0072BB] outline-none transition-colors" /></div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#666] uppercase tracking-wide mb-[8px]">Email Address *</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-[15px] py-[12px] bg-[#F4F4F4] border border-[#eee] text-[#111111] text-[14px] focus:bg-white focus:border-[#0072BB] outline-none transition-colors" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
                  <div>
                    <label className="block text-[11px] font-bold text-[#666] uppercase tracking-wide mb-[8px]">Project Type *</label>
                    <select value={formData.projectType} onChange={e => setFormData({...formData, projectType: e.target.value})} className="w-full px-[15px] py-[12px] bg-[#F4F4F4] border border-[#eee] text-[#111111] text-[14px] focus:bg-white focus:border-[#0072BB] outline-none transition-colors appearance-none">
                      <option>Engineering</option><option>Safety Services</option><option>Logistics</option><option>HSE Training</option><option>Civil Works</option><option>General Enquiry</option>
                    </select>
                  </div>
                  <div><label className="block text-[11px] font-bold text-[#666] uppercase tracking-wide mb-[8px]">Budget Range (Optional)</label><input type="text" value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})} placeholder="e.g. $50k - $200k" className="w-full px-[15px] py-[12px] bg-[#F4F4F4] border border-[#eee] text-[#111111] text-[14px] focus:bg-white focus:border-[#0072BB] outline-none transition-colors" /></div>
                  <div><label className="block text-[11px] font-bold text-[#666] uppercase tracking-wide mb-[8px]">Timeline (Optional)</label><input type="text" value={formData.timeline} onChange={e => setFormData({...formData, timeline: e.target.value})} placeholder="e.g. Q3 2024" className="w-full px-[15px] py-[12px] bg-[#F4F4F4] border border-[#eee] text-[#111111] text-[14px] focus:bg-white focus:border-[#0072BB] outline-none transition-colors" /></div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#666] uppercase tracking-wide mb-[8px]">Scope Description / Message *</label>
                  <textarea required rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-[15px] py-[12px] bg-[#F4F4F4] border border-[#eee] text-[#111111] text-[14px] focus:bg-white focus:border-[#0072BB] outline-none transition-colors" placeholder="Please provide details about the project..."></textarea>
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
                  <button disabled={status !== 'idle'} type="submit" className="px-[30px] py-[15px] bg-white text-[#111111] hover:bg-[#0072BB] hover:text-white font-bold transition-colors w-full md:w-auto text-[13px] uppercase tracking-wide border-none">
                    {status === 'idle' ? 'Submit Enquiry' : 'Processing...'}
                  </button>
                  {status === 'error' && <p className="text-[12px] text-red-500 mt-2 font-bold">Error submitting form. Try again.</p>}
                </div>

              </form>
            )}
          </div>

          {/* Side Info */}
          <div className="lg:col-span-1">
            <div className="bg-white text-[#111111] p-[40px] shadow-sm mb-[20px] border-t-4 border-[#0072BB]">
              <h3 className="text-[20px] font-bold mb-[30px] uppercase tracking-wide">Direct Channels</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-[#111111]"><MapPin size={20} /></div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-600 mb-1">Corporate HQ</h4>
                    <p className="text-[#F4F4F4] leading-relaxed">5 Ayegbami Street, Idotun,<br/>Lagos Free Zone, Ibeju-Lekki,<br/>Lagos, Nigeria.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-[#111111]"><Phone size={20} /></div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-600 mb-1">Contact Lines</h4>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Direct Hotline:</div>
                    <a href="tel:+2348164373669" className="block text-white font-black hover:text-[#111111] mb-2 text-base">0816 437 3669</a>
                    
                    <div className="text-[10px] uppercase font-bold text-slate-400">Additional Lines:</div>
                    <a href="tel:+2347076457528" className="block text-[#F4F4F4] hover:text-[#111111] mb-1">0707 645 7528</a>
                    <a href="tel:+2349073463078" className="block text-[#F4F4F4] hover:text-[#111111] mb-1">0907 346 3078</a>
                    <a href="tel:+2348026125351" className="block text-[#F4F4F4] hover:text-[#111111] mb-1">0802 612 5351</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-[#111111]"><Mail size={20} /></div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-600 mb-1">Email Connect</h4>
                    <a href="mailto:techquadruple27@gmail.com" className="block text-[#F4F4F4] hover:text-[#111111] break-all">techquadruple27@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 border border-slate-200/60 p-6 flex flex-col items-center text-center rounded">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#555555] mb-2">WhatsApp Direct Channel</span>
              <span className="text-[18px] font-extrabold text-[#111111] mb-4">0816 437 3669</span>
              <a href="https://wa.me/2348164373669?text=Hello%20Quadrupletech" target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-3 py-[14px] bg-[#25D366] text-white font-bold hover:bg-[#111111] hover:text-white transition-colors border-none uppercase tracking-wider text-[12px] rounded shadow-sm">
                 Message on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Blog Post: EPC Firms' Contribution to Nigeria's Public & Private Sectors */}
      <div className="w-full bg-slate-50 border-t border-slate-200/60 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <article className="bg-white rounded-lg border border-slate-100 shadow-sm p-8 md:p-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-1 bg-[#0072BB]/10 text-[#0072BB] text-[10px] font-bold uppercase tracking-widest rounded-full">
                Industry Insights
              </span>
              <span className="text-xs text-slate-400 font-mono">May 2026</span>
            </div>

            <h2 className="text-2xl md:text-4xl font-extrabold text-[#111111] leading-tight mb-6 uppercase tracking-tight">
              Powering Progress: How EPC Firms Catalyze Nigeria's Public and Private Sectors
            </h2>

            <div className="prose prose-slate max-w-none text-[#555555] text-[15px] leading-relaxed space-y-6">
              <p className="font-medium text-slate-700 text-lg leading-relaxed">
                In Nigeria's dynamic economic landscape, Engineering, Procurement, and Construction (EPC) firms act as critical engines of development. By bridging the gap between intricate design theory and heavy-duty physical reality, these specialized partners lay the backbone of the nation's industrial expansion, serving both governmental public programs and commercial private enterprises.
              </p>

              <div>
                <h3 className="text-[16px] font-bold text-[#111111] mb-2 uppercase tracking-wide border-l-4 border-[#F39C12] pl-3">
                  1. Developing Public Sector Infrastructure
                </h3>
                <p>
                  In the public sector, EPC firms translate federal and state developmental visions into functional critical infrastructure. From constructing high-capacity gas-to-power energy piping systems to erecting aviation safety grids and modernizing public utilities, these firms help alleviate key logistic bottlenecks. By building gas stations, event multi-purpose halls, and public market infrastructure, they facilitate smooth domestic commerce and guarantee safety for millions of Nigerian households.
                </p>
              </div>

              <div>
                <h3 className="text-[16px] font-bold text-[#111111] mb-2 uppercase tracking-wide border-l-4 border-[#F39C12] pl-3">
                  2. Driving Private Sector Productivity &amp; Integrity
                </h3>
                <p>
                  Within the private sphere, particularly across the FMCG, oil &amp; gas downstream, energy stations, restaurants, and heavy manufacturing sectors, EPC partners are vital for operational cost-efficiency. They fabricate bespoke steel support structures, install process equipment, and coordinate complex plant upgrades. This specialized execution allows private corporations to minimize waste, decrease supply chain friction, and maintain peak uptime under strict international quality guidelines.
                </p>
              </div>

              <div>
                <h3 className="text-[16px] font-bold text-[#111111] mb-2 uppercase tracking-wide border-l-4 border-[#E11D48] pl-3">
                  3. Local Capacity &amp; Lifesaving Safety Cultures
                </h3>
                <p>
                  Beyond traditional steel and machinery, the true value of modern EPC operators lies in the standard-of-safety they enforce. Through active compliance with international guidelines and upskilling local technicians, they build resilient safety cultures. Setting up intelligent gas suppression systems, automated fire pumps, and early-warning detectors minimizes fire outbreaks, preventing business losses and ensuring the safe operation of private hotels, schools, and hostels.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0072BB]/5 rounded-full flex items-center justify-center text-[#0072BB]">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 uppercase">Staff Editorial</div>
                  <div className="text-[11px] text-slate-500 font-medium font-sans">Quadrupletech HSE &amp; Engineering Department</div>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                EPC • Nigeria • Growth
              </span>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
