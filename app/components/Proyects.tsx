import { InfiniteMovingCards } from "../ui/infinite-moving-cards"
import { projects } from "../data/data"

export default function Proyects() {
    return (
        <section className="flex flex-col w-full bg-black-100">
            <InfiniteMovingCards
            items={projects.filter( (_, idx) => idx % 2 === 0)}
            direction="right"
            speed="normal"
            />
            <InfiniteMovingCards
            items={projects.filter( (_, idx) => idx % 2 === 1)}
            direction="left"
            speed="normal"
            />
        </section>
    );
}
