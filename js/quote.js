
const quoteLoad = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then (data => displayQuot(data) )
}

const displayQuot = quote =>{
    const blockQuote = document.getElementById('quote');
    console.log(quote )
    blockQuote.innerHTML = quote.quote;
}

quoteLoad()