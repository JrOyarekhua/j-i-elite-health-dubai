import {Program, ClinicianIndication} from "@/types";

/**
 * list of pograms used in the programs page
 */
export const PROGRAMS: Program[] = [
    {
        id: 'leadership',
        title: 'The Leadership Vitality Journey',
        tagline: 'For the female leader who demands high-level performance and sustainability. Recover your focus and physical resilience without downtime..',
        description: 'Eliminate back pain, build a stronger core, and carry yourself with confidence in the boardroom.',
        interventions: ['Deep Core Reconstruction', 'Reduce Tension & Postural Realignment', 'Improve Confidence & Body Comfort'],
        outcome: 'Outcome: Pain-free focus & confidence  High Level Performance.',
        whoFor: 'The CEO, Director, or Banker suffering from "Executive Spine", unresolved Diastasis Recti, or stress-induced pelvic tension.',
        story: {
          name: 'Amina, Banking Executive, Wuse II',
          quote: "I thought surgery was my only option. After the 2-week intensive, my core feels stronger, my pain is gone, and it feels good to be back in the gym."
        },
        image: {
          url: '/images/programs/executive_in_green.jpeg',
          desc: 'nigerian woman in green'
        }
      },
      {
        id: 'grace',
        title: "Grace in Motion",
        tagline: 'For dignity, inner peace, and the freedom to travel and enjoy your legacy. A program focused on mobility and independence.',
        description: 'Treat personal problems like bladder leakage not as "old age," but as a treatable mechanical issue.',
        interventions: ['Pelvic Floor Lift', 'Dryness Training', 'Pre & Post Surgical Rehabilitation'],
        outcome: 'Outcome: Dignity, Confidence, and Freedom to Travel & Enjoy Life Fully.',
        whoFor: 'For dignity, integrity in spiritual life, and full participation in life',
        story: {
          name: 'Hajia B., Maitama',
          quote: "I was leaking urine during Salah and avoided travel. Dr. Ann showed me it was a mechanical issue. Now, I am dry and confident."
        },
        image: {
          url: '/images/programs/woman_closet.jpeg',
          desc: 'nigerian woman in pain in her closet'
        }
      },
      {
        id: 'birth',
        title: 'Birth Readiness',
        tagline: 'For a smoother, safer, empowered delivery.',
        description: 'Prepare your body with movement science, creating the space and path your baby needs for a smoother, safer, and more empowered delivery.',
        interventions: ['Pelvic Alignment Work', 'Labor & Delivery Preparation', 'Perineal Protection'],
        outcome: 'Outcome: An Empowered Delivery and Confident Postnatal Recovery.',
        whoFor: 'Pregnant women looking to resolve pregnancy-related pain while proactively preparing for a healthy and safe delivery.',
        story: {
          name: 'Dr. Toyin, Dermatologist',
          quote: "I felt mentally and emotionally prepared for labor after working with Dr. Nwabuebo, and was grateful to have an uncomplicated delivery."
        },
        image:{
          url: "/images/programs/woman_yoga.jpeg",
          desc: 'pregnant woman doing yoga'
        }
      },
      {
        id: 'recovery',
        title: 'Mother Core Recovery',
        tagline: 'For the new mother seeking full recovery.',
        description: 'Honoring the &quot;Fourth Trimester.&quot; Comprehensive healing for the core and pelvic floor to restore strength after birth.',
        interventions: ['C-Section Scar Release', 'Pelvic Realignment', 'Intimacy Recovery'],
        outcome: 'Outcome: A healed core and physical freedom to enjoy motherhood.',
        whoFor: 'The new mother (after a c-section or vaginal birth) who wants to recover safely and completely.',
        story: {
          name: 'E.K., New Mum',
          quote: "My pain vanished. I returned to work and resumed intimacy with my husband. I went on to have a second, pain-free pregnancy."
        },
        image: {
          url: '/images/programs/mom_smiling.jpeg',
          desc: 'happy mother holding her children'
        }
      },
      {
        id: 'fertility',
        title: 'Body Balance & Preparation',
        tagline: 'Preparing the Body for new life.',
        description: 'Preparing the body for new life. A holistic approach to aligning the pelvis and nervous system for conception.',
        interventions: ['Scar Tissue & Adhesion Release', 'Guided Movement for Optimized Flow', 'Nervous System Reset'],
        outcome: 'Outcome: A Body in Balance, Ready to Support New Life.',
        whoFor: 'Women preparing for conception or IVF who want to maximize success rates by removing mechanical barriers.',
        story: {
          name: 'Zainab, Architect, Asokoro',
          quote: "After two failed IVF cycles, I felt broken. Dr. Ann intensely treated my scars from all my fibroid surgeries, and by God’s grace, I am now in my second trimester."
        },
        image: {
          url: '/images/programs/pregnant_woman.jpeg',
          desc: 'a pregnant woman'
        }
      },
      {
        id: 'pain',
        title: 'The Pain Management Program',
        tagline: 'Where Your Pain Is Taken Seriously.',
        description: 'Stop the cycle of painkillers. We treat the mechanical root causes of chronic pelvic and abdominal pain.',
        interventions: ['Pain-Loop Interruption', 'Adhesion Breaking', 'Root Cause Assessment'],
        outcome: 'Outcome: Relief Without Reliance on Medications.',
        whoFor: 'Women suffering from Endometriosis, mysterious abdominal pain, or Vaginismus.',
        story: {
          name: 'P.K., The Pain Warrior',
          quote: "After 16 visits, my pain was 90% improved. I wasn’t afraid to move my body anymore, and I could travel and enjoy being with my family and friends"
        },
        image:{
          url: '/images/programs/ann_with_woman.jpeg',
          desc: 'doctor explaining diagnoses to patient'
        }
      },
      
    
] as const

/**
 * list of clinican indications to be used in the clinican indication page 
 */
export const CLINICIAN_INDICATIONS: ClinicianIndication[] = [
  {
    category: 'Obstetrics & Maternal Health',
    details: 'Diastasis Recti, Pelvic Organ Prolapse, Pregnancy/Postpartum Pelvic Pain, Dyspareunia, Postpartum Back Pain, Sciatica, Urinary Incontinence.'
  },
  {
    category: 'Urogynecology',
    details: 'Stress & Urge Urinary Incontinence, Grade 1-2 Symptomatic Prolapse, Complex Dyspareunia, Overactive Bladder (OAB), Vulvodynia.'
  },
  {
    category: 'Urology',
    details: 'Interstitial Cystitis/Painful Bladder Syndrome, Chronic Prostatitis/CPPS, Post-Prostatectomy Incontinence.'
  },
  {
    category: 'Gastroenterology & Colo-rectal',
    details: 'Chronic Constipation, Dyschezia, Fecal Incontinence, Proctalgia Fugax, Levator Ani Syndrome, Pelvic Floor Dyssynergia.'
  },
  {
    category: 'Fertility',
    details: 'Mechanical Infertility (Adhesions), Endometriosis, Adenomyosis, Fibroid-related pelvic pain, Dysmenorrhea.'
  },
  {
    category: 'Orthopedics & Pain',
    details: 'Chronic Low Back Pain (CLBP), Myofascial Pain Syndrome, Coccydynia, Hip and Groin Pain.'
  }
] as const 


export const WHATSAPP_NUMBER = '17032093359'

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`

// helper to build a link with a prefilled message
export const getWhatsAppLink = (message: string = 'Hello! I would like to request a consultation') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;