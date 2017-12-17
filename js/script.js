// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Define quotes array

var quotes = [
	{
		quote: "We *are* the committee.",
		source: "Lord Birkenhead",
		citation: "Chariots of Fire",
		year: "1981"
	}, 
	{
		quote: "What the f*ck are you talking about, Ken?",
		source: 'Johnny "Drama" Chase',
		citation: "Entourage (Ep. 309)",
		year: "2006"
	}, 
	{
		quote: "Get the f*ck out of my face!",
		source: "Pete Holmes",
		citation: "You Made It Weird",
	},
	{
		quote: "Of course it is happening inside your head, Harry, but why on Earth should that mean that it is not real?",
		source: 'Albus Dumbledore',
		citation: "Harry Potter and the Deathly Hallows",
		year: "2007"
	},
	{
		quote: "Those little things that will make you successful in life... Things that are ridiculously easy to do—but just as easy not to do.",
		source: 'Jeff Olson',
		citation: "The Slight Edge: Turning Simple Disciplines into Massive Success and Happiness",
		year: "2011"
	}
];


// How to get a random quote from the array 
function getRandomQuote () {
	var randomQuoteIndex = Math.floor( Math.random() * quotes.length );
	return quotes[randomQuoteIndex];
};

// How to print HTML for a random quote
function printQuote () {
	var randomQuote = getRandomQuote();
	var quote = randomQuote["quote"];
	var source = randomQuote["source"];
	var citation = randomQuote["citation"];
	var year = randomQuote["year"];

	var quoteHTML = "";

	// add HTML for required attributes
	quoteHTML = '<p class="quote">' + quote + ' </p>' + '<p class="source">' + source;
	
	// add HTML for optional attritues
	if (typeof citation !== 'undefined') {
		quoteHTML += '<span class="citation">' + citation + '</span>';
	}
	if (typeof year !== 'undefined') {
		quoteHTML += '<span class="year">' + year + '</span>';
	}

	// close paragraph
	quoteHTML += '</p>';

	document.getElementById('quote-box').innerHTML = quoteHTML;
}

// Print randomm quote on first page load
printQuote();

