// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", async () => {
    // ------------------------------
    // Fallback quotes (local array)
    // ------------------------------
    // These are used if the API fetch fails for any reason
    const fallbackQuotes = [
        { q: "The only way to do great work is to love what you do.", a: "Steve Jobs" },
        { q: "Success is not final, failure is not fatal: It is the courage to continue that counts.", a: "Winston Churchill" },
        { q: "Life is what happens when you're busy making other plans.", a: "John Lennon" }
    ];

    try {
        // ------------------------------
        // Use a CORS proxy to fetch a random quote
        // ------------------------------
        // AllOrigins allows us to bypass CORS restrictions that happen
        // when the browser tries to fetch from an external API
        // GitHub Pages requires this because cross-origin requests are blocked
        const response = await fetch(
            "https://api.allorigins.win/get?url=" +
            encodeURIComponent("https://api.quotable.io/random")
        );

        // Parse the response from AllOrigins
        const data = await response.json();

        // The actual quote is inside the "contents" field as a JSON string
        const quoteData = JSON.parse(data.contents);

        // ------------------------------
        // Update the page with the quote
        // ------------------------------
        document.getElementById("quote-text").textContent = `"${quoteData.content}"`;
        document.getElementById("quote-author").textContent = `– ${quoteData.author}`;

    } catch (error) {
        // ------------------------------
        // Fallback: Use a local quote if fetch fails
        // ------------------------------
        console.warn("API failed, using local quotes.", error);

        // Pick a random quote from the fallback array
        const localQuote = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];

        // Update the page with the local quote
        document.getElementById("quote-text").textContent = `"${localQuote.q}"`;
        document.getElementById("quote-author").textContent = `– ${localQuote.a}`;
    }
});