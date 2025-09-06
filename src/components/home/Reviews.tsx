import ReviewCard from "../ui/ReviewCard";

function Reviews() {
  return (
    <section className="border-t bg-black border-gray-250 pt-20 pb-15">
      <div className="container-wrapper space-y-16">
        <article className="space-y-4">
          <h2 className="text-white text-5xl font-normal leading-[57.2px]">
            Reviews from people I’ve worked with
          </h2>
          <p className="text-base font-normal text-gray-350 leading-[24px]  text-pretty max-w-3xl">
            Don&apos;t just take my word for it - explore the testimonials of my
            clients, who have experienced firsthand how my work has elevated
            their businesses.
          </p>
        </article>
        <div className="flex flex-wrap gap-9 items-center justify-center">
          {Array.from({ length: 6 }).map((_, i) => (
            <ReviewCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Reviews;
