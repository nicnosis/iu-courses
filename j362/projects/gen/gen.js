// d3.csv("cars.csv", row, function(error, data) {
// d3.csv("emotions.csv", row, function(error, data) {
d3.csv("popn.csv", row, function(error, data) {
    if (error) throw error;

    // Count emotes
    $('#count').html(data.length).css("color","white");

    data.sort(function(d) {return d["Emotions"]})
    var html = "";
    data.forEach(function (el) {
        console.log(el);
        html += "<li>" + el.emotions + "</li>";
    });
    $('#emotes').html(html);

});

function row(d) {
    return {
        emotions: d["Emotions"]
    }
}