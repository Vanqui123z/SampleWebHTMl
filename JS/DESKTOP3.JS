function kt() {

    var expEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/;
    if (!expEmail.test($("#ktEmail").val())) {
        $("#helpIdEmail").html("Email chưa đúng định dạng!")
        $("#helpIdEmail").css("color", "red")
        $("#ktEmail").css("border-color", "red")
    } else {
        $("#helpIdEmail").html("");
        $("#ktEmail").removeAttr("style");

    }
    var expPassword = /^[a-zA-Z0-9]+$/
    if (!expPassword.test($("#ktPassword").val())) {
        $("#helpIdPassword").html("Password chưa đúng định dạng!");
        $("#helpIdPassword").css("color", "red")
        $("#ktPassword").css("border-color", "red")
    } else {
        $("#helpIdPassword").html("");
        $("#ktPassword").removeAttr("style");
    }
}
$(".SignIn").click(function () {
    kt();
});