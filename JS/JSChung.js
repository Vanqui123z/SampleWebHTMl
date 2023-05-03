$("#search").css("display", "none");
$("#icon_search").on("click", function () {
    $("#search").css("display", "flex")
    $("main").css("opacity", "0.5")
    $(".nav_center").css("opacity", "0.5")

}
)
$("#icon_close").on("click", function () {
    $("#search").css("display", "none")
    $("main").css("opacity", "1")
    $(".nav_center").css("opacity", "1")

}
)