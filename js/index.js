console.log("JS file is loaded correctly!");

$(".content").ready(function () {
    $("button").hover(function () {
        $(this).css("background-color", "#7E184B");
    }, function () {
        $(this).css("background-color", "#F47E20");
    });
});