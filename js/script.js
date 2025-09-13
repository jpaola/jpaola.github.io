let quotes = []; // Array to hold all loaded quotes

/**
 * Loads all quotes from the local JSON file.
 */
async function loadQuotes() {
    try {
        const response = await fetch("json/curated-quotes.json");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        quotes = await response.json();
    } catch (error) {
        console.warn("Failed to load local quotes. Using a default fallback quote.", error);
        quotes = [{ q: "The only way to do great work is to love what you do.", a: "Steve Jobs" }];
    }
}

/**
 * Returns a random quote from the loaded quotes array.
 * Ensures the same quote doesn't repeat consecutively.
 */
let lastIndex = -1;
function getRandomQuote() {
    if (quotes.length === 0) return { q: "", a: "" };
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex && quotes.length > 1);
    lastIndex = randomIndex;
    return quotes[randomIndex];
}

/**
 * Updates the DOM with a given quote using fade-out and fade-in animation.
 * @param {{q: string, a: string}} quote
 */
function displayQuote(quote) {
    const quoteText = document.getElementById("quote-text");
    const quoteAuthor = document.getElementById("quote-author");

    if (!quoteText || !quoteAuthor) {
        console.warn("Quote elements not found in DOM.");
        return;
    }

    // Fade out
    quoteText.style.opacity = 0;
    quoteAuthor.style.opacity = 0;

    setTimeout(() => {
        // Update text
        quoteText.textContent = `"${quote.q}"`;
        quoteAuthor.textContent = `– ${quote.a}`;

        // Fade in
        quoteText.style.opacity = 1;
        quoteAuthor.style.opacity = 1;
    }, 500); // Duration of fade-out in ms
}

// Initialize once DOM is loaded
document.addEventListener("DOMContentLoaded", async () => {
    await loadQuotes();

    // Initial quote
    displayQuote(getRandomQuote());

    // Update the quote every 5 minutes (300,000 ms)
    setInterval(() => {
        displayQuote(getRandomQuote());
    }, 300000);
});