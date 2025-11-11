import FadeIn from "./FadeIn";

export default function Music() {
  return (
    <section id="music" className="py-24 px-6 bg-bg-dark text-justify">
      <div className="container mx-auto max-w-4xl flex flex-col items-justify">
        {/* Section Heading */}
        <FadeIn>
          <h2 className="text-4xl font-semibold mb-8 gradient-text text-center">🎧 Music</h2>
        </FadeIn>

        {/* Paragraphs */}
        <FadeIn delay={0.2}>
          <p className="text-lg leading-relaxed mb-4 text-white/80">
            Finding your rhythm while studying or coding can be a challenge —
            especially with distractions everywhere. This is a playlist I
            created to help me stay focused and in flow. It’s lyric-free,
            minimal, and designed for deep concentration.
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <p className="text-lg leading-relaxed mb-6 text-white/80">
            Give it a listen on Spotify — it might help you get in the zone too.
          </p>
        </FadeIn>

        {/* Playlist Cover */}
        <FadeIn delay={0.6}>
          <a
            id="playlist"
            href="https://open.spotify.com/playlist/6r2e8onqiCuUjg82LCQWia?si=NhlNDmPySyON57HjdwYHvQ"
            target="_blank"
            className="group mt-6"
          >
            <figure className="flex flex-col items-center">
              <img
                src="/assets/music/art_of_focus_playlist_cover.png"
                alt="Small zen garden"
                className="w-64 rounded-xl shadow-lg mb-2 transform transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="text-center text-lg font-medium text-white/90">
                Art of Focus
              </figcaption>
            </figure>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}