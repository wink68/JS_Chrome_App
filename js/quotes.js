const quotes = [
  {
    quote: "The best investment you can make, is an investment in yourself. The more you learn, the more you'll earn.",
    author: "Warren Buffett",
  },
  {
    quote: "It's fine to celebrate success but it is more important to heed the lessons of failure.",
    author: "Bill Gates",
  },
  {
    quote: "The best work happens when you know that it's not just work, but something that will improve other people's lives.",
    author: "Satya Nadella",
  },
  {
    quote: "The thing only I want to get is power of culture.",
    author: "Kim gu",
  },
  {
    quote: "From each according to his abilities, to each according to his needs.",
    author: "Karl Marx",
  },
  {
    quote: "Darkness cannot drive out darkness, only light can do that. Hate cannot drive out hate, only love can do that.",
    author: "Martin Luther King",
  },
  {
    quote: "If you can dream, you can do it.",
    author: "Walt Disney",
  },
  {
    quote: "The best thing a human being can do is to help another human being know more.",
    author: "Charlie Munger",
  },
  {
    quote: "A nation that forgets its past has no future.",
    author: "Winston Churchill",
  },
  {
    quote: "Happiness for me is really leading the team and, if possible, leading them to the top.",
    author: "Bernard Arnault",
  }
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;