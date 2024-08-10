import Image from "next/image"
import MyPh from "@/public/my_ph.jpeg"

function Hero() {
  return (
    <div className="h-screen w-full bg-black-100 bg-grid-white/[0.3] relative flex items-center justify-center text-center p-8">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <div className="flex flex-col gap-y-6 justify-center align-middle items-center">
        <p className="text-5xl sm:text-5xl xl:text-7xl font-bold relative z-20 bg-clip-text text-neutral-100">
            Transformando ideas en soluciones innovadoras y eficientes
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
                    Full stack Developer
                </p>
                <p className="text-nowrap text-white uppercase text-lg sm:text-md font-bold relative z-20 bg-clip-text">
                    fiuba student
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero