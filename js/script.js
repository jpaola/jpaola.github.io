let quotes = [];       // All loaded quotes
let quoteQueue = [];   // Shuffled quotes queue

/**
 * Loads all quotes from the local JSON file.
 */
async function loadQuotes() {
    try {
        const response = await fetch("json/curated-quotes.json");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        quotes = await response.json();
        console.log("Quotes loaded successfully:", quotes.length);

        // Initialize the queue
        shuffleQuotes();
    } catch (error) {
        console.warn("Failed to load local quotes. Using fallback:", error);
        quotes = [{ q: "The only way to do great work is to love what you do.", a: "Steve Jobs" }];
        shuffleQuotes();
    }
}

/**
 * Shuffles the quotes and stores them in the queue
 */
function shuffleQuotes() {
    quoteQueue = [...quotes];
    for (let i = quoteQueue.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quoteQueue[i], quoteQueue[j]] = [quoteQueue[j], quoteQueue[i]];
    }
}

/**
 * Returns the next quote from the queue.
 * Reshuffles when the queue is empty.
 */
function getNextQuote() {
    if (quoteQueue.length === 0) shuffleQuotes();
    return quoteQueue.shift();
}

/**
 * Updates the DOM with a given quote using slide + fade transitions.
 * @param {{q: string, a: string}} quote
 */
function displayQuote(quote) {
    const quoteText = document.getElementById("quote-text");
    const quoteAuthor = document.getElementById("quote-author");

    if (!quoteText || !quoteAuthor) {
        console.warn("Quote elements not found in DOM.");
        return;
    }

    // Slide out & fade out current quote
    quoteText.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    quoteAuthor.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    quoteText.style.opacity = 0;
    quoteAuthor.style.opacity = 0;
    quoteText.style.transform = "translateX(30px)";
    quoteAuthor.style.transform = "translateX(30px)";

    // After fade-out completes, update text and slide in
    setTimeout(() => {
        quoteText.textContent = `"${quote.q}"`;
        quoteAuthor.textContent = `– ${quote.a}`;

        // Reset position for slide-in
        quoteText.style.transform = "translateX(-30px)";
        quoteAuthor.style.transform = "translateX(-30px)";

        // Trigger reflow
        void quoteText.offsetWidth;

        // Fade in and slide to normal position
        quoteText.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        quoteAuthor.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        quoteText.style.opacity = 1;
        quoteAuthor.style.opacity = 1;
        quoteText.style.transform = "translateX(0)";
        quoteAuthor.style.transform = "translateX(0)";
    }, 500); // matches fade-out duration
}

// Initialize once DOM is loaded
document.addEventListener("DOMContentLoaded", async () => {
    await loadQuotes();

    // Display the first quote with slide + fade animation
    setTimeout(() => {
        displayQuote(getNextQuote());
    }, 100); // short delay to trigger animation

    // Update quote every 5 minutes (300,000 ms)
    setInterval(() => {
        displayQuote(getNextQuote());
    }, 300000);
});