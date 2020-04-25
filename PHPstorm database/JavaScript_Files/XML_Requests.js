/*
showProduct function
Used for chatbot, shows information about any given product. Find details on an item with findProduct as a reason, or use findCount to find how many different items are available
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
Specifies error
 */
function logUser(email, password) {
    var foundUser;
    try {
        if (email == "" || password == "")
            throw "Empty fields!";
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
        xmlhttp.open("GET","DatabaseFiles/UserLogon.php?email="+email+"&password="+password,false);
        xmlhttp.send();
        foundUser = JSON.parse(foundUser);
        if(foundUser == false)
            throw "Account not found!";

        localStorage.setItem("lname", foundUser.lname);
        localStorage.setItem("fname", foundUser.fname);
        localStorage.setItem("adminKey", foundUser.adminKey);
        localStorage.setItem("email", foundUser.email);
        return foundUser;
    } catch (err) {
        alert("ERROR: " + err);
        return false;
    }
}

/*
createUser
Creates a user and adds to database. Does not automatically log on
Returns false if unable to create user and specifies error. Returns true if successful
 */
function createUser(email, password, fname, lname) {
    var createdUser;
    try {
        if (email == "" || password == "" || fname == "" || lname == "")
            throw "Empty fields!";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                createdUser = this.responseText;
            }
        };
        xmlhttp.open("GET","DatabaseFiles/createUser.php?email="+email+"&password="+password+"&fname="+fname+"&lname="+lname,false);
        xmlhttp.send();
        createdUser = JSON.parse(createdUser);
        if(createdUser != true)
            throw "Account unable to be created! Reason: " + createdUser.reason;

        return createdUser;
    } catch (err) {
        alert("ERROR: " + err);
        return false;
    }
}

/*
addProduct function
Adds a product to the database, automatically checks if user has admin access
Returns false if unable to add and will specify the error. Returns true if successful
 */
function addProduct(name, desc, price, quantity, model, dim, type) {
    var createdProduct;
    try {
        if (name == "" || desc == "" || price == "" || quantity == ""|| model == "" || dim == "" || type == "")
            throw "Empty fields!";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                createdProduct = this.responseText;
            }
        };
        let secretKey = localStorage.getItem("adminKey");
        xmlhttp.open("GET","DatabaseFiles/addProduct.php?name="+name+"&desc="+desc+"&price="+price+"&quantity="+quantity+"&model="+model+"&dim="+dim+"&type="+type+"&myKey="+secretKey,false);
        xmlhttp.send();
        createdProduct = JSON.parse(createdProduct);
        if(createdProduct != true)
            throw "Product unable to be created! Reason: " + createdProduct.reason;

        return createdProduct;
    } catch (err) {
        alert("ERROR: " + err);
        return false;
    }
}

/*
SalesReport
Takes a report of all items that have been sold and creates a table to display the items
Currently displays all items, in a realistic model there would be features to display some of the itmes and not all at once, however this is just a test product and we have limited items to choose from
 */
function salesData(useTable) {
    if(useTable == undefined)
        useTable = false;
    var data;
    try {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                data = this.responseText;
            }
        };
        let secretKey = localStorage.getItem("adminKey");
        xmlhttp.open("GET","DatabaseFiles/SalesData.php?myKey="+secretKey,false);
        xmlhttp.send();
        data = JSON.parse(data);
        if(Array.isArray(data) && data[0] != true)
            throw "Product unable to be created! Reason: " + data.reason;

        data.shift(); //To remove the true variable
        if(!useTable)
            return data;
        else
            return salesTable(data);
    } catch (err) {
        alert("ERROR: " + err);
        return false;
    }
}
/*
salesTable
Helper function to salesData. Creates a table based off data provided by the salesData function
 */
function salesTable(arr) {
    let tableString = "<table id='salesTable'>";
    tableString += "<tr><th>Product name</th> <th>Product price</th> <th>Quantity purchased</th> <th>Total revenue</th></tr>";
    for(let i = 0; i < arr.length; i++) {
        tableString += "<tr>";
        tableString += "<td>" + arr[i].name + "</td> <td>" + arr[i].price + "</td> <td>" + arr[i].quantity + "</td> <td>" + arr[i].total + "</td>";
        tableString += "</tr>";
    }
    tableString += "</table>";

    return tableString;
}

/*
allProducts function
Returns, in array form, a list of all the products.
 */
function allProducts() {
    var data;
    try {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                data = this.responseText;
            }
        };
        xmlhttp.open("GET","DatabaseFiles/allProducts.php",false);
        xmlhttp.send();
        data = JSON.parse(data);
        if(Array.isArray(data) && data[0] != true)
            throw "Product unable to be created! Reason: " + data.reason;

        data.shift(); //To remove the true variable
        return data;
    } catch (err) {
        alert("ERROR: " + err);
        return false;
    }
}

/*
purchaseItem function
Purchases an item. Doesn't do payment process, just updates the database. Use checkAvailability function to see how much quantity of any given item is available. Updates Product table and Orders table
 */
function purchaseItem(itemName, quantity) {
    var purchased;
    try {
        if (itemName == "" || quantity == "")
            throw "Empty fields!";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                purchased = this.responseText;
            }
        };
        let email = localStorage.getItem("email");
        xmlhttp.open("GET","DatabaseFiles/PurchaseItem.php?itemName="+itemName+"&quantity="+quantity+"&email="+email,false);
        xmlhttp.send();
        purchased = JSON.parse(purchased);
        if(purchased != true)
            throw "Item unable to be purchased! Reason: " + purchased.reason;


        return purchased;
    } catch (err) {
        alert("ERROR: " + err);
        return false;
    }
}
function checkAvailability(itemName, quantity) {
    var item;
    try {
        if (itemName == "" || quantity == "")
            throw "Empty fields!";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                item = this.responseText;
            }
        };
        xmlhttp.open("GET","DatabaseFiles/checkAvailability.php?itemName="+itemName+"&quantity="+quantity,false);
        xmlhttp.send();
        item = JSON.parse(item);
        if(item != true)
            throw "Not enough product! Reason: " + item.reason;

        return item;
    } catch (err) {
        alert("ERROR: " + err);
        return false;
    }
}