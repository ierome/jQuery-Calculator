$(document).ready(function () {
    $("#add").on('click', function (e) {
        e.preventDefault();
        var val1 = Number($("#val1").val())
        var val2 = Number($("#val2").val())
        var result = val1 + val2;
        $("#result").val(result)
    })
    $("#subtract").on('click', function (e) {
        e.preventDefault();
        var val1 = Number($("#val1").val())
        var val2 = Number($("#val2").val())
        var result = val1 - val2;
        $("#result").val(result)
    })
    $("#multiply").on('click', function (e) {
        e.preventDefault();
        var val1 = Number($("#val1").val())
        var val2 = Number($("#val2").val())
        var result = val1 * val2;
        $("#result").val(result)
    })
    $("#divide").on('click', function (e) {
        e.preventDefault();
        var val1 = Number($("#val1").val())
        var val2 = Number($("#val2").val())
        var result = val1 / val2;
        $("#result").val(result)
    })
})