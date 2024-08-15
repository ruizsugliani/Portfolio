import { cn } from "@/app/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid  grid-cols-1 md:grid-cols-4 gap-4 gap-y-10 w-full mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 bg-white-200 border-white/[0.2] border justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="flex flex-col align-middle items-center">
        <div className="font-sans text-xl font-bold text-black-100 mb-2 mt-2 my-auto">
          {title}
        </div>
        <div className="font-sans font-normal text-md text-black-100">
          {description}
        </div>
      </div>
    </div>
  );
};
