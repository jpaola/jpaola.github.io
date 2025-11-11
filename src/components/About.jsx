import FadeIn from "./FadeIn";

export default function About() {
    return (
        <section id="about" className="py-24 px-6 bg-bg-dark text-justify">
            <div className="container mx-auto max-w-3xl flex flex-col items-center">
                {/* Image */}
                <FadeIn>
                    <figure className="mb-8">
                        <img
                            src="/assets/portrait.png"
                            alt="Image of the author with a white/tan siberian husky mix"
                            className="w-48 h-48 rounded-full border-4 border-white/30 shadow-lg"
                        />
                    </figure>
                </FadeIn>

                {/* About Me */}
                <FadeIn delay={0.2}>
                    <h2 className="text-4xl font-semibold mb-4 gradient-text text-center">🧠 About Me</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        I’m a thoughtful and curious software engineer who’s just as driven
                        by understanding people as I am by building systems. I enjoy
                        uncovering how things work—whether it’s code, the brain, or the
                        everyday tools we rely on. My background blends engineering, data,
                        and user experience, while my interests expand into science,
                        psychology, health, and art. I like to learn deeply and apply
                        practically.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        I don’t just build things—I seek to understand them, refine them,
                        and make them meaningful.
                    </p>
                </FadeIn>

                {/* Professional Focus */}
                <FadeIn delay={0.4}>
                    <h2 className="text-4xl font-semibold mb-4 gradient-text text-center">💼 Professional Focus</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        Professionally, I’m user-centered and results-driven. I thrive in
                        collaborative environments that value empathy, clean design, and
                        long-term thinking. My work spans frontend development, automation,
                        and scalable systems—with a consistent goal of solving real-world
                        problems through thoughtful solutions. I enjoy creating tools and
                        experiences that make people’s lives easier and better.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        I value workplaces that encourage continuous learning, creativity,
                        and a healthy work-life balance.
                    </p>
                </FadeIn>

                {/* Creative Side */}
                <FadeIn delay={0.6}>
                    <h2 className="text-4xl font-semibold mb-4 gradient-text text-center">🎨 Creative Side</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        Outside of engineering, I explore creativity through graphite
                        drawing and visual storytelling—often drawing animals, nature, or
                        portraits with subtle emotion. I’m introverted, observant, and
                        expressive through my work. My artistic side helps me stay grounded
                        and sharpens my sense for detail and clarity, whether in code or on
                        paper.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}