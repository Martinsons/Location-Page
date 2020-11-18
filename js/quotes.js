const quoteText = document.querySelector('#quote');
const authorText = document.querySelector('#author');
const quoteBtn = document.querySelector('#quote-btn');

const quotes = [{
    quote: '“Be yourself; everyone else is already taken.”',
    author: 'Oscar Wilde'
}, {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: 'Albert Einstein'
}, {
    quote: '“A room without books is like a body without a soul.”',
    author: 'Marcus Tullius Cicero'
}, {
    quote: '“You only live once, but if you do it right, once is enough.”',
    author: 'Mae West'
}, {
    quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
    author: 'Robert Frost'
}];


function getRandom(){
    return Math.floor(Math.random() * quotes.length);
}

function getQuote(){
    let x = quotes[getRandom()];

    quoteText.innerHTML = x.quote;
    authorText.innerHTML = x.author;
}

quoteBtn.addEventListener('click', function(){
    getQuote();
})

