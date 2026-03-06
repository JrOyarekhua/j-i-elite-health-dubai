import { Dot } from "lucide-react";
import React from "react";

const Letter = () => {
  return(
    <>
    <h2 className="font-serif text-3xl mb-6 text-main">
        A Letter from Our Founder
    </h2>
    <div className="space-y-6 text-gray-700 leading-relaxed font-serif">
              <p>
                For over twenty years, my professional journey has taken me
                across four continents and into the heart of the world’s most
                advanced clinical spaces. From the innovation hubs of Silicon
                Valley to the prestigious halls of Stanford and the University
                of Pennsylvania, I have been privileged to shape the standards
                of pelvic health for some of the most discerning organizations
                in the world.
              </p>
              <p>
                But throughout those years, even while developing programs for
                global icons like Google and Nike, my heart remained connected
                to the region that shaped my earliest years. Having been raised
                in the Middle East, I have always understood the quiet
                resilience, dignity, and grace of the women here.
              </p>
              <p>
                Yet, for too long, I have watched women of the Gulf look beyond
                our borders—whether to London, New York, or Geneva—to find the
                level of healthcare, privacy, and specialized expertise they
                deserve.
              </p>
              <div className="border-l-2 border-accent pl-1 flex gap-2 ">
                <Dot />
                <p className="font-bold">
                  <strong>I founded J&amp;I Elite to close that gap.</strong>
                </p>
              </div>
              <p>
                As one of the few Board-Certified Women’s Health Specialists
                (WCS) globally,a distinction held by less than 1% of my
                profession, I recognize that elite clinical results require more
                than just technology. They require a practitioner who
                understands the cultural and emotional landscape of your life.
              </p>
              <p>
                At <strong>J&I</strong>, we provide a &quot;clinical
                extension&quot; of your lifestyle. Here, we don’t just offer
                services; we offer a sanctuary. We provide international
                standard women’s health and wellness support alongside our
                signature <strong>Healing With Grace</strong> Pelvic Wellness
                Protocol. We offer the expert care you expect from Western
                medical capitals, balanced with a profound cultural empathy that
                honors your story, your privacy, and your values.
              </p>
              <p>
                This center is a tribute to the values of faith and excellence
                instilled in my siblings and I by our parents, Mr & Mrs Joshua
                and Idongesit Reuben Udofia. You have always cared for your
                family, your businesses, and your community with excellence. It
                is now our honor to care for you.
              </p>
              <div className="pt-6">
                <p className="font-bold">With Grace and Excellence,</p>
                <p className="text-accent text-xl mt-2 italic">
                  Dr. Ann Udofia-Nwabuebo, PT, DPT, WCS
                </p>
                <p className="text-sm text-gray-400">
                  Founder, J&I Elite Women’s Health
                </p>
              </div>
            </div>
  </>
  ) 
  
};

export default Letter;
