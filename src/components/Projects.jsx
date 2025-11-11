import { useEffect } from "react";
import FadeIn from "./FadeIn";

// Example data structure
const projectsData = [
    {
        title: "Concentration Game",
        images: ["/assets/projects/memory_game_landing_page.png"], // Can add multiple images
        links: [
            {
                href: "https://github.com/jpaola/Memory-Card-Game",
                label: "GitHub",
                icon: "/assets/logos/tech/github-svgrepo-com.svg",
            },
            {
                href: "https://memory-card-game-336b0.web.app/",
                label: "Live App",
                icon: "/assets/other/link-svgrepo-com.svg",
            },
        ],
        gists: [
            {
                title: "server.js",
                description: "The server file for a TCP NodeJS Package Indexer app.",
                gistUrl: "https://gist.github.com/jpaola/b30b3f17e24127b945d1b05261281757.js",
                codeLink: "https://github.com/jpaola/tcp-nodejs-app/blob/main/server.js",
            },
            {
                title: "my-url-shortener.js",
                description: "A URL shortener API written in Node.js and Express.js",
                gistUrl: "https://gist.github.com/jpaola/399c4bf5086b1b1e54823e26e9c8447f.js",
                codeLink: "https://github.com/jpaola/my-url-shortener/blob/e8862193554649b2caa74584db333f4ee077dceb/my-url-shortener.js",
            },
        ],
    },
    // Add more projects here...
];

export default function Projects() {
    // Dynamically inject Gist scripts
    useEffect(() => {
        projectsData.forEach((project) => {
            project.gists?.forEach((gist) => {
                const script = document.createElement("script");
                script.src = gist.gistUrl;
                script.async = true;
                const container = document.getElementById(`gist-${gist.title}`);
                if (container) container.appendChild(script);
            });
        });
    }, []);

    return (
        <section id="projects" className="py-24 px-6 bg-bg-dark">
            <div className="container mx-auto max-w-5xl">
                <FadeIn>
                    <h2 className="text-4xl font-semibold mb-12 gradient-text text-center">
                        💻 Projects
                    </h2>
                </FadeIn>

                {projectsData.map((project, projIndex) => (
                    <div key={projIndex} className="mb-16">
                        {/* Project Images */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                            {project.images.map((imgSrc, imgIndex) => (
                                <FadeIn key={imgIndex} delay={0.2 + imgIndex * 0.1}>
                                    <img
                                        src={imgSrc}
                                        alt={`${project.title} screenshot ${imgIndex + 1}`}
                                        className="w-full rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </FadeIn>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-6 mb-6">
                            {project.links.map((link, linkIndex) => (
                                <FadeIn key={linkIndex} delay={0.3 + linkIndex * 0.05}>
                                    <a href={link.href} target="_blank" className="flex items-center gap-2">
                                        <img src={link.icon} alt={`${link.label} Icon`} className="w-8 h-8" />
                                        <span className="text-white/90">{link.label}</span>
                                    </a>
                                </FadeIn>
                            ))}
                        </div>

                        {/* Gists */}
                        {project.gists?.length > 0 && (
                            <div>
                                <FadeIn delay={0.4}>
                                    <h3 className="text-2xl font-semibold mb-6 text-white">Public Gists</h3>
                                </FadeIn>
                                <div className="flex flex-col gap-4">
                                    {project.gists.map((gist, gistIndex) => (
                                        <FadeIn key={gistIndex} delay={0.5 + gistIndex * 0.05}>
                                            <div
                                                className="bg-white/5 p-4 rounded-lg shadow-lg"
                                                id={`gist-${gist.title}`}
                                            >
                                                <a
                                                    href={gist.codeLink}
                                                    target="_blank"
                                                    className="text-lg font-semibold text-white hover:underline"
                                                >
                                                    {gist.title}
                                                </a>
                                                <p className="text-white/80">{gist.description}</p>
                                            </div>
                                        </FadeIn>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}