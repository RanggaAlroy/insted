"use client"

import { listAbout } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";



const About = () => {
    useGSAP(
        () => {
            gsap.to('#infinite-marque', {x: '-100%', duration: 35, repeat:-1, ease: 'linear'})
        }
    )    
  return (
    <section className="bg-black-200 h-auto lg:h-[100vh] pt-5">
        <div className="w-full border-t-[1px] pt-2 overflow-hidden">
            <div className="flex items-start gap-2" id="infinite-marque">
                <h2 className="flex-none uppercase text-white leading-[1em] text-[42px]">Crafting Impactful Web Experiences with Webflow Precision</h2>
                <h2 className="flex-none uppercase text-white leading-[1em] text-[42px]">Crafting Impactful Web Experiences with Webflow Precision</h2>
                <h2 className="flex-none uppercase text-white leading-[1em] text-[42px]">Crafting Impactful Web Experiences with Webflow Precision</h2>
                <h2 className="flex-none uppercase text-white leading-[1em] text-[42px]">Crafting Impactful Web Experiences with Webflow Precision</h2>
            </div>
        </div>
        <div className="flex justify-between max-lg:flex-wrap flex-col md:flex-row px-5 mt-5 gap-6 md:gap-0 md:gap-y-6 ">
            {listAbout.map(item => (
                <div className="w-[100%] md:w-[24.3%] max-lg:min-w-[46vw] h-[400px] realtive pb-2 border-b-[1px] border-white flex flex-col gap-2" key={item.title}>
                <div className="w-full h-full overflow-hidden rounded-xl relative">
                   <Image
                    src={item.imgURL}
                    width={500}
                    height={500}
                    alt="image about"
                    className="object-cover w-full h-full z-0"
                   />
                   <div className="absolute top-0 left-0 w-full h-full grain"></div>
                </div>
                <p className="text-white text-sm font-atHauss">{item.title}</p>
            </div>
            ))}
            
        </div>
    </section>
  )
}

export default About