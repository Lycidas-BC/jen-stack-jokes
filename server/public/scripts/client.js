console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    getJokes();
}

function getJokes() {
    $.ajax({
        //type
        method: 'GET',
        url: '/jokes'
    })
    .then( function(response) {
        // successful send case
        console.log('GET item:', response);
        // empty joke list
        $( "#jokeList" ).empty();

        if (response.length > 0){
            for (const joke of response) {
                $( "#jokeList" ).append(`<li><span class="joker">${joke.whoseJoke}</span>'s Joke! <ul><li class="questions">Q: ${joke.jokeQuestion}</li><li class="answers">A: ${joke.punchLine}</li></ul></li>`);
            }
        }
    })
    .catch( function(err) {
        console.log('failed to post', err);
    });
} // end getJokes