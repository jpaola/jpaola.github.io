import FadeIn from "./FadeIn";

export default function Art() {
    return (
        <section id="art" className="py-24 px-6 bg-gradient-to-br from-accent-start/10 to-accent-end/10 text-justify">
            <div className="container mx-auto max-w-4xl flex flex-col">
                {/* Section Heading */}
                <FadeIn>
                    <h2 className="text-4xl font-semibold mb-8 gradient-text text-center">🎨 Art</h2>
                </FadeIn>

                {/* Paragraphs */}
                <FadeIn delay={0.2}>
                    <p className="text-lg leading-relaxed mb-4">
                        Art has a unique way of adding beauty and meaning to the everyday.
                        I’ve always been drawn to creative pursuits that engage the imagination —
                        whether it’s sketching, painting, exploring color, or even crafting a book.
                    </p>
                </FadeIn>
                <FadeIn delay={0.4}>
                    <p className="text-lg leading-relaxed mb-4">
                        For me, art is more than a hobby — it’s a quiet refuge. A meditative
                        space where creativity flows freely and things slow down. It’s my sanctuary.
                        What’s yours?
                    </p>
                </FadeIn>
                <FadeIn delay={0.6}>
                    <p className="text-lg leading-relaxed mb-4">
                        Among the many artists I admire, Oscar-Claude Monet stands out.
                        There’s something deeply calming and luminous about his work,
                        especially <em>The Water Lilies</em>.
                    </p>
                </FadeIn>
                <FadeIn delay={0.8}>
                    <p className="text-lg leading-relaxed mb-4">
                        Want to see one of my personal projects? Check out my first published coloring book on Amazon.
                    </p>
                </FadeIn>

                {/* Coloring Book Image */}
                <FadeIn delay={1}>
                    <a
                        id="coloring-book"
                        href="https://a.co/d/7NvlZcu"
                        target="_blank"
                        className="group mt-6"
                    >
                        <figure className="flex flex-col items-center">
                            <img
                                src="/assets/books/coloring_book.png"
                                alt="Cover of a coloring book"
                                className="w-64 rounded-xl shadow-lg mb-2 transform transition-transform duration-300 group-hover:scale-105"
                            />
                            <figcaption className="text-justify text-lg font-medium text-white/90">
                                Self Love & Positivity Coloring Book For Women: Encourage a positive mindset & self confidence
                            </figcaption>
                        </figure>
                    </a>
                </FadeIn>
            </div>
        </section>
    );
}