'use client'

import Link from "next/link";
import { 
    IconMail,
    IconBrandGithub,
    IconBrandLinkedin 
} from "@tabler/icons-react"

function Footer() {
  return (
    <section className="text-center pt-8 pb-8 flex flex-col justify-center items-center align-middle text-white-100 bg-black w-full">
        <p className="text-4xl md:text-5xl font-bold relative z-20 bg-clip-text">
        Thank you for visiting my portfolio
        </p>
        <div className="flex flex-col justify-center items-center gap-y-6 py-12 w-full px-2">
        {
            socialMedia.map(
                (sm) => {

                    if (sm.type === "url") {
                        return (
                            <Link key={crypto.randomUUID()} href={sm.link} target="_blank" rel="noopener noreferrer">
                                <button
                                    className="relative items-center justify-evently gap-x-6 border-2 shadow-[inset_0_0_0_2px_#616467] w-[20rem] sm:w-[36rem] px-12 py-5 sm:py-6 rounded-full tracking-widest uppercase bg-transparent hover:bg-[#616467] hover:text-white transition duration-200 text-center mb-5 break-words">
                                    <div className="absolute -top-1/2 left-[43%] right-[43%] sm:left-[46%] sm:right-[46%] z-10 rounded-full border-2 border-white-100 bg-black p-2 hover:bg-[#616467] hover:text-white transition duration-200">{sm.icon}</div><span>{sm.text}</span>
                                </button>
                            </Link>
                        );
                    } else {
                        return (
                            <div
                                key={crypto.randomUUID()}
                                className="relative items-center justify-evently gap-x-6 border-2 shadow-[inset_0_0_0_2px_#616467] w-[20rem] sm:w-[36rem] px-12 py-5 sm:py-6 rounded-full tracking-widest uppercase bg-transparent hover:bg-[#616467] hover:text-white transition duration-200 text-center mb-5 break-words"
                                onClick={
                                    () => {
                                        const emailTo = `mailto:${sm.text}?subject=Asunto&body=Este es el cuerpo del mensaje`
                                        window.location.href = emailTo;
                                    }
                                }
                            >
                                <div className="absolute -top-1/2 left-[43%] right-[43%] sm:left-[46%] sm:right-[46%] z-10 rounded-full border-2 border-white-100 bg-black p-2 hover:bg-[#616467] hover:text-white transition duration-200">{sm.icon}</div><span>{sm.text}</span>
                            </div>
                        );
                    }
                }
            )
        }
        </div>
    </section>
  )
}

type SocialMediaButton = {
    icon: React.ReactElement,
    text: string,
    link: string,
    type: "url" | "mail"
}

const socialMedia: Array<SocialMediaButton> = [
    {
        icon: <IconMail />,
        text: "santiago.ruiz.sugliani@gmail.com",
        link: "",
        type: "mail"
    },
    {
        icon: <IconBrandLinkedin />,
        text: "Santiago Nahuel Ruiz Sugliani",
        link: "https://www.linkedin.com/in/santiago-nahuel-ruiz-sugliani-a2bb441b8/",
        type: "url"
    },
    {
        icon: <IconBrandGithub />,
        text: "ruizsugliani",
        link: "https://github.com/ruizsugliani",
        type: "url"
    }
]

export default Footer