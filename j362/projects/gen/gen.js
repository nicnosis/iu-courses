// d3.csv("cars.csv", row, function(error, data) {
d3.csv("emotions.csv", row, function(error, data) {
    if (error) throw error;
    // console.log(data);

    var html = "";
    data.forEach(function (el) {
        console.log(el);
        html += "<li>" + el.emotions + "</li>";
    });

    $('#emotes').html(html).css("color","black");

});

// function row(d) {
//     return {
//         year: new Date(+d["Year"], 0, 1), // convert "Year" column to Date
//         make: d["Make"],
//         model: d["Model"],
//         length: +d["Length"] // convert "Length" column to number
//     };
// }

function row(d) {
    return {
        emotions: d["Emotions"]
    }
}