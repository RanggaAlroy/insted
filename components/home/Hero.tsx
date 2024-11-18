const Hero = () => {
  return (
    <section className="w-full h-[100vh] relative lg:pt-0 pt-28 z-0">
      <div className="absolute top-0 left-0 w-full h-full z-0">
      <video 
         autoPlay
         loop
         muted
         className="absolute top-0 left-0 w-full h-full object-cover"
      >
         <source src="/videos/asian-designer-working-late-in-studio-2023-11-27-05-37-12-utc.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full grain">
      </div>
      </div>
      <div className="w-full relative flex flex-col items-center lg:items-start z-10">
      <h1 className="main-heading-text">ELEVATING</h1>
      <h1 className="main-heading-text lg:pl-[140px] pl-0">BRANDING WITH</h1>
      <h1 className="main-heading-text lg:pl-[220px] pl-0">CODE-FREE</h1>
      <h1 className="main-heading-text">WEBFLOW</h1>
      <h1 className="main-heading-text lg:pl-[140px] pl-0">SOLUTION<sup> ®</sup></h1>
      </div>
      <div className="w-full absolute bottom-0 flex justify-end items-center gap-4 pb-2 px-5">
        <p className="text-white font-atHauss text-sm">Transforming ideas into dynamic <span className="italic">digital experiances</span>--</p>
        <div className="flex flex-wrap gap-2">
          <div className="border border-white rounded-full py-[5px] px-4">
            <p className="text-white text-sm font-atHauss">XL</p>
          </div>
          <div className="border border-white rounded-full py-[5px] px-4">
            <p className="text-white text-sm font-atHauss">2024</p>
          </div>
          <div className="border border-white rounded-full py-[5px] px-4">
            <p className="text-white text-sm font-atHauss">webflow</p>
          </div>
          <div className="border border-white rounded-full py-[5px] px-4">
            <p className="text-white text-sm font-atHauss">GSAP</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero