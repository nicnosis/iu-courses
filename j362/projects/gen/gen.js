const N = 16; // number of emotions
const GROUPS = 4; // number of groups
var slices = []; // each card group has a slice
// var file = "emotions.csv";
var file = "char.csv";

// d3.csv("emotions.csv", row, function(error, data) {
d3.csv(file, row, function(error, data) {
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
            // html += "<li>" + el.emotions + "</li>";
            html += "<li>" + el.adjective + " ";
            html += el.noun + "</li>";
            adj += "<li>" + el.adjective + "</li>";
            noun += "<li>" + el.noun + "</li>";
        })
        $("#group-" + (i+1)).html(html);
        $("#adj").html(adj);
        $("#noun").html(noun);
    }

    // Count emotes
    $('#count').html(data.length).css("color","white");

    // List everything
    var html = "";
    data.forEach(function (el) {
        // html += "<li>" + el.emotions + "</li>";
        html += "<li>" + el.adjective + " " + el.noun + "</li>";
    });
    $('#emotes').html(html);

});

function row(d) {
    return {
        emotions: d["Emotions"],
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