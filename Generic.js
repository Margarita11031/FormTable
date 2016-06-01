/**
 * Created by Margarita on 01.06.2016.
 */

var validCreds = {
    firstName: function (element) {
        return element.value != "";
    },
    lastName: function (element) {
        return element.value != "";
    },
    phone: function (element) {
        var rexPhoneMask = /^\+\d{11,13}/;
        var result = (element.value != "" && rexPhoneMask.test(element.value));
        return result;
    },
    age: function (element) {
        var result = (element.value != "" && parseFloat(element.value) > 0);
        return result;
    }
};

function checkField_void(element) {
    if (!validCreds[element.name](element)) {
        element.parentElement.setAttribute("class", "form-group has-error")
    } else {
        element.parentElement.setAttribute("class", "form-group")
    }
    var allFilled = true;
    var inputNodes = document.getElementsByTagName("input");
    for (var i = 0; i < inputNodes.length; i++) {
        if ((inputNodes[i].type == "text" || inputNodes[i].type == "number")&& inputNodes[i].value == ""){
                allFilled = false;
        }
    }
    if (document.getElementsByClassName("form-group has-error").length > 0 || !allFilled) {
        document.getElementById("putInTable").disabled = true;
    } else {
        document.getElementById("putInTable").disabled = false;
    }

}

function clearUpFields_void() {
    var inputNodes = document.getElementsByTagName("input");
    for (var i = 0; i < inputNodes.length; i++) {
        if (inputNodes[i].type == "text" || inputNodes[i].type == "number") {
            inputNodes[i].value = "";
        }
    }
    document.getElementById("putInTable").disabled = false;
}