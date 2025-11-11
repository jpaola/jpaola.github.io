import Quotes from "./Quotes";

export default function Hero() {
    return (
        <section
            id="hero"
            className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-accent-start to-accent-end text-center text-white overflow-hidden"
        >
            {/* 🧠 Insert the quotes carousel */}
            <Quotes />
        </section>
    );
}