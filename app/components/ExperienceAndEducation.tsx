"use client";
import { cn } from "@/app/lib/utils";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, ArcElement, Tooltip, Legend} from "chart.js";
import { carreerData, adquiredSkills, learningSkills } from "../data/data";

ChartJs.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function BentoGridThirdDemo() {
  return (
    <section className="flex flex-col text-center w-full bg-black-100 pb-16 pt-16">
        <p className="text-4xl sm:text-4xl xl:text-6xl font-bold relative z-20 bg-clip-text text-neutral-100 pb-10">
        Education and experience
        </p>
        <BentoGrid className="max-w-[3/4] p-6 mx-auto ">
            {items.map((item, i) => (
                <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={cn("[&>p:text-lg]", item.className)}
                icon={item.icon}
                />
            ))}
        </BentoGrid>
    </section>
  );
}

const SkeletonOne = () => {
  return (
    <Image 
    height={500}
    width={500}
    alt="Undraw"
    src="/undraw_programming_re_kg9v.svg"
    className="object-fit h-full w-full"
    />
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-4"
    >
      <motion.div
        variants={first}
        className="h-full w-full rounded-2xl bg-white p-2 border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/hr_sql_cet_.png"
          alt="avatar"
          height="1000"
          width="1000"
          className="h-full w-full object-fit rounded-xl"
        />
      </motion.div>
      <motion.div className="h-full relative z-20 w-full rounded-2xl bg-white p-2 border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="/react_coder_cert.png"
          alt="avatar"
          height="1000"
          width="1000"
          className="h-full w-full object-fit rounded-xl"
        />
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-full rounded-2xl bg-white p-2 border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/react_webdev_cert.png"
          alt="avatar"
          height="1000"
          width="1000"
          className="h-full w-full object-fit rounded-xl"
        />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Working in ADV Technology",
    description: (
      <span className="text-md">
        Developing and bringing support to all customers.
      </span>
    ),
    header: <SkeletonOne />,
    className: "col-span-2 2xl:col-span-1 flex justify-center items-center align-middle",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Carrer progress",
    description: (
      <span className="text-md">
        More than half of the required and optional credits and sufficient proof of English.
      </span>
    ),
    header: <Doughnut data={carreerData} className="h-full w-full"/>,
    className: "col-span-2 2xl:col-span-1 flex items-center align-middle",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Technical skills adquired during these years",
    description: (
      <span className="text-md">
        I have been using all these in my university projects.
      </span>
    ),
    header: <div className="grid grid-cols-2 gap-2 h-full">
    {
      adquiredSkills.map(
        (s) => {
          return (
            <div className="p-2 bg-black-100 rounded-xl flex justify-center items-center align-middle">
              <Image
                key={crypto.randomUUID()}
                height={50}
                width={50}
                src={s.image}
                alt={s.name}
                className={`object-cover h-20 w-20`}
              />
            </div>
              );
        }
      )
    }
  </div>,
    className: "col-span-2 2xl:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Looking for improve and learn by myself",
    description: (
      <span className="text-md">
        These are the technologies that I am learning my free time.
      </span>
    ),
    header: <div className="grid grid-cols-2 gap-2 h-full">
    {
      learningSkills.map(
        (s) => {
          return (
            <div className="p-2 bg-black-100 rounded-xl flex justify-center items-center align-middle">
              <Image
                key={crypto.randomUUID()}
                height={50}
                width={50}
                src={s.image}
                alt={s.name}
                className={`object-cover h-20 w-20`}
              />
            </div>
              );
        }
      )
    }
  </div>,
    className: "col-span-2 2xl:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Certifications",
    description: (
      <span className="text-md">
        Earned in courses and online tests.
      </span>
    ),
    header: <SkeletonFour />,
    className: "xl:col-span-full h-full hidden xl:flex",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
