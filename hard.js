$(document).ready(function () {
    $("#numberWrap button").on('click', function (e) {
        e.preventDefault();
        var buttonVal = $(this).html()
        if (buttonVal == "=") {
            //Do nothing
        } else {
            var temp = $("#resultField").val();
            temp += buttonVal;
            $("#resultField").val(temp);
        }
    })
    $("#clear").on('click', function (e) {
        $("#resultField").val("");
    })
    var currentVal = ''
    var expression = ''
    var secondVal = ''
    $("#expressions button").on('click', function (e) {
        if (currentVal == "") {
            currentVal += $("#resultField").val();
        } else {
            //Do nothing
        }
        expression += $(this).html();
        $("#resultField").val("");
    })
    $("#equal").on('click', function (e) {

        secondVal += $("#resultField").val();
        var equation = currentVal + expression + secondVal;
        $("#resultField").val(eval(equation))
        var finalAnswer = eval(equation)
        currentVal = "";
        currentVal += finalAnswer;
        secondVal = "";
        expression = "";
    })
})