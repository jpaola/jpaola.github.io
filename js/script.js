document.addEventListener("DOMContentLoaded", async () => {
    const fallbackQuotes = [
        { q: "The only way to do great work is to love what you do.", a: "Steve Jobs" },
        { q: "Success is not final, failure is not fatal: It is the courage to continue that counts.", a: "Winston Churchill" },
        { q: "Life is what happens when you're busy making other plans.", a: "John Lennon" }
    ];

    try {
        // Use the /raw endpoint for direct JSON
        const response = await fetch(
            "https://api.allorigins.win/raw?url=" +
            encodeURIComponent("https://api.quotable.io/random")
        );

        // Directly parse the JSON
        const data = await response.json();

        document.getElementById("quote-text").textContent = `"${data.content}"`;
        document.getElementById("quote-author").textContent = `– ${data.author}`;
    } catch (error) {
        console.warn("API failed, using local quotes.", error);
        const localQuote = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
        document.getElementById("quote-text").textContent = `"${localQuote.q}"`;
        document.getElementById("quote-author").textContent = `– ${localQuote.a}`;
    }
});