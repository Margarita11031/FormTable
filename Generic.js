/**
 * Created by Margarita on 01.06.2016.
 */

var blnValFields = false;
function checkInfo_bln(form){
    var strFirstName = form.firstName.value,
        strLastName = form.lastName.value,
        strPhone = form.phone.value,
        strAge = form.age.value;
    var blnValidFields = true;
    blnValidFields &= (strFirstName != "" && strLastName != "");
    var rexPhoneMask = /^\+\d{11,13}/;
    blnValidFields &= (strPhone != "" && rexPhoneMask.test(strPhone));
    blnValidFields &= (strAge != "" && parseFloat(strPhone) > 0);

    if(!blnValidFields)
        alert("Please check entered information");
    return blnValidFields;
}

var validCreds = {
    firstName: function(element){
        return element
    }
};

    customObject['firstName'](param);


function checkField_void(element){
    validCreds[element.name](element);
}