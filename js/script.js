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

    // Fetch a random quote from Quotable
    fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
            document.getElementById("quote-text").textContent = `"${data.content}"`;
            document.getElementById("quote-author").textContent = `– ${data.author}`;
        })
        .catch(error => {
            console.warn("API failed, using local quotes.", error);
            const localQuote = getRandomQuote(fallbackQuotes);
            document.getElementById("quote-text").textContent = `"${localQuote.q}"`;
            document.getElementById("quote-author").textContent = `– ${localQuote.a}`;
        });
});