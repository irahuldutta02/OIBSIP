// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Add a "checked" symbol 
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        document.getElementById("numloc").innerHTML = "Task completed.";
        document.getElementById("numloc").style.color = "#2192FF";
    }
}, false);

// Create a new list item 
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        document.getElementById("numloc").innerHTML = "Enter Somthing to add.";
        document.getElementById("numloc").style.color = "red";
        // alert("Please add Your Desired Task!");
    } else {
        document.getElementById("myUL").appendChild(li);
        document.getElementById("numloc").innerHTML = "Task added.";
        document.getElementById("numloc").style.color = "#38E54D";
    }

    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

//hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}