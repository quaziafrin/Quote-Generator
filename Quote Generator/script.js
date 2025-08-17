const quoteText = document.getElementById('quote-text');
const authorName = document.getElementById('author-name');
const newQuoteBtn = document.getElementById('new-quote-btn');
const shareBtn = document.getElementById('share-btn');
const snowContainer = document.querySelector('.snow-container');

const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        quote: "Everything you can imagine is real.",
        author: "Pablo Picasso"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author: "Oprah Winfrey"
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author: "James Cameron"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa"
    },
    {
        quote: "When you reach the end of your rope, tie a knot in it and hang on.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
        author: "Martin Luther King Jr."
    },
    {
        quote: "Well done is better than well said.",
        author: "Benjamin Franklin"
    },
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteText.textContent = `"${randomQuote.quote}"`;
    authorName.textContent = randomQuote.author;
}

function createFrozenSymbol() {
    const symbol = document.createElement('div');
    symbol.classList.add('snowflake');
    symbol.textContent = '❄️'; 
    symbol.style.left = `${Math.random() * 100}vw`;
    symbol.style.opacity = Math.random();
    symbol.style.fontSize = `${Math.random() * 20 + 10}px`;
    symbol.style.animationDuration = `${Math.random() * 10 + 5}s`;

    snowContainer.appendChild(symbol);

    
    setTimeout(() => {
        symbol.remove();
    }, parseFloat(symbol.style.animationDuration) * 1000);
}


setInterval(createFrozenSymbol, 500);

newQuoteBtn.addEventListener('click', getRandomQuote);

shareBtn.addEventListener('click', () => {
    const quoteToShare = `${quoteText.textContent} - ${authorName.textContent}`;

    
    if (navigator.share) {
        navigator.share({
            title: 'Quote of the Day',
            text: quoteToShare
        })
        .catch((error) => console.log('Error sharing:', error));
    } else {
        
        alert(`You can copy this quote to share:\n\n${quoteToShare}`);
    }
});

window.addEventListener('load', getRandomQuote);