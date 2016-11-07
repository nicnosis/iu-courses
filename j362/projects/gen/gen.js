const N = 5; // number of emotions
const GROUPS = 4; // number of groups
var slices = []; // each card group has a slice


// d3.csv("emotions.csv", row, function(error, data) {
d3.csv("popn.csv", row, function(error, data) {
    if (error) throw error;

    shuffle(data);

    // Do slices
    for (var i = 0; i < GROUPS; i++) {
        slices[i] = data.slice(i*N, (i+1)*N);
    }

    // Populate groups
    for (var i = 0; i < slices.length; i++) {
        var html = "";
        slices[i].forEach(function(el) {
            html += "<li>" + el.emotions + "</li>";
        })
        $("#group-" + (i+1)).html(html);
    }

    // Count emotes
    $('#count').html(data.length).css("color","white");

    // List everything
    var html = "";
    data.forEach(function (el) {
        html += "<li>" + el.emotions + "</li>";
    });
    $('#emotes').html(html);

});

function row(d) {
    return {
        emotions: d["Emotions"]
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