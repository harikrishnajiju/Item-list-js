
function insertElem(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.previousSibling);
}

function add() {
    let x = document.getElementById("inputtext").value;
    if (x == "") {
        alert('Enter The Text!');
    }
    else {
        if (!isNaN(x)) {
            alert('Numbers are not allowed!');
        }
        else {
            let newDiv = document.createElement('div');
            newDiv.id = 'list';
            newDiv.className = 'rev'
            let newButton = document.createElement('button');
            newButton.id = 'button';
            newButton.className = 'but';
            newButton.innerText = "X";
            newButton.addEventListener('click', function(e) {
                let c = window.confirm('Are you sure you want to delete the selected item?');
                if (c == true) {
                    newDiv.parentNode.removeChild(newDiv);
                }
            }, false);
            let text = document.createTextNode(x);
            newDiv.appendChild(text);
            newDiv.appendChild(newButton);
            let currentDiv = document.getElementById("ld");
            insertElem(currentDiv, newDiv);
        }
    }
}

function rev() {
    var items = Array.prototype.slice.call(document.querySelectorAll('#list'));
    items.forEach(function (item) {
        item.parentNode.insertBefore(item, item.parentNode.childNodes[10]);
    });
}

