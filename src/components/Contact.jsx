import FadeIn from "./FadeIn";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-bg-dark text-center">
            <div className="container mx-auto px-6 max-w-3xl">
                {/* Section Heading */}
                <FadeIn>
                    <h2 className="text-4xl font-semibold mb-6 gradient-text">📬 Contact</h2>
                </FadeIn>

                {/* Intro */}
                <FadeIn delay={0.2}>
                    <p className="text-lg mb-6 text-white/80">
                        I’d love to connect — whether to collaborate, share ideas, or talk
                        about art and technology.
                    </p>
                </FadeIn>

                {/* Email Button */}
                <FadeIn delay={0.4}>
                    <a
                        href="mailto:itsmejpaola@gmail.com"
                        className="glow-hover inline-block px-8 py-3 bg-gradient-to-r from-accent-start to-accent-end text-white rounded-xl font-medium shadow-md hover:shadow-[0_0_20px_rgba(118,75,162,0.5)] transition-all mb-8"
                    >
                        Email Me
                    </a>
                </FadeIn>

                {/* Social Links */}
                <FadeIn delay={0.6}>
                    <ul className="flex justify-center gap-6 mt-6">
                        <li>
                            <a href="https://github.com/jpaola" target="_blank">
                                <img
                                    src="/assets/logos/social/github-octocat-svgrepo-com.svg"
                                    alt="GitHub"
                                    className="w-10 h-10 hover:scale-110 transition-transform"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/paolajiron" target="_blank">
                                <img
                                    src="/assets/logos/social/linkedin-linked-in-svgrepo-com.svg"
                                    alt="LinkedIn"
                                    className="w-10 h-10 hover:scale-110 transition-transform"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.amazon.com/stores/Paola-M-Jiron/author/B09NPJHVH7?ref=ap_rdr&store_ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true"
                                target="_blank"
                            >
                                <img
                                    src="/assets/other/amazon-color-svgrepo-com.svg"
                                    alt="Amazon Store"
                                    className="w-10 h-10 hover:scale-110 transition-transform"
                                />
                            </a>
                        </li>
                    </ul>
                </FadeIn>
            </div>
        </section>
    );
}