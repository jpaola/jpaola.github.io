import FadeIn from "./FadeIn";

// Updated books data to use public folder paths
const booksData = {
    "Personal Growth": [
        { title: "NKJV Study Bible by Thomas Nelson", img: "/assets/books/book_nkjv_study_bible.png", link: "https://a.co/d/1rE0lCD" },
        { title: "The Untethered Soul by Michael A. Singer", img: "/assets/books/book_the_untethered_soul.png", link: "https://a.co/d/eWVx8q5" },
        { title: "Tools of Titans by Tim Ferriss", img: "/assets/books/book_tools_of_titans.png", link: "https://a.co/d/hnrxlZf" },
        { title: "Small Giants by Bo Burlingham", img: "/assets/books/book_small_giants.png", link: "https://a.co/d/cTtLP21" },
        { title: "12 Rules for Life by Jordan B. Peterson", img: "/assets/books/book_12_rules_for_life.png", link: "https://a.co/d/g0rZMDW" },
        { title: "Atomic Habits by James Clear", img: "/assets/books/book_atomic_habits.png", link: "https://a.co/d/gYChxsl" },
        { title: "How To Win Friends & Influence People by Dale Carnegie", img: "/assets/books/book_how_to_win_friends_and_influence_people.png", link: "https://a.co/d/96WhheJ" },
        { title: "Find Your Unicorn Space by Eve Rodsky", img: "/assets/books/book_find_your_unicorn_space.png", link: "https://a.co/d/1qSm4Gu" },
        { title: "What Color Is Your Parachute? by Richard N. Bolles", img: "/assets/books/book_what_color_is_your_parachute.png", link: "https://a.co/d/a1din8J" },
        { title: "The Illustrated: A Brief History of Time by Stephen Hawking", img: "/assets/books/book_the_illustrated_a_brief_history_of_time.png", link: "https://a.co/d/clSbQr6" },
    ],
    Philosophy: [
        { title: "Plato Complete Works Edited by John M. Cooper", img: "/assets/books/book_plato_complete_works.png", link: "https://a.co/d/8ujqoSU" },
        { title: "Meditations: The Annotated Edition by Marcus Aurelius", img: "/assets/books/book_meditations_annotated_edition.png", link: "https://a.co/d/59KFovc" },
        { title: "Inner Work by Robert Johnson", img: "/assets/books/book_inner_work.png", link: "https://a.co/d/gXPxFzm" },
        { title: "The Ikigai Journey by Hector Garcia & Francesc Miralles", img: "/assets/books/book_the_ikigai_journey.png", link: "https://a.co/d/fYcoyJO" },
        { title: "Ikigai: The Japanese Secret to a Long and Happy Life", img: "/assets/books/book_ikigai.png", link: "https://a.co/d/bPvSiZx" },
        { title: "The Things You Can See Only When You Slow Down by Haemin Sunim", img: "/assets/books/book_the_things_you_can_see_only_when_you_slow_down.png", link: "https://a.co/d/f7VUGi4" },
        { title: "Wabi Sabi: Japanese Wisdom for a Perfectly Imperfect Life by Beth Kempton", img: "/assets/books/book_wabi_sabi.png", link: "https://a.co/d/aAJeBTF" },
    ],
    "Software Programming": [
        { title: "The Pragmatic Programmer: 20th Anniversary Edition, 2nd Edition by David Thomas & Andrew Hunt", img: "/assets/books/book_the_pragmatic_engineer_2nd_edition.png", link: "https://a.co/d/21VyfMc" },
        { title: "System Design Interview Vol. 1 by Alex Xu", img: "/assets/books/book_system_design_interview_volume_1.png", link: "https://a.co/d/3nbwjhC" },
        { title: "System Design Interview Vol. 2 by Alex Xu", img: "/assets/books/book_system_design_interview_volume_2.png", link: "https://a.co/d/eSNCEKZ" },
    ],
    Fiction: [
        { title: "Project Hail Mary by Andy Weir", img: "/assets/books/book_project_hail_mary.png", link: "https://a.co/d/isGg1w4" },
        { title: "The Midnight Library by Matt Haig", img: "/assets/books/book_the_midnight_library.png", link: "https://a.co/d/eJb4kNo" },
        { title: "The Alchemist by Paulo Coelho", img: "/assets/books/book_the_alchemist.png", link: "https://a.co/d/590rZ1g" },
        { title: "The Wind-Up Bird Chronicle by Haruki Murakami", img: "/assets/books/book_the_wind-up_bird_chronicle_novel.png", link: "https://a.co/d/1OtjB4q" },
        { title: "Be With You by Takuji Ichikawa", img: "/assets/books/book_be_with_you_novel.png", link: "https://a.co/d/esmIR28" },
        { title: "The Book Thief by Markus Zusak", img: "/assets/books/book_the_book_thief.png", link: "https://a.co/d/ipxYI4W" },
    ],
};

export default function Books() {
    return (
        <section id="books" className="py-24 px-6 bg-bg-dark text-justify">
            <div className="container mx-auto max-w-5xl">
                <FadeIn>
                    <h2 className="text-4xl font-semibold mb-6 gradient-text text-center">📚 Books</h2>
                </FadeIn>

                {/* Intro paragraphs */}
                <FadeIn delay={0.2}>
                    <p className="text-lg mb-4 text-white/80">
                        I have always had a deep love for learning, and reading has become one of my favorite ways to grow. Whether it’s a hardcover, paperback, audiobook, or Kindle, I enjoy exploring ideas across formats and genres.
                    </p>
                    <p className="text-lg mb-4 text-white/80">
                        Over time, I have come across a handful of books that left a lasting impression — stories and insights that offered real-life lessons or shifted how I think.
                    </p>
                    <p className="text-lg mb-12 text-white/80">
                        Below, I have organized some of my favorites into four categories: personal growth, philosophy, software programming, and fiction.
                    </p>
                </FadeIn>

                {Object.entries(booksData).map(([category, books], catIndex) => (
                    <div key={category} className="mb-16">
                        <FadeIn delay={0.2 + catIndex * 0.2}>
                            <h3 className="text-2xl font-semibold mb-6 text-white">{category}</h3>
                        </FadeIn>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {books.map((book, index) => (
                                <FadeIn key={index} delay={0.3 + index * 0.05}>
                                    <a href={book.link} target="_blank" className="group">
                                        <figure className="flex flex-col items-center">
                                            <img
                                                src={book.img}
                                                alt={book.title}
                                                className="w-36 rounded-lg shadow-lg mb-2 transform transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <figcaption className="text-center text-sm md:text-base text-white/90">{book.title}</figcaption>
                                        </figure>
                                    </a>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}