"use client";
import React from "react";
import { Section, Typography, Button } from "@/src/components/ui";
import Letter from "@/src/components/sections/founder/Letter";
import {
  CheckCircle2,
  User,
  Dot,
  Newspaper,
  Activity,
  GraduationCap,
  Mic,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";


const Page = () => {
  const router = useRouter();
  const contributionsStx =
    " bg-[#FDFBF7] p-6 rounded border border-gray-100 hover:border-[#C5A059] transition-colors ";
  return (
    <div className="animate-in fade-in duration-500">
      {/* Letter from Founder */}
      <Section background="cream" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-12 shadow-xl border-t-8 border-accent">
            <Letter/>
          </div>
        </div>
      </Section>

      {/* Bio & Visionary Section */}
      <Section background="white" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Full Bio with Image Left */}
          <div className="grid md:grid-cols-12 gap-12 items-start mb-16">
            <div className="md:col-span-4">
              <div className="aspect-3/4 bg-neutral-200 rounded-sm shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-center p-8 text-neutral-500 bg-neutral-100">
                  <div className="flex flex-col items-center">
                    <User size={64} className="mb-4 opacity-50" />
                    <Image
                      src="/images/founder/dr_ann_headshot.jpeg"
                      alt="Dr.Ann Headshot"
                      fill={true}
                      className="inset-0 absolute object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-8 space-y-6">
              <Typography variant="h4" color="text-[#C5A059]">
                Meet Your Clinical Director
              </Typography>
              <Typography variant="h2">Dr. Ann Udofia Nwabuebo</Typography>

              <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
                <p>
                  Dr. Ann Nwabuebo is a globally recognized leader in pelvic
                  health and women’s wellness, bringing 20+ years of clinical
                  mastery from the world’s most advanced healthcare ecosystems
                  to the UAE. As a{" "}
                  <strong>
                    Board-Certified Women’s Health Clinical Specialist (WCS)
                  </strong>{" "}
                  a prestigious distinction held by less than 1% of physical
                  therapists worldwide, Dr. Nwabuebo has dedicated her career to
                  redefining the standard of care for the discerning woman. Her
                  journey is defined by a rare combination of academic rigor,
                  clinical innovation, and an unwavering commitment to the
                  feminine experience.
                </p>
                <p>
                  A seasoned entrepreneur and clinician, Dr. Nwabuebo has
                  successfully operated her own private practice,{" "}
                  <strong>Body Connect Physical Therapy</strong>, since 2007.
                  This nearly two-decade tenure in private practice has allowed
                  her to refine a boutique, high-touch healing environment that
                  serves as the blueprint for J&I. Her expertise, however,
                  extends far beyond the private sector. She has been the
                  visionary architect behind signature pelvic health programs
                  for some of the most influential organizations in the United
                  States, including <strong>Google</strong> in Silicon Valley,{" "}
                  <strong>Kaiser Permanente</strong> in Northern California,{" "}
                  <strong>Medstar Health</strong> in the U.S. capital region,
                  and the renowned{" "}
                  <strong>Jefferson Moss Magee Rehabilitation</strong> system.
                </p>
                <p>
                  Dr. Nwabuebo’s influence as a thought leader is felt across
                  both global industry and elite academia. She has cultivated
                  strategic partnerships with icons such as{" "}
                  <strong>Nike</strong>, <strong>Stanford Health Care</strong>,
                  and <strong>George Washington University</strong> to deliver
                  sophisticated community health initiatives. A respected
                  educator, she serves as a Guest Lecturer at the{" "}
                  <strong>University of Pennsylvania</strong>, where she mentors
                  the next generation of doctoral students and clinical experts,
                  ensuring that her evidence-based &quot;Healing With
                  Grace&quot; philosophy continues to shape the future of the
                  field.
                </p>
                <p>
                  Raised in Muscat, Oman, and having previously served as a women’s health thought leader in Dubai, Dr. Nwabuebo possesses a
                  unique cultural fluency that informs every aspect of her work.
                  At <strong>J&I Women’s Health Center</strong>, she integrates
                  the clinical precision of her U.S. training with an
                  uncompromising commitment to privacy and excellence. By
                  bridging the gap between world-class science and deep cultural
                  empathy, Dr. Nwabuebo is not simply providing a service; she
                  is establishing a new legacy of health for Nigerian women who
                  demand and deserve the very best.
                </p>
              </div>
            </div>
          </div>

          {/* Credentials & Second Image */}
          <div className="grid md:grid-cols-12 gap-12 items-center border-t border-gray-100 pt-12">
            <div className="md:col-span-8 order-2 md:order-1">
              <Typography variant="h3" className="mb-6">
                Credentials of Distinction
              </Typography>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-4 items-start">
                  <CheckCircle2
                    className="text-accent shrink-0 mt-1"
                    size={20}
                  />
                  <span>
                    <strong>Doctor of Physical Therapy (DPT):</strong> Arcadia
                    University, Pennsylvania (2004)
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle2
                    className="text-accent shrink-0 mt-1"
                    size={20}
                  />
                  <span>
                    <strong>Board Certified Clinical Specialist:</strong>{" "}
                    Women’s/Pelvic Health (WCS) - Top 1% Globally
                  </span>
                </li>
                <li className="flex gap-4 items-center">
                  <CheckCircle2
                    className="text-accent shrink-0 mt-1"
                    size={20}
                  />
                  <span>
                    <strong>Clinical Leadership:</strong> Established signature
                    pelvic health programs at the following organizations -
                    Google (Palo Alto, CA); Kaiser Permanente (Dublin, CA);
                    Medstar (Mclean, VA); Jefferson Moss Magee Rehabilitation
                    (Philadelphia, PA); Body Connect Physical Therapy
                    (Washington D.C. Area)
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle2
                    className="text-accent shrink-0 mt-1"
                    size={20}
                  />
                  <span>
                    <strong>Academic Faculty:</strong> University of
                    Pennsylvania (Esteemed Guest Lecturer)
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle2
                    className="text-[#C5A059] shrink-0 mt-1"
                    size={20}
                  />
                  <span>
                    <strong>Strategic Partnerships:</strong> Nike, Stanford
                    Health Care, George Washington University
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle2
                    className="text-[#C5A059] shrink-0 mt-1"
                    size={20}
                  />
                  <span>
                    <strong>Global Societies:</strong> Member of IPPS, ISSWSH,
                    and the APTA Academy of Pelvic Health
                  </span>
                </li>
              </ul>
              <div className="pt-8">
                <Button
                  variant="primary"
                  onClick={() => router.push("/contact")}
                >
                  Request Consultation
                </Button>
              </div>
            </div>

            <div className="md:col-span-4 order-1 md:order-2">
              <div className="aspect-square bg-neutral-100 rounded-sm shadow-lg relative overflow-hidden border border-[#C5A059]/20">
                <div className="absolute inset-0 flex items-center justify-center text-center p-8 text-neutral-400">
                  <div className="flex flex-col items-center">
                    <User size={48} className="mb-4 opacity-50" />
                    <Image
                      src="/images/founder/dr_ann_scrubs.png"
                      alt="Dr.Ann Headshot"
                      fill={true}
                      className="inset-0 absolute object-cover object-[center_25%] "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Global Recognition Section */}
          <div className="mt-16 pt-12 border-t border-gray-100">
            <Typography variant="h3" className="mb-8 text-center">
              Global Recognition & Clinical Contributions
            </Typography>

            {/* Articles / Publications Container gap32px */}
            <div className="grid md:grid-cols-2 flex-wrap justify-center gap-8 auto-cols-fr auto-rows-fr ">
              {/* Item 1: NYT */}
              <div className={contributionsStx}>
                <div className="flex items-center gap-3 mb-4">
                  <Newspaper className="text-[#C5A059]" size={24} />
                  <h4 className="font-serif text-lg text-[#1A202C] font-bold group-hover:text-[#C5A059]">
                    The New York Times
                  </h4>
                </div>
                <p className="text-xs font-bold text-[#C5A059] uppercase tracking-wider mb-2">
                  Featured Expert
                </p>
                <p className="text-gray-600 italic text-sm mb-4">
                  &quot;7 Fitness Resolutions That Have Nothing to Do With
                  Weight Loss&quot;
                </p>
                <a
                  href="https://www.nytimes.com/2025/01/01/well/move/fitness-new-years-resolutions.html"
                  rel="no reffer"
                  target="_blank"
                  className="text-xs font-bold uppercase tracking-widest border-b border-[#1A202C] pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors"
                >
                  Read Article
                </a>
              </div>

              {/* Item 2: Nike Mother */}
              <div className={contributionsStx}>
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="text-[#C5A059]" size={24} />
                  <h4 className="font-serif text-lg text-[#1A202C] font-bold group-hover:text-[#C5A059]">
                    Nike: Move Like a Mother
                  </h4>
                </div>
                <p className="text-xs font-bold text-[#C5A059] uppercase tracking-wider mb-2">
                  Global Clinical Consultant
                </p>
                <p className="text-gray-600 italic text-sm mb-4">
                  &quot;A New Program to Support Your Journey Through
                  Motherhood&quot;
                </p>
                <a
                  href="https://about.nike.com/en/newsroom/releases/nike-move-like-a-mother-program"
                  rel="no reffer"
                  target="_blank"
                  className="text-xs font-bold uppercase tracking-widest border-b border-[#1A202C] pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors"
                >
                  Learn More
                </a>
              </div>

              {/* Item 3: Nike Podcast */}
              <div className={contributionsStx}>
                <div className="flex items-center gap-3 mb-4">
                  <Mic className="text-[#C5A059]" size={24} />
                  <h4 className="font-serif text-lg text-[#1A202C] font-bold group-hover:text-[#C5A059]">
                    Nike: Trained Podcast
                  </h4>
                </div>
                <p className="text-xs font-bold text-[#C5A059] uppercase tracking-wider mb-2">
                  Expert Guest
                </p>
                <p className="text-gray-600 italic text-sm mb-4">
                  Specialist: Improve Your Pelvic Health
                </p>
                <a
                  href="https://podcasts.apple.com/in/podcast/ann-nwabuebo-dpt-improve-your-pelvic-health/id1414073313?i=1000556509071"
                  rel="no reffer"
                  target="_blank"
                  className="text-xs font-bold uppercase tracking-widest border-b border-[#1A202C] pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors"
                >
                  Listen Here
                </a>
              </div>

              {/* item 5 */}
              <div className={contributionsStx}>
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-[#C5A059]" size={24} />
                  <h4 className="font-serif text-lg text-[#1A202C] font-bold group-hover:text-[#C5A059]">
                    Each Woman’s Menopause
                  </h4>
                </div>
                <p className="text-xs font-bold text-[#C5A059] uppercase tracking-wider mb-2">
                  Academic Author Chapter Contribution (2022)
                </p>
                <p className="text-gray-600 italic text-sm mb-4">
                  &quot;An Evidence Based Resource For Nurse Practitioners,
                  Advanced Practice Nurses and Allied Health Professionals&quot;
                </p>
                <a
                  href="https://link.springer.com/book/10.1007/978-3-030-85484-3"
                  rel="no reffer"
                  target="_blank"
                  className="text-xs font-bold uppercase tracking-widest border-b border-[#1A202C] pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors"
                >
                  view publication
                </a>
              </div>
            </div>
            <div className="text-center mt-8">
              <span className="font-serif italic text-gray-400">
                ...and many more.
              </span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Page;
