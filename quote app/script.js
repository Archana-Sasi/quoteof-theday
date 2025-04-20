document.addEventListener('DOMContentLoaded', () => {
    const quoteDisplay = document.getElementById('quoteDisplay');
    const newQuoteButton = document.getElementById('newQuoteButton');
    const quoteElement = quoteDisplay.querySelector('.quote');
    const authorElement = quoteDisplay.querySelector('.author');

    const quotes = [
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            text: "Strive not to be a success, but rather to be of value.",
            author: "Albert Einstein"
        },
        {
            text: "The mind is everything. What you think you become.",
            author: "Buddha"
        },
        {
            text: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
            author: "Robert Frost"
        },
        {
            text: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt"
        }
        // Add more quotes here!
    ];

    function displayRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        quoteElement.textContent = `“${randomQuote.text}”`;
        authorElement.textContent = `- ${randomQuote.author}`;
    }

    // Display a quote when the page loads
    displayRandomQuote();

    // Add event listener for the button to get a new quote
    newQuoteButton.addEventListener('click', displayRandomQuote);
});