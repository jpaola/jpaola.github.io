// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", async () => {
    // ------------------------------
    // Local fallback quotes
    // ------------------------------
    const fallbackQuotes = [
        { q: "The only way to do great work is to love what you do.", a: "Steve Jobs" },
        { q: "Success is not final, failure is not fatal: It is the courage to continue that counts.", a: "Winston Churchill" },
        { q: "Life is what happens when you're busy making other plans.", a: "John Lennon" }
    ];

    try {
        // ------------------------------
        // Fetch a random quote from Quotable
        // ------------------------------
        const response = await fetch("https://api.quotable.io/random");

        if (!response.ok) throw new Error(`Network response not ok: ${response.status}`);

        const data = await response.json();

        // ------------------------------
        // Update the page with the fetched quote
        // ------------------------------
        const quoteText = document.getElementById("quote-text");
        const quoteAuthor = document.getElementById("quote-author");

        if (quoteText && quoteAuthor) {
            quoteText.textContent = `"${data.content}"`;
            quoteAuthor.textContent = `– ${data.author}`;
        } else {
            console.warn("Quote elements not found, using fallback.");
            throw new Error("DOM elements missing");
        }
    } catch (error) {
        // ------------------------------
        // Use a random local quote if fetch fails
        // ------------------------------
        console.warn("API failed, using fallback quotes.", error);
        const localQuote = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];

        const quoteText = document.getElementById("quote-text");
        const quoteAuthor = document.getElementById("quote-author");

        if (quoteText && quoteAuthor) {
            quoteText.textContent = `"${localQuote.q}"`;
            quoteAuthor.textContent = `– ${localQuote.a}`;
        }
    }
});