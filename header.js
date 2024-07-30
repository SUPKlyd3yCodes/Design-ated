document.getElementById("headerplace").innerHTML = `<div class="header"><div class="headerleft"><img src="howmany.jpg" id="howmany" alt="Dummy Image" style="width: 90px; height: 70px; border-radius: 18px; border: 2px solid black;"><div style="font-size: 13px; text-align: center; width: 90px;">Have you bought? <input type="checkbox"></div></div><div class="headerright"><button id="homebutton" onclick="window.location.href = 'home.html';">HOME</button><button id="productbutton" onclick="window.location.href = 'product.html';">PRODUCTS</button><button id="loginbutton" onclick="window.location.href = 'index.html';">LOGIN</button><button id="createbutton" onclick="window.location.href = 'create.html';">CREATE</button><input type="text" id="myInput" onkeyup="myFunction()" placeholder="&#128270" title="Type in an item" style="margin-top: 60px; margin-left: -750px; position: absolute; border: 0px;" onmouseover="inputClicked()"></div><div style="text-align: center;"><img src="accountimage.jpg" alt="Dummy Image" style="width: 80px; height: 80px; border-radius: 100px;"><br><div id="accountname" style="margin-top: -15px"><p id="accountnamep">Unknown</p></div></div></div><br>`;

function myFunction() {
    var input = document.getElementById("myInput");
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("List");
    var li = ul.getElementsByTagName("li");
    var a; 
    var i;
    var txtValue;
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function inputClicked() {
    document.getElementById("myInput").placeholder = "Search for anything..."
}