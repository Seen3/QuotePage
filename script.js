function chooseRandom(obj){
    return Math.floor(Math.random()*obj.length)
}
function updateQuote(){
    let color=chooseRandom(colors);
    let quote=chooseRandom(quotes);
    $("body").addClass(`bg-${colors[color]}`);
    $("#text").html(`<h2>${quotes[quote][0]}</h2>`);
    $("#author").html(`<p><em>- ${quotes[quote][1]}</em></p>`);
    $("#text").addClass(`text-${colors[color]}`);
    $("#author").addClass(`text-${colors[color]}`);
    $("#new-quote").addClass(`btn btn-${colors[color]}`);
    $("#tweet-quote").addClass(`bg-${colors[color]}`);
}
const colors=[`success`,`primary`,`danger`,`warning`,`dark`]
const quotes=[[`Be yourself; everyone else is already taken.`,`Oscar Wilde`],
[`Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,`Albert Einstein `],
[`A room without books is like a body without a soul.`,`Marcus Tullius Cicero `],
[`Be the change that you wish to see in the world.`,`Mahatma Gandhi `],
[`Without music, life would be a mistake.`,`Friedrich Nietzsche`],
[`Go to heaven for the climate and hell for the company.`,`Benjamin Franklin Wade`],
[`Man is the only creature who refuses to be what he is.`,` Albert Camus `]];

$(document).ready(()=>{
    $("#quote-box").addClass(`bg-light`);
    $("#tweet-quote").addClass(`text-light`);
    updateQuote();
    $("#new-quote").click(()=>{
        $("body").removeClass();
        $("#text").removeClass();
        $("#author").removeClass();
        $("#new-quote").removeClass();
        $("#tweet-quote").removeClass();
        $("#tweet-quote").addClass(`text-light`);
        updateQuote()});
})