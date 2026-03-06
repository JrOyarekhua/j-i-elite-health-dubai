'use client'
import React from "react";
import {Section, Typography} from '@/ui'
import { useRouter } from "next/navigation";
const Protocool = () => {
  const router = useRouter()
  return (
    <Section background="white" className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <Typography variant="h2" className="mb-4">Healing With Grace</Typography>
        <Typography variant="body" className="max-w-2xl mx-auto">
        A signature approach to women’s rehabilitation that addresses deep core strength, pelvic function, and recovery through every season of life.
        </Typography>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 relative">
           <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>
           
           {[
             { num: '01', title: 'The Private Consultation', desc: 'We strictly maintain your privacy while mapping your full history to understand the root cause of your pain. Includes comprehensive history mapping of all past health battles, surgeries, and stress loads.' },
             { num: '02', title: 'Release & Restore', desc: 'Using advanced manual therapy to gently release the held tension in your muscles and tissues. Targeting your scars, pelvis, spine, and deep abdominal tissues to restore mobility.'},
             { num: '03', title: 'Calm & Balance', desc: 'Stress prevents healing. We use specialized techniques to calm your nervous system, allowing deep recovery to begin.' },
             { num: '04', title: 'Real World Strength', desc: 'Deep healing cannot happen when the body is defending itself. We create safety first.' }
           ].map((step, idx) => (
             <div key={idx} className="bg-white p-6 flex flex-col items-center text-center group cursor-pointer hover:shadow-lg transition-all rounded-lg" onClick={() => router.push('/method')}>
               <div className="w-24 h-24 bg-[#FDFBF7] rounded-full border border-[#C5A059] flex items-center justify-center mb-6 group-hover:bg-[#C5A059] group-hover:text-white transition-colors duration-300 shadow-sm">
                 <span className="font-serif text-3xl">{step.num}</span>
               </div>
               <h3 className="font-serif text-xl mb-3">{step.title}</h3>
               <p className="text-sm text-gray-600">{step.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </Section>


  );
};

export default Protocool;
