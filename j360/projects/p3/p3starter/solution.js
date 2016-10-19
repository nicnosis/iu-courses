// Part 1
$("#btn1").click(function() {
    // Do stuff here - use the selector $("#part1") and the .toggle() method
    $("#part1").toggle(500);
});

// Part 2
$("#btn2").click(function() {
    $("#part2").css("background-color", "blue");
});

// Part 3
$("#btn3").click(function() {
    $("#part3").addClass("shadow");
});

// Part 4
$("#btn4").click(function() {
    $("#quote").html("lorem ipsum...");
});

// Part 5
$("#btn5").click(function() {
    var msg = $("#msg").val();
    alert(msg);
});