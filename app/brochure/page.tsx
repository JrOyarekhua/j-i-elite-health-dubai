"use client";

import React from "react";
import Image from "next/image";
import { Award, CheckCircle2, Dot, ShieldCheck, Target } from "lucide-react";
import { Section, Typography, Button } from "@/src/components/ui";
import Letter from "@/src/components/sections/founder/Letter";
import { useRouter } from "next/navigation";

const Brochure = () => {
  const router = useRouter();
  return (
    <div id="brochure" className="bg-[#FDFBF7] antialiased">
      {/* PAGE 1: COVER */}
      <Section
        className="min-h-screen relative flex flex-col justify-between p-8 md:p-12 border-b border-[#C5A059]/20 overflow-hidden"
        background="cream"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home/woman_window.jpeg"
            alt="Cover"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A202C]/90 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 w-32 mb-8">
          {/* <Image
            src="/images/white_new.png"
            alt="J&I Logo"
            width={128}
            height={64}
            className="opacity-90"
          /> */}
        </div>
        <div className="relative z-10 text-center mt-auto mb-24">
          <Typography
            variant="h1"
            className="text-white tracking-wide leading-tight mb-4"
          >
            HEALING
            <br />
            WITH GRACE™
          </Typography>
          <div className="w-24 h-1 bg-[#C5A059] mx-auto my-6"></div>
          <Typography
            variant="body"
            className="text-[#C5A059] italic font-serif text-xl md:text-2xl"
          >
            The World-Class Care You Usually Travel For. Now in Abu Dhabi.
          </Typography>
        </div>
        <div className="relative z-10 flex justify-between items-end border-t border-white/20 pt-6 text-white/60 text-[10px] uppercase tracking-widest">
          <span>J&I Elite Health & Wellness</span>
        </div>
      </Section>

      {/* PAGE 2: FOUNDER'S LETTER */}
      <Section
        className="py-20 px-6 md:px-16 max-w-7xl mx-auto"
        background="cream"
      >
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] shadow-2xl border-b-4 border-[#C5A059]">
              <Image
                src="/images/founder/dr_ann_headshot.jpeg"
                alt="Dr. Ann Nwabuebo"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-8 bg-white p-8 shadow-lg border border-[#F3F4F6]">
              <Typography
                variant="h4"
                className="text-[#1A202C] mb-4 border-b border-[#C5A059] pb-2 inline-block"
              >
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
                    Pennsylvania (Guest Lecturer)
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
            </div>
          </div>
          <div className="md:col-span-7 space-y-6">
            <Letter/>
          </div>
        </div>
      </Section>

      {/* PAGE 3: METHODOLOGY */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C5A059] uppercase tracking-[0.2em] text-sm font-bold">
              The Science of Grace
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
            Healing With Grace™
            </h2>
            <p className="text-lg text-gray-600">
              <strong>
                Global Clinical Excellence
              </strong>
              <br />An evidence-based approach designed for the unique challenges of a woman’s
              body—from C-section recovery to releasing chronic stress and deep tissue tension.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="text-4xl font-serif text-[#C5A059] opacity-50 font-bold">
                  01
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">
                  The Private Consultation
                  </h3>
                  <p className="text-gray-600">
                    We don&apos;t just scan; we listen. We map your history,
                    from all your past health battles and surgeries to boardroom
                    stress, to find the root cause.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-4xl font-serif text-[#C5A059] opacity-50 font-bold">
                  02
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">
                  Release & Restore
                  </h3>
                  <p className="text-gray-600">
                    No machines. We use advanced manual therapy treatments to
                    physically release the &quot;held&quot; tension in your
                    scars, pelvis, spine and the rest of your body.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-4xl font-serif text-[#C5A059] opacity-50 font-bold">
                  03
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">
                  Calm & Balance
                  </h3>
                  <p className="text-gray-600">
                    Stress locks pain into the body. We guide your nervous
                    system out of &quot;fight or flight&quot; so deep healing
                    can begin.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-4xl font-serif text-[#C5A059] opacity-50 font-bold">
                  04
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">
                  Real World Strength
                  </h3>
                  <p className="text-gray-600">
                    We retrain your body for <em>your</em> life—whether
                    that&apos;s lifting a toddler, sitting through a board
                    meeting, or bowing in prayer without fear.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[600px]">
              <Image
                src="/images/woman_tennis.png"
                alt="Methodology"
                fill
                className="object-cover shadow-2xl object-right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 4: EXECUTIVE REVIVAL */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="order-2 md:order-1">
            <div className="text-[#C5A059] text-sm tracking-widest uppercase font-bold mb-2">
              Program 01
            </div>
            <h3 className="font-serif text-4xl mb-4 text-[#1A202C]">
            The Leadership Vitality Journey
            </h3>
            <p className="font-serif italic text-xl text-gray-500 mb-6">
              For the woman who cannot afford downtime.
            </p>
            <p className="text-gray-700 mb-6">
              You lead organizations and manage high-stakes decisions. But in
              private, you are managing chronic pain and disruptive physical
              discomfort. The cost of &quot;pushing through&quot; is too high.
              Distraction in board meetings, inability to wear your wardrobe
              comfortably, endless use of pain medications, and the looming
              threat of surgery. You cannot let a &quot;disconnected&quot; core
              threaten your career longevity.
            </p>

            <div className="bg-white p-6 rounded shadow-sm border-l-4 border-[#C5A059] mb-8">
              <h4 className="font-bold text-sm uppercase mb-4 text-[#1A202C]">
                The J&I Intervention
              </h4>
              <ul className="space-y-4 text-sm text-gray-600">
                <li>
                  <strong>Nervous System & Physical Restoration:</strong> We
                  focus on specialized hands-on techniques that do more than
                  relax muscles, they reset your body’s stress response. By
                  restoring true physical function and calming the nervous
                  system, we create the physical foundation for mental clarity
                  and focus.
                </li>
                <li>
                  <strong>Tension & Postural Realignment:</strong> We use manual
                  therapy and targeted exercises to gently release the deep
                  tension and compensatory tightness in the core and spine that
                  build up from high-stress work and constant &quot;pushing
                  through.&quot;
                </li>
                <li>
                  <strong>Confidence & Body Comfort:</strong> We don&apos;t just
                  treat the pain; we address the symptoms and physical
                  discomfort to improve how you look and feel in your body,
                  restoring your confidence in your entire wardrobe.
                </li>
              </ul>
            </div>

            <div className="bg-[#FDFBF7] p-8 border border-gray-200">
              <h4 className="font-serif text-lg mb-4 italic text-[#1A202C] border-b border-[#C5A059] pb-2 inline-block">
                Real Story: &quot;The Executive&quot; (Patient C.P.)
              </h4>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  <strong>The Struggle:</strong> A 50-year-old executive had
                  suffered from chronic low back pain for a year. She had
                  stopped her morning workouts and was finding it impossible to
                  sit through long strategy sessions. Her doctor had already
                  suggested spinal surgery as the next step.
                </p>
                <p>
                  <strong>The HWG Breakthrough:</strong> Our deep dive revealed
                  that she had postural compensation issues and untreated scar
                  tissue from previous abdominal surgeries. She didn&apos;t need
                  surgery; she needed hands-on work to release the deep tension
                  in her core, spine, and pelvis.
                </p>
                <p>
                  <strong>The Collaboration:</strong> We coordinated her care
                  with herorthopedic doctor to ensure she was on the right types
                  of medications to support the hands-on work in therapy.
                </p>
                <p>
                  <strong>The Transformation:</strong> After 12 visits of the
                  Executive Protocol, she successfully managed her condition. She is back to
                  exercising daily and leads her team without the distraction of
                  pain.
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/5] shadow-xl md:sticky md:top-8">
              <Image
                src="/images/uae_window.png"
                alt="Executive Woman"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 5: MATRIARCH'S RESTORATION */}
      <section className="py-24 bg-white max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="relative aspect-[4/5] shadow-xl md:sticky md:top-8">
            <Image
              src="/images/programs/woman_closet.jpeg"
              alt="woman in closet"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-[#C5A059] text-sm tracking-widest uppercase font-bold mb-2">
              Program 02
            </div>
            <h3 className="font-serif text-4xl mb-4 text-[#1A202C]">
            Midlife Wellness
            </h3>
            <p className="font-serif italic text-xl text-gray-500 mb-6">
            For dignity, inner peace, and confidence.
            </p>
            <p className="text-gray-700 mb-6">
            Bladder control issues are a treatable muscular condition. The social cost of this condition
              is devastating: avoiding travel, fearing embarrassing situations
              at events, and the disruption of religious or cultural practices
              due to leakage. We restore your confidence to stand, move, and
              travel freely.
            </p>

            <div className="bg-[#FDFBF7] p-6 rounded shadow-sm border-l-4 border-[#C5A059] mb-8">
              <h4 className="font-bold text-sm uppercase mb-4 text-[#1A202C]">
                The J&I Intervention
              </h4>
              <ul className="space-y-4 text-sm text-gray-600">
                <li>
                  <strong>Pelvic Floor Training:</strong> We use manual therapy
                  techniques and exercises to strengthen the pelvic floor
                  muscles and better support the pelvic organs.
                </li>
                <li>
                  <strong>Dryness Training:</strong> Neuromuscular retraining to
                  ensure you remain dry during social gatherings, exercise,
                  spiritual observance, and travel.
                </li>
                <li>
                  <strong>Surgical Prevention:</strong> A proactive,
                  conservative approach to avoid invasive often prescribed
                  abroad.
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <h4 className="font-serif text-lg mb-4 italic text-[#1A202C] border-b border-[#C5A059] pb-2 inline-block">
                Real Story: &quot;The Matriarch&quot; (Patient G.P.)
              </h4>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  <strong>The Struggle:</strong> A mother of two was suffering
                  from leakage whenever she coughed, sneezed, or tried to
                  exercise. She felt a heavy &quot;pressure&quot; by the end of
                  every day and had begun withdrawing from social events out of
                  fear of embarrassment.
                </p>
                <p>
                  <strong>The HWG Breakthrough:</strong> We identified lots of
                  tightness, weakness, and coordination problems around her core
                  and pelvic floor muscle. A treatable condition, not a
                  permanent defect. We used muscle re-training exercises to
                  improve her core and pelvic floor strength.
                </p>
                <p>
                  <strong>The Collaboration:</strong> We worked hand-in-hand
                  with her OB/GYN to fit her with a pessary (support device),
                  allowing her to heal while maintaining her daily life.
                </p>
                <p>
                  <strong>The Transformation:</strong> She can bend, lift, cough
                  without leaking, and she has reclaimed her active social life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 6: FERTILITY OPTIMIZATION */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="order-2 md:order-1">
            <div className="text-[#C5A059] text-sm tracking-widest uppercase font-bold mb-2">
              Program 03
            </div>
            <h3 className="font-serif text-4xl mb-4 text-[#1A202C]">
            Body Balance & Preparation
            </h3>
            <p className="font-serif italic text-xl text-gray-500 mb-6">
              Preparing the body to receive life.
            </p>
            <p className="text-gray-700 mb-6">
              IVF cycles are a significant financial and emotional investment which take an immense emotional
              toll. You invest heavily in the science of conception; we ensure
              your body is physically capable of receiving that care. We prepare
              the soil before you plant the seed, removing the mechanical
              barriers that often lead to unexplained failed cycles.
            </p>

            <div className="bg-white p-6 rounded shadow-sm border-l-4 border-[#C5A059] mb-8">
              <h4 className="font-bold text-sm uppercase mb-4 text-[#1A202C]">
                The J&I Intervention
              </h4>
              <ul className="space-y-4 text-sm text-gray-600">
                <li>
                  <strong>Scar & Adhesion Release:</strong> We use highly
                  specialized Visceral Manipulation and Myofascial Release
                  techniques to address deep abdominal scarring, dense fascial
                  patterns, and adhesions.
                </li>
                <li>
                  <strong>Movement for Optimized Flow:</strong> Neuromuscular
                  Education—retraining your core and body to use movement
                  patterns that maximize oxygen-rich blood flow to the pelvic
                  organs.
                </li>
                <li>
                  <strong>Nervous System Reset:</strong> Moving your body out of
                  &quot;Fight or Flight&quot; (which blocks fertility) into
                  &quot;Rest and Receive.&quot;
                </li>
              </ul>
            </div>

            <div className="bg-[#FDFBF7] p-8 border border-gray-200">
              <h4 className="font-serif text-lg mb-4 italic text-[#1A202C] border-b border-[#C5A059] pb-2 inline-block">
                Real Story: &quot;The Fertility Seeker&quot; (Patient A.P.)
              </h4>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  <strong>The Struggle:</strong> A 30 year old woman with
                  endometriosis, fibroids, and a history of pelvic surgery was
                  suffering from debilitating pain. Her abdomen was full of
                  adhesions (internal scars) gluing her ovaries, uterus, and
                  fallopian tubes in her pelvis, creating a difficult
                  environment for conception.
                </p>
                <p>
                  <strong>The HWG Breakthrough:</strong> We combined gentle
                  manual work to help regulate the nervous system and free up
                  the dense scar tissue throughout her pelvis.
                </p>
                <p>
                  <strong>The Collaboration:</strong> We partnered with her
                  fertility team, and other health care providers to coordinate
                  her care, manage her stress triggers while preparing her body
                  for IVF.
                </p>
                <p>
                  <strong>The Transformation:</strong> Her pain reduced by over
                  85%. Her body shifted from a state of defense to a state of
                  receptivity, creating the optimal environment for her next
                  chapter.
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/5] shadow-xl md:sticky md:top-8">
              <Image
                src="/images/programs/pregnant_woman.jpeg"
                alt="Fertility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 7: POSTPARTUM SANCTUARY */}
      <section className="py-24 bg-white max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="relative aspect-[4/5] shadow-xl md:sticky md:top-8">
            <Image
              src="/images/programs/mom_smiling.jpeg"
              alt="Postpartum"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-[#C5A059] text-sm tracking-widest uppercase font-bold mb-2">
              Program 04
            </div>
            <h3 className="font-serif text-4xl mb-4 text-[#1A202C]">
            Mother & Core Recovery
            </h3>
            <p className="font-serif italic text-xl text-gray-500 mb-6">
            For the new mother seeking full recovery.
            </p>
            <p className="text-gray-700 mb-6">
              After childbirth, your family cares for you and the baby, and we
              care for your physical recovery. We’re here to help heal the
              Diastasis Recti (Abdominal Separation), treat your birth scars, and back pain.
            </p>

            <div className="bg-[#FDFBF7] p-6 rounded shadow-sm border-l-4 border-[#C5A059] mb-8">
              <h4 className="font-bold text-sm uppercase mb-4 text-[#1A202C]">
                The J&I Intervention
              </h4>
              <ul className="space-y-4 text-sm text-gray-600">
                <li>
                  <strong>Comprehensive Scar Release:</strong> We use
                  specialized manual therapy to treat C-section and perineal
                  scars. This mobilization prevents issues like the scar
                  &quot;shelf&quot; overhang and pelvic pain.
                </li>
                <li>
                  <strong>Postural Realignment:</strong> We realign the body to
                  counter the physical shifts of pregnancy and the daily strain
                  of nursing and carrying your child, restoring your natural
                  balance and ease of movement.
                </li>
                <li>
                  <strong>Marital Comfort & Well-being:</strong> We use manual therapy
                  techniques and exercises to encourage relaxation and blood
                  flow to the pelvic floor, core and spine to ensure your return
                  to marital intimacy is confident and pain-free.
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <h4 className="font-serif text-lg mb-4 italic text-[#1A202C] border-b border-[#C5A059] pb-2 inline-block">
                Real Story: &quot;The New Mum&quot; (Patient E.K.)
              </h4>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  <strong>The Struggle:</strong> One year after a traumatic
                  birth, &quot;E.K.&quot; was still in significant pain. She
                  couldn&apos;t play with her child, she couldn&apos;t return to
                  work, and intimacy with her husband had stopped completely.
                  She was terrified of the idea of having another child.
                </p>
                <p>
                  <strong>The HWG Breakthrough:</strong> We identified that her
                  pelvic floor was stuck in a &quot;protective state&quot;
                  following her delivery. By using a trauma-informed approach,
                  we helped her body feel safe enough to let go of that tension,
                  allowing her to finally move without discomfort and feel like
                  herself again.
                </p>
                <p>
                  <strong>The Collaboration:</strong> We coordinated with her
                  OB/GYN to introduce hormonal therapies that supported our
                  manual work.
                </p>
                <p>
                  <strong>The Transformation:</strong> Her pain vanished. She
                  returned to work and resumed intimacy with her husband. Most
                  importantly, she went on to have a second, pain-free
                  pregnancy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 8: CHRONIC PAIN & BIRTH READY */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Chronic Pain */}
          <div>
            <div className="relative h-70 mb-6 shadow-md">
              <Image
                src="/images/programs/ann_with_woman.jpeg"
                alt="Dr.Ann with woman"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-[#C5A059] text-sm tracking-widest uppercase font-bold mb-2">
              Program 05
            </div>
            <h3 className="font-serif text-3xl mb-2 text-[#1A202C]">
            The Fertility Support Program
            </h3>
            <p className="font-serif italic text-lg text-gray-500 mb-4">
              The end of unresolved discomfort.
            </p>
            <p className="text-sm text-gray-700 mb-4">
              You have been told your pain is &apos;normal,&apos; &apos;all in
              your head,&apos; or simply a &apos;recurring infection.&apos; It
              is none of those things. Your pain is real, and more importantly,
              it is treatable. Chronic pelvic pain is a quiet thief of joy.. Our
              goal is to break the cycle of temporary fixes and medications that
              come with unwanted side effects, addressing the root cause so you
              can finally move forward and feel like yourself again.
            </p>

            <ul className="space-y-2 text-sm text-gray-600 mb-6 bg-white p-4 border-l-4 border-[#C5A059]">
              <li>
                <strong>Pain-Loop Interruption:</strong> Turning off the
                &quot;alarm bells&quot; in your pelvis.
              </li>
              <li>
                <strong>Scar tissue release:</strong> Releasing the
                &quot;glued&quot; tissues from old surgical scars.
              </li>
              <li>
                <strong>Root Cause Assessment:</strong> Identifying compensatory
                patterns in the body contributing to your pain.
              </li>
            </ul>

            <div className="bg-white p-4 border border-gray-200 text-sm text-gray-700 space-y-2">
              <strong className="block text-[#C5A059]">
                Real Story: &quot;The Pain Warrior&quot; (P.K.)
              </strong>
              <p>
                <strong>The Struggle:</strong> Fibroids were surgically removed
                in the U.S, but her abdominal and pelvic pain remained 1 year
                later.
              </p>
              <p>
                <strong>The HWG Breakthrough:</strong> Significant scar tissue
                had left her body in a guarded state. She avoided essential
                movements of her body for fear of further injury. We focused on
                releasing the physical restrictions and retraining her body to
                feel safe and fluid in its natural motion.
              </p>
              <p>
                <strong>The Transformation:</strong> After just 16 visits, she
                reported 90% reduction in pain, the constant fear of movement
                went away, allowing her to travel and return to the social
                activities that made her happy.
              </p>
            </div>
          </div>

          {/* Birth Ready */}
          <div>
            <div className="relative h-64 mb-6 shadow-md">
              <Image
                src="/images/programs/woman_yoga.jpeg"
                alt="woman doing squats"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="text-[#C5A059] text-sm tracking-widest uppercase font-bold mb-2">
              Program 06
            </div>
            <h3 className="font-serif text-3xl mb-2 text-[#1A202C]">
            The Pain Management Program
            </h3>
            <p className="font-serif italic text-lg text-gray-500 mb-4">
              Where Your Pain Is Taken Seriously.
            </p>
            <p className="text-sm text-gray-700 mb-4">
              Preparing your body for birth is an act of empowerment. We
              don&apos;t just &quot;hope&quot; for a smooth delivery; we can use
              movement science to support it. Whether you are aiming for a
              natural birth, C-section or a VBAC, we ensure your body is
              physically prepared and feeling resilient for the journey ahead.
            </p>

            <ul className="space-y-2 text-sm text-gray-600 mb-6 bg-white p-4 border-l-4 border-[#C5A059]">
              <li>
                <strong>Pelvic Alignment Work:</strong> Creating maximum space
                for the baby to descend.
              </li>
              <li>
                <strong>Labor & Delivery Preparation:</strong> Positions to open
                the pelvis naturally.
              </li>
              <li>
                <strong>Perineal Protection:</strong> Reducing the risk of
                tearing.
              </li>
            </ul>

            <div className="bg-white p-4 border border-gray-200 text-sm text-gray-700 space-y-2">
              <strong className="block text-[#C5A059]">
                Real Story: &quot;The Doctor Mum&quot; (Dr. Toyin)
              </strong>
              <p>
                <strong>The Struggle:</strong> A Dermatologist wanted a VBAC,
                but her body felt stiff and very weak.
              </p>
              <p>
                <strong>The HWG Breakthrough:</strong> Her old c-section scar
                tension was quietly affecting her hips, back, and pelvic floor.
                By releasing the adhesions and restoring strength, her body felt
                stronger and ready for birth.
              </p>
              <p>
                <strong>The Transformation:</strong> She felt grounded and more
                mobile at her 37th week of pregnancy and achieved a successful,
                uncomplicated natural birth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 9: PARTNER VITALITY & CONCIERGE  */}
      <section className="bg-[#1A202C] text-white py-24 page-break">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16">
          {/* PARTNER VITALITY */}

          {/* concierge circle */}
          <div className="border-l border-white/10 pl-8 md:pl-16">
            <h3 className="font-serif text-3xl mb-4 text-white">
              The Concierge Circle
            </h3>
            <p className="font-serif italic text-lg text-[#C5A059] mb-6">
              Your Annual Health Security.
            </p>
            <p className="text-gray-300 mb-8 text-sm leading-relaxed">
              Health is not a one-time fix; it is a continuous asset that must
              be managed. This membership is for the woman who demands
              continuity, immediate access, and a long-term strategy for her
              physical vitality. Think of this as &quot;Private Banking&quot;
              for your body.
            </p>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-4">
                <span className="text-[#C5A059] text-xl">✦</span>
                <div>
                  <strong className="block text-white">Priority Access</strong>
                  <span className="text-gray-400">
                    Skip the waitlist. Guaranteed booking windows for your Abu Dhabi sessions.
                  </span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-[#C5A059] text-xl">✦</span>
                <div>
                  <strong className="block text-white">
                    Digital Continuity
                  </strong>
                  <span className="text-gray-400">
                    Quarterly virtual check-ins to monitor progress, adjust
                    travel exercise plans, and manage any flare-ups while you
                    are abroad (London/Dubai/US).
                  </span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-[#C5A059] text-xl">✦</span>
                <div>
                  <strong className="block text-white">
                    The &quot;Inner Circle&quot;
                  </strong>
                  <span className="text-gray-400">
                    Exclusive invitations to private J&I wellness gatherings and
                    early access to new longevity protocols.
                  </span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-[#C5A059] text-xl">✦</span>
                <div>
                  <strong className="block text-white">
                    Care Coordination
                  </strong>
                  <span className="text-gray-400">
                    We act as the quarterback for your physical health,
                    coordinating with your other specialists to ensure nothing
                    falls through the cracks.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#FDFBF7] page-break">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl mb-12 text-[#1A202C]">
            The J&I Promise
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-6 bg-white shadow-sm border-t-2 border-[#C5A059]">
              <h4 className="font-bold text-[#1A202C] mb-2">
                Elite Medical Innovation
              </h4>
              <p className="text-sm text-gray-600">
                We utilize the same high-performance recovery protocols trusted
                by elite organizations like Google and Nike and developed at
                top-tier institutions like Stanford Health Care and Kaiser.
              </p>
            </div>
            <div className="p-6 bg-white shadow-sm border-t-2 border-[#C5A059]">
              <h4 className="font-bold text-[#1A202C] mb-2">
                US-Board Certified & Globally Recognized
              </h4>
              <p className="text-sm text-gray-600">
                You are treated by a practitioner holding the highest level of
                US Board Certification, combined with decades of global
                experience.
              </p>
            </div>
            <div className="p-6 bg-white shadow-sm border-t-2 border-[#C5A059]">
              <h4 className="font-bold text-[#1A202C] mb-2">
                Collaborative Care
              </h4>
              <p className="text-sm text-gray-600">
                We do not work in isolation. We partner hand-in-hand with your
                existing doctors and caregivers to ensure your treatment plan is
                seamless.
              </p>
            </div>
            <div className="p-6 bg-white shadow-sm border-t-2 border-[#C5A059]">
              <h4 className="font-bold text-[#1A202C] mb-2">
                Absolute Discretion
              </h4>
              <p className="text-sm text-gray-600">
                Privacy is not just a luxury; it is a medical necessity. We
                provide a female-centered sanctuary that respects your modesty
                and lowers your stress response.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[50vh] bg-[#1A202C] relative flex flex-col justify-center items-center text-center p-8 page-break">
        <div className="relative z-10 max-w-4xl mx-auto space-y-12">
          <h2 className="font-serif text-5xl md:text-7xl text-white leading-tight">
            STOP MANAGING THE PAIN.
            <br />
            <span className="text-[#C5A059]">START HEALING.</span>
          </h2>

          <p className="text-xl text-gray-300 font-light">
            Dr. Ann’s schedule is strictly limited for Abu Dhabi sessions.
            <br />
            We invite you to secure your private assessment today.
          </p>

          {/* Button Action */}
          <button
            type="button"
            className="inline-block bg-[#C5A059] text-white px-12 py-4 text-sm font-bold tracking-widest uppercase hover:bg-[#B08D45] transition-colors cursor-pointer border border-[#C5A059]"
            onClick={() => router.push("/contact")}
          >
            Request Consultation
          </button>

          <div className="grid md:grid-cols-2 gap-12 text-left bg-white/5 p-8 rounded border border-white/10 mt-12">
            <div>
              <h4 className="text-[#C5A059] uppercase tracking-widest text-xs font-bold mb-4">
                Our Commitment to Discretion
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Privacy is not just a luxury; it is a medical necessity. J&I
                Elite adheres to strict NDA protocols and offers private suite
                access to ensure your anonymity and comfort. Your story is safe
                with us.
              </p>
            </div>
            <div>
              <h4 className="text-[#C5A059] uppercase tracking-widest text-xs font-bold mb-4">
                Contact Private Concierge
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <strong>WhatsApp:</strong>+1 (703)-209-3359
                </li>
                <li>
                  <strong>Email:</strong> concierge@jielitehealth.com
                </li>
                {/* <li><strong>Location:</strong> Private Suites in Maitama & Asokoro</li> */}
                <li>
                  <strong>Web:</strong> http://www.jielitehealth.com
                </li>
                <li>
                  <strong>License:</strong> DOH Licensed Healthcare Facility
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brochure;
