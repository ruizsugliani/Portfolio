'use client'

import Image from "next/image"
import MyPh from "@/public/my_ph.jpeg"


function Hero() {
  return (
    <div className="h-screen w-full bg-black-100 bg-grid-white/[0.3] relative flex items-center justify-center text-center p-8 rounded-b-full">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <div className="flex flex-col gap-y-6 justify-center align-middle items-center">
        <p className="text-5xl sm:text-5xl xl:text-7xl font-bold relative z-20 bg-clip-text text-neutral-100">
        Transforming ideas into innovative and efficient solutions
        </p>
        <div className="flex flex-col gap-y-6 h-[30vh] w-[30vh]">
            <div className="rounded-xl border-neutral-100 border-2">
                <Image 
                    width={1000}
                    height={1000}
                    alt="My Photo"
                    src={MyPh}
                    className="object-cover rounded-xl h-full w-full"
                />
            </div>
            <div className="flex flex-col gap-y-2 items-center">
                <p className="text-nowrap text-white uppercase text-lg sm:text-md font-bold relative z-20 bg-clip-text">
                    Santiago Nahuel Ruiz Sugliani
                </p>
                <p className="text-nowrap text-white uppercase text-lg sm:text-md font-bold relative z-20 bg-clip-text">
                    Argentinian Full stack Developer
                </p>
                <button
                 className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                 onClick={
                    (e) => {
                      e.preventDefault();
                      const tempAnchor = document.createElement("a");
                      tempAnchor.href = "/resumee_santiago_nahuel_ruiz_sugliani.pdf";
                      tempAnchor.download = "resumee_santiago_nahuel_ruiz_sugliani.pdf";
                      document.body.appendChild(tempAnchor);
                      tempAnchor.click();
                      document.body.removeChild(tempAnchor);
                    }
                 }
                 >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl uppercase">
                    Download Resumee
                  </span>
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero