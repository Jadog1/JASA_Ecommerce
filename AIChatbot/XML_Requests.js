/*
showProduct function
 */
function showProduct(str, reason) {
    var returnedText = "";
    if (str == "") {
         return "";
    } else {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                returnedText = this.responseText;
            }
        };
        xmlhttp.open("GET","DatabaseFiles/DatabaseAccessor.php?q="+str+"&reason="+reason,false);
        xmlhttp.send();
        return returnedText;
    }
}

/*
logUser function
Returns a boolean value based on if the username and password match with a user saved in the database
 */
function logUser(email, password) {
    var foundUser = false;
    if (str == "") {
        return "";
    } else {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                foundUser = this.responseText;
            }
        };
        xmlhttp.open("GET","DatabaseAccessor.php?username="+email+"&password="+password,false);
        xmlhttp.send();
        return foundUser;
    }
}