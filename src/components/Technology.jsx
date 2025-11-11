import FadeIn from "./FadeIn";

const techCategories = [
    {
        category: "Languages",
        items: [
            { name: "JavaScript", logo: "/assets/logos/tech/javascript-svgrepo-com.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            { name: "TypeScript", logo: "/assets/logos/tech/typescript-svgrepo-com.svg", link: "https://www.typescriptlang.org/" },
            { name: "HTML", logo: "/assets/logos/tech/html-5-svgrepo-com.svg", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
            { name: "CSS", logo: "/assets/logos/tech/css-3-svgrepo-com.svg", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
            { name: "Python", logo: "/assets/logos/tech/python-svgrepo-com.svg", link: "https://www.python.org/" },
            { name: "Golang", logo: "/assets/logos/tech/golang-svgrepo-com.svg", link: "https://go.dev/" },
        ]
    },
    {
        category: "Frameworks / Libraries",
        items: [
            { name: "React.js", logo: "/assets/logos/tech/react-svgrepo-com.svg", link: "https://reactjs.org/" },
            { name: "Tailwind CSS", logo: "/assets/logos/tech/tailwindcss-svgrepo-com.svg", link: "https://tailwindcss.com/" },
            { name: "Vite", logo: "/assets/logos/tech/vitejs-logo.svg", link: "https://vitejs.dev/" },
            { name: "Ant Design", logo: "/assets/logos/tech/antdesign-svgrepo-com.svg", link: "https://ant.design/" },
        ]
    },
    {
        category: "Testing / API",
        items: [
            { name: "Cypress.io", logo: "/assets/logos/tech/cypress-svgrepo-com.svg", link: "https://www.cypress.io/" },
            { name: "Jest", logo: "/assets/logos/tech/jest-svgrepo-com.svg", link: "https://jestjs.io/" },
            { name: "REST API", logo: "/assets/logos/tech/rest-api-svgrepo-com.svg", link: "https://www.redhat.com/en/topics/api/what-is-a-rest-api" },
            { name: "GraphQL", logo: "/assets/logos/tech/graphql-svgrepo-com.svg", link: "https://graphql.org/" },
            { name: "Postman", logo: "/assets/logos/tech/postman-icon-svgrepo-com.svg", link: "https://www.postman.com/" },
        ]
    },
    {
        category: "Databases",
        items: [
            { name: "PostgreSQL", logo: "/assets/logos/tech/postgresql-svgrepo-com.svg", link: "https://www.postgresql.org/" },
            { name: "MySQL", logo: "/assets/logos/tech/mysql-logo-svgrepo-com.svg", link: "https://www.mysql.com/" },
            { name: "MongoDB", logo: "/assets/logos/tech/mongodb-svgrepo-com.svg", link: "https://www.mongodb.com/" },
        ]
    },
    {
        category: "DevOps / CI / Collaboration",
        items: [
            { name: "Docker", logo: "/assets/logos/tech/docker-svgrepo-com.svg", link: "https://www.docker.com/" },
            { name: "Jenkins", logo: "/assets/logos/tech/jenkins-svgrepo-com.svg", link: "https://www.jenkins.io" },
            { name: "Git", logo: "/assets/logos/tech/git-svgrepo-com.svg", link: "https://git-scm.com/" },
            { name: "GitHub", logo: "/assets/logos/tech/github-svgrepo-com.svg", link: "https://github.com/" },
            { name: "GitLab", logo: "/assets/logos/tech/gitlab-svgrepo-com.svg", link: "https://about.gitlab.com/" },
            { name: "Atlassian", logo: "/assets/logos/tech/atlassian-svgrepo-com.svg", link: "https://www.atlassian.com/" },
            { name: "Jira", logo: "/assets/logos/tech/jira-svgrepo-com.svg", link: "https://www.atlassian.com/software/jira" },
            { name: "Trello", logo: "/assets/logos/tech/trello-logo-svgrepo-com.svg", link: "https://trello.com/" },
            { name: "Confluence", logo: "/assets/logos/tech/confluence-svgrepo-com.svg", link: "https://www.atlassian.com/software/confluence" },
            { name: "SourceTree", logo: "/assets/logos/tech/sourcetree-svgrepo-com.svg", link: "https://www.sourcetreeapp.com/" },
            { name: "Visual Studio Code", logo: "/assets/logos/tech/visual-studio-code-logo-svgrepo-com.svg", link: "https://code.visualstudio.com/" },
            { name: "Yarn", logo: "/assets/logos/tech/yarn-svgrepo-com.svg", link: "https://yarnpkg.com/" },
            { name: "NPM", logo: "/assets/logos/tech/npm-svgrepo-com.svg", link: "https://www.npmjs.com/" },
            { name: "Recharts", logo: "/assets/logos/tech/recharts.png", link: "https://recharts.org" },
            { name: "Prometheus", logo: "/assets/logos/tech/prometheus-svgrepo-com.svg", link: "https://prometheus.io/" },
            { name: "Grafana", logo: "/assets/logos/tech/grafana-svgrepo-com.svg", link: "https://grafana.com/" },
        ]
    }
];

const resources = [
    { name: "ByteByteGo Newsletter", link: "https://blog.bytebytego.com/?utm_source=site" },
    { name: "Substack Technology", link: "https://substack.com/browse/technology" },
    { name: "The Hacker News", link: "https://thehackernews.com/" },
    { name: "Codecademy", link: "https://www.codecademy.com/learn" },
    { name: "Roadmap", link: "https://roadmap.sh" },
    { name: "ycombinator", link: "https://news.ycombinator.com/news" },
    { name: "tldr", link: "https://tldr.tech/" },
    { name: "SVG Repo", link: "https://www.svgrepo.com/" },
    { name: "Coolors", link: "https://coolors.co" },
    { name: "The Ultimate API Challenge", link: "https://theultimateapichallenge.com" },
];

export default function Technology() {
    return (
        <section id="technology" className="py-24 px-6 bg-bg-dark text-justify">
            <div className="container mx-auto max-w-6xl">
                <FadeIn>
                    <h2 className="text-4xl font-semibold mb-8 gradient-text text-center">💻 Technology</h2>
                </FadeIn>

                {/* Intro paragraphs */}
                <FadeIn delay={0.2}>
                    <p className="text-lg mb-4 text-white/80">
                        I’m deeply engaged in the many layers of software development — from system design and engineering principles to both frontend and backend architecture.
                    </p>
                    <p className="text-lg mb-4 text-white/80">
                        I thrive when building features that create meaningful, user-centered experiences. I’m especially drawn to disciplined engineering practices like automated testing, code reviews, and writing clean, readable code. To me, simplicity is the path to clarity — and often, to perfection.
                    </p>
                    <p className="text-lg mb-4 text-white/80">
                        While I care deeply about code quality and reliability, I also recognize that great engineering requires humility. There’s always more to learn, and the best solutions often emerge through collaboration. I value the perspectives that teammates bring, and I believe constructive feedback — both giving and receiving — is essential to personal and professional growth.
                    </p>
                    <p className="text-lg mb-12 text-white/80">
                        Below, you’ll find a curated list of tools and technologies I’ve worked with — past and present — that have shaped my approach to building thoughtful software.
                    </p>
                </FadeIn>

                {/* Categories & Logos */}
                {techCategories.map((category, catIndex) => (
                    <div key={catIndex} className="mb-12">
                        <FadeIn delay={0.3 + catIndex * 0.1}>
                            <h3 className="text-2xl font-semibold mb-6 text-white">{category.category}</h3>
                        </FadeIn>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center">
                            {category.items.map((tech, index) => (
                                <FadeIn key={index} delay={0.2 + index * 0.05}>
                                    <a href={tech.link} target="_blank" className="flex flex-col items-center group">
                                        <img
                                            src={tech.logo}
                                            alt={`${tech.name} Logo`}
                                            className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <span className="mt-2 text-sm text-center text-white/90">{tech.name}</span>
                                    </a>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Resources */}
                <FadeIn delay={0.7}>
                    <h3 className="text-2xl font-semibold mb-4 text-white">Useful Resources</h3>
                    <ul className="list-disc list-inside space-y-2 text-white/80">
                        {resources.map((res, index) => (
                            <li key={index}>
                                <a href={res.link} target="_blank" className="hover:underline">{res.name}</a>
                            </li>
                        ))}
                    </ul>
                </FadeIn>
            </div>
        </section>
    );
}