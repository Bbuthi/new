function addItemToList(){
    console.log("iam");


}
console.log("iam");

let addTODOButton = document.getElementById('addToDo');
let toDocontainer = document.getElementById('toDocontainer');
let inputField = document.getElementById('inputField');

addTODOButton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraphStyling')
    paragraph.innerText = inputField.value;
    toDocontainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    })

})
