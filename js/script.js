document.addEventListener("DOMContentLoaded", () => {
    // Fallback quotes for local testing
    const fallbackQuotes = [
        { q: "The only way to do great work is to love what you do.", a: "Steve Jobs" },
        { q: "Success is not final, failure is not fatal: It is the courage to continue that counts.", a: "Winston Churchill" },
        { q: "Life is what happens when you're busy making other plans.", a: "John Lennon" }
    ];

    // Function to pick a random quote from an array
    function getRandomQuote(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    // Try fetching from ZenQuotes API
    fetch("https://zenquotes.io/api/random")
        .then(response => response.json())
        .then(data => {
            const quote = data[0].q;
            const author = data[0].a;
            document.getElementById("quote-text").textContent = `"${quote}"`;
            document.getElementById("quote-author").textContent = `– ${author}`;
        })
        .catch(error => {
            console.warn("API failed, using local quotes.", error);
            const localQuote = getRandomQuote(fallbackQuotes);
            document.getElementById("quote-text").textContent = `"${localQuote.q}"`;
            document.getElementById("quote-author").textContent = `– ${localQuote.a}`;
        });
});