// Part 1
$("#btn1").click(function() {
    // Do stuff here - use the selector $("#part1") and the .toggle() method
    console.log("cheater, cheater, pumpkin-eater.");
    $("#part1").toggle(500);
});

// Part 2
$("#btn2").click(function() {
    $("#part2").css("background-color", "blue");
    console.log("cheater, cheater, pumpkin-eater.");
});

// Part 3
$("#btn3").click(function() {
    $("#part3").addClass("shadow");
    console.log("cheater, cheater, pumpkin-eater.");
});

// Part 4
$("#btn4").click(function() {
    $("#quote").html("lorem ipsum...");
    console.log("cheater, cheater, pumpkin-eater.");
});

// Part 5
$("#btn5").click(function() {
    var msg = $("#msg").val();
    alert(msg);
    console.log("cheater, cheater, pumpkin-eater.");
});