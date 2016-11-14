// Constants
const n_emo = 10; // number of emotions
const n_chars = 10; // number of emotions
const n_cards = 3; // number of cards

// Filepaths
var file_emotions = "emotions.csv";
var file_chars = "chars.csv";

// EMOTIONS
d3.csv(file_emotions, row_emo, function(error, data) {
    if (error) throw error;

    shuffle(data);

    // get a slice for each card
    var card_array = [];
    for (var i = 0; i < n_cards; i++) {
        card_array[i] = data.slice(i*n_emo, (i+1)*n_emo);
        // console.log(card_array[i].length);

        var html = "<li><h4>Emotions</h4></li>";
        for (var j = 0; j < card_array[i].length; j++) {
            html += "<li>" + card_array[i][j].emotions + "</li>";
        }
        $("#emo" + (i+1)).html(html);
    }
});

// CHARACTERS
d3.csv(file_chars, row_chars, function(error, data) {
    if (error) throw error;

    // build and shuffle arrays
    var adjectives = data.map(function(d) { return d.adjective; });
    var nouns = data.map(function (d) { return d.noun; });
    shuffle(adjectives);
    shuffle(nouns);

    var characters = [];

    for(var i = 0; i < nouns.length; i++) {
        characters[i] = adjectives[i] + " " + nouns[i];
    }
    console.log(characters)

});

/*******************************************
*  FUNCTIONS
*******************************************/

function row_emo(d) {
    return {
        emotions: d["Emotions"]
    }
}
function row_chars(d) {
    return {
        adjective: d["Adjective"],
        noun: d["Noun"]
    }
}
/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}