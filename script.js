const quote = document.getElementById("quote");
const author = document.getElementById("author");

const api_url = "https://dummyjson.com/quotes/random";

document.getElementById("newQuote")
.addEventListener("click", () => getquote(api_url));

async function getquote(url){
    try{
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        quote.innerHTML = `"${data.quote}"`;
        author.innerHTML = data.author;

    }catch(error){
        quote.innerHTML = "Failed to load quote.";
        author.innerHTML = "";
        console.log(error);
    }
}

getquote(api_url);

function tweet(){
    window.open(
        "https://twitter.com/intent/tweet?text=" +
        quote.innerHTML + " — " + author.innerHTML,
        "Tweet Window",
        "width=600,height=300"
    );
}