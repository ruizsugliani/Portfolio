import { InfiniteMovingCards } from "../ui/infinite-moving-cards"
import { projects } from "../data/data"

export default function Proyects() {
    return (
        <section className="flex flex-col w-full bg-black-100 justify-center align-middle text-center pt-4">
            <p className="text-4xl sm:text-4xl xl:text-6xl font-bold relative z-20 bg-clip-text text-neutral-100 pb-4">
            Projects
            </p>
            <InfiniteMovingCards
            items={projects.filter( (_, idx) => idx % 2 === 0)}
            direction="right"
            speed="slow"
            className="h-1/2"
            />
            <InfiniteMovingCards
            items={projects.filter( (_, idx) => idx % 2 === 1)}
            direction="left"
            speed="slow"
            className="h-1/2"
            />
        </section>
    );
}
