// Constants
const n_emo = 10; // number of emotions
const n_chars = 10; // number of emotions
const n_cards = 3; // number of cards

// Filepaths
var file_emotions = "emotions.csv";
var file_chars = "chars.csv";

// d3.csv("emotions.csv", row, function(error, data) {
d3.csv(file_emotions, row, function(error, data) {
    if (error) throw error;

    shuffle(data);
    console.log(data)
    // Do slices
    for (var i = 0; i < GROUPS; i++) {
        slices[i] = data.slice(i*N, (i+1)*N);
    }

    // Populate groups
    for (var i = 0; i < slices.length; i++) {
        var html = "";
        var adj = "", noun = "";
        slices[i].forEach(function(el) {
            console.log(el);
            html += "<li>" + el.emotions + "</li>";
        })
        $("#group-" + (i+1)).html(html);
        $("#adj").html(adj);
        $("#noun").html(noun);
    }

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