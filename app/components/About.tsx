import { cn } from "@/app/lib/utils";
import {
  IconBrandDiscord,
  IconZoomCode,
  IconBriefcase,
  IconSchool
} from "@tabler/icons-react";

export function About() {
  const features = [
    {
      title: "Fiuba student",
      description:
        "Since September 2021, I have been studying Computer Engineering at the Faculty of Engineering of the University of Buenos Aires, I currently have more than sixty percent of the subjects approved.",
      icon: <IconSchool  color="white"/>,
    },
    {
      title: "Actually working",
      description:
        "I have been working since the beginning of 2023 as a full stack developer, the technologies that I use daily are MSSQL, C++, HTML, CSS and JS. I am also in constant dialogue with clients providing support.",
      icon: <IconBriefcase color="white"/>,
    },
    {
      title: "Professional objectives",
      description:
        "As a developer my commitment is based on the trust and comfort of the client, seeking to understand the problem domain in depth.",
      icon: <IconZoomCode color="white"/>,
    },
    {
      title: "My hobbies",
      description: "I like to watch TV series, movies, play video games and see new places. I can say that I have great interest in Front End development and in my free time I seek to train in it.",
      icon: <IconBrandDiscord color="white"/>,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 p-6 w-full mx-auto bg-black-100">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature ",
        (index === 0 || index === 4) && "lg:border-l ",
        index < 4 && "lg:border-b "
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
